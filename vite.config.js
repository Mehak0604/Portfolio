import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'repo-name' with your actual repo name
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})
