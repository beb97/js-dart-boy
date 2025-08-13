import {defineStore} from "pinia";
import {useVolleysStore} from "./VolleysStore.ts";
import {computed} from "vue";
import {useSettingsStore} from "./SettingsStore.ts";
import {useCurrentVolleyStore} from "./CurrentVolley.ts";
import {usePlayersStore} from "./PlayersStore.ts";


export const useMode301Store = defineStore('mode301', () => {

   let volleys = useVolleysStore();
   let currentVolley = useCurrentVolleyStore();
   let players = usePlayersStore();
   let settings = useSettingsStore();


    const throwsByPlayer = computed(() => {
        const result = [];

        for (let playerIndex = 0; playerIndex < players.nbPlayers; playerIndex++) {
            const playerThrows = [];

            for (let i = playerIndex * settings.flecheParVolee; i < volleys.throws.length; i += settings.throwsPerRound) {
                playerThrows.push(volleys.throws.slice(i, i + settings.flecheParVolee));
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
        return totalScoreByPlayer.value.map(total => settings.initialScore - total);
    });

    const currentPlayerScore = computed(() => {
        return remainingScoreByPlayer.value[players.activePlayerIndex];
    })

    function currentVolleySubmit() {
        if(currentVolley.total > currentPlayerScore.value) {
            console.log("score trop grand, volée ignorée")
            currentVolley.cancel();
        }

        currentVolley.pad();
        volleys.addCurrentVolley();
        currentVolley.cancel();
    }

    const hasCurrentPlayerWon = computed(() => {
        return remainingScoreByPlayer.value[players.activePlayerIndex] == currentVolley.total;
    })

    return {
        currentVolleySubmit,
        hasCurrentPlayerWon,
        remainingScoreByPlayer,
        throwsByPlayer
    };

})