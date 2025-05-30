import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    allowedHosts: [
      '96cff1d7-dede-4d7f-9ebf-c8703c86a655-00-x054rodcv2up.picard.replit.dev'
    ],
    host: true
  }
})
