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

<script lang="ts">
export default {
  name: "HomeCards"
}
</script>

<template>
	<v-container class="portfolio-bg align-center" fluid>
    <v-responsive class="align-center text-center justify-center">

      <v-row class="mt-6 mb-10" justify="center">
        <template v-for="service, index in services" :key="index">
          <v-col cols="12" lg="3">
              <AnimatedCard v-bind="service" />
          </v-col>
        </template>
      </v-row>

		</v-responsive>
	</v-container>
</template>

<style scoped>

.portfolio-bg {
  background-color: rgb(var(--v-theme-ares-grey))
}

</style>
