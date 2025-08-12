<script setup lang="ts">
import {useSettingsStore} from "../../stores/SettingsStore.ts";

let settings = useSettingsStore();
</script>

<template>

  <v-card class="mb-4">
    <v-card-title>Joueurs</v-card-title>
    <v-card-text>
      <v-row v-for="(_, index) in settings.players" :key="index">
        <v-text-field
            :label="`Joueur ${index + 1}`"
            v-model="settings.players[index]"
            required
        >
        </v-text-field>
      </v-row>

      <div>
        <v-btn @click="settings.players.pop()"  variant="outlined" color="error">
          <v-icon clickable >mdi-delete</v-icon>
        </v-btn>
        <v-btn @click="settings.players.push('')" variant="outlined" color="success">
          <v-icon clickable >mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>


</template>

<style scoped>

</style>