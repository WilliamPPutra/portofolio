/**
 * Global yang biasanya disediakan Laravel: helper Ziggy `route()` dan `window.axios`.
 * Di demo statis keduanya diganti versi aman yang tidak pernah melempar error.
 */

const ROUTE_MAP = {
    'admin.dashboard': '/admin/dashboard',
    'admin.dashboard.revenue': '/admin/dashboard/revenue',
    'admin.dashboard.chart': '/admin/dashboard/chart',

    'admin.products.index': '/admin/products',
    'admin.products.create': '/admin/products/create',
    'admin.products.store': '/admin/products',
    'admin.products.show': '/admin/products/{id}',
    'admin.products.edit': '/admin/products/{id}/edit',
    'admin.products.update': '/admin/products/{id}',
    'admin.products.destroy': '/admin/products/{id}',

    'admin.categories.index': '/admin/categories',
    'admin.categories.store': '/admin/categories',
    'admin.categories.update': '/admin/categories/{id}',
    'admin.categories.destroy': '/admin/categories/{id}',

    'admin.brands.index': '/admin/brands',
    'admin.brands.store': '/admin/brands',
    'admin.brands.update': '/admin/brands/{id}',
    'admin.brands.destroy': '/admin/brands/{id}',

    'admin.orders.index': '/admin/orders',
    'admin.orders.create': '/admin/orders/create',
    'admin.orders.store': '/admin/orders',
    'admin.orders.show': '/admin/orders/{id}',
    'admin.orders.update': '/admin/orders/{id}',
    'admin.orders.destroy': '/admin/orders/{id}',
    'admin.orders.status': '/admin/orders/{id}/status',
    'admin.orders.bulk-status': '/admin/orders/bulk-status',
    'admin.orders.label': '/admin/orders/{id}/label',
    'admin.orders.invoice': '/admin/orders/{id}/invoice',

    'admin.marketing.dashboard': '/admin/marketing',
    'admin.marketing.vouchers.index': '/admin/marketing/vouchers',
    'admin.marketing.vouchers.create': '/admin/marketing/vouchers/create',
    'admin.marketing.vouchers.store': '/admin/marketing/vouchers',
    'admin.marketing.vouchers.edit': '/admin/marketing/vouchers/{id}/edit',
    'admin.marketing.vouchers.update': '/admin/marketing/vouchers/{id}',
    'admin.marketing.vouchers.destroy': '/admin/marketing/vouchers/{id}',
    'admin.marketing.vouchers.toggle': '/admin/marketing/vouchers/{id}/toggle',
    'admin.marketing.vouchers.usages': '/admin/marketing/vouchers/{id}/usages',

    'admin.digital-products.index': '/admin/digital-products',
    'admin.digital-products.create': '/admin/digital-products/create',
    'admin.digital-products.store': '/admin/digital-products',
    'admin.digital-products.show': '/admin/digital-products/{id}',
    'admin.digital-products.edit': '/admin/digital-products/{id}/edit',
    'admin.digital-products.update': '/admin/digital-products/{id}',
    'admin.digital-products.destroy': '/admin/digital-products/{id}',
    'admin.digital-products.purchases': '/admin/digital-products/{id}/purchases',

    'admin.inventory.index': '/admin/inventory',
    'admin.inventory.items': '/admin/inventory/items',
    'admin.inventory.skus': '/admin/inventory/skus',
    'admin.inventory.produce': '/admin/inventory/produce',
    'admin.inventory.movements': '/admin/inventory/movements',

    'admin.lapor.index': '/admin/lapor',
    'admin.lapor.rekap': '/admin/lapor/rekap',
    'admin.lapor.gudang': '/admin/lapor/gudang',
    'admin.lapor.kain': '/admin/lapor/produksi-kain',
    'admin.lapor.perlengkapan': '/admin/lapor/produksi-perlengkapan',
    'admin.lapor.barang': '/admin/lapor/barang-masuk',

    'admin.finance.reports': '/admin/finance/reports',

    'admin.users.index': '/admin/users',
    'admin.users.store': '/admin/users',
    'admin.users.update': '/admin/users/{id}',
    'admin.users.destroy': '/admin/users/{id}',

    'admin.affiliates.index': '/admin/affiliates',
    'admin.resellers.index': '/admin/resellers',
    'admin.partners.index': '/admin/affiliates',

    'admin.saas.rukunku.index': '/admin/saas/rukunku',
    'admin.saas.surat-rt.index': '/admin/saas/surat-rt',

    'admin.customers.index': '/admin/customers',

    'admin.landings.index': '/admin/landings',
    'admin.landings.create': '/admin/landings/create',
    'admin.landings.store': '/admin/landings',
    'admin.landings.edit': '/admin/landings/{id}/edit',
    'admin.landings.update': '/admin/landings/{id}',
    'admin.landings.destroy': '/admin/landings/{id}',

    'logout': '/logout',
    'login': '/login',
};

