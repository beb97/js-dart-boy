<script setup lang="ts">

import Game from "../components/Game.vue";
import {router} from "../routes";
import {usePlayersStore} from "../stores/PlayersStore.ts";

const playersStore = usePlayersStore();

if(playersStore.nbPlayers == 0){
router.push({name:"players"});
}

</script>

<template>
  <Game></Game>
</template>

<style scoped>

</style>