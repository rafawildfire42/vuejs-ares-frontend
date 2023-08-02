<script setup lang="ts">
import ChaletProject from '@/assets/projects/cad/projeto-chale.png'
import Automation from '@/assets/projects/cad/automacao-residencial.png'

</script>

<script lang="ts">
export default {
    name: "ProjectsExamples"
}
</script>

<template>
  <v-container>
    <v-responsive class="align-center text-center">
      <section>
        <div class="text-md-h3 text-h6 text-secondary">
          Por que nos contratar?
        </div>
        
        <v-divider class="my-6"/>

        <v-row>

          <v-col cols="12" md="6" class="d-flex align-center text-center">
            <span class="text-md-h4 text-h6">
                Nos preocupamos com a legibilidade do seu projeto para que sua execução seja facilitada.
            </span>
          </v-col>

          <v-col cols="12" md="6">
            <v-img :src="ChaletProject">
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
            <v-img :src="Automation">
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

          <v-col cols="12" md="6" class="d-flex align-center">
            <span class="text-md-h4 text-h6">
              Tenha o seu Projeto de infraestrutura de Cabeamento Estruturado e Automação com confiabilidade e eficiência.
            </span>
          </v-col>

        </v-row>

        <v-divider class="my-6"/>

      </section>
		</v-responsive>
	</v-container>    
</template>