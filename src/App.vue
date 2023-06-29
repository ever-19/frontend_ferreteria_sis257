<script setup lang="ts">
import 'bootstrap/dist/js/bootstrap.bundle';
import "./vendor/jquery/jquery.min.js"
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView />
  </main>
  <Footer />
</template>

<style>
@import "./vendor/bootstrap/css/bootstrap.min.css";
@import "./assets/css/fontawesome.css";
@import "./assets/css/templatemo-sixteen.css";
@import "./assets/css/owl.css";
</style>

