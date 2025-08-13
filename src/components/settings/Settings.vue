<script setup lang="ts">
import {useGameStore} from "../../stores/GameStore.ts";
import {router} from "../../routes";
import SettingsScore from "./SettingsScore.vue";
import SettingsPlayers from "./SettingsPlayers.vue";

let gameStore = useGameStore();

function reset() {
  gameStore.resetGame();
  router.push({name: "home"});
}
</script>

<template>
  <v-form>
    <v-container>

      <v-card class="mb-4" variant="tonal">
        <v-card-text>
          <v-btn @click="reset">
            Nouvelle partie
          </v-btn>
        </v-card-text>
      </v-card>

      <SettingsPlayers/>
      <SettingsScore/>

    </v-container>
  </v-form>
</template>

<style scoped>

</style>