<script setup lang="ts">
import {useSettingsStore} from "../../stores/SettingsStore.ts";

let settings = useSettingsStore();
</script>

<template>

  <v-card class="mb-4">
    <v-card-title>Volées</v-card-title>
    <v-card-text>
      <v-text-field
          label="Fléchettes par volée"
          type="number" size="2" maxlength="2"
          v-model="settings.flecheParVolee"
          required
      ></v-text-field>
    </v-card-text>
  </v-card>


</template>

<style scoped>

</style>