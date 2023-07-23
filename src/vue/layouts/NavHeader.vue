<script setup lang="ts">
// Importe 'ref' do Vue para utilizar no componente
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Gradient from '@/assets/hero-gradient.svg'
import { callWhatsApp } from '@/utils/functions'

// Defina a variável para controlar o estado do drawer (caso seja utilizado)
const drawer = ref(false);
const route = useRoute()
const router = useRouter()

router.beforeEach((to, from) => {

})

const items = ref([
  { title: "Login", icon: "mdi-account" },
])


function isRouteActive(route: any) {
  const currentRoute = useRoute();
  return currentRoute.path === route;
}

</script>

<template>
  <v-app-bar elevation="0" color="transparent" scroll-behavior="fade-image elevate inverted" scroll-threshold="1" :image="Gradient">
    <!-- Ícone fixado no início -->
    <router-link to="/" class="header-logo">
      <img src="@/assets/ares-logo.svg" class="logo" />
    </router-link>

    <!-- Textos alinhados ao centro -->
    <v-container class="d-flex flex-row justify-md-space-between justify-end">
<!-- 
      <router-link to="/call-budget" class="d-md-block d-none">
        <v-btn variant="text">
          <span :class="{ 'active-button': isRouteActive('/orcamento'), 'text-primary': !isRouteActive('/orcamento')}" class="text-body-1">
            Solicite um orçamento
          </span>
        </v-btn>
      </router-link> -->

      <v-btn variant="text" @click="callWhatsApp()">
        <span :class="{ 'active-button': isRouteActive('/orcamento'), 'text-primary': !isRouteActive('/orcamento')}" class="text-body-1">
          Solicite um orçamento
        </span>
      </v-btn>

      <!-- <router-link to="/contacts">
        <v-btn variant="text">
          <span class="text-body-1 text-primary">
            Contatos
          </span>
        </v-btn>
      </router-link> -->

      <router-link to="/about-us" class="d-md-block d-none">
        <v-btn variant="text">
          <span class="text-body-1 text-primary">
            Sobre nós
          </span>
        </v-btn>
      </router-link>

      <v-btn variant="outlined" style="color: #25D366"  @click="callWhatsApp()">
        <v-icon icon="mdi-whatsapp" class="pr-2 pt-1" /> (63) 9 9947-4437
      </v-btn>

    </v-container>

    
    <!-- <v-menu>
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
    </v-menu> -->

  </v-app-bar>
</template>

<style>
.logo {
  height: 80px; 
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
  color: blue;
  text-decoration: none;
}

.active-button {
  color: blue; /* Ou a cor desejada para o botão ativo */
  text-decoration: none;
}

</style>
