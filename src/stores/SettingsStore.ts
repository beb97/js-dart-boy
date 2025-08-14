import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";
import {usePlayersStore} from "./PlayersStore.ts";

export const useSettingsStore = defineStore('settings', () => {

    let players = usePlayersStore();

    const mode = ref("501");
    const initialScore = computed(() => {
        return Number(mode.value);
    })
    const flecheParVolee = ref(3);

    const savedSettings = localStorage.getItem('settings')
    if (savedSettings) {
        try {
            mode.value = JSON.parse(savedSettings);
        } catch (e) {
            console.error('Erreur en chargeant settings:', e)
        }
    }

    watch(mode, (newVal) => {
        localStorage.setItem('settings', JSON.stringify(newVal))
    }, { deep: true })


    const throwsPerRound = computed(() => {
        return players.nbPlayers * flecheParVolee.value;
    })

    return {
        mode,
        throwsPerRound,
        initialScore,
        flecheParVolee,
    };
})