// vite.config.js
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',            // project root (current folder)
  build: {
    outDir: 'dist',     // output folder for production build
  },
})