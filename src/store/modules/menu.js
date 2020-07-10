const menu = {
    state:{
        activeNav:[]//选中的菜单
    },
    mutations:{
        set_activeNav(state,list){
            state.activeNav = list;
        }
    },
    actions:{

    }
}
export default menu