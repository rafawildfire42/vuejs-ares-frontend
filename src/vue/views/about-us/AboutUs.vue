<script setup lang="ts">
import AresLogo from '@/assets/logos/ares-engenharia.png'
import ChaletProject from '@/assets/projects/projeto-chale.png'
import Automation from '@/assets/projects/automacao-residencial.png'

</script>

<template>
    <v-container>
        <v-responsive class="align-center fill-height">
            <v-row>

                <v-col cols="6">
                    <v-img :src="AresLogo"/>
                </v-col>
                <v-col cols="6" class="d-flex align-center text-center">
                    A Ares Engenharia é uma empresa que se preocupa com a qualidade, conforto, eficiência e custos do seu Projeto. Temos experiência com mais de 150.000 m²
                    de projetos de instalações elétricas residenciais e prediais e infraestrutura de cabeamento estruturado e de automação residencial.
                    <br><br>Nosso site ainda está em crescimento. Em breve, teremos novidades!
                </v-col>

                <v-divider class="mb-6"/>

                <v-col cols="6" class="d-flex align-center text-center">
                    <span class="text-h3">
                        Nos preocupamos com a legibilidade do seu projeto para que sua execução seja facilitada.
                    </span>
                </v-col>
                <v-col cols="6">
                    <v-img :src="ChaletProject"/>
                </v-col>

                <v-divider class="my-6"/>

                <v-col cols="6">
                    <v-img :src="Automation"/>
                </v-col>
                <v-col cols="6" class="d-flex align-center text-center">
                    <span class="text-h3">
                        Tenha o Projeto de infraestrutura de Cabeamento Estruturado e Automação com confiabilidade e eficiência.
                    </span>
                </v-col>

            </v-row>
        </v-responsive>
    </v-container>
</template>