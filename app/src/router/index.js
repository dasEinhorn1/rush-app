import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import LoginPage from '@/components/pages/LoginPage'
import RusheePage from '@/components/pages/RusheePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/rushees/:id',
      name: 'Rushee',
      component: RusheePage
    }
  ]
})
