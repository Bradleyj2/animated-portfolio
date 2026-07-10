// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// Custom domain configuration
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-spa-files',
      writeBundle() {
        // Copy SPA files for GitHub Pages
        const routes = [
          'contact',
          'about', 
          'resume',
          'case-studies/hemispheres',
          'case-studies/service-blueprint',
          'case-studies/omnichannel-strategy',
          'case-studies/viu-hub',
          'case-studies/second-opinion',
          'case-studies/ai-marketing-control-center'
        ]
        
        // Read the main index.html to get the correct asset names
        const mainIndexPath = join('dist', 'index.html')
        let mainContent = ''
        if (existsSync(mainIndexPath)) {
          mainContent = require('fs').readFileSync(mainIndexPath, 'utf8')
        }
        
        routes.forEach(route => {
          const srcPath = join('public', route, 'index.html')
          const destDir = join('dist', route)
          const destPath = join(destDir, 'index.html')
          
          if (existsSync(srcPath)) {
            mkdirSync(destDir, { recursive: true })
            
            // Read the source file and replace the script references
            let content = require('fs').readFileSync(srcPath, 'utf8')
            
            // Extract script and CSS references from main index.html
            const scriptMatch = mainContent.match(/<script[^>]*src="([^"]*)"[^>]*><\/script>/)
            const cssMatch = mainContent.match(/<link[^>]*href="([^"]*\.css)"[^>]*>/)
            
            if (scriptMatch && cssMatch) {
              const scriptSrc = scriptMatch[1]
              const cssHref = cssMatch[1]
              
              // Replace the development script with production script and CSS
              content = content.replace(
                '<script type="module" src="/src/main.tsx"></script>',
                `<script type="module" crossorigin src="${scriptSrc}"></script>\n    <link rel="stylesheet" href="${cssHref}">`
              )
            }
            
            // Write the updated content
            require('fs').writeFileSync(destPath, content)
            console.log(`Copied and updated ${srcPath} to ${destPath}`)
          }
        })
      }
    }
  ],
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
 