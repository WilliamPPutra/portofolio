import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const KOS_JS = path.resolve(here, '../../../../../Work/RHK/Kafanku/kOS Development/kos/resources/js');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        path.join(here, 'index.html'),
        path.join(here, 'src/**/*.{js,jsx}'),
        path.join(KOS_JS, '**/*.jsx'),
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: {
                    50:      '#eeeef6',
                    100:     '#d4d4e9',
                    200:     '#aaa9d4',
                    300:     '#7f7dbe',
                    400:     '#5e5ca9',
                    500:     '#4a4896',
                    600:     '#3d3b7c',
                    700:     '#312f65',
                    800:     '#2b2a4c',
                    900:     '#1a1933',
                    950:     '#100f20',
                    DEFAULT: '#2b2a4c',
                },
            },
        },
    },
    plugins: [forms],
};
