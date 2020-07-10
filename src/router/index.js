import Vue from 'vue'
import Router from 'vue-router'
import equipmentManagement from './modules/equipmentManagement'
import MaintenanceManagement from './modules/maintenanceManagement'


//解决element-ui导航栏中重复点击菜单报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export const RouterMap = [{
    path: '/',
    name: 'Login',
    component: () => import('@/views/user/login'),
    meta: {
      title: 'login'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Layout'),
    redirect: '/equipment',
    meta: {
      title: 'home'
    },
    children: [
      equipmentManagement,
      MaintenanceManagement
    ]
  }
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: RouterMap
})
