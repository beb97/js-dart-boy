<script setup lang="ts">
import {useChronoStore} from "../stores/ChronoStore.ts";

let chronoStore = useChronoStore();


</script>

<template>
<div>
  <span>{{ chronoStore.chrono }}</span>
</div>
</template>

<style scoped>

</style>