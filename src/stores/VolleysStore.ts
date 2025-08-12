import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useSettingsStore} from "./SettingsStore.ts";
import {useCurrentVolleyStore} from "./CurrentVolley.ts";

export const useVolleysStore = defineStore('volleys', () => {

    const throws = ref<number[]>([])

    let settings = useSettingsStore();
    let currentVolley = useCurrentVolleyStore();

    const activePlayerIndex = computed(() => {
        return Math.trunc((throws.value.length / 3) % settings.nbPlayers);
    })

    const activePlayer = computed(() => {
        return settings.players[activePlayerIndex.value];
    })

    const dartNumber = computed(() => {
        return throws.value.length + 1;
    })

    function addCurrentVolley() {
        throws.value.push(...currentVolley.volley);
    }

    const volleyNumber = computed(() => {
        return Math.ceil( (throws.value.length+1) / settings.flecheParVolee);
    })

    function reset() {
        throws.value = [];
    }

    return {
        activePlayerIndex,
        activePlayer,
        reset,
        throws,
        dartNumber,
        addCurrentVolley,
        volleyNumber
    };
})