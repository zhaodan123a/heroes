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
      <button class="btn btn-success" @click.prevent="edit">提交</button>
    </form>
  </div>
</template>

<script>
import axios from "../../../node_modules/axios/dist/axios";

export default {
  props: ["id"],
  data() {
    return {
      formdata: {
        name: "",
        gender: ""
      }
    };
  },
  mounted() {
      this.getone();
  },
  methods: {
      //首先根据id获取原来的数据
      getone(){
          axios
            .get('http://localhost:3000/heroes/'+this.id)
            .then((Response)=>{
                const {status,data}=Response
                if(Response.status===200){
                    this.formdata=data
                }else{
                    alert('编辑失败')
                }
            }).catch((err)=>{
                alert('服务器异常')
            })
      },
      //编辑提交
      edit(){
          axios
            .put('http://localhost:3000/heroes/'+this.id,this.formdata)
            .then((Response)=>{
                if(Response.status===200){
                    this.$router.push('/heroes');
                }else{
                    alert('编辑出错')
                }
            }).catch((err)=>{
                alert('服务器异常')
            })
      }
  }
};
</script>

<style lang="less" scoped>
</style>
