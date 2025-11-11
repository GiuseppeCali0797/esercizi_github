import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',  // forza l’uso dell’indirizzo IP locale
    port: 5173,         // porta predefinita
    strictPort: false,  // se è occupata, ne sceglie un’altra
    open: true          // apre il browser automaticamente
  }
})
