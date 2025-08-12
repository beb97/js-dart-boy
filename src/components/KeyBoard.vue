<script setup lang="ts">
import {useGameStore} from "../stores/GameStore.ts";
import {ref} from "vue";
import {useCurrentVolleyStore} from "../stores/CurrentVolley.ts";

const keys = Array.from({length: 20}, (_, i) => i + 1)

const gameStore = useGameStore()
const currentVolley = useCurrentVolleyStore();

const activeMult = ref(1);

const addThrow = (score: number) => {
  currentVolley.addThrow(score * activeMult.value);
  setMult(1);
}

const setMult = (mult: number) => {
  activeMult.value = mult;
}
</script>

<template>

  <v-card variant="outlined" v-if="gameStore.started">
    <v-card-text>
      <v-chip size="x-large" @click="addThrow(0)">0</v-chip>
      <v-chip size="x-large" @click="addThrow(25)">25</v-chip>
      <v-chip size="x-large" @click="addThrow(50)">50</v-chip>
    </v-card-text>
    <v-card-text>
      <v-chip size="x-large" @click="setMult(1)" class="simple" :class="{selected : (activeMult == 1)}">-</v-chip>
      <v-chip size="x-large" @click="setMult(2)" class="double" :class="{selected : (activeMult == 2)}">double</v-chip>
      <v-chip size="x-large" @click="setMult(3)" class="triple" :class="{selected : (activeMult == 3)}">triple</v-chip>
    </v-card-text>

    <v-card-text>

      <v-chip size="x-large" v-for="n in keys" :key="n" @click="addThrow(n)">
        {{ n }}
      </v-chip>

    </v-card-text>
  </v-card>

</template>

<style scoped>
.v-chip {
  margin: 0.2em;
}

.v-card-text {
  padding: 0.7em;
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
</style>