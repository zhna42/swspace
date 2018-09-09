<template lang="pug">
  div(id="app")
    nav(class="nav" v-if="!$store.state.mail")
      router-link(class="link" to="/aut") Вход
      router-link(class="link" to="/reg") Регистрация
    router-view
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      open: true
    }
  },
  /*beforeMount: function(){
    axios.post('/graphql',  {
        query: `
          mutation{
            autCookies{
              update, mail, id,
            }
          }`
      }).then((response) => {
        console.log(response.data.data)
        if(response.data.data.autCookies.update){
          this.$store.commit('setUser', response.data.data.autCookies);
          console.log(this.$route.fullPath)
          if(this.$route.fullPath == "/reg" || this.$route.fullPath == "/aut" || this.$route.fullPath == "/") this.$router.push('/user');
        }else{
          this.$router.push('/aut');
        }
      })
      .catch((error) => {
        this.$router.push('/aut');
      });
  }*/
  /*asyncData ({ store }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("result");
      }, 1000);
    });
  }*/
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  html,body{
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
  }
  #app{
    width: 100%;
    height: 100%;
    display: flex;
  }
</style>


<style lang="scss" scoped>
  .nav{
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
  }

  .link{
    display: block;
    width: 200px;
    height: 35px;
    border-left: solid 1px #000;
    border-right: solid 1px #000;
    border-bottom: solid 1px #000;
    border-radius: 0 0 8px 8px;
    text-decoration: none;
    color: #000;
    text-align: center;
    line-height: 35px;
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
