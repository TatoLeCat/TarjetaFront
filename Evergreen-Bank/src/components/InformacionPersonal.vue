<template>
    <div id="app">
      <h1 class="title">{{ title }}</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="PrimerNombre"> Primer Nombre</label>
          <input type="text" id="PrimerNombre" v-model="primerNombre" placeholder="Primer Nombre">
        </div>
  
        <div class="form-group">
          <label for="SegundoNombre">Segundo Nombre</label>
          <input type="text" id="segundoNombre" v-model="segundoNombre" placeholder="Segundo Nombre">
        </div>
  
        <div class="form-group">
          <label for="primerApellido">Primer Apellido</label>
          <input type="tel" id="PrimerApellido" v-model="primerApellido" placeholder="Primer Apellido">
        </div>
  
        <div class="form-group">
          <label for="segundoApellido">Segundo Apellido</label>
          <input type="text" id="SegundoApellido" v-model="segundoApellido" placeholder="Segundo Apellido">
        </div>
  
        <div class="form-group">
          <label for="DNI">Numero Identidad </label>
          <input type="text" id="DNI" v-model="dni" placeholder="Numero Identidad">
        </div>
  
        <div class="form-group">
          <label for="Telefono">Telefono </label>
          <input type="text" id="Telefono" v-model="telHogar" placeholder="Telefono Celular">
        </div>

        <div class="form-group">
          <label for="Celular">Celular </label>
          <input type="text" id="Celular" v-model="telCel" placeholder="Celular">
        </div>

        <div class="form-group">
          <label for="Genero">Género</label>
          <select id="genero" class="form-select" v-model="genero">
          <option selected>none</option>
          <option value="Casado">Casado</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="email">Correo Electronico</label>
          <input type="email" id="email" name="email" placeholder="Correo Electronico" required v-model="correo">
        </div>
        <!--v-for:5-->
        <div class="form-group">
        <label for="EstadoCivil">Estado Civil</label>
          <select id="EstadoCivil" class="form-select" v-model="estadoCivil">
          <option selected>none</option>
          <option value="Casado">Casado</option>
          </select>
        </div>

        <!--v-for:5-->
        <div class="form-group">
        <label for="Ciudad">Ciudad</label>
          <select id="Ciudad" class="form-select" v-model="ciudad">
          <option selected>none</option>
          <option value="a">a</option>
          </select>
        </div>

        <div class="button-group">
          <button type="button" class="btn-submit">GUARDAR</button>
        </div>

      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
    let primerNombre = ref ('')
    let segundoNombre = ref ('')
    let primerApellido = ref ('')
    let segundoApellido = ref ('')
    let dni = ref ('')
    let telHogar = ref ('')
    let telCel = ref ('')
    let correo = ref ('')
    let genero = ref ('')
    let estadoCivil = ref ('')
    let ciudad = ref ('')

  </script>
  
  
  
  <style scoped>
  
  #app {
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
   
  }

  .title {
    margin-top: 50px;
  }
  
  form {
    max-width: 400px;
    margin: 0 auto;
    text-align: left;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="tel"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  
  .button-group {
    display: flex;
    bottom: 10px;
    justify-content: space-between;
    gap: 10px;
  }
  
  .form-select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .btn-submit {
    width: 100%;
    padding: 10px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .btn-submit:hover {
    background-color: #1a242f;
  }
  </style>