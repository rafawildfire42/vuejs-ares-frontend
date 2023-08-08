<script setup lang="ts">
import { requiredRules, emailRules, cpfRules, cnpjRules, phoneRules } from '@/utils/validations'
import { servicesItems, taxIDitems } from '@/utils/data'
import { createForm } from '@/api/forms'
import { VForm } from 'vuetify/lib/components/index.mjs';
import { BudgetForm } from '@/types/forms'
import { useDialogStore } from '@/store/dialog';

const formData = ref<BudgetForm>({
    firstName: "",
    lastName: "",
    cpf: "",
    phone: "",
    email: "",
    service: null,
    returnWay: null,
    description: ""
})

const loading = ref(false)
const dialog = useDialogStore()
const form = ref<VForm>()

const servicesItemsFiltered = servicesItems.filter(el => el.enabled)

async function submitForm() {
  loading.value = true
  await form.value?.validate().then(async isValid => {
    if (isValid.valid) {
      await createForm(formData.value).then(r => {
        dialog.show("Orçamento solicitado com sucesso. Agradecemos sua preferência e em breve entraremos em contato.")
      }).catch(e => {
        dialog.show("Erro ao solicitar orçamento, tente novamente.")
      })
    }
  })
  loading.value = false
}

</script>


<template>
  <v-form ref="form" @submit.prevent="submitForm()">
    <v-container>
      <v-responsive class="align-center fill-height">
        <v-card variant="tonal" color="primary" class="py-md-8 py-4 px-md-0 px-4">
        <v-row justify="center">

          <v-col
            cols="12"
            md="10"
            lg="10"
            class="d-flex justify-center"
          >
            <h2>Preencha o formulário para solicitar um orçamento</h2>
          </v-col>

          <v-col
            cols="12"
            md="4"
            lg="3"
          >
            <v-text-field
              v-model="formData.firstName"
              :rules="[requiredRules]"
              label="Primeiro nome"
              required
              maxlength="50"
            />
          </v-col>

          <v-col
            cols="12"
            md="6"
            lg="4"
          >
            <v-text-field
              v-model="formData.lastName"
              :rules="[requiredRules]"
              label="Sobrenome"
              required
              maxlength="100"
            />
          </v-col>

          <v-col
            cols="12"
            md="10"
            lg="7"
          >
            <v-text-field
              v-model="formData.email"
              :rules="[requiredRules, emailRules]"
              label="E-mail"
              required
              maxlength="50"
            />
          </v-col>

          <v-col
            cols="12"
            md="10"
            lg="7"
          >
            <v-text-field
              v-model="formData.phone"
              :rules="[requiredRules, phoneRules]"
              label="Celular"
              v-mask="'(##) # ####-####'"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="10"
            lg="7"
          >
            <v-text-field
              v-model="formData.cpf"
              :rules="[requiredRules, cpfRules]"
              label="CPF"
              required
              v-mask="'###.###.###-##'"
            />
          </v-col>


          <v-col
            cols="12"
            md="10"
            lg="7"
          >
            <v-select
              :rules="[requiredRules]"
              label="Selecione um serviço"
              :items="servicesItemsFiltered"
              v-model="formData.service"
            />
          </v-col>

          <v-col
            cols="12"
            md="10"
            lg="7"
          >
            <v-textarea 
              v-model="formData.description"
              :rules="[requiredRules]"
              label="Descrição"
              rows="3"
              no-resize
              required
              maxlength="500"
            >
              <template v-slot:counter="{ counter }">
                <span :class="formData.description.length < 500 ? 'text-primary' : 'text-red'">
                  {{ counter }}
                </span>
              </template>
            </v-textarea>
          </v-col>

          <v-col
            cols="12"
            md="10"
            lg="7"
          >
            <v-radio-group
              label="Por onde você deseja receber nosso retorno?"
              v-model="formData.returnWay"
              inline
              :rules="[requiredRules]"
            >
              <v-radio
                label="WhatsApp"
                value="0"
              />
              <v-radio
                label="E-mail"
                value="1"
              />
            </v-radio-group>
          </v-col>

          <v-col
            cols="12"
            md="10"
            lg="7"
          >
            <v-btn variant="outlined" block type="submit" :loading="loading" :disabled="loading">
              Solicitar orçamento
            </v-btn>
          </v-col>

        </v-row>
        </v-card>
      </v-responsive>
    </v-container>
  </v-form>
</template>

<style scoped>
/* Estilize o contador de caracteres */
.v-counter {
  color: red !important; /* Defina a cor desejada para o contador */
  background-color:red;
}
</style>