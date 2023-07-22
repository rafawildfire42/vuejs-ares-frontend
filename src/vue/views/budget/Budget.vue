<script setup lang="ts">
import { ref, computed } from 'vue';
import { requiredRules, emailRules } from '@/utils/validations'
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
                <v-row justify="center px-16">
                    <v-col
                        cols="3"
                    >
                    <v-text-field
                        v-model="firstName"
                        :rules="requiredRules"
                        label="Primeiro nome"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                        cols="4"
                    >
                        <v-text-field
                            v-model="lastName"
                            :rules="requiredRules"
                            label="Sobrenome"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="7"
                    >
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="7"
                    >
                        <v-text-field
                            v-model="phone"
                            :rules="emailRules"
                            label="Celular"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="7"
                    >
                        <v-text-field
                            v-model="cpf"
                            :rules="emailRules"
                            label="CPF"
                            required
                        ></v-text-field>
                    </v-col>


                    <v-col cols="7">
                        <v-select 
                            label="Selecione um serviço"
                            :items="servicesItemsFiltered"
                            v-model="selectedItem"
                        />
                    </v-col>

                    <v-col cols="7">
                        <v-checkbox label="Solicitar como pessoa jurídica?" v-model="requestWithCNPJ" />
                    </v-col>
                    
                    <v-col
                        cols="7"
                        v-if="requestWithCNPJ"
                    >
                        <v-text-field
                            v-model="cnpj"
                            :rules="emailRules"
                            label="CNPJ"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="7">
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

                    <v-col cols="7">
                        <v-btn variant="outlined" block type="submit">Solicitar orçamento</v-btn>
                    </v-col>
                </v-row>
            </v-responsive>
        </v-container>
    </v-form>
</template>@/utils/data