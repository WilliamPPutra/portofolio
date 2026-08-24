/**
 * Peta rute demo: path aplikasi asli -> komponen halaman kOS + props simulasi.
 * Komponen di bawah diimpor langsung dari repo kOS (alias '@'), tanpa dimodifikasi.
 */
import * as D from './data/seed';

// ── Halaman asli kOS ────────────────────────────────────────────────
import Dashboard from '@/Pages/Admin/Dashboard';
import ProductsIndex from '@/Pages/Admin/Products/Index';
import ProductsCreate from '@/Pages/Admin/Products/Create';
import ProductsEdit from '@/Pages/Admin/Products/Edit';
import ProductsShow from '@/Pages/Admin/Products/Show';
import CategoriesIndex from '@/Pages/Admin/Categories/Index';
import BrandsIndex from '@/Pages/Admin/Brands/Index';
import OrdersIndex from '@/Pages/Admin/Orders/Index';
import OrdersCreate from '@/Pages/Admin/Orders/Create';
import OrdersShow from '@/Pages/Admin/Orders/Show';
import MarketingDashboard from '@/Pages/Admin/Marketing/Dashboard';
import VouchersIndex from '@/Pages/Admin/Marketing/Vouchers/Index';
import VouchersCreate from '@/Pages/Admin/Marketing/Vouchers/Create';
import VouchersEdit from '@/Pages/Admin/Marketing/Vouchers/Edit';
import VouchersUsages from '@/Pages/Admin/Marketing/Vouchers/Usages';
import DigitalIndex from '@/Pages/Admin/DigitalProducts/Index';
import DigitalCreate from '@/Pages/Admin/DigitalProducts/Create';
import DigitalEdit from '@/Pages/Admin/DigitalProducts/Edit';
import DigitalShow from '@/Pages/Admin/DigitalProducts/Show';
import DigitalPurchases from '@/Pages/Admin/DigitalProducts/Purchases';
import InventoryIndex from '@/Pages/Admin/Inventory/Index';
import InventoryItems from '@/Pages/Admin/Inventory/Items/Index';
import InventorySkus from '@/Pages/Admin/Inventory/Skus/Index';
import InventoryProduce from '@/Pages/Admin/Inventory/Produce';
import InventoryMovements from '@/Pages/Admin/Inventory/Movements';
import FieldHub from '@/Pages/Admin/Field/Hub';
import FieldRekap from '@/Pages/Admin/Field/Rekap';
import FieldGudang from '@/Pages/Admin/Field/Gudang';
import FieldProduksi from '@/Pages/Admin/Field/Produksi';
import FieldBarangMasuk from '@/Pages/Admin/Field/BarangMasuk';
import FinanceReports from '@/Pages/Admin/Finance/Reports';
import UsersIndex from '@/Pages/Admin/Users/Index';
import PartnersIndex from '@/Pages/Admin/Partners/Index';
import RukunkuIndex from '@/Pages/Admin/Saas/Rukunku/Index';
import SuratRtIndex from '@/Pages/Admin/Saas/SuratRt/Index';
import CustomersIndex from '@/Pages/Admin/Customers/Index';
import LandingsIndex from '@/Pages/Admin/Landings/Index';
import LandingsEdit from '@/Pages/Admin/Landings/Edit';

const num = (v, fb = null) => (v === null || v === undefined || v === '' ? fb : Number(v));

