const EquipmentManagement = {
  path: '/home/equipment',
  name: 'equipment',
  component:{
    render: c => c("router-view")
  },
  redirect:'/stand',
  meta: {
    title: '设备管理'
  },
  children: [{
    path: '/home/equipment/stand',
    name: 'stand',
    component: () => import('@/views/equipmentManagement/index'),
    meta:{
      title:'设备台账'
    }
  }]
}
export default EquipmentManagement
