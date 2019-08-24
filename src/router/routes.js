
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: {admin: false} },
      // { path: '/newpage/:pageid', component: () => import('pages/newpage.vue'), meta: {admin: true} },
      { path: '/newpage', component: () => import('pages/newpage.vue'), meta: {admin: false} },
      { path: '/admin', component: () => import('pages/admin/dashboard.vue'), meta: {admin: true} },
      { path: '/counter', component: () => import('pages/counter.vue'), meta: {admin: false} }
    ]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
