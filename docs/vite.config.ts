import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  root: path.resolve(__dirname, './'),
  resolve: {
    alias: [
      {
        find: /^q-ui$/,
        replacement: path.resolve(__dirname, '../packages/q-ui/index.ts'),
      },
      {
        find: /^@q-ui\/(.+)/,
        replacement: `${path.resolve(__dirname, `../packages`)}/$1/index.ts`,
      }
    ]
  },
})
