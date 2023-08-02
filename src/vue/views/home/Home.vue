<script setup lang="ts">
import SideImage from '@/vue/components/home/SideImage.vue'
import SideText from '@/vue/components/home/SideText.vue'

</script>

<script lang="ts">
export default {
  name: "Home"
}
</script>

<template>
  <v-container>
    <v-responsive class="align-center text-center">
      <v-row>
        <v-col cols="12" md="7" class="d-flex align-center">
          <side-text />
        </v-col>
        <v-col cols="0" md="5" class="d-none d-md-block">
          <side-image />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<style>
.home-container {
  margin-left: 150px;
  margin-right: 150px;
}

.fill-height {
  height: 100vh;
}

</style>
