<template>
  <main class="login">
      <section class="forms">

          <form class="register" @submit.prevent="register">
              <h2>Registro</h2>

              <input type="email" 
                    placeholder="Seu E-mail" 
                    v-model="register_form.email" />
                    
                <input type="password" 
                        placeholder="Senha" 
                        v-model="register_form.password" />
                
                <input class ="submit" type="submit" value="Registrar" />
          </form>
          <form class="login" @submit.prevent="login">
              
              <h2>Login</h2>

              <input type="email" 
                    placeholder="Seu E-mail" 
                    v-model="login_form.email" />
                    
                <input type="password" 
                        placeholder="Senha" 
                        v-model="login_form.password" />
                
                <input class ="submit" type="submit" value="Login" />
              </form>    
            
          
      </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup(){
      const login_form = ref({});
      const register_form = ref({});
      const store = useStore();

      const login = () => {
          store.dispatch('login', login_form.value);
      }
      const register = () => {
          store.dispatch('register', register_form.value);
      }

      return {
        login_form,
        register_form,
        
login,
        register
    }
} }
</script>

<style>
.register{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
    color: white;
}
.login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
   
    color: white;
    padding-top: 40px;
    margin-top:10px;
    
}
input{
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: rgb(32, 30, 30);
    background: #d9e2ec;
}
.submit{
    background: rgb(170, 32, 32);
    color: white;

}
.submit:hover{
    background: rgb(47, 199, 47);
    color: white;
}
h2{
    font-size: 20px;
    margin-bottom: 20px;
}

</style>