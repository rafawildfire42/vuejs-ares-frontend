<script setup lang="ts">
import AnimatedCard from '@/vue/components/cards/AnimatedCard.vue'

const services = [
    {
        title: "Cabeamento estruturado",
        text: "Redução de custos de infrastruturas de TI. Organização, eficiência e escalabilidade. Confiabilidade para operações e facilidade de gerenciamento e manutenção.",
        icon: "mdi-lan-connect"
    },
    {
        title: "Instalações Elétricas Residenciais",
        text: "O projeto elétrico residencial é essencial para garantir a segurança, eficiência e economia na utilização da energia elétrica em uma casa.",
        icon: "mdi-home-lightning-bolt"
    },
    {
        title: "Automação residencial",
        text: "Descubra o futuro da casa inteligente com a automação residencial. Conforto, segurança e eficiência ao seu alcance.",
        icon: "mdi-home-automation"
    },
]


</script>

<template>
    <v-container class="my-4 my-md-8">
      <v-responsive class="align-center text-center fill-height">
        <div class="text-h3">
            Temos diversos <span class="gradient-text">projetos realizados</span> em diversos estados do Brasil!
        </div>

        <v-row class="mt-6 mb-10">

            <template v-for="service, index in services" :key="index">
                <v-col cols="12" lg="4">
                    <AnimatedCard v-bind="service" />
                </v-col>
            </template>

        </v-row>
        
      </v-responsive>
    </v-container>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-secondary)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>