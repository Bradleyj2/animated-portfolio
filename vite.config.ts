// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If your repo is https://github.com/YOUR_USER/animated-portfolio
// the base must match the repo name:
export default defineConfig({
  plugins: [react()],
  base: '/animated-portfolio/',    // 👈 important for GitHub Pages
})
