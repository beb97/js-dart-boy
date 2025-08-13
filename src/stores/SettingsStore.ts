import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";
import {usePlayersStore} from "./PlayersStore.ts";

export const useSettingsStore = defineStore('settings', () => {

    let players = usePlayersStore();

    const initialScore = ref(301);
    const flecheParVolee = ref(3);

    const savedSettings = localStorage.getItem('settings')
    if (savedSettings) {
        try {
            initialScore.value = JSON.parse(savedSettings);
        } catch (e) {
            console.error('Erreur en chargeant settings:', e)
        }
    }

    watch(initialScore, (newVal) => {
        localStorage.setItem('settings', JSON.stringify(newVal))
    }, { deep: true })


    const throwsPerRound = computed(() => {
        return players.nbPlayers * flecheParVolee.value;
    })

    return {
        throwsPerRound,
        initialScore,
        flecheParVolee,
    };
})