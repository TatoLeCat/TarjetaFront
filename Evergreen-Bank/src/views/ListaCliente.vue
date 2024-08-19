<template>
    <div>
        <cabezera />
        <div class="row">
            <lateral class="col-4"/>
            <clientes class="col-8" />
        </div> 
    </div>
</template>

<script setup>
import Cabezera from '../components/Cabezera.vue';
import Clientes from '../components/Clientes.vue';
import Lateral from '../components/Lateral.vue';

</script>

<style>

</style>