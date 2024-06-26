import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/ResourcesView.vue',
            component: () => import('../views/ResourcesView.vue')
        },
        {
            path: '/ResearchView.vue',
            component: () => import('../views/ResearchView.vue')
        }
    ]
})  

export default router