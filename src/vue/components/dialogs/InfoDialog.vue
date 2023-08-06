<script setup lang="ts">
import { useDialogStore } from '@/store/dialog';

const dialog = useDialogStore()

</script>

<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog.isDialogVisible"
      width="500"
      persistent
      theme="dark"
    >
      <v-card class="pa-2">
        <v-card-text class="text-h6" v-if="dialog.title">
          {{ dialog.title }}
        </v-card-text>
        <v-card-text>
          {{ dialog.text }}
        </v-card-text>
        <v-card-actions class="mt-2">
          <v-btn color="warning" @click="dialog.isDialogVisible = false">
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>