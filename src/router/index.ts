import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/HomePage.vue'),
      name: 'home'
    },
    {
      path: '/events',
      component: () => import('@/pages/EventsPage.vue'),
      name: 'events'
    },
    {
      path: '/wedding',
      component: () => import('@/pages/WeddingPage.vue'),
      name: 'wedding'
    },
    {
      path: '/daily',
      component: () => import('@/pages/DailyPage.vue'),
      name: 'daily'
    },
    {
      path: '/blog',
      component: () => import('@/pages/BlogPage.vue'),
      name: 'blog'
    },
    {
      path: '/about',
      component: () => import('@/pages/AboutPage.vue'),
      name: 'about'
    },
    {
      path: '/contact',
      component: () => import('@/pages/ContactPage.vue'),
      name: 'contact'
    },
    {
      path: '/soon',
      component: () => import('@/pages/ComingSoon.vue'),
      name: 'soon'
    },
    // {
    //   path: '/login',
    //   component: () => import('@/pages/LoginPage.vue'),
    //   name: 'login',
    //   meta: { public: true }
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (!to.meta.public && !localStorage.getItem('user')) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })

export default router
