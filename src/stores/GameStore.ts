import { defineStore } from 'pinia'
import {computed, ref} from "vue";


export const useGameStore = defineStore('game', () => {

    // const initialScore = ref(10);
    const initialScore = ref(301);
    const players = ref<string[]>(["Mumu", "Pierre"]);
    const flecheParVolee = ref(3);
    const throws = ref<number[]>([])
    const currentVolley = ref<number[]>([])
    // const activePlayer = ref<number>(0);
    const showSettings = ref(false);
    const toogleSettings = () => {
        showSettings.value = !showSettings.value
    };


    const nbPlayers = computed(() => {
        return players.value.length;
    })

    const activePlayerIndex = computed(() => {
        return Math.trunc((throws.value.length / 3) % nbPlayers.value);
    })

    const activePlayer = computed(() => {
        return players.value[activePlayerIndex.value];
    })

    const dartNumber = computed(() => {
        return throws.value.length + 1;
    })

    const throwsPerRound = computed(() => {
        return nbPlayers.value * flecheParVolee.value;
    })

    function addThrow(num: number) {
        if(currentVolley.value.length < flecheParVolee.value) {
            currentVolley.value.push(num)
        }
    }

    const currentVolleyTotal = computed(() => {
        return currentVolley.value.reduce((acc, n) => acc + n, 0)
    })

    function addVolley() {
        throws.value.push(...currentVolley.value);
    }

    // function curentVolleyPad() {
    //     function padArray(arr, targetLength, padValue = null) {
    //         const result = arr.slice(0, targetLength); // coupe si trop long
    //         while (result.length < targetLength) {
    //             result.push(padValue); // ajoute la valeur de padding
    //         }
    //         return result;
    //     }
    // }

    function currentVolleySubmit() {
        const currentPlayerScore = remainingScoreByPlayer.value[activePlayerIndex.value];
        console.log("player", activePlayerIndex.value);
        console.log("score", currentPlayerScore);
        if(currentVolleyTotal.value == currentPlayerScore) {
            alert("gagné !")
        }  else if(currentVolleyTotal.value > currentPlayerScore) {
            console.log("trop grand !")
            currentVolleyCancel();
        }
        while (currentVolley.value.length < flecheParVolee.value) {
            currentVolley.value.push(0);
        }

        addVolley();
        currentVolleyCancel();
    }

    function currentVolleyCancel() {
        currentVolley.value = [];
    }

    const points = computed(() => {
        return throws.value.reduce((acc, n) => acc + n, 0)
    })

    const score = computed(() => {
        return (initialScore.value - points.value);
    })

    const volleyNumber = computed(() => {
        return Math.ceil( (throws.value.length+1) / flecheParVolee.value);
    })

    const isVolleyActive = computed(() => {
        return (throws.value.length%flecheParVolee.value == 0);
    })

// Volées par joueur
    const throwsByPlayer = computed(() => {
        const result = [];

        for (let playerIndex = 0; playerIndex < nbPlayers.value; playerIndex++) {
            const playerThrows = [];

            for (let i = playerIndex * flecheParVolee.value; i < throws.value.length; i += throwsPerRound.value) {
                playerThrows.push(throws.value.slice(i, i + flecheParVolee.value));
            }
            result.push(playerThrows);
        }

        return result; // tableau 2D [joueur][volée][flèche]
    });

    const totalScoreByPlayer = computed(() => {
        return throwsByPlayer.value.map(playerThrows =>
            playerThrows.flat().reduce((acc, val) => acc + (val || 0), 0)
        );
    });

    const remainingScoreByPlayer = computed(() => {
        return totalScoreByPlayer.value.map(total => initialScore.value - total);
    });


    return {initialScore,
        score,
        players,
        activePlayerIndex,
        activePlayer,
        throws,
        throwsByPlayer,
        totalScoreByPlayer,
        remainingScoreByPlayer,
        dartNumber,
        addThrow,
        currentVolley,
        currentVolleyTotal,
        currentVolleyCancel,
        currentVolleySubmit,
        volleyNumber,
        isVolleyActive,
        showSettings,
        toogleSettings,
        flecheParVolee
    };
})