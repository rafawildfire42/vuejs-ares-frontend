<script setup lang="ts">
import SideImage from '@/vue/components/home/SideImage.vue'
import SideText from '@/vue/components/home/SideText.vue'
import Gradient from '@/assets/hero-gradient.svg'

</script>

<template>
  <div>
    <img :src="Gradient" class="gradient-image" />
    <v-container>
      <v-responsive class="align-center text-center fill-height">
        <v-row>
          <v-col cols="7" class="d-flex align-center">
            <side-text />
          </v-col>
          <v-col cols="5">
            <side-image />
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </div>
</template>

<style>
.home-container {
  margin-left: 150px;
  margin-right: 150px;
}

.fill-height {
  height: 100vh;
}

.gradient-image {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  object-fit: cover;
}

</style>
