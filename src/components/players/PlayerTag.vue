<script setup lang="ts">
import {useMode301Store} from "../../stores/Mode301.ts";
import {router} from "../../routes";
import {computed} from "vue";
import {usePlayersStore} from "../../stores/PlayersStore.ts";
import {useGameStore} from "../../stores/GameStore.ts";

const playersStore = usePlayersStore();
let gameStore = useGameStore();
const mode301 = useMode301Store();

const {index} = defineProps({
  index: Number
})

function goToDetails() {
  router.push({ name: 'details' });
}

const variant = computed(() => {
  if (index == undefined) return "outlined"
  return (playersStore.activePlayerIndex == index) ? "tonal":"outlined";
})

</script>

<template>

  <v-card v-if="index !== undefined" color="primary" :variant="variant" @click="goToDetails"
  :class="{'inactive': ((index !== playersStore.activePlayerIndex) && (gameStore.started))}"
  >
    <v-card-title class="text-h4">{{ mode301.remainingScoreByPlayer[index] }}</v-card-title>
    <v-card-text class="text-h5">{{ playersStore.players[index] }}</v-card-text>
  </v-card>
</template>

<style scoped>
  .v-card__overlay {
    transition: all 0.5s ease;
  }

  .v-card .inactive{
    display: flex;
    flex-direction: row;
  }
  .v-card-title {
    padding: 0 0.3em;
  }

  .v-card-text {
    padding: 0 0.3em;
  }

</style>