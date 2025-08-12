<script setup lang="ts">
import {useGameStore} from "../../stores/GameStore.ts";
import {useCurrentVolleyStore} from "../../stores/CurrentVolley.ts";

const gameStore = useGameStore();
let currentVolley = useCurrentVolleyStore();

</script>

<template>
  <v-card variant="tonal" @click="gameStore.commitVolley"
          color="success"
  >
    <v-card-title>{{ currentVolley.total }}</v-card-title>
    <v-card-text>
      ✅
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>