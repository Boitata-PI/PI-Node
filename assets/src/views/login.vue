<template>
  <section class="login">
    <div class="login-container">
      <h2>Entrar</h2>
  
      <!-- Formulário de Login -->
      <form>
        <div class="form-group">
          <input class="form-control" placeholder="RM" />
        </div>
        <div class="form-group">
          <input class="form-control" placeholder="Senha" type="password" />
        </div>
        <div class="form-group text-right">
          <router-link to="/registro">Esqueceu sua senha? Contate a adiministração</router-link>
        </div>
        <router-link to="/index" class="btn btn-block">Entrar</router-link>
      </form>
    </div>
  </section>
  </template>
  
  <script>
  export default {
    name: 'LoginView'
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