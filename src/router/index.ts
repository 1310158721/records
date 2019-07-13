import Vue from 'vue';
import Router from 'vue-router';
import * as localStorage from '@/utils/localStorage'
import elRouterConfigs from '@/router/elementui/index'
import framesRouterConfigs from '@/router/frames/index'
import interviewRouterConfigs from '@/router/interview/index'
import memorandumRouterConfigs from '@/router/memorandum/index'
import nodeRouterConfigs from '@/router/node/index'
import webRouterConfigs from '@/router/web/index'
import toolsRouterConfigs from '@/router/tools/index'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      beforeEnter: (to, from, next) => {
        localStorage.get('isLogin') === 'true' ? next({ name: 'layout' }) : next({ name: 'login' });
      }
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import(/* webpackChunkName: "layout" */ '@/views/layout/index.vue'),
      redirect: { name: 'welcome' },
      children: [
        {
          path: 'welcome',
          name: 'welcome',
          component: () => import(/* webpackChunkName: "welcome" */ '@/views/welcome/index.vue')
        },
        ...elRouterConfigs,
        ...framesRouterConfigs,
        ...interviewRouterConfigs,
        ...memorandumRouterConfigs,
        ...nodeRouterConfigs,
        ...webRouterConfigs,
        ...toolsRouterConfigs,
        {
          path: '*',
          name: 'second-error',
          component: () => import(/* webpackChunkName: "error" */ '@/views/error/index.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
    },
    {
      path: '*',
      name: 'first-error',
      component: () => import(/* webpackChunkName: "error" */ '@/views/error/index.vue')
    }
  ]
});

export default router;
