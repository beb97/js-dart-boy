<script setup lang="ts">
import {useGameStore} from "../stores/GameStore.ts";
import {useSettingsStore} from "../stores/SettingsStore.ts";
import {router} from "../routes";

let gameStore = useGameStore();
let settings = useSettingsStore();

function reset() {
  gameStore.resetGame();
  router.push({name:"home"});

}
</script>

<template>
  <div class="carte settings">

    <fieldset>
      <legend>Redémarer</legend>
      <input type="button" value="Nouvelle partie" @click="reset"/>
    </fieldset>

    <fieldset>
      <legend>Score</legend>
      <div>
        <input type="radio" id="301" value="301" name="score" v-model="settings.initialScore"/>
        <label for="301">301</label>
      </div>
      <div>
        <input type="radio" id="501" value="501" name="score" v-model="settings.initialScore"/>
        <label for="501">501</label>
      </div>
      <div>
        <input type="radio" id="10" value="10" name="score" v-model="settings.initialScore"/>
        <label for="10">10</label>
      </div>
    </fieldset>

    <fieldset>
      <legend>Joueurs</legend>
      <div v-for="(_, index) in settings.players" :key="index">
        <input v-model="settings.players[index]"><input type="button" value="-" @click="settings.players.pop"/>
      </div>

      <div>
        <input type="button" value="+" @click="settings.players.push('')"/>
      </div>

    </fieldset>

    <fieldset>
      <legend>Volée</legend>
      <input type="number" size="2" maxlength="2" v-model="settings.flecheParVolee"/>
    </fieldset>


  </div>
</template>

<style scoped>

.settings {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #d8e7ec;
}
</style>