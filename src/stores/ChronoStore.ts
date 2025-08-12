import { defineStore } from 'pinia'
import {computed, ref} from "vue";


export const useChronoStore = defineStore('chrono', () => {
    /**
     * - startTime peut être number ou null (pas encore démarré)
     * - timerInterval : ReturnType<typeof setInterval> | null (compatible navigateur/node)
     */
    const startTime = ref<number | null>(null)
    const timerInterval = ref<ReturnType<typeof setInterval> | null>(null)
    const savedTime = ref<number>(0) // temps accumulé lors des pauses (ms)
    const elapsed = ref(0)

    const chrono = computed(() => {
        const totalMs = elapsed.value
        const seconds = Math.floor(totalMs / 1000) % 60
        const minutes = Math.floor(totalMs / (1000 * 60)) % 60
        // const hours = Math.floor(totalMs / (1000 * 60 * 60))
        // return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    })

    function updateChrono() {
        // on ne tente pas de soustraire null
        if (startTime.value === null) return
        elapsed.value = Date.now() - startTime.value
    }

    function startChrono() {
        if (timerInterval.value !== null) return // déjà démarré
        // startTime devient un number garanti
        startTime.value = Date.now() - savedTime.value
        // setInterval retourne un type compatible avec ReturnType<typeof setInterval>
        timerInterval.value = setInterval(() => updateChrono(), 1000)
        // mise à jour immédiate pour afficher dès le départ
        updateChrono()
    }

    function stopChrono() {
        if (timerInterval.value !== null) {
            clearInterval(timerInterval.value)
            timerInterval.value = null
        }
        if (startTime.value !== null) {
            savedTime.value = Date.now() - startTime.value
            startTime.value = null
        }
    }

    function resetChrono() {
        if (timerInterval.value !== null) {
            clearInterval(timerInterval.value)
            timerInterval.value = null
        }
        savedTime.value = 0
        startTime.value = null
        elapsed.value = 0
    }

    return {
        chrono,
        startChrono,
        stopChrono,
        resetChrono
    };
})