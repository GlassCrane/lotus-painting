import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the custom apex domain https://lotus-painting.com/, which lives at
// the site root, so both dev and build use '/'.
export default defineConfig(() => ({
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
}))
