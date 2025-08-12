import { createApp } from 'vue'
import {createPinia} from "pinia";
import './style.css'
import App from './App.vue'
import {router} from "./routes";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createVuetify} from "vuetify/framework";

const vuetify = createVuetify({
    components,
    directives,
})


createApp(App)
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .mount('#app')
