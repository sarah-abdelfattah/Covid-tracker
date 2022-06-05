import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: { outDir: 'build' },
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: { alias: { '@': '/src/client' } },
})