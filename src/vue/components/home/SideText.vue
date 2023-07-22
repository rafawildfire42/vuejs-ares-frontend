<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
    {title: "Instalações Elétricas Residenciais", icon: "mdi-home-lightning-bolt", iconSize: "x-large"},
    {title: "Infraestrutura de Cabeamento Estruturado", icon: "mdi-lan-connect", iconSize: "x-large"},
    {title: "Automação Residencial", icon: "mdi-home-automation", iconSize: "x-large"},
    {title: "SPDA", icon: "mdi-fence-electric", iconSize: "x-large"},
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
        <v-list lines="one" class="text-left transparent px-0">
            <v-list-item
                v-for="item in items"
                :key="item.title"
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