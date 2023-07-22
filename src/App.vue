<script setup lang="ts">
import NavHeader from '@/vue/layouts/NavHeader.vue'

</script>

<template>
  <v-app>
    <v-main>
      <nav-header />
      <router-view />
    </v-main>
  </v-app>
</template>