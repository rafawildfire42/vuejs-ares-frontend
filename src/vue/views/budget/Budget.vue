<script setup lang="ts">
import { ref, computed } from 'vue';
import { requiredRules, emailRules, cpfRules, cnpjRules, phoneRules } from '@/utils/validations'
import { servicesItems, taxIDitems } from '@/utils/data'

const valid = ref(false);
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const selectedItem = ref(null);
const inline = ref<number>(0);
const cpf = ref(null);
const requestWithCNPJ = ref(null);
const cnpj = ref(null);

const isFormValid = computed(() => {
  return valid.value && firstName.value && lastName.value && email.value;
});

const servicesItemsFiltered = servicesItems.filter(el => el.enabled)

</script>


<template>
    <v-form v-model="valid">
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
                        v-model="firstName"
                        :rules="[requiredRules]"
                        label="Primeiro nome"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="6"
                        lg="4"
                    >
                        <v-text-field
                            v-model="lastName"
                            :rules="[requiredRules]"
                            label="Sobrenome"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="10"
                        lg="7"
                    >
                        <v-text-field
                            v-model="email"
                            :rules="[requiredRules, emailRules]"
                            label="E-mail"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="10"
                        lg="7"
                    >
                        <v-text-field
                            v-model="phone"
                            :rules="[requiredRules, phoneRules]"
                            label="Celular"
                            v-mask="'(##) # ####-####'"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="10"
                        lg="7"
                    >
                        <v-text-field
                            v-model="cpf"
                            :rules="[requiredRules, cpfRules]"
                            label="CPF"
                            required
                            v-mask="'###.###.###-##'"
                        ></v-text-field>
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
                            v-model="selectedItem"
                        />
                    </v-col>

                    <v-col 
                        cols="12"
                        md="10"
                        lg="7"
                    >
                        <v-checkbox label="Solicitar como pessoa jurídica?" v-model="requestWithCNPJ" />
                    </v-col>
                    
                    <v-col
                        cols="12"
                        md="10"
                        lg="7"
                        v-if="requestWithCNPJ"
                    >
                        <v-text-field
                            v-model="cnpj"
                            :rules="[requiredRules, cnpjRules]"
                            label="CNPJ"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col 
                        cols="12"
                        md="10"
                        lg="7"
                    >
                        <v-radio-group
                        label="Por onde você deseja receber nosso retorno?"
                        v-model="inline"
                        inline
                        >
                        <v-radio
                            label="WhatsApp"
                            value="radio-1"
                        ></v-radio>
                        <v-radio
                            label="E-mail"
                            value="radio-2"
                        ></v-radio>
                        </v-radio-group>
                    </v-col>

                    <v-col 
                        cols="12"
                        md="10"
                        lg="7"
                    >
                        <v-btn variant="outlined" block type="submit">Solicitar orçamento</v-btn>
                    </v-col>
                </v-row>
            </v-responsive>
        </v-container>
    </v-form>
</template>@/utils/data