<script setup lang="ts">
import {useMode301Store} from "../stores/Mode301.ts";
import {usePlayersStore} from "../stores/PlayersStore.ts";

const mode301 = useMode301Store();
const playersStore = usePlayersStore();

</script>

<template>
  <div class="h page">
      <router-link :to="{name:'home'}">
        <v-btn>
          < retour
        </v-btn>
      </router-link>

    <v-card variant="outlined" v-for="(volleys, index) in mode301.throwsByPlayer">
        <v-card-title>{{ playersStore.players[index] }}</v-card-title>
      <v-card-text>
        <div class="" v-for="(volley) in volleys">
        <v-chip v-for="(dart) in volley">
          {{ dart }}
        </v-chip>
          <v-chip variant="elevated" color="primary">
            {{volley.reduce((sum, score) => sum + score, 0)}}
          </v-chip>
        </div>
      </v-card-text>

    </v-card>
  </div>
</template>

<style scoped>

</style>