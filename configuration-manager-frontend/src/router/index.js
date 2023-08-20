import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import { auth } from '@/services/firebase.js';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('@/views/SigninPage.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.path === '/signin' && auth.currentUser) {
        next('/');
        return;
    }

    if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
        next('/signin');
        return;
    }

    next();
});

export default router;
