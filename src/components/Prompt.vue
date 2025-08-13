<script setup lang="ts">
import {usePromptStore} from "../stores/PromptStore.ts";
import {useSettingsStore} from "../stores/SettingsStore.ts";
import {useCurrentVolleyStore} from "../stores/CurrentVolley.ts";
import {useGameStore} from "../stores/GameStore.ts";
import {usePlayersStore} from "../stores/PlayersStore.ts";

const prompt = usePromptStore();
const settings = useSettingsStore();
const gameStore = useGameStore()
const currentVolley = useCurrentVolleyStore();
const playersStore = usePlayersStore();
</script>

<template>
  <v-card variant="outlined">
    <v-card-text>
      <section class="" v-if="prompt.hasMessage">
        {{prompt.message}}
      </section>
      <section class="" v-else>
        <div v-if="currentVolley.volley.length < settings.flecheParVolee">
          {{ playersStore.activePlayer }} fléchette {{currentVolley.volley.length + 1}}
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