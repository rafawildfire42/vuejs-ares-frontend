// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://github.com/antfu/unplugin-auto-import
const autoImportConfigs = AutoImport({
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/, /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],
  imports: [
    'vue',
    'vue-router',
    {
      '@vueuse/core': [
        'useMouse',
        ['useFetch', 'useMyFetch'],
      ],
      'axios': [
        ['default', 'axios'],
      ],
      '[package-name]': [
        '[import-names]',
        ['[from]', '[alias]'],
      ],
    },
    {
      from: 'vue-router',
      imports: ['RouteLocationRaw'],
      type: true,
    },
  ],
  defaultExportByFilename: false,
  dirs: [],
  dts: false,
  vueTemplate: false,
  resolvers: [],
  injectAtEnd: true,
  eslintrc: {
    enabled: false,
    filepath: './.eslintrc-auto-import.json',
    globalsPropValue: true,
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    autoImportConfigs,
    vue({ 
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3001,
  },
})
