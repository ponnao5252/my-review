import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Edit from '../views/Edit.vue'
import About from '../views/About.vue'
import Set from '../views/Set.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    {
    path: '/',
    // name: 'Home',
    component: Home
  }
,
  {
    path: '/new',
    // name: 'New',
    component: New
  },
  {
    path: '/edit:id',
    // name: 'New',
    component: Edit
  },
  {
    path: '/about',
    // name: 'New',
    component: About
  },
  {
    path: '/set',
    // name: 'New',
    component: Set
  }
  ]
})

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/',
//     name: 'New',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     // component: () => import(/* webpackChunkName: "about" */ '../views/New.vue')
//     component: New
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default VueRouter
