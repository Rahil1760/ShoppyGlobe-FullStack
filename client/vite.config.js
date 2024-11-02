import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    fs: {
      strict: false
    },
     proxy: {
      '/api' : "http://localhost:3000",
    }
  }
});
