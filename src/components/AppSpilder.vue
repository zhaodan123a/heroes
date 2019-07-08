<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link to="/heroes" tag="li" > <a href="javascript:">英雄列表</a> </router-link>
      <router-link to="/weapons" tag="li"> <a href="javascript:">武器列表</a> </router-link>
      <router-link to="/equips" tag="li"> <a href="javascript:">装备列表</a> </router-link>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
</style>
