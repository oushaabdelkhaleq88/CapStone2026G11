import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      react(), 
      tailwindcss(),
    ],
    base: '/CapStone2026G11',
    
  }
  
  return config
})