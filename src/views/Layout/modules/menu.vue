<template>
  <div>
    <el-menu
      background-color="#364050"
      text-color="#EEEEEE"
      class="el-menu-vertical-demo"
      unique-opened
      
      :default-active="getActiveNav.length>0 ? getActiveNav[0].path :''"
      router
    >
      <el-submenu :index="index + ''" v-for="(item,index) in menus" :key='index'>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.meta.title}}</span>
        </template>
        <el-menu-item :index="subItem.path" v-for="(subItem,subIndex) in item.children" :key='subIndex' @click="saveNavState(subItem.path,subItem.meta.title)">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{subItem.meta.title}}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      activePath:'',//默认高亮子菜单路由
      menus:null
    }
  },
  mounted() {
    // this.activePath = window.sessionStorage.getItem('activePath')
    this.getMenu();
  },
  computed:{
    ...mapGetters(['getActiveNav'])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getMenu(){
      this.menus = this.$router.options.routes[1].children;
      console.log(this.menus)
    },
    //保存路由激活状态
    saveNavState(activePath,title){
      // window.sessionStorage.setItem('activePath',activePath)
      this.$store.commit('set_activeNav',[{path:activePath,title}])
    }
  }
};
</script>

<style scoped lang='scss'>
.el-menu{
  border-right: none!important;
}
</style>