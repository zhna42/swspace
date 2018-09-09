<template lang="pug">
  div.main
    div.input-block
      p E-mail {{$store.state.mail}}
      input(v-model="mail")
    div.input-block
      p Пароль 123123123123asdasd
      input(v-model="password")
    div.input-block
      p Повторите пароль
      input
    div(class="btn" @click="reg()") Зарегестрироваться
</template>


<script>
import axios from "axios";

export default {
  data () {
    return {
      mail: "null",
      password: "null"
    }
  },
  methods: {
    reg(){
      axios.post('/graphql',  {
        query: `
          mutation{
            reg(mail: "${this.mail}", password: "${this.password}"){
              mail, id, admin
            }
          }`
      }).then((response) => {
        console.log(response)
        this.$store.commit('setUser', response.data.data.reg)
        this.$router.push('/user')
      })
      .catch(function (error) {
        alert("Что то пошло не так ! Попробуйте за ного. Если вы получаете эту ошибку постоянно свяжитесь с администратором. Код ошибки :001")
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    width: 400px;
    height: 440px;
    border: solid 1px #000;
    border-radius: 8px;
    margin: auto;
  }

  .input-block{
    font-size: 20px;
    width: 80%;
    margin: auto;
    margin-top: 30px;
    >p{
      margin: 0;
      margin-bottom: 5px;
    }
    >input{
      padding: 10px 0 10px 10px;
      font-size: 20px;
      width: 100%;
      border-radius: 8px;
      box-sizing: border-box;
    }
  }

  .btn{
    font-size: 18px;
    border-radius: 40px;
    width: 260px;
    height: 45px;
    border: solid 1px #000;
    text-align: center;
    line-height: 45px;
    margin: 0 auto;
    margin-top: 45px;
    cursor: pointer;
  }

  .link{
    display: block;
    width: 180px;
    font-size: 16px;
    margin: 8px auto;
    color: #000;
  }
</style>
