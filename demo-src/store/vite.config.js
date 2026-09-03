import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

// Sumber asli aplikasi kOS (read-only, tidak pernah dimodifikasi oleh demo ini).
const KOS_JS = path.resolve(here, '../../../../../Work/RHK/Kafanku/kOS Development/kos/resources/js');

const BASE = '/portofolio/demo/store/';

// Demo tidak boleh menampilkan nama brand internal tertentu, dan aset yang
// dirujuk dengan path absolut Laravel harus diarahkan ke folder demo.
// Sumber kOS tidak pernah diubah di disk; penggantian hanya saat transform.
function rewriteForDemo() {
    const rules = [
        [/bajuterakhir\.com/g, 'brandpremium.id'],
        [/baju[\s_-]*terakhir/gi, (m) => (m === m.toLowerCase() ? 'brand premium' : 'Brand Premium')],
        // Hero dipakai sebagai background-image dengan path root Laravel.
        [/\/images\/hero-home\.png/g, `${BASE}images/hero-home.webp`],
    ];
    return {
        name: 'demo-rewrite',
        enforce: 'pre',
        transform(code, id) {
            if (!/\.(jsx?|tsx?)$/.test(id) || id.includes('node_modules')) return null;
            let out = code;
            for (const [re, to] of rules) out = out.replace(re, to);
            return out === code ? null : { code: out, map: null };
        },
    };
}

export default defineConfig({
    base: BASE,
    plugins: [rewriteForDemo(), react()],
    resolve: {
        alias: [
            // Shim harus dicek sebelum alias '@'
            { find: '@inertiajs/react', replacement: path.resolve(here, 'src/shims/inertia.jsx') },
            { find: 'axios', replacement: path.resolve(here, 'src/shims/axios.js') },
            { find: '@', replacement: KOS_JS },
        ],
    },
    server: { fs: { allow: [here, KOS_JS] } },
    build: { outDir: 'dist', emptyOutDir: true },
});
