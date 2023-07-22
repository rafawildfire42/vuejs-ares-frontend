<script setup lang="ts">
import NavHeader from '@/vue/layouts/NavHeader.vue'

</script>

<template>
  <v-app>
    <v-main class="main-background">
      <nav-header />
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>

.main-background {
  background-color: #0C0C0D;
}

.v-application {
  display: flex;
  background: transparent;
  color: rgb(var(--v-theme-background));
}

</style>