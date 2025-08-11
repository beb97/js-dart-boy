<script setup lang="ts">

import {useGameStore} from "../stores/GameStore.ts";
import ScoreCard from "./ScoreCard.vue";
import {computed} from "vue";

defineProps({
  index: Number
})

const volleyOrder = computed(() =>
    Array.from({ length: gameStore.flecheParVolee }, (_, i) => i)
)

const gameStore = useGameStore();

</script>

<template>
<!--  {{ gameStore.remainingScoreByPlayer }}-->
  <div class="player" v-if="index !== undefined">
    <div class="carte player__name">
      <h2>{{ gameStore.players[index] }}</h2>
      <h2>{{ gameStore.remainingScoreByPlayer[index] }}</h2>
    </div>


<!--    <div class="scores">-->
<!--      <ScoreCard v-if="gameStore.volleys.length > 0" :index="1" :volley="gameStore.volleys[gameStore.volleys.length-1]"></ScoreCard>-->
<!--    </div>-->

    <div class="scores" ref="scores">
<!--      <ScoreCard v-for="(volley, index) in gameStore.throwsByPlayer[index]" :key="index" :index="index" :volley="volley"></ScoreCard>-->

<!--      <div class="carte" v-if="gameStore.isVolleyActive">-->
<!--        <h1>{{ gameStore.score }}</h1>-->
<!--        <div class="volee">-->
<!--        <span class="carte" v-for="i in volleyOrder" :key="i">-->
<!--          - -->
<!--        </span>-->
<!--        </div>-->
<!--      </div>-->
      <ScoreCard v-if="gameStore.activePlayerIndex==index"></ScoreCard>


    </div>

  </div>
</template>

<style scoped>

.player {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: left;
}

.scores {
  display: flex;
  gap: 10px;
  overflow-x: auto; /* scroll horizontal */
  white-space: nowrap;
  max-width: 270px;
  scroll-behavior: smooth;
}


</style>