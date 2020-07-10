const menu = {
    state:{
        activeNav:[]//选中的菜单
    },
    mutations:{
        set_activeNav(state,list){
            state.activeNav = list;
        },
        add_activeNav(state,data){
            // 判断data在选中菜单中是否存在
            if(state.activeNav.length > 0){
                state.activeNav.map((item,index) => {
                    if(item.path == data.path){ // 对比路由路径
                        state.activeNav[index] = data;
                    }
                })
            }
            state.activeNav.push(data)
        }
    },
    actions:{

    }
}
export default menu