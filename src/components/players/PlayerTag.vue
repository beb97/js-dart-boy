<script setup lang="ts">
import {useVolleysStore} from "../../stores/VolleysStore.ts";
import {useSettingsStore} from "../../stores/SettingsStore.ts";
import {useMode301Store} from "../../stores/Mode301.ts";
import {router} from "../../routes";
import {computed} from "vue";

let volleys = useVolleysStore();
let settings = useSettingsStore();
let mode301 = useMode301Store();

const {index} = defineProps({
  index: Number
})

function goToDetails() {
  router.push({ name: 'details' });
}

const variant = computed(() => {
  if (index == undefined) return "outlined"
  return (volleys.activePlayerIndex == index) ? "tonal":"outlined";
})

</script>

<template>

  <v-card
      color="primary"
      :variant="variant"
        v-if="index !== undefined"
          @click="goToDetails">
    <v-card-title>{{ mode301.remainingScoreByPlayer[index] }}</v-card-title>
    <v-card-text>{{ settings.players[index] }}</v-card-text>
  </v-card>
</template>

<style scoped>

</style>