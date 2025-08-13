<script setup lang="ts">
import {useGameStore} from "../stores/GameStore.ts";
import {computed, ref} from "vue";
import {useCurrentVolleyStore} from "../stores/CurrentVolley.ts";

const keys = Array.from({length: 20}, (_, i) => i + 1)

const gameStore = useGameStore()
const currentVolley = useCurrentVolleyStore();

const activeMult = ref(1);

const addThrow = (score: number) => {

  let multScore = (score > 20) ? score : score * activeMult.value;

  currentVolley.addThrow(multScore);
  setMult(1);
}

const setMult = (mult: number) => {
  activeMult.value = mult;
}

const multColor = computed(() => {
  let color = "blue-grey-lighten-4";
  if (activeMult.value === 2) {
    color = "error";
  } else if (activeMult.value === 3) {
    color = "success";
  }
  return color;
})

</script>

<template>

  <v-card variant="outlined" v-if="gameStore.started">
    <v-card-text>
      <v-btn color="blue-grey-lighten-4" size="x-large" @click="addThrow(0)">0</v-btn>
      <v-btn color="blue-grey-lighten-4" size="x-large" @click="addThrow(25)">25</v-btn>
      <v-btn color="blue-grey-lighten-4" size="x-large" @click="addThrow(50)">50</v-btn>
    </v-card-text>
    <v-card-text>
      <v-btn :variant="(activeMult == 1)?'elevated': 'outlined'" size="large" @click="setMult(1)" class="simple" :class="{selected : (activeMult == 1)}">-</v-btn>
      <v-btn :variant="(activeMult == 2)?'elevated': 'outlined'"  color="error" size="large" @click="setMult(2)" class="double" :class="{selected : (activeMult == 2)}">double</v-btn>
      <v-btn :variant="(activeMult == 3)?'elevated': 'outlined'" color="success" size="large" @click="setMult(3)" class="triple" :class="{selected : (activeMult == 3)}">triple</v-btn>
    </v-card-text>

    <v-card-text>

<!--      :content="(activeMult>1)?'x'+activeMult:''"-->
<!--      <v-badge v-for="n in keys" :key="n" @click="addThrow(n)"-->

<!--               :model-value="activeMult > 1"-->
<!--     "          location="top right"-->
<!--               offset-x="10"-->
<!--               offset-y="10"-->
<!--               :color="(activeMult==2)?'error':'success'"-->
<!--      >-->
        <v-btn size="large" v-for="n in keys" :key="n" @click="addThrow(n)"
        :color="multColor"
        >
<!--        <v-btn size="large" >-->
          {{ n }}
        </v-btn>
<!--      </v-badge>-->


    </v-card-text>
  </v-card>

</template>

<style scoped>
.v-btn {
  margin: 0.2em;
  font-size: 1.5em !important;
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
  opacity: 0.5;
}

.triple {
  opacity: 0.5;
}
</style>