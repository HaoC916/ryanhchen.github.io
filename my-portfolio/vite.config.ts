import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages has no server-side routing, so a direct hit on /projects/<slug>
// returns 404. Copying index.html to 404.html makes Pages serve the SPA for any
// unknown path, where the client router then renders the correct page.
function spa404Fallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const index = resolve(process.cwd(), 'dist/index.html')
      const notFound = resolve(process.cwd(), 'dist/404.html')
      if (existsSync(index)) {
        copyFileSync(index, notFound)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spa404Fallback()],
})
