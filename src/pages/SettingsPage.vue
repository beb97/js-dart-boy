<script setup lang="ts">

import Settings from "../components/Settings.vue";
</script>

<template>
  <div class="page h">

<!--    <h1>Paramètres</h1>-->

    <div class="navigate">
      <router-link :to="{name:'home'}">
        <input type="button" value="< retour"/>
      </router-link>
    </div>

    <Settings></Settings>
  </div>
</template>

<style scoped>
</style>