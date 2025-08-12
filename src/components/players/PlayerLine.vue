<script setup lang="ts">

import {useGameStore} from "../../stores/GameStore.ts";
import ScoreCard from "./ScoreCard.vue";
import {useVolleysStore} from "../../stores/VolleysStore.ts";
import PlayerTag from "./PlayerTag.vue";
import PlayerStart from "./PlayerStart.vue";
import PlayerCommit from "./PlayerCommit.vue";
import {computed} from "vue";
import PlayerCancel from "./PlayerCancel.vue";


const {index} = defineProps({
  index: Number
})

let volleys = useVolleysStore();
let gameStore = useGameStore();

const isActive = computed(() => {
  if (index == undefined) return false;
  if (!gameStore.started) return false;
  return volleys.activePlayerIndex == index;
})

</script>

<template>
  <v-card variant="outlined">
    <v-container>
      <v-row justify="space-between">
        <PlayerTag :index="index"/>
        <PlayerCancel v-if="isActive"/>
        <ScoreCard v-if="isActive"/>
        <PlayerStart v-if="!gameStore.started" :index="index"/>
        <PlayerCommit v-if="isActive"/>

      </v-row>
    </v-container>
  </v-card>
</template>

<style scoped>
.v-card {
  border-color: lightblue;
}
</style>