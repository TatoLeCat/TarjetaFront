<template>
    <div id="app">
      <cabezera />
      <h1 class="title">{{ title }}</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="primer nombre"> PRIMER NOMBRE CLIENTE</label>
          <input type="text" id="name" v-model="form.name" placeholder="INGRESE PRIMER NOMBRE">
        </div>
  
        <div class="form-group">
          <label for="segundo nombre">SGUNDO NOMBRE CLIENTE </label>
          <input type="text" id="segundo nombre" v-model="form.name" placeholder="INGRESE SEGUNDO NOMBRE">
        </div>
  
        <div class="form-group">
          <label for="primer apellido">PRIMER APELLIDO</label>
          <input type="tel" id="phone" v-model="form.phone" placeholder="INGRESE PRIMER APELLIDO">
        </div>
  
        <div class="form-group">
          <label for="segundo apellido">SEGUNDO APELLIDO</label>
          <input type="text" id="address" v-model="form.address" placeholder="INGRESE SEGUNDO APELLIDO">
        </div>
  
        <div class="form-group">
          <label for="DNI">NUMERO IDENTIDAD </label>
          <input type="text" id="address" v-model="form.address" placeholder="INGRESE NUMERO IDENTIDAD">
        </div>
  
        <div class="form-group">
          <label for="GENERO">GÉNERO</label> <br>
          <div style="display: flex; align-items: center;">
            <input type="radio" id="MASCULINO" name="genero" value="masculino">
            <label for="MASCULINO" style="margin-right: 20px;">Masculino</label>
  
            <input type="radio" id="FEMENINO" name="genero" value="femenino">
            <label for="FEMENINO">Femenino</label>
          </div>
        </div>
  
        <div class="form-group">
          <label for="email">Email Address</label> <br>
          <input type="email" id="email" name="email" placeholder="INGRESE CORREO ELECTRONICO" required>
        </div>
  
        <div class="button-group">
          <button type="submit" class="btn-submit">IR ATRAS</button>
          <button type="button" class="btn-submit">SIGUIENTE</button>
        </div>
  
      </form>
    </div>
  </template>
  
  <script>
import Cabezera from './Cabezera.vue';
  export default {
  components: { Cabezera },
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
  
  
  
  <style>
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
   
  }

  .title {
    margin-top: 50px;
  }
  
  .logo {
    max-width: 100%;
    height: auto;
    max-height: 200px;
    /* Adjusted height */
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  form {
    max-width: 400px;
    margin: 0 auto;
    /* Center the form */
    text-align: left;
    /* Align text and inputs to the left */
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
  
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  
  .btn-submit {
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
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