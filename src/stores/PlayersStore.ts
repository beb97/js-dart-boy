import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";
import {useVolleysStore} from "./VolleysStore.ts";
import {useSettingsStore} from "./SettingsStore.ts";

export const usePlayersStore = defineStore('players', () => {

    const allPlayers = ref<Player[]>([]);
    let volleys = useVolleysStore();
    let settingsStore = useSettingsStore();

    interface Player {
        name: string
        active: boolean
    }

    const savedPlayers = localStorage.getItem('players')
    if (savedPlayers) {
        try {
            allPlayers.value = JSON.parse(savedPlayers)
        } catch (e) {
            console.error('Erreur en chargeant les joueurs:', e)
        }
    }
    watch(allPlayers, (newPlayers) => {
        localStorage.setItem('players', JSON.stringify(newPlayers))
    }, { deep: true })

    const players = computed(() => {
        return allPlayers.value.filter(p => p.active).map(p => p.name)
    })

    function addPlayer(name: string) {
        allPlayers.value.push(
            {name:name, active:true}
        )
    }

    function removePlayer() {
        allPlayers.value.pop();
    }

    function deletePlayer(index: number) {
        allPlayers.value.splice(index, 1)
    }


    function togglePlayer(index: number) {
        allPlayers.value[index].active = !allPlayers.value[index].active;
    }

    const nbPlayers = computed(() => {
        return players.value.length;
    })

    const activePlayerIndex = computed(():number => {
        return Math.trunc(( (volleys.throws.length / settingsStore.flecheParVolee)) % nbPlayers.value);
    })

    const setStartingPlayer = (nom:string): void => {
        const index = allPlayers.value.findIndex(j => j.name === nom);
        if (index > 0) {
            const tmp = allPlayers.value.splice(index, 1)[0];
            allPlayers.value.unshift(tmp);
        }
    }

    const activePlayer = computed(() => {
        return players.value[activePlayerIndex.value];
    })

    function startByIndex(index:number) {
        const [me] = allPlayers.value.splice(index, 1);
        allPlayers.value.unshift(me);
    }


    return {
        activePlayerIndex,
        activePlayer,
        togglePlayer,
        addPlayer,
        removePlayer,
        setStartingPlayer,
        deletePlayer,
        nbPlayers,
        allPlayers,
        players,
        startByIndex
    };
})