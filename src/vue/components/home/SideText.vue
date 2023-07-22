<script setup lang="ts">
import { ref } from 'vue';
import { servicesItems } from '@/utils/data'

</script>

<template>
    <div>
        <div class="text-h2 font-weight-bold">
            Projetos com segurança e confiança
        </div>
        <div class="text-h5 text-left mt-6">
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
                <template #title>
                    <div class="text-h6">
                        {{ item.title }}
                    </div>
                </template>
        </v-list-item>
    </template>
        </v-list>
    </div>
</template>

<style>
.transparent {
  /* Definindo a classe "transparent" com fundo transparente */
  background-color: transparent !important;
  color: white;
}
</style>@/utils/data