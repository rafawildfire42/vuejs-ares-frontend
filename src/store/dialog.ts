// store/modules/dialog.ts
import { defineStore } from 'pinia';

interface DialogState {
  text: string;
  title?: string;
  isDialogVisible: boolean;
}

export const useDialogStore = defineStore({
  id: 'dialog',
  state: (): DialogState => ({
    text: '',
    title: '',
    isDialogVisible: false,
  }),
  actions: {
    show(text: string, title?: string) {
      this.text = text;
      this.title = title;
      this.isDialogVisible = true;
    },
    fechar() {
      this.isDialogVisible = false;
    },
  },
});
