<script setup lang="ts">

import Settings from "../components/settings/Settings.vue";
</script>

<template>
    <div class="navigate">
      <router-link :to="{name:'home'}">
        <v-btn>
          < retour
        </v-btn>
      </router-link>
    </div>
    <Settings></Settings>
</template>

<style scoped>
</style>