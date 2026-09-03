import Home from '@/Pages/Public/Home';
import ProductDetail from '@/Pages/Public/ProductDetail';
import Checkout from '@/Pages/Public/Checkout';
import * as D from './data/seed';

export const routes = [
    {
        pattern: '/',
        title: 'Beranda',
        match: (path) => (path === '/' || path === '' ? {} : null),
        component: Home,
        props: () => ({ products: D.homeProducts, waNumber: D.waNumber }),
    },
    {
        pattern: '/products/{slug}',
        title: 'Detail produk',
        match: (path) => {
            const m = path.match(/^\/products\/([^/]+)$/);
            return m ? { slug: decodeURIComponent(m[1]) } : null;
        },
        component: ProductDetail,
        props: (query, params) => {
            const found = D.products[params.slug];
            if (!found) throw new Error(`Produk "${params.slug}" tidak ada di data demo.`);
            return found;
        },
    },
    {
        pattern: '/checkout/{slug}',
        title: 'Checkout',
        match: (path) => {
            const m = path.match(/^\/checkout\/([^/]+)$/);
            return m ? { slug: decodeURIComponent(m[1]) } : null;
        },
        component: Checkout,
        props: (query, params) => {
            const found = D.checkouts[params.slug];
            if (!found) throw new Error(`Checkout "${params.slug}" tidak ada di data demo.`);
            return found;
        },
    },
];

export function matchRoute(pathname) {
    for (const route of routes) {
        const params = route.match(pathname);
        if (params) return { route, params };
    }
    return null;
}
