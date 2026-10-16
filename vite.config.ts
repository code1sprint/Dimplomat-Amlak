import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

/** Map /public/* → /* so GitHub Pages paths also work in Vite (public/ is flattened at /). */
function publicPrefixPlugin() {
  return {
    name: 'public-prefix',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url?.startsWith('/public/')) {
          req.url = req.url.slice('/public'.length) || '/';
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url?.startsWith('/public/')) {
          req.url = req.url.slice('/public'.length) || '/';
        }
        next();
      });
    },
  };
}

export default defineConfig(({ command }) => {
  return {
    // GitHub project pages: https://code1sprint.github.io/Dimplomat-Amlak/
    base: command === 'build' ? '/Dimplomat-Amlak/' : '/',
    plugins: [publicPrefixPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
