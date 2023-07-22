<script setup lang="ts">
</script>

<template>
    <v-container class="mt-10">
      <v-responsive class="align-center text-center fill-height">
        <div class="text-h3">
            Temos diversos <span class="gradient-text">projetos realizados</span> em diversos estados do Brasil!
        </div>

        <v-row class="mt-6 mb-10">

            <v-col cols="4">
                <v-card height="300" theme="dark">
                    Infraestrutura de Cabeamento Estruturado
                </v-card>
            </v-col>

            <v-col cols="4">
                <v-card height="300">
                    teste
                </v-card>
            </v-col>

            <v-col cols="4">
                <v-card height="300">
                    teste
                </v-card>
            </v-col>

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