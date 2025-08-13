<script setup lang="ts">
import {useMode301Store} from "../../stores/Mode301.ts";
import {usePlayersStore} from "../../stores/PlayersStore.ts";
import {useSettingsStore} from "../../stores/SettingsStore.ts";

const mode301 = useMode301Store();
const playersStore = usePlayersStore();
let settingsStore = useSettingsStore();
</script>

<template>
  <v-card variant="outlined" v-for="(volleys, index) in mode301.throwsByPlayer" >
    <v-card-title>{{ playersStore.players[index] }}</v-card-title>
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
            auto-draw
            :min="0"
            :gradient="['red', 'orange', 'green']"
            stroke-linecap="round"
            :max="settingsStore.initialScore"
            :model-value="mode301.remainingScoresByPlayerAndVolley[index]"
        >
          <!--        <template v-slot:label="item">-->
          <!--          ${{ item.value }}-->
          <!--        </template>-->
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text >
      <div class="d-flex justify-start">
        <v-chip variant="elevated" color="primary">
          {{ settingsStore.initialScore }}
        </v-chip>
      </div>
      <div v-for="(volley, volleyIndex) in volleys" class="d-flex justify-start">
        <v-chip variant="elevated" color="primary">
          {{ mode301.remainingScoresByPlayerAndVolley[index][volleyIndex] }}
        </v-chip>

        <v-chip variant="outlined" color="primary">
          {{ volley.reduce((sum, score) => sum + score, 0) }}
        </v-chip>

        <v-chip v-for="(dart) in volley">
          {{ dart }}
        </v-chip>

      </div>
    </v-card-text>


  </v-card>
</template>

<style scoped>

</style>