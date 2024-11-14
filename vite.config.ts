import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

//path shadcn
import path from 'path'

//svg plugin as react component
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(),react()],
  
  server: {
    port: 3001,
    open: true, // Opens the browser automatically
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      
    },
  }, 
})
