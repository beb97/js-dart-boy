<script setup lang="ts">
import {useGameStore} from "../../stores/GameStore.ts";
import {router} from "../../routes";

let gameStore = useGameStore();

function reset() {
  gameStore.resetGame();
  router.push({name: "home"});
}
</script>

<template>
  <v-card variant="outlined">
    <v-card-text>
      <v-btn @click="reset"
             color="primary">
        Nouvelle partie
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>