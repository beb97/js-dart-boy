<script setup lang="ts">

import PlayerLine from "./players/PlayerLine.vue";
import {useSettingsStore} from "../stores/SettingsStore.ts";

let settings = useSettingsStore();
</script>

<template>
  <v-card class="" variant="outlined">
<!--  <div class="players">-->

    <PlayerLine v-for="(player, index) in settings.players" :key="player" :index="index"></PlayerLine>
<!--  </div>-->
  </v-card>
</template>

<style scoped>

</style>