// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.kylehartson.dev',
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()],
        build: {
            // Keep page scripts as separate /_astro/*.js files so CSP need not allow unsafe-inline.
            assetsInlineLimit: 0,
        },
    },
});
