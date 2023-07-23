<script setup lang="ts">
import ChaletProject from '@/assets/projects/projeto-chale.png'
import Automation from '@/assets/projects/automacao-residencial.png'

</script>

<script lang="ts">
export default {
    name: "ProjectsExamples"
}
</script>

<template>
    <section>

        <v-divider class="my-6"/>

        <v-row>

            <v-col cols="12" md="6" class="d-flex align-center text-center">
                <span class="text-md-h4 text-h6">
                    Nos preocupamos com a legibilidade do seu projeto para que sua execução seja facilitada.
                </span>
            </v-col>

            <v-col cols="12" md="6">
                <v-img :src="ChaletProject"/>
            </v-col>
        </v-row>

        <v-divider class="my-6"/>
        
        <v-row>

            <v-col cols="12" md="6" class="order-md-first order-last">
                <v-img :src="Automation"/>
            </v-col>

            <v-col cols="12" md="6" class="d-flex align-center">
                <span class="text-md-h4 text-h6">
                    Tenha o seu Projeto de infraestrutura de Cabeamento Estruturado e Automação com confiabilidade e eficiência.
                </span>
            </v-col>

        </v-row>

        <v-divider class="my-6"/>

    </section>
</template>