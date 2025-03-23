<template>
    <h1>Ingresar</h1>
    
    <br>
    <label for="">Ingrese Correo:</label>
    <input type="email" v-model="credenciales.email"><br>
    {{ errors.email }}
    <br>
    <label for="">Ingrese Contraseña:</label>
    <input type="password" v-model="credenciales.password"><br>
    {{ errors.password }}
    <br>
    <button @click="funIngresar()">Ingresar</button>
    <br>
    {{ credenciales }}
    <br>
    {{ respuesta }}
</template>

<script setup>
import { useRouter } from 'vue-router';
import authservice from '../../services/auth.service.js';
import { ref } from 'vue';

const credenciales = ref({email: "", password: ""});
const respuesta = ref();
const errors = ref({});

const router = useRouter()

async function funIngresar(){
    try{
        const res = await authservice.login(credenciales.value);
        respuesta.value = res.data

        localStorage.setItem("access_token", res.data.access_token);

        // redireccionar
        router.push({name: 'MiPerfil'});
    } catch (error){
        console.log(error.response?.data.errors);
        errors.value = error.response?.data.errors;
    }
}
</script>
