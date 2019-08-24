import axios from 'axios'

export default async ({ Vue, router }) => {
  Vue.prototype.$axios = axios

  router.beforeEach((to, from, next) => {
    // let admin = to.matched.slice().reverse().find( route => route.meta.admin )
    let admin = to.matched.some( route => route.meta.admin )
    // console.log(admin)
    console.log('ADMIN? ' + route.meta.admin ? "Oo" : "Hindi" )
    if (admin){
      alert('Not Admin')
      next('/')
    }
    else{
      next()
    }
  })
}
