<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <main class="pt-28 container mx-auto">
    <RouterView />
  </main>
</template>