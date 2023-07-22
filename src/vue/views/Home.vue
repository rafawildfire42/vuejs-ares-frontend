<script setup lang="ts">
import SideImage from '@/vue/components/home/SideImage.vue'
import SideText from '@/vue/components/home/SideText.vue'
</script>

<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            <v-row>
                <v-col cols="6" class="d-flex align-center">
                    <side-text />
                </v-col>
                <v-col cols="6">
                    <side-image />
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>
