<template>
  <div>
    <h1 class="title">NUEVA TRANSACCION</h1>
    <form>
        <div class="form-group">
          <label for="Concepto"> Concepto</label>
          <input type="text" id="Concepto" v-model="concepto" placeholder="Concepto">
        </div>

        <div class="form-group">
          <label for="Monto"> Monto</label>
          <input type="number" id="Monto" v-model="monto" placeholder="Monto">
        </div>

        <div class="form-group">
        <label for="Moneda">Moneda</label>
          <select id="Moneda" class="form-select" v-model="moneda">
          <option selected>none</option>
          <option value="Casado">Casado</option>
          </select>
        </div>

        <div class="button-group">
          <button type="button" class="btn-submit" @click.prevent="">GUARDAR</button>
        </div>
    </form>
    
  </div>
</template>

<script setup>
    import { ref } from 'vue';
        let concepto = ref ('')
        let monto = ref (0)
        let moneda = ref ('')
</script>

<style scoped>
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
  input[type="number"] {
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