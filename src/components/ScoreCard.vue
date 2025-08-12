<script setup lang="ts">

import {useGameStore} from "../stores/GameStore.ts";
import {computed} from "vue";
import {useSettingsStore} from "../stores/SettingsStore.ts";
import {useCurrentVolleyStore} from "../stores/CurrentVolley.ts";

let gameStore = useGameStore();
let settings = useSettingsStore();
let currentVolley = useCurrentVolleyStore();

const volleyOrder = computed(() =>
    Array.from({ length: settings.flecheParVolee }, (_, i) => i)
)

</script>

<template>
<!--  {{gameStore.throwsByPlayer}}-->
  <div class="carte" @click="currentVolley.cancel()">

    <div class="volee">
        <span class="carte throw" v-for="i in volleyOrder" :key="i">
          {{currentVolley.volley[i] ? currentVolley.volley[i] : '-'}}
        </span>
    </div>

  </div>

  <div class="submit" @click="gameStore.commitVolley">
    <span>✅</span>
    <h2>{{currentVolley.total}}</h2>
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