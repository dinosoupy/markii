<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
  <div class="z-0 mt-16">
    <RouterView />
  </div>
  <Footer />
</template>