// ── Definisi rute ───────────────────────────────────────────────────
// pattern: segmen diawali ':' berarti parameter.
export const routes = [
    {
        pattern: '/admin/dashboard',
        title: 'Dashboard',
        component: Dashboard,
        props: (q) => ({
            stats: D.dashboardStats,
            recentOrders: D.recentOrders,
            lowStock: D.lowStock,
            filter: { from: D.ymd(29), to: D.ymd(0) },
            charts: D.dashboardCharts,
            brands: D.brandsLite,
            brandId: num(q.brand_id),
        }),
    },

    // ── Produk ──
    {
        pattern: '/admin/products',
        title: 'Produk',
        component: ProductsIndex,
        props: (q) => {
            const bid = num(q.brand_id);
            const list = bid ? D.products.filter(p => p.brand_id === bid) : D.products;
            return { products: D.paginate(list, 20, '/admin/products'), brands: D.brandsLite, brandId: bid };
        },
    },
    {
        pattern: '/admin/products/create',
        title: 'Tambah Produk',
        component: ProductsCreate,
        props: () => ({ categories: D.categories, brands: D.brandsNameOnly }),
    },
    {
        pattern: '/admin/products/:id/edit',
        title: 'Edit Produk',
        component: ProductsEdit,
        props: (q, p) => ({
            product: D.products.find(x => x.id === Number(p.id)) ?? D.products[0],
            categories: D.categories,
            brands: D.brandsNameOnly,
        }),
    },
    {
        pattern: '/admin/products/:id',
        title: 'Detail Produk',
        component: ProductsShow,
        props: (q, p) => ({ product: D.products.find(x => x.id === Number(p.id)) ?? D.products[0] }),
    },
    {
        pattern: '/admin/categories',
        title: 'Kategori',
        component: CategoriesIndex,
        props: (q) => ({
            categories: q.brand_id ? D.categories.filter(c => String(c.brand_id) === String(q.brand_id)) : D.categories,
            brands: D.brandsNameOnly,
            filterBrandId: q.brand_id ?? null,
        }),
    },
    {
        pattern: '/admin/brands',
        title: 'Brand',
        component: BrandsIndex,
        props: () => ({
            brands: D.brands.map(b => ({ ...b, orders_count: D.orders.filter(o => o.brand_id === b.id).length })),
        }),
    },

    // ── Pesanan ──
    {
        pattern: '/admin/orders',
        title: 'Pesanan',
        component: OrdersIndex,
        props: (q) => {
            const source = q.source ?? 'marketplace';
            const bid = num(q.brand_id);
            let list = D.orders.filter(o => o.source === source);
            if (q.platform) list = list.filter(o => o.platform === q.platform);
            if (bid) list = list.filter(o => o.brand_id === bid);
            if (q.status) list = list.filter(o => o.status === q.status);
            const statusCounts = {};
            list.forEach(o => { statusCounts[o.status] = (statusCounts[o.status] ?? 0) + 1; });
            return {
                orders: D.paginate(list, 20, '/admin/orders'),
                source,
                platform: q.platform ?? null,
                brandId: bid,
                brands: D.brands.map(b => ({
                    id: b.id, name: b.name, color: b.color, slug: b.slug,
                    pending_count: D.orders.filter(o => o.brand_id === b.id && o.status === 'pending').length,
                })),
                filters: { status: q.status ?? null, search: q.search ?? null },
                statusLabels: D.statusLabels,
                statusColors: D.statusColors,
                counts: {
                    marketplace: D.orders.filter(o => o.source === 'marketplace').length,
                    web: D.orders.filter(o => o.source === 'web').length,
                    manual: D.orders.filter(o => o.source === 'manual').length,
                },
                platformCounts: {
                    shopee: D.orders.filter(o => o.platform === 'shopee').length,
                    tiktok_shop: D.orders.filter(o => o.platform === 'tiktok_shop').length,
                },
                statusCounts,
            };
        },
    },
    {
        pattern: '/admin/orders/create',
        title: 'Buat Pesanan',
        component: OrdersCreate,
        props: (q) => ({
            source: q.source ?? 'manual',
            products: D.products,
            brands: D.brandsLite,
            statusLabels: D.statusLabels,
        }),
    },
    {
        pattern: '/admin/orders/:id',
        title: 'Detail Pesanan',
        component: OrdersShow,
        props: (q, p) => ({ order: D.orderById(p.id), statusLabels: D.statusLabels, statusColors: D.statusColors }),
    },

    // ── Marketing ──
    {
        pattern: '/admin/marketing',
        title: 'Marketing',
        component: MarketingDashboard,
        props: () => ({ stats: D.marketingStats, topVouchers: D.topVouchers, usageChart: D.voucherUsageChart }),
    },
    {
        pattern: '/admin/marketing/vouchers',
        title: 'Voucher',
        component: VouchersIndex,
        props: () => ({ vouchers: D.paginate(D.vouchersWithCounts, 20, '/admin/marketing/vouchers') }),
    },
    {
        pattern: '/admin/marketing/vouchers/create',
        title: 'Buat Voucher',
        component: VouchersCreate,
        props: () => ({
            brands: D.brandsNameOnly,
            products: D.products.map(p => ({ id: p.id, name: p.name })),
            digitalProducts: D.digitalProducts.filter(p => p.price > 0).map(p => ({ id: p.id, name: p.name })),
        }),
    },
    {
        pattern: '/admin/marketing/vouchers/:id/edit',
        title: 'Edit Voucher',
        component: VouchersEdit,
        props: (q, p) => ({
            voucher: { ...D.voucherById(p.id), product_ids: [1, 2, 3], digital_product_ids: [1] },
            brands: D.brandsNameOnly,
            products: D.products.map(x => ({ id: x.id, name: x.name })),
            digitalProducts: D.digitalProducts.filter(x => x.price > 0).map(x => ({ id: x.id, name: x.name })),
        }),
    },
    {
        pattern: '/admin/marketing/vouchers/:id/usages',
        title: 'Penggunaan Voucher',
        component: VouchersUsages,
        props: (q, p) => ({
            voucher: D.voucherById(p.id),
            usages: D.paginate(D.voucherUsages, 50, '/admin/marketing/vouchers'),
        }),
    },

    // ── Produk digital ──
    {
        pattern: '/admin/digital-products',
        title: 'Produk Digital',
        component: DigitalIndex,
        props: (q) => {
            const bid = num(q.brand_id);
            const list = bid ? D.digitalProductsWithCounts.filter(p => p.brand_id === bid) : D.digitalProductsWithCounts;
            return { products: D.paginate(list, 20, '/admin/digital-products'), brands: D.brandsLite, brandId: bid };
        },
    },
    {
        pattern: '/admin/digital-products/create',
        title: 'Tambah Ebook',
        component: DigitalCreate,
        props: () => ({ brands: D.brandsNameOnly }),
    },
    {
        pattern: '/admin/digital-products/:id/edit',
        title: 'Edit Ebook',
        component: DigitalEdit,
        props: (q, p) => ({ product: D.digitalProductById(p.id), brands: D.brandsNameOnly }),
    },
    {
        pattern: '/admin/digital-products/:id/purchases',
        title: 'Pembelian Ebook',
        component: DigitalPurchases,
        props: (q, p) => {
            const prod = D.digitalProductById(p.id);
            return {
                product: { id: prod.id, name: prod.name, slug: prod.slug, price: prod.price },
                purchases: D.paginate(D.digitalPurchases, 50, '/admin/digital-products'),
                stats: {
                    paid_count: D.digitalPurchases.filter(x => x.status === 'paid').length,
                    pending_count: D.digitalPurchases.filter(x => x.status === 'pending').length,
                    revenue: D.digitalPurchases.filter(x => x.status === 'paid').reduce((s, x) => s + x.amount, 0),
                },
            };
        },
    },
    {
        pattern: '/admin/digital-products/:id',
        title: 'Detail Ebook',
        component: DigitalShow,
        props: (q, p) => ({
            product: { ...D.digitalProductById(p.id), downloads_count: 1284 },
            downloads: D.paginate(D.digitalDownloads, 50, '/admin/digital-products'),
            sort: q.sort ?? 'downloaded_at',
            dir: q.dir ?? 'desc',
        }),
    },

    // ── Inventori ──
    {
        pattern: '/admin/inventory',
        title: 'Inventori',
        component: InventoryIndex,
        props: () => ({
            stats: D.inventoryStats,
            skuByBrand: D.skuByBrand,
            alertItems: D.alertItems,
            alertSkus: D.alertSkus,
            recentMovements: D.invMovements.slice(0, 15),
        }),
    },
    {
        pattern: '/admin/inventory/items',
        title: 'Bahan Baku',
        component: InventoryItems,
        props: (q) => ({
            items: q.category_id ? D.invItems.filter(i => String(i.category_id) === String(q.category_id)) : D.invItems,
            categories: D.invCategories,
            allItems: D.allInvItems,
            filters: { category_id: num(q.category_id), search: q.search ?? null },
        }),
    },
    {
        pattern: '/admin/inventory/skus',
        title: 'SKU Produk',
        component: InventorySkus,
        props: (q) => ({
            skus: q.brand_id ? D.invSkus.filter(s => String(s.brand_id) === String(q.brand_id)) : D.invSkus,
            brands: D.brandsLite,
            allItems: D.allInvItems,
            allSkus: D.allSkusLite,
            filters: { brand_id: num(q.brand_id), search: q.search ?? null },
        }),
    },
    {
        pattern: '/admin/inventory/produce',
        title: 'Produksi',
        component: InventoryProduce,
        props: () => ({
            itemsWithRecipe: D.invItems.filter(i => i.recipes.length > 0),
            skus: D.invSkus,
            allItems: D.allInvItemsFull,
            categories: D.invCategories,
        }),
    },
    {
        pattern: '/admin/inventory/movements',
        title: 'Riwayat Stok',
        component: InventoryMovements,
        props: (q) => ({
            movements: D.paginate(
                q.type ? D.invMovements.filter(m => m.type === q.type) : D.invMovements,
                50, '/admin/inventory/movements',
            ),
            filters: { type: q.type ?? null, search: q.search ?? null, date: q.date ?? null },
        }),
    },

    // ── Input lapangan ──
    {
        pattern: '/admin/lapor',
        title: 'Beranda Lapangan',
        component: FieldHub,
        props: () => ({ cards: D.fieldCards, recent: D.fieldRecent(8) }),
    },
    {
        pattern: '/admin/lapor/rekap',
        title: 'Rekap Lapangan',
        component: FieldRekap,
        props: (q) => ({
            period: q.period ?? '7d',
            summary: { masuk: 1840, keluar: 962, produksi: 1274, total: 128 },
            daily: Array.from({ length: 7 }, (_, i) => ({ label: D.ymd(6 - i).slice(8) + '/' + D.ymd(6 - i).slice(5, 7), count: 8 + ((i * 5) % 17) })),
            pics: [
                { name: 'Ahmad Fauzi', count: 48 },
                { name: 'Bagas Pratama', count: 36 },
                { name: 'Siti Marwah', count: 29 },
                { name: 'Sistem', count: 15 },
            ],
            recent: D.fieldRecent(15, true),
        }),
    },
    {
        pattern: '/admin/lapor/gudang',
        title: 'Stok Gudang',
        component: FieldGudang,
        props: () => ({ variants: D.fieldVariants, recent: D.fieldRecent(12) }),
    },
    {
        pattern: '/admin/lapor/produksi-kain',
        title: 'Produksi Kain',
        component: FieldProduksi,
        props: () => ({ mode: 'kain', items: D.fieldItems, recent: D.fieldRecent(12) }),
    },
    {
        pattern: '/admin/lapor/produksi-perlengkapan',
        title: 'Produksi Perlengkapan',
        component: FieldProduksi,
        props: () => ({ mode: 'perlengkapan', items: D.fieldItems, recent: D.fieldRecent(12) }),
    },
    {
        pattern: '/admin/lapor/barang-masuk',
        title: 'Barang Masuk',
        component: FieldBarangMasuk,
        props: () => ({
            items: D.fieldItems,
            categories: D.invCategories.map(c => ({ id: c.id, name: c.name })),
            recent: D.fieldRecent(12),
        }),
    },

    // ── Keuangan ──
    {
        pattern: '/admin/finance/reports',
        title: 'Laporan Keuangan',
        component: FinanceReports,
        props: (q) => ({
            filters: { from: q.from ?? D.ymd(29), to: q.to ?? D.ymd(0), brand_id: q.brand_id ?? null, source: q.source ?? null },
            brands: D.brandsNameOnly,
            summary: D.financeSummary,
            perBrand: D.financePerBrand,
            perSource: D.financePerSource,
            daily: D.financeDaily,
            topProducts: D.financeTopProducts,
        }),
    },

    // ── Tim & akses ──
    {
        pattern: '/admin/users',
        title: 'Pengguna',
        component: UsersIndex,
        props: () => ({ users: D.users, roles: D.roles, modules: D.fieldModules, csPin: '482913' }),
    },
    {
        pattern: '/admin/affiliates',
        title: 'Affiliate',
        component: PartnersIndex,
        props: () => {
            const partners = D.makePartners('affiliate');
            return {
                type: 'affiliate',
                partners,
                totals: {
                    count: partners.length,
                    commission_pending: partners.reduce((s, p) => s + p.commission_pending, 0),
                    sales: partners.reduce((s, p) => s + p.sales, 0),
                },
            };
        },
    },
    {
        pattern: '/admin/resellers',
        title: 'Reseller',
        component: PartnersIndex,
        props: () => {
            const partners = D.makePartners('reseller');
            return {
                type: 'reseller',
                partners,
                totals: {
                    count: partners.length,
                    commission_pending: partners.reduce((s, p) => s + p.commission_pending, 0),
                    sales: partners.reduce((s, p) => s + p.sales, 0),
                },
            };
        },
    },

    // ── SaaS ──
    {
        pattern: '/admin/saas/rukunku',
        title: 'Rukunku',
        component: RukunkuIndex,
        props: (q) => ({
            regions: D.paginate(D.rukunkuRegions, 25, '/admin/saas/rukunku'),
            filters: { q: q.q ?? '' },
            types: D.rukunkuTypes,
        }),
    },
    {
        pattern: '/admin/saas/surat-rt',
        title: 'Generator Surat RT',
        component: SuratRtIndex,
        props: () => ({
            stats: { buyers: D.suratBuyers.length, docs: D.suratDocuments.length, price: 149000, active: true },
            buyers: D.suratBuyers,
            documents: D.suratDocuments,
        }),
    },

    // ── Customer ──
    {
        pattern: '/admin/customers',
        title: 'Customer',
        component: CustomersIndex,
        props: (q) => ({
            customers: D.paginate(D.customers, 50, '/admin/customers'),
            brands: D.brandsLite,
            filters: { brand_id: num(q.brand_id), type: q.type ?? 'all' },
            summary: {
                total_customers: D.customers.length,
                total_spent: D.customers.reduce((s, c) => s + c.total, 0),
            },
        }),
    },

    // ── Landing page ──
    {
        pattern: '/admin/landings',
        title: 'Landing Page',
        component: LandingsIndex,
        props: () => ({
            landings: D.landings,
            brands: D.brandsNameOnly,
            domains: D.landingDomains,
            builtins: D.landingBuiltins,
        }),
    },
    {
        pattern: '/admin/landings/:id/edit',
        title: 'Edit Landing Page',
        component: LandingsEdit,
        props: (q, p) => {
            const l = D.landings.find(x => x.id === Number(p.id)) ?? D.landings[0];
            return {
                landing: l,
                brands: D.brandsNameOnly,
                domains: D.landingDomains,
                files: l.type === 'html'
                    ? [{ path: 'index.html', editable: true }]
                    : [
                        { path: 'index.html', editable: true },
                        { path: 'assets/style.css', editable: true },
                        { path: 'assets/app.js', editable: true },
                        { path: 'assets/hero.jpg', editable: false },
                    ],
                initial: { path: 'index.html', content: D.landingFileSample },
            };
        },
    },
];

// ── Matcher ─────────────────────────────────────────────────────────
export function matchRoute(pathname) {
    const parts = pathname.split('/').filter(Boolean);
    for (const r of routes) {
        const rp = r.pattern.split('/').filter(Boolean);
        if (rp.length !== parts.length) continue;
        const params = {};
        let ok = true;
        for (let i = 0; i < rp.length; i++) {
            if (rp[i].startsWith(':')) params[rp[i].slice(1)] = parts[i];
            else if (rp[i] !== parts[i]) { ok = false; break; }
        }
        if (ok) return { route: r, params };
    }
    return null;
}
