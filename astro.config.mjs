// astro.config.mjs
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jpz003.github.io/',
  base: '/cv_jz003',

  vite: {
    plugins: [tailwindcss()],
  },
});