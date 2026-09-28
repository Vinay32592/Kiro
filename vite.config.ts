import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration — adds React support (JSX transform)
export default defineConfig({
  plugins: [react()],
})
