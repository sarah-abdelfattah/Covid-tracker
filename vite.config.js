import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginNode } from 'vite-plugin-node';


// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': '/src' } },
})