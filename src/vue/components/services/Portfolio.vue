<script setup lang="ts">
import IPEMED from '@/assets/projects/portfolio/IPEMED.jpg'
import ITPAC from '@/assets/projects/portfolio/ITPAC.jpeg'

</script>

<script lang="ts">
export default {
    name: "Portfolio"
}
</script>

<template>
  <v-container>
    <v-responsive class="align-center">
      <section>

        <div class="text-md-h3 text-h5 text-center pt-6">
          Temos experiência com <span class="gradient-text">projetos realizados</span> em diversos estados do Brasil!
        </div>

        <v-divider class="my-6"/>

        <v-row>

          <v-col cols="12" md="6" class="d-flex justify-center flex-column">
            <span class="text-md-h3 text-h6 mb-4">
                IPEMED
            </span>
            <span class="mb-4">
              <v-icon icon="mdi-office-building" /> 1900 m²
            </span>
            <span class="text-subtitle-1">
              Projetos de infraestrutura de cabeamento estruturado e elétrico para unidades de grandes dimensões é indispensável!
            </span>
          </v-col>

          <v-col cols="12" md="6">
            <v-img :src="IPEMED">
              <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                  />
                </div>
              </template>
            </v-img>
          </v-col>

        </v-row>

        <v-divider class="my-6"/>
          
        <v-row>

          <v-col cols="12" md="6" class="order-md-first order-last">
            <v-img :src="ITPAC">
              <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                  />
                </div>
              </template>
            </v-img>
          </v-col>

          <v-col cols="12" md="6" class="d-flex justify-center flex-column">
            <span class="text-md-h3 text-h6 mb-4">
                ITPAC
            </span>
            <span class="mb-4">
              <v-icon icon="mdi-office-building" /> 402 m²
            </span>
            <span class="text-subtitle-1">
              A implementação de projetos é fundamental para unidades grandes. Ela melhora a eficiência, otimiza recursos, promove a colaboração entre departamentos, 
              identifica problemas e impulsiona o crescimento. Projetos bem estruturados são essenciais para o sucesso e a adaptação contínua da organização.
            </span>
          </v-col>

        </v-row>

        <v-divider class="my-6"/>

      </section>
		</v-responsive>
	</v-container>    
</template>

<style scoped>

</style>