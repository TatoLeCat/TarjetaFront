<template>
    <div id="app">
      <h1 class="title">{{ title }}</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="primer nombre"> Primer Nombre</label>
          <input type="text" id="name" v-model="form.name" placeholder="Primer Nombre">
        </div>
  
        <div class="form-group">
          <label for="segundo nombre">Segundo Nombre</label>
          <input type="text" id="segundo nombre" v-model="form.name" placeholder="Segundo Nombre">
        </div>
  
        <div class="form-group">
          <label for="primer apellido">Primer Apellido</label>
          <input type="tel" id="phone" v-model="form.phone" placeholder="Primer Apellido">
        </div>
  
        <div class="form-group">
          <label for="segundo apellido">Segundo Apellido</label>
          <input type="text" id="address" v-model="form.address" placeholder="Segundo Apellido">
        </div>
  
        <div class="form-group">
          <label for="DNI">Numero Identidad </label>
          <input type="text" id="address" v-model="form.address" placeholder="Numero Identidad">
        </div>
  
        <div class="form-group">
          <label for="DNI">Telefono </label>
          <input type="text" id="address" v-model="form.address" placeholder="Telefono">
        </div>

        <div class="form-group">
          <label for="DNI">Celular </label>
          <input type="text" id="address" v-model="form.address" placeholder="Celular">
        </div>

        <div class="form-group">
          <label for="GENERO">Género</label> <br>
          <div style="display: flex; align-items: center;">
            <input type="radio" id="MASCULINO" name="genero" value="masculino">
            <label for="MASCULINO" style="margin-right: 20px;">Masculino</label>
  
            <input type="radio" id="FEMENINO" name="genero" value="femenino">
            <label for="FEMENINO">Femenino</label>
          </div>
        </div>
  
        <div class="form-group">
          <label for="email">Correo Electronico</label> <br>
          <input type="email" id="email" name="email" placeholder="Correo Electronico" required>
        </div>
        <!--v-for:5-->
        <div class="form-group">
        <label for="EstadoCivil">Estado Civil</label>
          <select id="EstadoCivil" class="form-select">
          <option selected>none</option>
          <option value="Casado">Casado</option>
          </select>
        </div>

        <!--v-for:5-->
        <div class="form-group">
        <label for="Ciudad">Ciudad</label>
          <select id="Ciudad" class="form-select">
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
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        title: "DATOS PERSONALES CLIENTE",
        form: {
          name: '',
          email: '',
          phone: '',
          address: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission (e.g., validation, sending data to a server)
       console.log("Form submitted:", this.form);
      }
    }
  }
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