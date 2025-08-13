<script setup lang="ts">

import KeyBoard from "./KeyBoard.vue";
import ScoreBoard from "./ScoreBoard.vue";

</script>

<template>

  <main>
    <ScoreBoard/>
<!--    <Prompt/>-->
    <KeyBoard/>

  </main>

</template>

<style scoped>

main {
  margin-top: 0.5em;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  justify-content: space-around;
}


</style>