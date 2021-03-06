import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome,
    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import('./views/Category.vue')
    }
];

const router = new Router({
    routes: routes
});

export default router;
