<template>
  <div class="container">
    <h1 class="title">Bienvenido</h1>
    <p> ¿Eres un?</p>

    <nav>
        <router-link to="/login">Cliente</router-link> |
        <router-link to="/login-personal">Empleado</router-link>
    </nav>

  </div>
</template>

<script setup>

</script>

<style scoped>

  .title {
    margin-top: 50px;
  }

  .container {
     top: 30px;
     left: 70%;
  }

  a {
      font-weight: bold;
      color: #2c3e50;
  }
  
</style>

