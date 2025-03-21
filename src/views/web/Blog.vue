
<template>
    <hr>
    <button @click="obtenerPublicaciones()">Obtener Datos</button>
    <br>
    <table border="1">
      <thead>
        <tr>
          <th>Nro</th>
          <th>ID</th>
          <th>TITULO</th>
          <th>DESCRIPCION</th>
          <th>IMAGEN</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="(publi, index) in publicaciones" :key="publi.id">
          <td>{{ index+1 }}</td>
          <td>{{ publi.id }}</td>
          <td>{{ publi.title }}</td>
          <td>{{ publi.description }}</td>
          <td>
            <img :src="publi.cover_image" alt="" width="200">
          </td>
        </tr>
      </tbody>
    </table>
    {{ publicaciones }}
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  import { RouterLink } from 'vue-router';
  
  // convietiendo en compossion con setup
    //variable
    const publicaciones = ref([])
    //onMounted     --
    onMounted(()=>{
      //obtenerPublicaciones()
    });
  
    //funciones
    function obtenerPublicaciones(){
      fetch('https://dev.to/api/articles')
        .then(response => response.json())
        .then(json => {
          publicaciones.value = json
        })
    }
  </script>
  
  <style >
  </style>
  