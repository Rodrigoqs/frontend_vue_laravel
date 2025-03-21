<template>
    <h1>Ingresar</h1>
    <label for="">Ingrese Correo:</label>
    <input type="email" v-model="credenciales.email">
    <br>
    <label for="">Ingrese Contraseña:</label>
    <input type="password" v-model="credenciales.password">
    <br>
    <button @click="funIngresar()">Ingresar</button>
    <br>
    {{ credenciales }}
    <br>
    {{ respuesta }}
</template>

<script setup>
import authservice from '../../services/auth.service.js';
import { ref } from 'vue';

const credenciales = ref({email: "", password: ""});
const respuesta = ref();

async function funIngresar(){
    const { data } = await authservice.login(credenciales.value);
    
    respuesta.value = data
}
</script>
