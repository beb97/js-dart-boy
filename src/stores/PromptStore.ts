import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";

export const usePromptStore = defineStore('prompt', () => {

    const startMessage = "En attente des joueurs ..";

    const message = ref(startMessage);

    const savedMessage = localStorage.getItem('message')
    if (savedMessage) {
        try {
            // const parsed = JSON.parse(savedThrows)
            message.value = JSON.parse(savedMessage);
            console.log('Saved throws', savedMessage)
        } catch (e) {
            console.error('Erreur en chargeant le message:', e)
        }
    }

    watch(message, (newVal) => {
        localStorage.setItem('message', JSON.stringify(newVal))
    }, {deep: true})

    const hasMessage = computed(() => {
        return message.value.length > 0;
    })

    function reset() {
        message.value = startMessage;
    }

    function clear() {
        message.value = "";
    }

    return {
        message,
        hasMessage,
        clear,
        reset
    };
})