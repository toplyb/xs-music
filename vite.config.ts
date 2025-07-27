import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    open: true,
  },
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: "dashesOnly",
      scopeBehaviour: "local",
      generateScopedName: "[name]_[local]_[hash:5]",
      hashPrefix: "",
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[hash].[name].[ext]",
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    assetsInlineLimit: 4096,
    outDir: "./dist",
    assetsDir: 'assets',
    emptyOutDir: true,
  }
})
