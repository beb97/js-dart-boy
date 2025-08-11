<script setup lang="ts">

import {useGameStore} from "../stores/GameStore.ts";
import ScoreCard from "./ScoreCard.vue";


defineProps({
  index: Number
})

const gameStore = useGameStore();

</script>

<template>
<!--  {{ gameStore.remainingScoreByPlayer }}-->
  <div class="player" v-if="index !== undefined">
    <div class="carte player__name" :class="{active_player:(gameStore.activePlayerIndex == index)}">
      <h3>{{ gameStore.players[index] }}</h3>
      <h2>{{ gameStore.remainingScoreByPlayer[index] }}</h2>
    </div>

    <div class="carte player" :class="{active_player:(gameStore.activePlayerIndex == index)}">
      <ScoreCard v-if="gameStore.activePlayerIndex==index"></ScoreCard>
    </div>

  </div>

</template>

<style scoped>

.player {
  max-width: 100%;
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  justify-content: left;
  border-radius: 5px;
}

.player__name {
  border: 1px solid grey;
}

.active_player {
  border: 3px solid green;
  box-shadow: 0px 0px 10px 5px #65656557;
}



</style>