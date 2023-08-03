<script setup lang="ts">
import { requiredRules, emailRules, cpfRules, cnpjRules, phoneRules } from '@/utils/validations'
import { servicesItems, taxIDitems } from '@/utils/data'
import { createForm } from '@/api/forms'
import { VForm } from 'vuetify/lib/components/index.mjs';
import { BudgetForm } from '@/types/forms'

const formData = ref<BudgetForm>({
    firstName: "",
    lastName: "",
    cpf: "",
    phone: "",
    email: "",
    service: null,
    returnWay: null
})

const form = ref<VForm>()

const servicesItemsFiltered = servicesItems.filter(el => el.enabled)

async function submitForm() {
  await form.value?.validate().then(async isValid => {
    if (isValid.valid) {
      await createForm(formData.value).then(r => {console.log(r)})
    } else {
      console.log("não é valido")
    }
  })
}

</script>


<template>
  <v-form ref="form" @submit.prevent="submitForm()">
    <v-container>
      <v-responsive class="align-center fill-height">
        <v-row justify="center" class="px-md-16 px-0">

          <v-col
            cols="12"
            md="10"
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
              <v-btn variant="outlined" block type="submit">
                Solicitar orçamento
              </v-btn>
          </v-col>

        </v-row>
      </v-responsive>
    </v-container>
  </v-form>
</template>