function nameToPath(name) {
    if (ROUTE_MAP[name]) return ROUTE_MAP[name];
    // Fallback: 'admin.foo.bar.index' -> '/admin/foo/bar'
    const segs = String(name ?? '').split('.');
    if (['index', 'store', 'show'].includes(segs[segs.length - 1])) segs.pop();
    return '/' + segs.join('/');
}

function fill(path, params) {
    let rest = {};
    let out = path;

    if (params === undefined || params === null) {
        // tidak ada parameter
    } else if (typeof params === 'object' && !Array.isArray(params)) {
        rest = { ...params };
    } else {
        // Nilai tunggal (id / slug)
        const first = out.match(/\{([^}]+)\}/);
        if (first) { out = out.replace(first[0], encodeURIComponent(params)); }
        else { out = `${out}/${encodeURIComponent(params)}`; }
    }

    out = out.replace(/\{([^}?]+)\??\}/g, (m, key) => {
        if (key in rest) {
            const v = rest[key];
            delete rest[key];
            return encodeURIComponent(v && typeof v === 'object' ? (v.id ?? v.slug ?? '') : v);
        }
        return '';
    }).replace(/\/{2,}/g, '/').replace(/\/$/, '') || '/';

    const qs = new URLSearchParams();
    Object.entries(rest).forEach(([k, v]) => {
        if (v === undefined || v === null || v === '') return;
        if (Array.isArray(v)) v.forEach(x => qs.append(`${k}[]`, x));
        else qs.append(k, typeof v === 'object' ? (v.id ?? '') : v);
    });
    const q = qs.toString();
    return q ? `${out}?${q}` : out;
}

export function installGlobals() {
    const route = (name, params) => {
        try {
            if (name === undefined) {
                // route().current(...) dan sejenisnya
                return {
                    current: (pattern) => {
                        const here = (window.location.hash || '').replace(/^#/, '');
                        if (!pattern) return here;
                        return here.startsWith(nameToPath(pattern));
                    },
                    params: {},
                };
            }
            return fill(nameToPath(name), params);
        } catch {
            return '/admin/dashboard';
        }
    };
    route.current = (pattern) => {
        const here = (window.location.hash || '').replace(/^#/, '');
        if (!pattern) return here;
        return here.startsWith(nameToPath(pattern));
    };
    route.has = (name) => name in ROUTE_MAP;
    window.route = route;

    // Stub axios: tidak pernah menembak jaringan.
    const respond = (data = {}) => Promise.resolve({ data, status: 200, statusText: 'OK (demo)', headers: {}, config: {} });
    const stub = {
        get: (url) => {
            // Landing editor mengambil isi file lewat axios.
            if (/file|source|content/i.test(String(url))) {
                return respond({ content: '<!-- Konten file hanya tersedia di sistem asli. -->', editable: true, type: 'html' });
            }
            return respond({});
        },
        post: () => respond({ ok: true }),
        put: () => respond({ ok: true }),
        patch: () => respond({ ok: true }),
        delete: () => respond({ ok: true }),
        defaults: { headers: { common: {} } },
    };
    window.axios = stub;

    // fetch di-intercept hanya untuk endpoint dashboard demo.
    const realFetch = window.fetch?.bind(window);
    window.fetch = (input, init) => {
        const url = typeof input === 'string' ? input : input?.url ?? '';
        if (url.includes('/admin/dashboard/revenue')) {
            return Promise.resolve(new Response(JSON.stringify(window.__DEMO_REVENUE__ ?? { total: 0, profit: 0, order_count: 0 }), { headers: { 'Content-Type': 'application/json' } }));
        }
        if (url.includes('/admin/dashboard/chart')) {
            return Promise.resolve(new Response(JSON.stringify({ series: window.__DEMO_SERIES__ ?? [] }), { headers: { 'Content-Type': 'application/json' } }));
        }
        if (url.startsWith('/admin') || url.startsWith('/api')) {
            return Promise.resolve(new Response('{}', { headers: { 'Content-Type': 'application/json' } }));
        }
        return realFetch ? realFetch(input, init) : Promise.reject(new Error('fetch tidak tersedia'));
    };
}

// Pasang otomatis saat modul dievaluasi (sebelum modul halaman kOS).
installGlobals();
