<script setup lang="ts">

import KeyBoard from "./KeyBoard.vue";
import PlayerLine from "./PlayerLine.vue";
import {useSettingsStore} from "../stores/SettingsStore.ts";
import Prompt from "./Prompt.vue";

let settings = useSettingsStore();

</script>

<template>

  <main>
    <section>
      <PlayerLine v-for="(player, index) in settings.players" :key="player" :index="index"> </PlayerLine>
    </section>

<!--    <VuetifyTest></VuetifyTest>-->

    <Prompt/>

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
}

</style>