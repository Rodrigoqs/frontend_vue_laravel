<template>
  <h1>App.vue</h1>
  <RouterLink to="/">Inicio</RouterLink> |
  <RouterLink to="/nosotros">Nosotros</RouterLink>|
  <RouterLink to="/servicios">Servicios</RouterLink>|
  <RouterLink to="/blog">Blog</RouterLink>|
  <RouterLink to="/auth/login">Ingresar</RouterLink>
  <br>
  <router-view></router-view>
  
</template>