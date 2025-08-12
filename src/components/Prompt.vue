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
  <v-card variant="outlined">
    <v-card-text>
      <section class="" v-if="prompt.hasMessage">
        {{prompt.message}}
      </section>
      <section class="" v-else>
        <div v-if="currentVolley.volley.length < settings.flecheParVolee">
          {{ volleys.activePlayer }} fléchette {{currentVolley.volley.length + 1}}
        </div>
        <div v-else>
          <h3 class="submit" @click="gameStore.commitVolley">Valider</h3>
        </div>
      </section>
    </v-card-text>

  </v-card>

</template>

<style scoped>

</style>