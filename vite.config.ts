import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set base path to '/' for Vercel root domain
  optimizeDeps: {
    exclude: ['lucide-react'], // Optional: Keep this if needed for optimization
  },
});