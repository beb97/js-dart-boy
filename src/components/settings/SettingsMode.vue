<script setup lang="ts">
import {useSettingsStore} from "../../stores/SettingsStore.ts";

let settings = useSettingsStore();
</script>

<template>

  <v-card variant="outlined">
    <v-card-title>Mode</v-card-title>
    <v-card-text>
      <v-btn-toggle v-model="settings.mode" color="primary" variant="elevated">
        <v-btn variant="outlined" value="501">501</v-btn>
        <v-btn variant="outlined" value="301">301</v-btn>
        <v-btn variant="outlined" value="10">10</v-btn>
      </v-btn-toggle>
    </v-card-text>
  </v-card>

</template>

<style scoped>

</style>