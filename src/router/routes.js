// filepath: src/router/routes.js

const routes = [
  {
    path: '/', // root path hostname.com
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: {pangAdmin: false} },
      // { path: '/newpage/:pageid', component: () => import('pages/newpage.vue'), meta: {pangAdmin: false} }, // sub path or sub directory example: hostname.com/newpage/1
      { path: '/newpage', component: () => import('pages/newpage.vue'), meta: {pangAdmin: false} },
      { path: '/admin', component: () => import('pages/admin/dashboard.vue'), meta: {pangAdmin: true} },
      { path: '/counter', component: () => import('pages/counter.vue'), meta: {pangAdmin: false} },
      { path: '/music', component: () => import('pages/music.vue'), meta: {pangAdmin: false} },
      { path: '/music1', component: () => import('pages/musicChart.vue'), meta: {pangAdmin: false} },
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
