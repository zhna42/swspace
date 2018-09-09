<template lang="pug">
  div(class="main") 
    h1 Вы зашли как админ
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      open: true
    }
  },
  asyncData ({ store , route}) {
    return new Promise((resolve, reject) => {
      if(store.state.admin) route.push('/user');
      resolve(1)
    });
  }
}
</script>