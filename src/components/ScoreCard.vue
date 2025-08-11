<script setup lang="ts">

import {useGameStore} from "../stores/GameStore.ts";
import {computed} from "vue";

let gameStore = useGameStore();

const volleyOrder = computed(() =>
    Array.from({ length: gameStore.flecheParVolee }, (_, i) => i)
)

</script>

<template>
<!--  {{gameStore.throwsByPlayer}}-->
  <div class="carte" @click="gameStore.currentVolleyCancel">

    <div class="volee">
        <span class="carte throw" v-for="i in volleyOrder" :key="i">
          {{gameStore.currentVolley[i] ? gameStore.currentVolley[i] : '-'}}
        </span>
    </div>

  </div>

  <div class="submit" @click="gameStore.currentVolleySubmit">
    <span>✅</span>
    <h2>{{gameStore.currentVolleyTotal}}</h2>
  </div>


</template>

<style scoped>
.submit {
  display: flex;
  align-items: center;
  justify-content: center;

}

.submit span {
  font-size: 2em;
}

.throw {
  min-width: 20px;
  font-size: 1.5em;
}

</style>