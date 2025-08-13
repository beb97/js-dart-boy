<script setup lang="ts">

import PlayersStats from "../components/stats/PlayersStats.vue";
import NewGame from "../components/settings/NewGame.vue";
import {router} from "../routes";
import {usePlayersStore} from "../stores/PlayersStore.ts";
import {usePromptStore} from "../stores/PromptStore.ts";

let playersStore = usePlayersStore();
let promptStore = usePromptStore();

function goToPlayers() {
  router.push({name: "players"});
}

</script>

<template>
  <v-card variant="outlined">
    <v-card-title class="justify-center">
      <v-btn color="success" class="victory">

      {{ promptStore.message }}
      </v-btn>
    </v-card-title>
  </v-card>
  <NewGame/>
  <v-card variant="outlined">
    <v-card-text>
    <v-btn color="grey" @click="goToPlayers">Changer de joueurs</v-btn>
    </v-card-text>
  </v-card>
  <PlayersStats/>
</template>

<style scoped>
.victory {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1) rotate(-2deg);
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
  }
  30% {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 0 20px 10px rgba(76, 175, 80, 0);
  }
  100% {
    transform: scale(1) rotate(-5deg);
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
}
</style>