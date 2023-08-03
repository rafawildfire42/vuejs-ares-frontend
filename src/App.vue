<script setup lang="ts">
import NavHeader from '@/vue/layouts/NavHeader.vue'
import InfoDialog from '@/vue/components/dialogs/InfoDialog.vue';


</script>

<template>
  <v-app>
    <v-main class="main-background content">
      <InfoDialog />
      <nav-header />
      <router-view />
      <v-footer color="transparent">v1.0 - Desenvolvido por Rafael Moraes. Contato (63) 9 9947-4437.</v-footer>
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
}

.v-application {
  display: flex;
  background: transparent;
  color: rgb(var(--v-theme-background));
}

</style>