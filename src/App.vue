<script setup lang="ts">
import NavHeader from '@/vue/layouts/NavHeader.vue'
import MyFooter from '@/vue/layouts/MyFooter.vue'
import InfoDialog from '@/vue/components/dialogs/InfoDialog.vue';

</script>

<template>
  <v-app>
    <v-main class="main-background content">

      <div class="background-image"></div>

      <info-dialog />

      <nav-header />

      <router-view />

      <my-footer />

    </v-main>
  </v-app>
</template>

<style scoped>
.content {
  min-height: calc(100% - 50px); /* Altura do viewport menos a altura do footer */
  /* Outros estilos de formatação do conteúdo aqui */
}

.main-background {
  background-image: linear-gradient(90deg, #030025, #000000);
  position: relative;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/src/assets/home/solar-eolica.jpg');
  background-size: cover;
  background-position: left;
  background-attachment: fixed;
  opacity: 0.13;
}


.v-application {
  display: flex;
  background: transparent;
  color: rgb(var(--v-theme-background));
}

</style>