<template>
  <div>
    <div v-if="isShow">
      保养模版
      <p @click="test">新增</p>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "stencil",
  data() {
    return {
      isShow: true
    };
  },
  computed: {},
  methods: {
    test() {
      this.isShow = false;
      let activePath = "/home/maintenance/stencil/addStencil";

      this.$store.commit("add_activeNav", {path:activePath,title:'新增设备'});
      console.log(this.$store.state.menu);
      this.$router.push("/home/maintenance/stencil/addStencil");
    }
  }
};
</script>

<style></style>
