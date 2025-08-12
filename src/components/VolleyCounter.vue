<script setup lang="ts">
import {useVolleysStore} from "../stores/VolleysStore.ts";

let volleysStore = useVolleysStore();
</script>

<template>
  <div>Volée {{ volleysStore.volleyNumber  }}</div>
</template>

<style scoped>

</style>