<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Gradient from '@/assets/svg/nav-header.svg'
import { callWhatsApp } from '@/utils/functions'

const router = useRouter()

router.beforeEach((to, from) => {

})

function goToAboutUs() {
  router.push("/about-us")
}

const items = ref([
  { title: "Sobre nós", icon: "mdi-account-group", action: goToAboutUs},
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
    <v-container class="d-flex flex-row justify-md-space-evenly justify-end">
    
      <router-link to="/sobre-nos" class="d-md-block d-none">
        <v-btn variant="tonal">
          <span :class="{ 'active-button': isRouteActive('/sobre-nos'), 'text-primary': !isRouteActive('/sobre-nos')}" class="text-body-1">
            Sobre nós
          </span>
        </v-btn>
      </router-link>
      
      <router-link to="/orcamento" class="d-md-block d-none">
        <v-btn variant="outlined" color="secondary">
          <span :class="{ 'active-button': isRouteActive('/orcamento'), 'text-primary': !isRouteActive('/orcamento')}" class="text-body-1">
            Solicite um orçamento
          </span>
        </v-btn>
      </router-link>

      <router-link to="/cursos">
        <v-btn variant="tonal" class="text-body-1">
          <span :class="{ 'active-button': isRouteActive('/cursos'), 'text-primary': !isRouteActive('/cursos')}" >
            Cursos
          </span>
        </v-btn>
      </router-link>

      <!-- 
      <v-btn variant="outlined" style="color: #25D366"  @click="callWhatsApp()" class="d-md-block d-none">
        <v-icon icon="mdi-whatsapp" class="pr-2 pt-1" /> (63) 9 9947-4437
      </v-btn> -->

    </v-container>
    <!-- d-md-none d-block -->
    <div class=""> 
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon v-bind="props" />
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            width="160"
          >
            <v-list-item-title @click="item.action">
              <v-icon v-if="item.icon" :icon="item.icon" />
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

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
  color: rgb(var(--v-theme-secondary)); /* Ou a cor desejada para o botão ativo */
  text-decoration: none;
}

</style>
