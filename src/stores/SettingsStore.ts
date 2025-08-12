import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";

export const useSettingsStore = defineStore('settings', () => {

    const initialScore = ref(301);
    const players = ref<string[]>([]);
    const flecheParVolee = ref(3);

    const savedSettings = localStorage.getItem('settings')
    if (savedSettings) {
        try {
            players.value = JSON.parse(savedSettings);
        } catch (e) {
            console.error('Erreur en chargeant settings:', e)
        }
    }

    watch(players, (newVal) => {
        localStorage.setItem('settings', JSON.stringify(newVal))
    }, { deep: true })

    const nbPlayers = computed(() => {
        return players.value.length;
    })

    const throwsPerRound = computed(() => {
        return nbPlayers.value * flecheParVolee.value;
    })

    return {
        nbPlayers,
        throwsPerRound,
        initialScore,
        players,
        flecheParVolee,
    };
})