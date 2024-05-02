import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createServer } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    historyApiFallback: true,
    middleware: [
      (req, res, next) => {
        if (req.url.endsWith('.json')) {
          res.setHeader('Content-Type', 'application/json');
        }
        next();
      },
    ],
  },
});
