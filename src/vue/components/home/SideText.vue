<script setup lang="ts">
import { ref } from 'vue';
import { servicesItems } from '@/utils/data'

</script>

<script lang="ts">
export default {
    name: "SideText"
}
</script>

<template>
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
                :key="item.title">
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
</template>

<style>
.transparent {
  background-color: transparent !important;
  color: rgb(var(--v-theme-background)) !important;
}
</style>