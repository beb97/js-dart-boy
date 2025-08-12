import { defineStore } from 'pinia'
import {computed, ref, watch} from "vue";
import {useChronoStore} from "./ChronoStore.ts";
import {useMode301Store} from "./Mode301.ts";
import {useVolleysStore} from "./VolleysStore.ts";
import {usePromptStore} from "./PromptStore.ts";


export const useGameStore = defineStore('game', () => {

    const started = ref(false);

    const savedGame = localStorage.getItem('game')
    if (savedGame) {
        try {
            // const parsed = JSON.parse(savedThrows)
            started.value = JSON.parse(savedGame);
            console.log('Saved game', savedGame)
        } catch (e) {
            console.error('Erreur en chargeant le game:', e)
        }
    }

    watch(started, (newVal) => {
        localStorage.setItem('game', JSON.stringify(newVal))
    }, {deep: true})

    let chronoStore = useChronoStore();
    let mode301 = useMode301Store();
    let volleys = useVolleysStore();
    let prompt = usePromptStore();

    const startGame = () => {
        resetGame();
        started.value = true;
        chronoStore.startChrono();
        prompt.clear();
    }

    const commitVolley = () => {
        if(playerHasWon.value) {
            prompt.message = `Victoire de ${volleys.activePlayer} !!`
            endGame();
        }
        mode301.currentVolleySubmit();
    }

    const endGame = () => {
        started.value = false;
        chronoStore.stopChrono();
    }

    const playerHasWon = computed(() => {
        return mode301.hasCurrentPlayerWon;
    })

    const resetGame = () => {
        volleys.reset()
        chronoStore.resetChrono()
        started.value = false;
        prompt.reset();
    }

    return {
        started,
        startGame,
        commitVolley,
        resetGame,
        endGame,
    };
})