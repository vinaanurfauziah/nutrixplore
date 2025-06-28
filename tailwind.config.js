/* eslint-disable prettier/prettier */
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'Figtree', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                'glow-bounce': {
                    '0%': {
                        transform: 'scale(0.7) rotate(-15deg)',
                        opacity: '0',
                        filter: 'drop-shadow(0 0 0px #22c55e)',
                    },
                    '30%': {
                        transform: 'scale(1.2) rotate(10deg)',
                        filter: 'drop-shadow(0 0 6px #22c55e)',
                    },
                    '60%': {
                        transform: 'scale(0.95) rotate(0deg)',
                        filter: 'drop-shadow(0 0 2px #22c55e)',
                    },
                    '100%': {
                        transform: 'scale(1) rotate(0deg)',
                        opacity: '1',
                        filter: 'drop-shadow(0 0 0px transparent)',
                    },
                },
            },
            animation: {
                'glow-bounce': 'glow-bounce 0.8s ease-out forwards',
            },
        },
    },

    plugins: [forms, flowbite],
};
