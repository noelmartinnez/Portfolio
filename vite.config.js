import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to a different port, e.g., 3000
  },
  build: {
    rollupOptions: {
      output: {
        // React y los helpers compartidos van a `vendor`; three a su chunk; el
        // resto del 3D (fiber, drei, maath…) lo agrupa Rollup en los chunks
        // lazy de los lienzos, así nada 3D se precarga antes del primer render.
        manualChunks(id) {
          if (id.startsWith('\0') || /node_modules[\\/](react|react-dom|scheduler|@babel[\\/]runtime)[\\/]/.test(id)) return 'vendor'
          if (/node_modules[\\/]three[\\/]/.test(id)) return 'three'
          if (/node_modules[\\/]framer-motion[\\/]/.test(id)) return 'motion'
        },
      },
    },
  },
})
