
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/demorice', component: () => import('pages/Price.vue') },
      { path: '/aboutSender', component: () => import('pages/aboutSender.vue') },
      { path: '', component: () => import('pages/aboutSender.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
