import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

// Sumber asli aplikasi kOS (read-only, tidak pernah dimodifikasi oleh demo ini).
const KOS_JS = path.resolve(here, '../../../../../Work/RHK/Kafanku/kOS Development/kos/resources/js');

// Demo tidak boleh menampilkan nama brand internal tertentu.
// Sumber kOS tidak pernah diubah di disk; penggantian hanya terjadi saat transform.
function scrubBrandNames() {
    const rules = [
        [/bajuterakhir\.com/g, 'brandpremium.id'],
        [/baju[\s_-]*terakhir/gi, (m) => (m === m.toLowerCase() ? 'brand premium' : 'Brand Premium')],
    ];
    return {
        name: 'demo-scrub-brand-names',
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
    base: '/portofolio/demo/commerce-os/',
    plugins: [scrubBrandNames(), react()],
    resolve: {
        alias: [
            // Shim Inertia harus dicek sebelum alias '@'
            { find: '@inertiajs/react', replacement: path.resolve(here, 'src/shims/inertia.jsx') },
            { find: '@', replacement: KOS_JS },
        ],
    },
    server: { fs: { allow: [here, KOS_JS] } },
    build: {
        outDir: path.resolve(here, '../../public/demo/commerce-os'),
        emptyOutDir: true,
        chunkSizeWarningLimit: 2000,
    },
});
