import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
},
{
  path: '/login',
  name: 'Login',
  component: () => import('../views/login/Login')
},
{
  path: '/register',
  name: 'Register',
  component: () => import('../views/register/Register')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
  // if (isLogin || name === 'Login' || name === 'Register') {
  //   console.log('isLogin')
  //   next()
  // } else {
  //   next({ name: 'Login' })
  //   console.log('isNotLogin')
  // }
  // next()
})

export default router
