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
    <section>
      <PlayerLine v-for="(player, index) in gameStore.players" :key="player" :index="index"> </PlayerLine>
    </section>

    <KeyBoard></KeyBoard>
  </main>

</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  justify-content: space-around;
}

section {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  border: 1px solid grey;
  border-radius: 0.5em;
  padding: 0.5em;
  //background-color: #adb9c6;
}

</style>