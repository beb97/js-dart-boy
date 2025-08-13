<script setup lang="ts">


import PlayersStats from "../components/stats/PlayersStats.vue";
</script>

<template>
    <router-link :to="{name:'home'}">
      <v-btn>
        < retour
      </v-btn>
    </router-link>
    <PlayersStats/>
</template>

<style scoped>

</style>