<script setup lang="ts">

import SettingsPlayers from "../components/settings/SettingsPlayers.vue";
import {router} from "../routes";
import {usePlayersStore} from "../stores/PlayersStore.ts";

let playersStore = usePlayersStore();

function letsgo() {
  router.push({ name: "home" });
}
</script>

<template>
<SettingsPlayers></SettingsPlayers>
  <v-card>
    <v-card-title>
      <v-btn color="primary" @click="letsgo" :disabled="playersStore.nbPlayers < 1">C'est parti</v-btn>
    </v-card-title>

  </v-card>
</template>

<style scoped>

</style>