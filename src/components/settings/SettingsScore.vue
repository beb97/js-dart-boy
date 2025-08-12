<script setup lang="ts">
import {useSettingsStore} from "../../stores/SettingsStore.ts";

let settings = useSettingsStore();
</script>

<template>

  <v-card class="mb-4">
    <v-card-title>Scores</v-card-title>
    <v-card-text>
      <v-radio-group v-model="settings.initialScore">
        <v-radio label="301" value="301"></v-radio>
        <v-radio label="501" value="501"></v-radio>
        <v-radio label="10" value="10"></v-radio>
      </v-radio-group>

    </v-card-text>
  </v-card>

</template>

<style scoped>

</style>