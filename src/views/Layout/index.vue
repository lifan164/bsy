<template>
  <el-container>
    <el-header>
      <my-header></my-header>
    </el-header>

    <el-container>

      <el-aside width="205px">
        <my-menu></my-menu>
      </el-aside>

      <el-main>
        <my-breadcrumb></my-breadcrumb>
        <div class="main_container">
          <router-view />
        </div>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
import myHeader from "./modules/header";
import myMenu from "./modules/menu";
import myBreadcrumb from "./modules/breadcrumb"
export default {
  components: { myHeader, myMenu ,myBreadcrumb},
  mounted() {}
};
</script>

<style lang='scss' scoped>
.el-container {
  height: 100%;
  background: rgba(239, 242, 244, 1);
  .el-header {
    padding: 0;
    height: auto !important;
  }
  .el-aside {
    background-color: #364050;
  }
  .el-main{
    padding:0;
    border:1px solid red;
    background-color: #EFF2F4;
    .main_container{
      padding:14px 16px 25px;
    }
  }
}
</style>