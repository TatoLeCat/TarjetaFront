<template>
    <div id="app">
        <h1 class="title">NUEVA SOLICITUD</h1>
        <form>
          <h2 class="title">Datos Laborales</h2>
        <div class="form-group">
          <label for="Cargo"> Cargo</label>
          <input type="text" id="cargo" v-model="cargo" placeholder="Cargo">
        </div>
        
        <div class="form-group input-group mb-3">
        <label for="Ingreso">Ingreso</label>
          <span class="input-group-text">L</span>
          <input type="text" class="form-control" v-model="ingreso">
            <span class="input-group-text">.00</span>
        </div>

        <div class="form-group">
          <label for="Cargo"> Lugar de Trabajo</label>
          <input type="text" id="LugarTrabajo" v-model="lugarTrabajo" placeholder="Lugar de Trabajo">
        </div>

        <div class="form-group">
          <label for="fechaIngreso">Fecha de Ingreso</label>
          <input type="date" v-model="fechaIngreso" />
        </div>

      

        <!--v-for tipoProducto-->
        <div class="form-group">
        <label for="TipoProducto">Tipo Producto</label>
          <select id="TipoProducto" class="form-select" v-model="tipoProducto">
          <option selected>Seleccione uno</option>
          <option value="bb">bb</option>
          </select>
        </div>

        <h2 class="title">Referencia</h2>
        <div class="form-group">
          <label for="PrimerNombre"> Primer Nombre</label>
          <input type="text" id="PrimerNombre" v-model="primerNombre" placeholder="Primer Nombre">
        </div>

        <div class="form-group">
          <label for="PrimerApellido"> Primer Apellido</label>
          <input type="text" id="PrimerApellido" v-model="primerApellido" placeholder="Primer Apellido">
        </div>

        <div class="form-group">
          <label for="TelResi"> Telefono Residencial</label>
          <input type="text" id="TelResi" v-model="telResi" placeholder="Telefono Residencial">
        </div>

        <div class="form-group">
          <label for="TelCel"> Telefono Celular</label>
          <input type="text" id="TelCel" v-model="telCel" placeholder="Telefono Celular">
        </div>

        <div class="form-group">
          <label for="Relacion"> Relacion</label>
          <input type="text" id="Relacion" v-model="relacion" placeholder="Relacion">
        </div>

        <div class="button-group">
          <button type="button" class="btn-submit" @click.prevent="">ENVIAR</button>
        </div>
        </form>
    </div>
</template>
    

<script setup>
    import { ref } from 'vue';

      let cargo = ref ('')
      let ingreso = ref ('')
      let lugarTrabajo = ref ('')
      let fechaIngreso = ref ('')
      let tipoProducto = ref ('')
      let primerNombre = ref ('')
      let primerApellido = ref ('')
      let telResi = ref ('')
      let telCel = ref ('')
      let relacion = ref ('')


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