import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'n5-remote-host',
    filename: 'remoteEntry.js',
    exposes: {},
    remotes: {
      'n5-remote-hp': 'http://localhost:5003/assets/remoteEntry.js',
      'n5-remote-rm': 'http://localhost:5004/assets/remoteEntry.js',
      'n5-remote-commons': 'http://localhost:5005/assets/remoteEntry.js',
    },
    shared: ['react', 'react-dom'],
  })],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
