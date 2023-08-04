<script setup lang="ts">
import { useDialogStore } from '@/store/dialog';

const dialog = useDialogStore()

</script>

<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog.isDialogVisible"
      width="auto"
      persistent
      theme="dark"
    >
      <v-card>
        <v-card-text class="text-h6" v-if="dialog.title">
          {{ dialog.title }}
        </v-card-text>
        <v-card-text>
          {{ dialog.text }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog.isDialogVisible = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>