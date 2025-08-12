import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const usePromptStore = defineStore('prompt', () => {

    const message = ref("En attente des joueurs ..");

    const hasMessage = computed(() => {
        return message.value.length > 0;
    })

    function clear() {
        message.value = "";
    }

    return {
        message,
        hasMessage,
        clear
    };
})