<script setup lang="ts">

import Header from "./components/Header.vue";
</script>

<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-app-bar-title>
        <Header></Header>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
</style>
