<script setup lang="ts">

const reboot = () => {
  localStorage.clear();
  window.location.reload();
}
</script>

<template>
  <v-card variant="outlined">
    <v-card-title>Reset usine</v-card-title>
    <v-card-actions>
          <v-btn @click="reboot"
                 color="warning">
            Reset
          </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>