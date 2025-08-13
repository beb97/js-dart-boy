<script setup lang="ts">
import {useGameStore} from "../../stores/GameStore.ts";
import {usePlayersStore} from "../../stores/PlayersStore.ts";

const gameStore = useGameStore();
const playersStore = usePlayersStore();

function startWithMe(index:number) {
  playersStore.startByIndex(index);
  gameStore.startGame();
}

const {index} = defineProps({
  index: Number
})


</script>

<template>
  <v-card variant="outlined" v-if="index!=undefined" @click="startWithMe(index)">
<!--    <v-card-title >{{ index+1 }}</v-card-title>-->

    <v-card-text>
      Je commence !
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>