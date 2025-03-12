import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  federation({
    name: 'n5-remote-host',
    filename: 'remoteEntry.js',
    exposes: {},
    remotes: {
      'n5-remote-hp': 'https://n5-harry-potter.vercel.app/assets/remoteEntry.js',
      'n5-remote-rm': 'https://n5-rick-morty.vercel.app/assets/remoteEntry.js',
      'n5-remote-commons': 'https://n5-commons-d7ca6q47l-japods-projects-8fe65e8c.vercel.app/assets/remoteEntry.js',
    },
    shared: ['react', 'react-dom'],
  })],
  server: {
    cors: {
      origin: '*', // Permite cualquier origen
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.jsx",
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
