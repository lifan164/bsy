<template>
  <div @click="to">跳转</div>
</template>

<script>
export default {
    methods:{
        to(){
            this.$router.push('/home/equipment/stand')
        }
    }
}
</script>

<style>

</style>