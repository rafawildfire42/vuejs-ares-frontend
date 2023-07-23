<script setup lang="ts">
import Home from '@/vue/views/home/Home.vue'
import HomePortfolio from '@/vue/views/home/HomePortfolio.vue'

import ProjectsExamples from "@/vue/components/services/ProjectsExamples.vue"
import Gradient from '@/assets/hero-gradient.svg'

</script>

<template>
  <div class="pt-md-16 pt-4">
    <v-container>

      <img :src="Gradient" class="gradient-image" />

      <v-responsive class="align-center text-center">

        <home class="mb-10" />

        <home-portfolio />

        <projects-examples />

      </v-responsive>
      
    </v-container>
  </div>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>