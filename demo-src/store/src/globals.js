/**
 * Helper `route()` milik Ziggy yang biasanya disuntikkan Laravel. Di demo
 * statis ini hanya rute storefront yang perlu dikenali.
 */

const ROUTE_MAP = {
    home: '/',
    'products.show': '/products/{slug}',
    'checkout.show': '/checkout/{slug}',
    'partner.register': '/partner/register',
    'partner.login': '/partner/login',
};

function nameToPath(name) {
    return ROUTE_MAP[name] ?? `/${String(name).replace(/\./g, '/')}`;
}

function fill(pattern, params) {
    let out = pattern;
    let rest = {};

    if (params === undefined || params === null) {
        // tanpa parameter
    } else if (typeof params === 'object' && !Array.isArray(params)) {
        rest = { ...params };
    } else {
        const first = out.match(/\{([^}]+)\}/);
        if (first) out = out.replace(first[0], encodeURIComponent(params));
        else out = `${out}/${encodeURIComponent(params)}`;
    }

    out = out.replace(/\{([^}?]+)\??\}/g, (m, key) => {
        if (key in rest) {
            const v = rest[key];
            delete rest[key];
            return encodeURIComponent(v && typeof v === 'object' ? (v.slug ?? v.id ?? '') : v);
        }
        return '';
    }).replace(/\/{2,}/g, '/').replace(/(.)\/$/, '$1') || '/';

    const qs = new URLSearchParams();
    Object.entries(rest).forEach(([k, v]) => {
        if (v === undefined || v === null || v === '') return;
        qs.append(k, typeof v === 'object' ? (v.id ?? '') : v);
    });
    const q = qs.toString();
    return q ? `${out}?${q}` : out;
}

export function installGlobals() {
    const here = () => (window.location.hash || '').replace(/^#/, '') || '/';

    // Dikembalikan sebagai hash route. Beberapa halaman kOS memakai <a href>
    // biasa, bukan <Link> Inertia, jadi tanpa "#" tautan itu akan keluar dari
    // demo. Shim Link sendiri sudah tahan terhadap href yang sudah berawalan #.
    const route = (name, params) => {
        try {
            if (name === undefined) {
                return { current: (p) => (p ? here().startsWith(nameToPath(p)) : here()), params: {} };
            }
            return `#${fill(nameToPath(name), params)}`;
        } catch {
            return '#/';
        }
    };
    route.current = (p) => (p ? here().startsWith(nameToPath(p)) : here());
    route.has = (name) => name in ROUTE_MAP;
    window.route = route;

    // Tidak ada permintaan jaringan yang boleh lolos ke domain manapun.
    const realFetch = window.fetch?.bind(window);
    window.fetch = (input, init) => {
        const url = typeof input === 'string' ? input : input?.url ?? '';
        if (url.startsWith('/api') || url.startsWith('/storage')) {
            return Promise.resolve(new Response('{}', { headers: { 'Content-Type': 'application/json' } }));
        }
        return realFetch ? realFetch(input, init) : Promise.reject(new Error('fetch tidak tersedia'));
    };
}

installGlobals();
