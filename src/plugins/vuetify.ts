/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, ThemeDefinition } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const AresLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#DFE0E0',
    surface: '#DFE0E0',
    primary: '#DFE0E0',
    secondary: '#DA3843',
    ares: '#0A0946',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    application: '#808080',
    'ares-grey': '#CDCDCD',
    'primary-darken-1': '#3700B3',
    'secondary-darken-1': '#018786',
  },
  // Personalize o tema definindo a cor do texto (foreground) como #000000 (preto)
  variables: {
    '--v-theme-on-surface': '#000000', // Cor do texto nas superfícies (backgrounds)
    '--v-theme-on-background': '#000000', // Cor do texto nos backgrounds
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'AresLightTheme',
    themes: {
      AresLightTheme,
    },
  },
})
