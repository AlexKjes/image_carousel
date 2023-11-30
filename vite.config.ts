import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "https:/drive.redpill-linpro.com",
      "Access-Control-Request-Method": "POST"
    }
  },
  build: {
    outDir: "../dist"
  }
})
