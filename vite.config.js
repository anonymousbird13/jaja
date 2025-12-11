import { defineConfig } from 'vite'

export default defineConfig({
  root: 'calendly.com',
  server: {
    port: 5173
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
