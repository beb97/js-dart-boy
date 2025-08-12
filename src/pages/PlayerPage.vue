<script setup lang="ts">

import SettingsPlayers from "../components/settings/SettingsPlayers.vue";
import {router} from "../routes";

function letsgo() {
  router.push({ name: "home" });
}
</script>

<template>
<SettingsPlayers></SettingsPlayers>
  <v-card>
    <v-card-title>
      <v-btn color="primary" @click="letsgo">C'est parti</v-btn>
    </v-card-title>

  </v-card>
</template>

<style scoped>

</style>