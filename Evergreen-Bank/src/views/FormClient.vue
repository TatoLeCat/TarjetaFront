<template>
  <div>
    <cabezera />
    <div class="col-4"> <BarraLateral /> </div>
    <div class="col-8"> <InformacionPersonal /> </div>
    
   
  </div>
</template>

<script setup>
import Cabezera from '../components/Cabezera.vue';
import BarraLateral from '../components/Lateral.vue'
import InformacionPersonal from '../components/InformacionPersonal.vue';

</script>

<style>

</style>