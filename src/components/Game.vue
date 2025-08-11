<script setup lang="ts">

import KeyBoard from "./KeyBoard.vue";
import PlayerLine from "./PlayerLine.vue";
import Header from "./Header.vue";
import {useGameStore} from "../stores/GameStore.ts";
import Settings from "./Settings.vue";

const gameStore = useGameStore();

</script>

<template>

  <Header></Header>

  <Settings v-if="gameStore.showSettings"></Settings>


  <main>
    <PlayerLine v-for="(player, index) in gameStore.players" :key="player" :index="index"> </PlayerLine>

    <KeyBoard></KeyBoard>
  </main>

</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  row-gap: 1em;
}
</style>