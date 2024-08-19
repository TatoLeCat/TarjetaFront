<template>
  <div>
    <nav class="nav  flex-column position-absolute  start-0">
    <router-link to="/register" class="btn">Registrar Cliente</router-link>
    <router-link to="/clientes" class="btn">Clientes</router-link>
    <router-link to="/" class="btn">Cerrar Sesion</router-link>
    </nav>
  </div>
</template>

<script setup>

</script>

<style scoped>
.nav{
 background-color: #198754;
 text-align: center;
height: 1000px;
width: 180px;
}
.btn{
  color: white;
}
</style>