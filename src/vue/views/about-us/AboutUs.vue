<script setup lang="ts">
import AresLogo from '@/assets/logos/ares-engenharia.png'

</script>

<script lang="ts">
export default {
    name: "AboutUs"
}
</script>

<template>
    <v-row>

        <v-col cols="6" class="d-md-block d-none">
            <v-img :src="AresLogo"/>
        </v-col>
        
        <v-col cols="12" md="6" class="d-flex align-center text-center">
            A Ares Engenharia é uma empresa que se preocupa com a qualidade, conforto, eficiência e custos do seu Projeto. Temos experiência com mais de 150.000 m²
            de projetos de instalações elétricas residenciais e prediais e infraestrutura de cabeamento estruturado e de automação residencial.
            <br><br>Nosso site ainda está em crescimento. Em breve, teremos novidades!
        </v-col>

    </v-row>
</template>