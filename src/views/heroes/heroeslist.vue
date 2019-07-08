<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <router-link :to="{name:'addhero'}" class="btn btn-success">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(val,index) in list" :key='val.id'>
            <td>{{index +1}}</td>
            <td>{{val.name}}</td>
            <td>{{val.gender}}</td>
            <td>
              <!-- 将id传入，动态路由写法一： -->
              <!-- <router-link :to="{name:'edithero',params:{id:val.id}}">编辑</router-link> -->
              <!-- 写法二： -->
              <router-link :to="'/heroes/edit/'+val.id">编辑</router-link>
              &nbsp;&nbsp;
              <a href="javascript:" @click='del(val.id)'>删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from '../../../node_modules/axios/dist/axios.js'

export default {
  data() {
    return {
      list:[]
    }
  },
  mounted() {
    //加载完毕自动执行
    this.getData()
  },
  methods: {
    //查询
    getData() {
      axios
        .get("http://localhost:3000/heroes")
        .then(Response => {
          //解构赋值，得到状态码和数据
          const {status,data}=Response
          if(status===200){
            this.list=data
          }
        }).catch((err)=>{
          alert('服务器异常')
        })
    },
    //删除
    del(id){
      if(confirm('你确定要删除吗？')){
        axios
          .delete(`http://localhost:3000/heroes/${id}`)
          .then((Response)=>{
            if(Response.status===200){
              this.getData();
            }
          }).catch((err)=>{
            alert('服务器异常')
          })
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>
