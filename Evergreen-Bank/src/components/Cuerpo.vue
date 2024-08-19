<template>
  <div>
    <div class="container-fluid">
        <img class="promocionImg" src="./icons/promocion.jpg" alt="promocion" />
    </div>
    <div class="text">SOLICITA TU TARGETA DE CREDITO AHORA</div>
    <div class="container position-relative">
        <div class="row">
    	 <div class="col">
            <div class="card container-fluid">
                <img src="./icons/paraguas.png" class="card-img-top object-fit-fill border rounded" alt="paraguas">
                <div class="card-body">
                 <router-link to="/solicitud" class="card-text">Nueva Solicitud</router-link>
                 
             </div>
            </div>
         </div>
         <div class="col">
            <div class="card container-fluid">
                <img src="./icons/precio.png" class="card-img-top ard-img-top object-fit-fill border rounded" alt="precio" >
                <div class="card-body">
                 <p class="card-text">Tarjeta de Credito</p>
             </div>
            </div> 
         </div>
         <div class="col">
            <div class="card container-fluid">
                <img src="./icons/servicios.png" class="card-img-top ard-img-top object-fit-fill border rounded" alt="servicios" >
                <div class="card-body">
                 <p class="card-text">Remesas</p>
             </div>
            </div> 
         </div>
     </div>


    </div>
  </div>
</template>

<script setup>
import router from '@/router';


</script>

<style scoped>
.text {
    position: relative;
    top: 13px;
    font-size: 24px;
    color: #169E34;
    text-align: center;
}
.promocionImg {
    width: 1500px;
    height: 350px;
    object-fit: cover;
}
.card {
    top: 30px;
    width: 170px;
    height: 220px;
    object-position: 50% 50%;
}


</style>