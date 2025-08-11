<script setup lang="ts">
import {useGameStore} from "../stores/GameStore.ts";

let gameStore = useGameStore();

const reset = () => {
  // alert("Reset ?")
  // if (window.confirm('Veux tu redémarrer la partie?')) {
    gameStore.throws = [];
    gameStore.toogleSettings();
  // }
}

</script>

<template>
  <div class="carte">
    <h2>Paramètres</h2>

    <fieldset>
      <legend>Redémarer</legend>
      <input type="button" value="Nouvelle partie" @click="reset"/>
    </fieldset>

    <fieldset>
      <legend>Score</legend>
      <input type="radio" id="301" value="301" name="score" v-model="gameStore.initialScore"/>
      <label for="301">301</label>
      <input type="radio" id="501" value="501" name="score" v-model="gameStore.initialScore"/>
      <label for="501">501</label>
      <input type="radio" id="10" value="10" name="score" v-model="gameStore.initialScore"/>
      <label for="10">10</label>
    </fieldset>

    <fieldset>
      <legend>Joueurs</legend>
      <div v-for="(joueur, index) in gameStore.players" :key="index" >
        <input v-model="gameStore.players[index]"><input type="button" value="-" @click="gameStore.players.pop"/>
      </div>

      <div>

        <input type="button" value="+" @click="gameStore.players.push('')"/>
      </div>

      <input type="button" value="Valider" @click="gameStore.toogleSettings()"/>
    </fieldset>

    <fieldset>
      <legend>Volée</legend>
      <input type="number" size="2" maxlength="2" v-model="gameStore.flecheParVolee"/>
    </fieldset>


  </div>
</template>

<style scoped>

</style>