import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from the GitHub Pages project sub-path
// https://asaklex.github.io/a2m-honorary-country/
export default defineConfig({
  base: '/a2m-honorary-country/',
  plugins: [react(), tailwindcss()],
})
