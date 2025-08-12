<script setup lang="ts">
import {useGameStore} from "../../stores/GameStore.ts";

const gameStore = useGameStore();

</script>

<template>
  <v-card variant="outlined">
    <v-card-title>-</v-card-title>
    <v-card-text @click="gameStore.startGame">
      Je commence !
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>