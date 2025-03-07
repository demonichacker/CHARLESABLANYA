
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Set this to your GitHub repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
