<script setup lang="ts">
import AresLogo from '@/assets/logos/ares-engenharia.png'
import AresPattern from '@/assets/logos/ares-pattern.png'
import { servicesItems } from '@/utils/data'

</script>

<script lang="ts">
export default {
  name: "Home"
}
</script>

<template>
  <v-container class="body">
    <v-responsive class="align-center text-center body">
      <v-row>
        <v-col cols="12" md="7" class="d-flex align-center">
          <div>
            <div class="text-md-h2 text-h4 font-weight-bold">
              Projetos com segurança e confiança
            </div>
            <div class="text-md-h5 text text-left mt-6">
              <!-- <router-link to="/call-budget" class="text-secondary">Clique aqui</router-link> para solicitar um orçamento conosco. Trabalhamos com os seguintes projetos: -->
              Solicite um orçamento conosco. Trabalhamos com os seguintes projetos:
            </div>
            <v-list lines="one" class="text-left transparent px-0">
              <template 
                v-for="item in servicesItems"
                :key="item.title"
              >
                <v-list-item
                  v-if="item.enabled"
                >
                  <template v-slot:prepend>
                    <v-icon :icon="item.icon" :size="item.iconSize"></v-icon>
                  </template>
                  <div class="text-h6">
                      {{ item.title }}
                  </div>
                </v-list-item>
              </template>
            </v-list>
          </div>
        </v-col>
        <v-col cols="0" md="5" class="d-none d-md-block">
          <div>
            <v-img :src="AresLogo" cover aspect-ratio="16/9" :width="450"/>
          </div>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<style>
.home-container {
  margin-left: 150px;
  margin-right: 150px;
}

.fill-height {
  height: 100vh;
}

.transparent {
  background-color: transparent !important;
  color: rgb(var(--v-theme-background)) !important;
}

</style>
