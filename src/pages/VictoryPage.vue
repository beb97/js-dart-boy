<script setup lang="ts">

import PlayersStats from "../components/stats/PlayersStats.vue";
import Prompt from "../components/Prompt.vue";
import NewGame from "../components/settings/NewGame.vue";
import {router} from "../routes";

function goToPlayers() {
  router.push({name: "players"});
}

</script>

<template>
  <Prompt/>
  <NewGame/>
  <v-card variant="outlined">
    <v-card-text>
    <v-btn color="grey" @click="goToPlayers">Changer de joueurs</v-btn>
    </v-card-text>
  </v-card>
  <PlayersStats/>
</template>

<style scoped>

</style>