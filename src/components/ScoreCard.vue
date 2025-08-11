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

    <h2>{{gameStore.currentVolleyTotal}}</h2>
    <div class="volee">
        <span class="carte throw" v-for="i in volleyOrder" :key="i">
          {{gameStore.currentVolley[i] ? gameStore.currentVolley[i] : '-'}}
        </span>
    </div>
  </div>
  <div class="carte submit" @click="gameStore.currentVolleySubmit">
    ✅
  </div>
<!--  <div class="carte" @click="gameStore.currentVolleyCancel">-->
<!--    🗑️-->
<!--  </div>-->
</template>

<style scoped>
.submit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
}

.throw {
  width: 20px;
}

</style>