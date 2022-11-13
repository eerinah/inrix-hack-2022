import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/HomeView.vue'
// import addTrip from '../views/AddTripView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/addTrip',
    name: 'addTrip',
    component: () => import(/* webpackChunkName: "addTrip"*/ '../components/AddTrip')
  },
  {
    path: '/addTripForm',
    name: 'addTripForm',
    component: () => import(/* webpackChunkName: "addTrip"*/ '../components/AddTripForm')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
