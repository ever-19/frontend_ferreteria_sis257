<script setup lang="ts">
import "@/vendor/jquery/jquery.min.js"
import "@/assets/js/custom.js"
import "@/assets/js/owl.js"
import "@/assets/js/slick.js"
import "@/assets/js/isotope.js"
import "@/assets/js/accordions.js"
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>

<style>
@import "@/vendor/bootstrap/css/bootstrap.min.css";
@import "@/assets/css/fontawesome.css";
@import "assets/css/templatemo-sixteen.css";
@import "@/assets/css/owl.css";
</style>

