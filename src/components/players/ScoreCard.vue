<script setup lang="ts">

import {computed} from "vue";
import {useSettingsStore} from "../../stores/SettingsStore.ts";
import {useCurrentVolleyStore} from "../../stores/CurrentVolley.ts";

let settings = useSettingsStore();
let currentVolley = useCurrentVolleyStore();

const volleyOrder = computed(() =>
    Array.from({length: settings.flecheParVolee}, (_, i) => i)
)

</script>

<template>
  <v-card :variant="(currentVolley.volley[i]>0)?'tonal':(i == currentVolley.volley.length)?'flat':'text'"
          color="primary"
          @click="currentVolley.remove(i)" v-for="i in volleyOrder" :key="i">
      <v-card-title class="text-h5">
          {{ currentVolley.volley[i] ? currentVolley.volley[i] : '--' }}
      </v-card-title>
      <v-card-text>
        {{ (currentVolley.volley[i] >0) ? "🗑️": "🎯" }}

      </v-card-text>
  </v-card>
</template>

<style scoped>
</style>