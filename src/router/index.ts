import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),

      children: [
        {
          path: '/',
          component: () => import('@/pages/HomePage.vue'),
          name:'home'
        },
        {
          path: 'events',
          component: () => import('@/pages/EventsPage.vue'),
          name:'events'
        },
        {
          path: 'wedding',
          component: () => import('@/pages/WeddingPage.vue'),
          name:'wedding'
        },
        {
          path: 'daily',
          component: () => import('@/pages/DailyPage.vue'),
          name:'daily'
        },
        {
          path: 'blog',
          component: () => import('@/pages/BlogPage.vue'),
          name:'blog'
        },
        {
          path: 'patterns',
          component: () => import('@/pages/BlogPage.vue'),
          name:'patterns'
        },
        {
          path: 'about',
          component: () => import('@/pages/AboutPage.vue'),
          name:'about'
        },
        {
          path: 'contact',
          component: () => import('@/pages/ContactPage.vue'),
          name:'contact'
        },

      ]
    }
  ]
})

export default router
