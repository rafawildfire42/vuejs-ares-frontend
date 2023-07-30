<script setup lang="ts">
import Home from '@/vue/views/home/Home.vue'
import HomePortfolio from '@/vue/views/home/HomePortfolio.vue'
import ProjectsExamples from "@/vue/components/services/ProjectsExamples.vue"
import Gradient from '@/assets/hero-gradient.svg'

</script>

<template>
  <div class="pt-md-16 pt-4">

    <!-- <img :src="Gradient" class="gradient-image" /> -->

    <home class="mb-10" />

    <home-portfolio />

    <projects-examples />
      
  </div>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-image {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
}

</style>