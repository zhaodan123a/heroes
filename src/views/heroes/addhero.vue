<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
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
      <button class="btn btn-success" @click.prevent='add'>提交</button>
    </form>
  </div>
</template>

<script>
//引入axios
import axios from '../../../node_modules/axios/dist/axios.js'
export default {
  data() {
    return {
      formdata: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
      add(){
          axios
            .post('http://localhost:3000/heroes',this.formdata)
            .then((Response)=>{
                if(Response.status===201){
                    this.$router.push('/heroes')
                }
            }).catch((err)=>{
                alert('服务器异常')
            })
      }
  },
};
</script>

<style lang="less" scoped>
</style>
