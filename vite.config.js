import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig(({ command }) => {
  return {
    define: {
      global: 'window',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
    build: {
      rollupOptions: {
        input: glob.sync('./*.html'),
      },
    },
  };
});
