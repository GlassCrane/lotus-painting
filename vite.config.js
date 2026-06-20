import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://<user>.github.io/lotus-painting/ on GitHub Pages, so the
// production build needs that base path. Local dev stays at root ('/').
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/lotus-painting/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
}))
