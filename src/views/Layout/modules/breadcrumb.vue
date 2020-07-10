<template>
  <!-- <ul class="breadcrumb_box">
    <li v-for="(item,index) in getActiveNav" :key="index" :class="index===0 ? 'active':''">{{item.title}}</li>
  </ul> -->
  <div class='breadcrumb_box'>
    <router-link :to="item.path" v-for="(item,index) in getActiveNav" :key="index" class="link">{{item.title}}</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "breadcrumb",
  data() {
    return {
      list: [{ title: "保养管理" }, { title: "测试" }]
    };
  },
  mounted(){
    console.log('ddd')
  },
  computed:{
    ...mapGetters(['getActiveNav'])
  }
};
</script>

<style lang='scss' scoped>
.breadcrumb_box {
  height: 50px;
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(182, 208, 241, 1);
  box-sizing: border-box;
  padding: 8px 16px 0;
  .link{
    border:1px solid rgba(182, 208, 241, 1);
    border-bottom-color: transparent;
    background:rgba(239,242,244,1);
    text-decoration: none;
    font-size:18px;
    display: inline-block;
    line-height: 40px;
    color:#555555;
    padding:0 17px;
    // line-height: 40px;
    // font-size: 18px;
    // padding: 0 17px;
    // box-sizing: border-box;
    // color: #2170f4;
    // 
    // &.active {
    //   color: #555555;
    //   border: 1px solid rgba(182, 208, 241, 1);
    //   background-color: rgba(239, 242, 244, 1);
    //   border-bottom-color: transparent;
    //   border-radius: 4px 4px 0 0;
    // }
  }
}
</style>