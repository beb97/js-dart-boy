import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";
import {useSettingsStore} from "./SettingsStore.ts";
import {useCurrentVolleyStore} from "./CurrentVolley.ts";

export const useVolleysStore = defineStore('volleys', () => {

    const throws = ref<number[]>([])

    const savedThrows = localStorage.getItem('throws')
    if (savedThrows) {
        try {
            // const parsed = JSON.parse(savedThrows)
            throws.value = JSON.parse(savedThrows);
            console.log('Saved throws', savedThrows)
        } catch (e) {
            console.error('Erreur en chargeant throws:', e)
        }
    }

    watch(throws, (newVal) => {
        localStorage.setItem('throws', JSON.stringify(newVal))
    }, {deep: true})


    let settings = useSettingsStore();
    let currentVolley = useCurrentVolleyStore();

    const dartNumber = computed(() => {
        return throws.value.length + 1;
    })

    function addCurrentVolley() {
        throws.value.push(...currentVolley.volley);
    }

    const volleyNumber = computed(() => {
        return Math.ceil((throws.value.length + 1) / settings.flecheParVolee);
    })

    function reset() {
        throws.value = [];
    }

    return {
        reset,
        throws,
        dartNumber,
        addCurrentVolley,
        volleyNumber
    };
})