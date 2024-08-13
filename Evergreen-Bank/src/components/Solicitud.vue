<template>
    <div id="app">
        <h1 class="title">{{ title }}</h1>
        <form @submit.prevent="submitForm">

        <div class="form-group">
          <label for="DNI"> DNI Cliente</label>
          <input type="text" id="name" v-model="form.name" placeholder="DNI Cliente">
        </div>
        <!--v-for empleado-->
        <div class="form-group">
        <label for="EstadoCivil">Empleado</label>
          <select id="EstadoCivil" class="form-select">
          <option selected>Seleccione uno</option>
          <option value="aa">aa</option>
          </select>
        </div>

        <!--v-for tipoProducto-->
        <div class="form-group">
        <label for="TipoProducto">Tipo Producto</label>
          <select id="TipoProducto" class="form-select">
          <option selected>Seleccione uno</option>
          <option value="bb">bb</option>
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
        title: "NUEVA SOLICITUD",
        form: {
          DNI: '',
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
  
  input[type="text"]{
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