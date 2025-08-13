<script setup lang="ts">
import PlayerLine from "./players/PlayerLine.vue";
import {usePlayersStore} from "../stores/PlayersStore.ts";

const playersStore = usePlayersStore();
</script>

<template>
  <v-card class="" variant="outlined">
    <PlayerLine v-for="(player, index) in playersStore.players" :key="player" :index="index"></PlayerLine>
  </v-card>
</template>

<style scoped>

</style>