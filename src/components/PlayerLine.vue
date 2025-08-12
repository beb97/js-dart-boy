<script setup lang="ts">

import {useGameStore} from "../stores/GameStore.ts";
import ScoreCard from "./ScoreCard.vue";
import {router} from "../routes";
import {useVolleysStore} from "../stores/VolleysStore.ts";
import {useSettingsStore} from "../stores/SettingsStore.ts";
import {useMode301Store} from "../stores/Mode301.ts";

function goToDetails() {
  router.push({ name: 'details' });
}

defineProps({
  index: Number
})

const gameStore = useGameStore();
let volleys = useVolleysStore();
let settings = useSettingsStore();
let mode301 = useMode301Store();

</script>

<template>
  <!--  {{ gameStore.remainingScoreByPlayer }}-->
  <div class="player" v-if="index !== undefined">

    <div class="carte player__name" :class="{active_player:(volleys.activePlayerIndex == index)}"
    @click="goToDetails">
      <h3>{{ settings.players[index] }}</h3>
      <h2>{{ mode301.remainingScoreByPlayer[index] }}</h2>
    </div>

    <div v-if="gameStore.started" class="player" :class="{active_player:(volleys.activePlayerIndex == index)}">
      <ScoreCard v-if="volleys.activePlayerIndex==index"></ScoreCard>
    </div>
    <div v-if="!gameStore.started" class="carte player">
      <div class="carte player__name"
           @click="gameStore.startGame"
           v-if="volleys.activePlayerIndex==index"
           :class="{active_player:(volleys.activePlayerIndex == index)}">
        Je commence !
      </div>

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