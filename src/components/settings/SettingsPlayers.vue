<script setup lang="ts">

import {usePlayersStore} from "../../stores/PlayersStore.ts";
import {onMounted, ref} from "vue";

const playersStore = usePlayersStore();
const defaultName = "";
const newPlayer = ref(defaultName);
const input = ref()
const modeDelete = ref(false);

const addPlayer = () => {
  if (newPlayer.value.trim().length < 1) return;
  playersStore.addPlayer(newPlayer.value);
  resetInput();
}

function deletePlayer(index: number) {
  playersStore.deletePlayer(index);
  if(playersStore.allPlayers.length < 1) {
    modeDelete.value = false;
  }
}

function resetInput() {
  newPlayer.value = defaultName;
  focusInput();
}

function focusInput() {
  input.value.focus()
}

onMounted(() => {
  focusInput();
})
</script>

<template>

  <v-card variant="outlined" v-if="!modeDelete">
    <v-badge inline :content="playersStore.nbPlayers">

    <v-card-title>Joueurs</v-card-title>
    </v-badge>
    <v-card-text>

      <v-badge location="top right"  v-for="(player, index) in playersStore.allPlayers" :key="index"
               @click="playersStore.togglePlayer(index)"
               :content="player.active?'-':'+'"
               :color="player.active?'grey-lighten-2':'primary'"
               class="ma-2"
      >
        <v-chip
            class="px-6 py-3"
                :color="player.active?'primary':'grey'"
                :variant="player.active?'elevated':'tonal'"
        >
          {{ player.name }}
        </v-chip>
      </v-badge>
    </v-card-text>
    <v-card-actions>
      <form @submit.prevent="addPlayer"  class="w-full" >
        <div>
          <v-text-field ref="input" v-model="newPlayer"  class="w-full"  density="compact" label="Nouveau joueur">
            <template #append-inner>
              <v-icon color="grey" style="cursor: pointer;" @click="resetInput">mdi-close</v-icon>
            </template>
            <template #append>
              <v-btn variant="outlined" @click="addPlayer" :disabled="newPlayer.length == 0"
              :color="(newPlayer.length == 0)?'grey':'primary'">
<!--                <v-icon color="green" style="cursor: pointer;">mdi-plus</v-icon>-->
                ajouter
              </v-btn>
            </template>
          </v-text-field>
        </div>
      </form>
    </v-card-actions>
    <v-card-actions>
      <v-btn variant="tonal" @click="modeDelete=true" color="error" :disabled="(playersStore.allPlayers.length == 0)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-card class="mb-4" variant="outlined" v-if="modeDelete">
    <v-card-title>Supprimer</v-card-title>
    <v-card-text>
      <v-badge location="top right" color="error" content="-" v-for="(player, index) in playersStore.allPlayers"
               :key="index" class="ma-2">
        <v-chip color='error' @click="deletePlayer(index)" class="px-6 py-3">
          {{ player.name }}
        </v-chip>
      </v-badge>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="tonal" @click="modeDelete=false" color="primary" >
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>


</template>

<style scoped>

form {
  min-width: 300px;
}

</style>