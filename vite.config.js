import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/NOMBRE_DE_TU_REPO_DE_ESTA_LANDING/',
  // ^ IMPORTANTE: Pon aquí el nombre exacto del repo de esta landing en GitHub
})