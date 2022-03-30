<template>
 <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About </router-link>|
    <button @click="$store.dispatch('logout')">Logout</button>
    
  </div>
  <router-view />
</template>
<script>
import { onBeforeMount } from 'vue'
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
   
  }
  
}
</script>
<style lang="scss">
*{
 
  margin: 0;
  padding:0;
  box-sizing: border-box;
  }
body{
  background-color: #113133;


  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}

a{
  color: aliceblue;
}
a:hover{
  color: rgb(25, 192, 100);
}
button{
  background-color: rgb(25, 192, 100);
  border: none;
  color: white;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;

}
button:hover{
  background-color: rgb(172, 40, 40);
}

</style>
