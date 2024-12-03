<template>
  <section class="login">
    <div class="login-container">
      <h2>Entrar</h2>
  
      <!-- Formulário de Login -->
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input class="form-control" placeholder="RA" v-model="formData.ra" />
        </div>
        <div class="form-group">
          <input class="form-control" placeholder="Senha" type="password" v-model="formData.senha" />
        </div>
        <div class="form-group text-right">
          <router-link to="/registro">Esqueceu sua senha? Contate a adiministração</router-link>
        </div>
        <button type="submit" to="/index" class="btn btn-block">Entrar</button>
      </form>
    </div>
  </section>
  </template>
  
  <script>

  import { login, checkAuthLogin } from "../js/requisitions/auth.js";

  export default {
    name: 'LoginView',
    data() {
      return {
        formData: {
          ra: "",
          senha: "",
        },
      };
    },
    methods: {
      async handleLogin() {
        try {
          await login(this.formData.ra, this.formData.senha, this.$router);
        } catch (error) {
          console.error("Erro ao tentar logar:", error);
          alert("Erro ao tentar logar. Verifique os dados e tente novamente.");
        }
      },

      async handleCheck() {
        const status = await checkAuthLogin(this.$router);
        if (status == '200') {
          window.location.href = "/index"
        }
      },
    },
    async mounted(){

      this.handleCheck()

    }
  };
  </script>
  
  <style scoped>
  .login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #ffffff;
  }
  .login-container {
  padding: 100px;
  text-align: center;
  }
  .login-container h2 {
  margin-bottom: 30px;
  font-size: 24px;
  color: #6c757d;
  font-weight: bold;
  }
  .form-control {
  border-radius: 10px;
  }
  .btn {
  background-color: #09332F;
  color: #fff;
  border-radius: 20px;
  padding: 10px;
  }
  
  .btn:hover {
  background-color: #155c55;
  }
  .form-group a {
  font-size: 14px;
  text-decoration: none;
  }
  .form-group a:hover {
  text-decoration: underline;
  }
  </style>