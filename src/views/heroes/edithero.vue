<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          type="email"
          class="form-control"
          v-model="formdata.name"
          id="exampleInputEmail1"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input
          type="text"
          class="form-control"
          v-model="formdata.gender"
          id="exampleInputPassword1"
          placeholder="性别"
        />
      </div>
      <!-- @click.prevent表示阻止button的默认行为 -->
      <button class="btn btn-success" @click.prevent="add">提交</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>
