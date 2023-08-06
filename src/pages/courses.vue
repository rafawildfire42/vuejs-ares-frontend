<script setup lang="ts">
import ElectricalCircuitsCourse from '@/assets/courses/cursos-circuitos-eletricos.jpg'

const show = ref(false)

function goToElectricalCircuitsCourse() {
  window.open(`https://www.udemy.com/course/analisedecircuitoseletricos1/?referralCode=95ABE5B56785BD5E8F72`, "_blank")
}

</script>

<template>
  <v-container class="body justify-start">
    <v-responsive class="align-center">
      <v-card
        class="mx-auto mt-md-16"
        max-width="344"
      >
        <v-img
          :src="ElectricalCircuitsCourse"
          height="200px"
          cover
        ></v-img>

        <v-card-title>
          Circuitos Elétricos 1
        </v-card-title>

        <v-card-text class="pb-0">
          Introdução à análise de Circuitos Elétricos 1
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="secondary"
            variant="text"
            @click="goToElectricalCircuitsCourse()"
          >
            Ver curso
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>

              <div class="pb-1">
                <v-icon icon="mdi-account-school" />
                384 alunos
              </div>

              <div class="pb-1">
                <v-icon icon="mdi-star" color="secondary" />
                4,8 (106 classificações)
              </div>

              <div class="pb-1">
                <v-icon icon="mdi-information" />
                Última atualização em 06/2020
              </div>

              <div class="pb-1">
                <v-icon icon="mdi-all-inclusive" color="secondary" />
                Acesso total vitalício
              </div>

              <div class="pb-1">
                <v-icon icon="mdi-trophy" />
                Certificado de conclusão
              </div>

              <div>
                <v-icon icon="mdi-cellphone" color="secondary" />
                Acesso no dispositivo móvel e na TV
              </div>

              <div class="mt-4">
                Neste curso é abordado desde os conceitos mais básicos até conceitos mais elaborados sobre circuitos elétricos, visando uma capacitação do aluno de ser apto a aprender os sub-eixos que envolvam circuitos elétricos.
              </div>

            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-responsive>
  </v-container>
</template>