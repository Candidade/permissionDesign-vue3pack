import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

/**
 * 公开路由表
 */
const publicRoutes: Array<RouteRecordRaw> = [
  { path: '/login', component: () => import('@/views/login/index.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
});

export default router;
