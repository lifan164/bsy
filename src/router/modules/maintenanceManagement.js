const MaintenanceManagement = {
    path: '/home/maintenance',
    name: 'maintenance',
    component:{
      render: c => c("router-view")
    },
    redirect:'/stencil',
    meta: {
      title: '保养管理'
    },
    children: [{
      path: '/home/maintenance/stencil',
      name: 'stencil',
      component: () => import('@/views/maintenanceManagement/stencil/index'),
      meta:{
        title:'保养模板'
      },
      children:[
        {
          path:'/home/maintenance/stencil/addStencil',
          name:'addStencil',
          component:() => import('@/views/maintenanceManagement/stencil/children/addStencil'),
          meta:{
            title:'新增保养模板'
          }
        }
      ]
    }]
  }
  export default MaintenanceManagement
  