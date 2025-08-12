<script setup lang="ts">
import Chrono from "./Chrono.vue";
import VolleyCounter from "./VolleyCounter.vue";

</script>

<template>
  <header>
    <span>🎯</span>
    <Chrono/>
    <VolleyCounter/>
    <RouterLink :to="{name:'settings'}">⚙️</RouterLink>
  </header>

</template>

<style scoped>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    column-gap: 2em;
    padding: 0.5em;
  }
</style>