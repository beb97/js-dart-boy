<script setup lang="ts">
import {useGameStore} from "../../stores/GameStore.ts";
import {useCurrentVolleyStore} from "../../stores/CurrentVolley.ts";

const gameStore = useGameStore();
let currentVolley = useCurrentVolleyStore();

</script>

<template>
  <v-card :variant=" (currentVolley.total>0)?'elevated': 'plain'" @click="gameStore.commitVolley"
          color="success"
  >
    <v-card-title class="text-h4">{{ currentVolley.total }}</v-card-title>
    <v-card-text>
      ✅
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-card-title {
  padding: 0 0.3em;
}

.v-card-text {
  padding: 0 0.3em;
}
</style>