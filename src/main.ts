import { createApp } from 'vue'
import {createPinia} from "pinia";
import './style.css'
import App from './App.vue'
import {router} from "./routes";

import 'vuetify/styles/main.css'
import '@mdi/font/css/materialdesignicons.css'
import {createVuetify} from "vuetify/framework";
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light',
        //
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi },
    },
    components,
    directives,
})

createApp(App)
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .mount('#app')
