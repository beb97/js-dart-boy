import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useSettingsStore = defineStore('settings', () => {

    const initialScore = ref(301);
    const players = ref<string[]>(["Mumu", "Pierre"]);
    const flecheParVolee = ref(3);

    const nbPlayers = computed(() => {
        return players.value.length;
    })


    const throwsPerRound = computed(() => {
        return nbPlayers.value * flecheParVolee.value;
    })

    return {initialScore,
        players,
        nbPlayers,
        flecheParVolee,
        throwsPerRound,
    };
})