<script setup>
// Importe 'ref' do Vue para utilizar no componente
import { ref } from 'vue';

// Defina a variável para controlar o estado do drawer (caso seja utilizado)
const drawer = ref(false);

const items = ref([
  { title: "Login", icon: "mdi-account" },
])
</script>

<template>
  <v-app-bar elevation="0" color="transparent">
    <!-- Ícone fixado no início -->
    <router-link to="/" class="header-logo">
      <img src="@/assets/ares-logo.svg" class="logo" />
    </router-link>

    <!-- Textos alinhados ao centro -->
    <v-container class="d-flex flex-row justify-space-between">
      <router-link to="/">
        <v-btn variant="text">
          <span class="text-sm text-body-1">
            Solicite um orçamento
          </span>
        </v-btn>
      </router-link>

      <router-link to="/">
        <v-btn variant="text">
          <span class="text-sm text-body-1">
            Contatos
          </span>
        </v-btn>
      </router-link>

      <router-link to="/">
        <v-btn variant="text">
          <span class="text-sm text-body-1">
            Sobre nós
          </span>
        </v-btn>
      </router-link>
    </v-container>

    
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon v-bind="props" />
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>
            <v-icon v-if="item.icon" :icon="item.icon" />
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<style>
.logo {
  height: 50px; 
  margin-left: 16px;
}

.header-logo {
  justify-content: center;
  display: flex;
}

.v-toolbar__content {
  display: flex !important;
  align-items: center;
}

.router-link-active,
.router-link-exact-active {
  color: inherit;
  text-decoration: none;
}
</style>
