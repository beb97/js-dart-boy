<script setup lang="ts">

import Game from "../components/Game.vue";
import {useSettingsStore} from "../stores/SettingsStore.ts";
import {router} from "../routes";

let settingsStore = useSettingsStore();

if(settingsStore.players.length == 0){
router.push({name:"players"});
}


</script>

<template>
  <Game></Game>
</template>

<style scoped>

</style>