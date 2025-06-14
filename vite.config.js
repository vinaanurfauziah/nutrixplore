import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path'; // ⬅️ Tambahin ini
import svgr from 'vite-plugin-svgr'; // ⬅️ ini WAJIB

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        svgr(), // <--- ini penting
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'), // ⬅️ Tambahin ini
        },
    },
});
