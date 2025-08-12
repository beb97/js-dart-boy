<script setup lang="ts">
import {useCurrentVolleyStore} from "../../stores/CurrentVolley.ts";

let currentVolley = useCurrentVolleyStore();

</script>

<template>
  <v-card variant="tonal" @click="currentVolley.cancel"
          color="warning"
  >
    <v-card-title class="headline">x</v-card-title>
    <v-card-text>
      🗑️
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>