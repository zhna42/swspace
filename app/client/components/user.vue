<template lang="pug">
  div(class="main") 
    nav(class="nav" v-if="$store.state.mail")
      router-link(class="link" to="/newtask") Новая задача
      router-link(class="link" to="/task") Текущие задачи
      router-link(class="link" to="/completedtasks") Выполненые задачи
      router-link(class="link" to="/base") Базы номеров
      router-link(class="link" to="/newbase") Новая база
    p {{$store.state.mail}}
    p {{$store.state.idUser}}
    p {{$store.state.admin}}
    router-view
</template>


<script>
export default {
  data () {
    return {
      test: 0,
      qweqwe: 0
    }
  },
  methods:{}
}
</script>



<style lang="scss" scoped>
.main{
  width: 100%;
  height: 100%;
}
.svg{
  width: 100%;
  height: 100%;
  display: block;
  background-color: rgb(0, 0, 0);
}
.nav{
  width: 100%;
  height: 50px;
  display: flex;
}

.link{
  display: block;
  width: 150px;
  height: 35px;
  border-left: solid 1px #000;
  border-right: solid 1px #000;
  border-bottom: solid 1px #000;
  border-radius: 0 0 8px 8px;
  text-decoration: none;
  color: #000;
  text-align: center;
  line-height: 35px;
  font-size: 14px;
}
.router-link-active{
  height: 45px;
  line-height: 45px;
  color: red;
  border-left: solid 1px red;
  border-right: solid 1px red;
  border-bottom: solid 1px red;
}
</style>


