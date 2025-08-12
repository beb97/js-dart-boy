<script setup lang="ts">
import {useMode301Store} from "../stores/Mode301.ts";
import {useSettingsStore} from "../stores/SettingsStore.ts";


let mode301 = useMode301Store();
let settings = useSettingsStore();

</script>

<template>
  <div class="h page">

    <h1>details</h1>
    <div class="navigate">
      <router-link :to="{name:'home'}">
        <input type="button" value="Retour"/>
      </router-link>
    </div>

    <div class="v">
      <div class="carte h" v-for="(volleys, index) in mode301.throwsByPlayer">
        <h2>{{ settings.players[index] }}</h2>
        <div class="carte" v-for="(volley) in volleys">
        <span class="carte" v-for="(dart) in volley">
          {{ dart }}
        </span>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>