import { createRouter, createWebHistory } from 'vue-router';
import AuthView from "@/auth/AuthView.vue";
import Game from "@/game/Game.vue";


const routes = [
    {
        path: '/',
        name: 'Auth',
        component: AuthView,
    },
    {
        path:'/game',
        name:'game',
        component: Game
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
