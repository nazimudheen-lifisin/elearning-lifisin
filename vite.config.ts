import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 4000,
    open: true,
    cors: false
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@screens': '/src/screens',
      '@services': '/src/services',
      '@types': '/src/types',
      '@assets': '/src/assets',
      '@config': '/src/config',
      '@data': '/src/data',
      '@layouts': '/src/layouts',
      '@redux': '/src/redux',
    }
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true } 
  }
})
