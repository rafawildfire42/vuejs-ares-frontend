<script setup lang="ts">
import AresLogo from '@/assets/logos/ares-compacted.png'
import { callWhatsApp } from '@/utils/functions'

const email = "contato@aresprojetos.com.br"
const router = useRouter()

function mailTo () {
  window.open(`mailto:${email}?subject=Solicitação de orçamento`)
}

function goToHome () {
  router.push("/")
}

function goToLinkedin () {
  window.open("https://www.linkedin.com/in/ares-engenharia-12385328b/")
}

function goToInstagram () {
  window.open("https://www.instagram.com/aresprojetos")
}

</script>

<template>
  <div>
    <v-footer>
      <v-row justify="space-evenly" class="my-4 flex-md-row flex-column-reverse">

        <v-col cols="12" md="4" class="d-flex flex-column justify-center align-md-start align-center">
          <div>
            <v-img :src="AresLogo" :width="200" class="align-end mb-4" />
          </div>
          
          <div class="mb-2">
            <router-link to="/orcamento">Solicite um orçamento</router-link> | 
            <router-link to="/sobre-nos">Sobre nós</router-link> | 
            <router-link to="/cursos">Cursos</router-link>
          </div>

          <div class="text-subtitle-2">
            Ares Technology © 2023 - v1.0
          </div>

        </v-col>

        <v-col cols="12" md="3" class="d-flex flex-column justify-center align-md-start align-center">

          <div class="mb-6">
            <v-btn variant="text" @click="callWhatsApp()">
              <v-icon icon="mdi-whatsapp" class="mr-1" />
              (63) 9 8118-9986
            </v-btn>
          </div>

          <div class="mb-6">
            <v-btn variant="text" @click="mailTo()">
              <v-icon icon="mdi-email" class="mr-1" />
              <span class="text-lowercase">
                {{ email }}
              </span>
            </v-btn>
          </div>

          <div>
            <v-btn variant="text" @click="goToHome()">
              <v-icon icon="mdi-web" class="mr-1" />
              <span class="text-lowercase">
                www.aresprojetos.com.br
              </span>
            </v-btn>
          </div>

        </v-col>

        <v-col cols="12" md="3" class="d-flex flex-column justify-center">
          <div class="text-h5 font-weight-light mb-2">
            Sobre nós
          </div>
          <div class="mb-4">
            A Ares Engenharia é uma empresa que se preocupa com a qualidade, conforto, eficiência e custos dos seus projetos.
          </div>
          <div class="mx-md-0 mx-auto">

            <!-- <v-btn @click="goToLinkedin()" class="mr-2">
              <v-icon icon="mdi-linkedin" color="#0E76A8" />
            </v-btn> -->

            <v-btn @click="goToInstagram()" class="ml-2">
              <v-icon icon="mdi-instagram" color="#E1306C" />
            </v-btn>
            
          </div>
        </v-col>

      </v-row>
    </v-footer>
  </div>
</template>