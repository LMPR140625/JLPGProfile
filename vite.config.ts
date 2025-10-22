import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'; // Import the plugin

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(),tailwindcss(), ] ,
  server: {
    proxy:{
      'https://joseluisplatagonzalezservices.com/api':{
        target:"https://api.resend.com/emails",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },      
    }
 }
})

