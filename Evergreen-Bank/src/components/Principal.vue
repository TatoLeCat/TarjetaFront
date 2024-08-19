<template>
  <div class="container">
    <h1 class="title">Bienvenido</h1>
    <p> ¿Eres un?</p>

    <div class="button-group">
        <router-link to="/login">Cliente</router-link>|
        <router-link to="/loginPersonal">Empleado</router-link>
    </div>

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
</style>

