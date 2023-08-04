<script setup lang="ts">
import AresLogo from '@/assets/logos/ares-compacted.png'

</script>

<template>
  <div>
    <v-footer>
      <v-row justify="space-evenly" class="my-4">

        <v-col cols="4" class="d-flex flex-column justify-center">
          <div>
            <v-img :src="AresLogo" :width="200" class="align-end mb-4" />
          </div>
          
          <div class="mb-2">
            Solicite um orçamento | Sobre nós | Cursos
          </div>

          <div class="text-subtitle-2">
            Ares Technology © 2023
          </div>

        </v-col>

        <v-col cols="3" class="d-flex flex-column justify-center">
          <div class="mb-6">
            <v-icon icon="mdi-whatsapp" />
            (63) 9 9947-4437
          </div>
          <div class="mb-6">
            <v-icon icon="mdi-email" />
            projetos@aresprojetos.com.br
          </div>
          <div>
            <v-icon icon="mdi-web " />
            www.aresprojetos.com.br
          </div>
        </v-col>

        <v-col cols="3" class="d-flex flex-column justify-center">
          <div class="text-h5 font-weight-light mb-2">
            Sobre nós
          </div>
          <div class="mb-4">
            A Ares Engenharia é uma empresa que se preocupa com a qualidade, conforto, eficiência e custos dos seus projetos.
          </div>
          <div>
            <v-icon icon="mdi-linkedin" />
          </div>
        </v-col>

      </v-row>
    </v-footer>
  </div>
</template>