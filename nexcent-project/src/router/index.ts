import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import service from '../views/HeaderViews/ServiceView/ServiceView.vue'
import about from '../views/FooterViews/AboutView/AboutView.vue'
import more from '../views/BtnsView/BtnsView.vue'
import login from '../views/HeaderViews/HeaderLogin/HeaderLogin.vue'
import SignUp from '../views/HeaderViews/HeaderSignUp/HeaderSignUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    },
    {
      path: '/service',
      name: 'service',
      component: service,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/more',
      name: 'more',
      component: more,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp,
    },
    
  ],
})

export default router