<script setup lang="ts">

import {useGameStore} from "../stores/GameStore.ts";
import {ref} from "vue";

let gameStore = useGameStore();



const showSettings = ref(false);

</script>

<template>
  <header>
<!--    <div>{{ gameStore.activePlayer }}</div>-->

<!--    <div>Flèche {{ gameStore.dartNumber }}</div>-->

    <div>Volée {{ gameStore.volleyNumber  }}</div>
    <div>{{ gameStore.activePlayer  }}</div>
<!--    <div v-for="(player, index) in gameStore.players" :key="index">-->
<!--      <input type="text" v-model="gameStore.players[index]" />-->
<!--    </div>-->

<!--    <input type="button" value="+"/>-->

    <input type="button" value="⚙️" @click="gameStore.toogleSettings"/>
  </header>

</template>

<style scoped>
  header {
    display: flex;
    flex-direction: row;
    column-gap: 2em;
    padding: 0.5em;
  }
</style>