<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
    {title: "Instalações Elétricas Residenciais", icon: "mdi-icon"}
])

</script>

<template>
    <div>
        <div class="text-h2 font-weight-bold">
            Projetos com segurança e confiança
        </div>
        <div class="text-h5 text-left mt-6">
            Solicite um orçamento conosco. Trabalhamos com os seguintes projetos:
        </div>
        <v-list lines="one" class="text-left transparent">
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :title="item.title"
                subtitle="..."
                :prepend-avatar="item.icon"
            >
                <template #title>
                    <div class="text-h5">
                        teste
                    </div>
                </template>
        </v-list-item>
        </v-list>
    </div>
</template>

<style>
.transparent {
  /* Definindo a classe "transparent" com fundo transparente */
  background-color: transparent !important;
  color: white;
}
</style>