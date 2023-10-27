<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Gradient from '@/assets/svg/nav-header.svg'
import { callWhatsApp } from '@/utils/functions'

const router = useRouter()

router.beforeEach((to, from) => {

})

function goToAboutUs() {
  router.push("/sobre-nos")
}

function goToCourses() {
  router.push("/cursos")
}

const items = ref([
  { title: "Sobre nós", icon: "mdi-account-group", action: goToAboutUs, onlyInMobile: true},
  { title: "Cursos", icon: "mdi-human-male-board-poll", action: goToCourses, onlyInMobile: true},
  { title: "WhatsApp", icon: "mdi-whatsapp", action: callWhatsApp, onlyInMobile: false},
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
    <template v-slot:append>

      <!-- <router-link to="/orcamento" class="mr-md-8"> -->
        <v-btn variant="tonal" color="primary" rounded @click="callWhatsApp" class="mr-md-8">
          <!-- <span :class="{ 'active-button': isRouteActive('/orcamento'), 'text-primary': !isRouteActive('/orcamento')}"> -->
            Solicite um orçamento
          <!-- </span> -->
        </v-btn>
      <!-- </router-link> -->

      <router-link to="/sobre-nos" class="d-md-block d-none mr-8">
        <v-btn variant="tonal" color="primary" rounded>
          <span :class="{ 'active-button': isRouteActive('/sobre-nos'), 'text-primary': !isRouteActive('/sobre-nos')}" class="text-body-1">
            Sobre nós
          </span>
        </v-btn>
      </router-link>

      <router-link to="/cursos" class="d-md-block d-none mr-8">
        <v-btn variant="tonal" class="text-body-1" color="primary" rounded>
          <span :class="{ 'active-button': isRouteActive('/cursos'), 'text-primary': !isRouteActive('/cursos')}" >
            Cursos
          </span>
        </v-btn>
      </router-link>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon v-bind="props" />
        </template>

        <v-list>
          <template v-for="(item, index) in items" :key="index">
            <v-list-item
              :value="index"
              width="200"
              :class="{ 'd-md-none d-block': item.onlyInMobile }"
            >
              <v-list-item-title @click="item.action">
                <v-icon v-if="item.icon" :icon="item.icon" />
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </template>
        </v-list>

      </v-menu>
    </template>

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
