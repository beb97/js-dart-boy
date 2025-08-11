<script setup lang="ts">
import {useGameStore} from "../stores/GameStore.ts";
import {ref} from "vue";

const keys = Array.from({ length: 20 }, (_, i) => i + 1 )

const gameStore = useGameStore()

const activeMult = ref(1);

const addThrow = (score: number) => {
  console.log(score);
  gameStore.addThrow(score * activeMult.value);
  setMult(1);
}

const setMult = (mult: number) => {
  activeMult.value = mult;
}
</script>

<template>
  <div class="keyboard">
    <div class="keys">
<!--      <button class="key cancel" @click="addThrow(0)">C </button>-->
      <button class="key" @click="addThrow(0)">0 </button>
      <button class="key" @click="addThrow(25)">25 </button>
      <button class="key" @click="addThrow(50)">50 </button>
<!--      <button class="key ok" @click="addThrow(50)">OK </button>-->
    </div>

    <div class="keys">
      <button @click="setMult(1)" class="simple" :class="{selected : (activeMult == 1)}">simple </button>
      <button @click="setMult(2)" class="double" :class="{selected : (activeMult == 2)}">double </button>
      <button @click="setMult(3)" class="triple" :class="{selected : (activeMult == 3)}">triple </button>
    </div>


    <div class="keys">
      <button class="key" v-for="n in keys" :key="n" @click="addThrow(n)">{{ n }} </button>
    </div>

  </div>
</template>

<style scoped>

.keyboard {
  display: flex;
  flex-direction: column;
  place-items: center;
  row-gap: 0.5em;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0.5em;
  background-color: #adb9c6;
}

.keys {
  display: flex;
  max-width: 300px;
  flex-wrap: wrap;
  row-gap: 2px;
  column-gap: 2px;
  justify-content: center;
  align-items: center;
}

.key {
  width: 50px;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  box-shadow: #1a1a1a 1px 1px 1px;
}


button {
  border: 1px solid grey;
}

.selected {
  border: 2px solid grey;
  opacity: 1 !important;
}

.simple {
  opacity: 0.5;
}

.double {
  background-color: red;
  opacity: 0.5;
}

.triple {
  background-color: green;
  opacity: 0.5;
}

.cancel {
  background-color: orange;
  color: white;
}

.ok {
  background-color: green;
  color: white;
}


</style>