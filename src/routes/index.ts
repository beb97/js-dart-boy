import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from "../pages/HomePage.vue";
import SettingsPage from "../pages/SettingsPage.vue";
import ScorePage from "../pages/ScorePage.vue";
import PlayerPage from "../pages/PlayerPage.vue";
import VictoryPage from "../pages/VictoryPage.vue";

const routes = [
    { name:"home", path: '/', component: HomePage },
    { name:"settings", path: '/settings', component: SettingsPage },
    { name:"details", path: '/details', component: ScorePage },
    { name:"players", path: '/players', component: PlayerPage },
    { name:"victory", path: '/victory', component: VictoryPage },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})