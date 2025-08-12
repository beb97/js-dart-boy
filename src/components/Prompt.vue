<script setup lang="ts">

import {usePromptStore} from "../stores/PromptStore.ts";
import {useVolleysStore} from "../stores/VolleysStore.ts";
import {useSettingsStore} from "../stores/SettingsStore.ts";
import {useCurrentVolleyStore} from "../stores/CurrentVolley.ts";
import {useGameStore} from "../stores/GameStore.ts";

let prompt = usePromptStore();
let volleys = useVolleysStore();
let settings = useSettingsStore();
const gameStore = useGameStore()
const currentVolley = useCurrentVolleyStore();

</script>

<template>
  <section class="prompt" v-if="prompt.hasMessage">
    {{prompt.message}}
  </section>
  <section class="prompt" v-else>
    <div v-if="currentVolley.volley.length < settings.flecheParVolee">
      {{ volleys.activePlayer }} fléchette {{currentVolley.volley.length + 1}}
    </div>
    <div v-else>
      <h3 class="submit" @click="gameStore.commitVolley">Valider</h3>
    </div>


  </section>

</template>

<style scoped>

</style>