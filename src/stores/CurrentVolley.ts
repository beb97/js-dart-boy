import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useSettingsStore} from "./SettingsStore.ts";

export const useCurrentVolleyStore = defineStore('volley', () => {

    const volley = ref<number[]>([])
    let settings = useSettingsStore();

    function addThrow(num: number) {
        if (volley.value.length < settings.flecheParVolee) {
            volley.value.push(num)
        }
    }

    function pad() {
        while (volley.value.length < settings.flecheParVolee) {
            volley.value.push(0);
        }
    }

    const total = computed(() => {
        return volley.value.reduce((acc, n) => acc + n, 0)
    })

    function cancel() {
        volley.value = [];
    }

    return {
        addThrow,
        volley,
        pad,
        total,
        cancel,
    };

})