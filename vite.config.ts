// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain configuration
export default defineConfig({
  plugins: [react()],
  base: '/',    // 👈 root path for custom domain
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
