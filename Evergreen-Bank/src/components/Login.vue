<template>
    <div class="position-absolute top-50 start-50 translate-middle shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div>
            <h2 class="texto">INICIAR SESION</h2>
        </div>
        <div class="input-group mb-3">
            <label for="input" class="form-label">Usuario</label>
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Usuario" aria-label="default input example">
            </div> 
        </div>
        <div class="input-group mb-3">
            <label for="inputPassword5" class="form-label">Contraseña</label>
            <div class="input-group">
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
            </div>
        </div>
        <div class="container mb-3">
            <div class="row">
                <button class="btn btn-success" type="submit">INGRESAR</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.texto {
    text-align: center;
    color: #507E57;
}

</style>