/**
 * Data simulasi untuk demo statis Commerce OS.
 * Semua isi di sini fiktif. Tidak ada data pelanggan asli.
 */

// ── Util ────────────────────────────────────────────────────────────
const pad = n => String(n).padStart(2, '0');
const D = (offsetDays = 0, h = 9, m = 15) => {
    const d = new Date();
    d.setDate(d.getDate() - offsetDays);
    d.setHours(h, m, 0, 0);
    return d;
};
export const iso = (offsetDays = 0, h = 9, m = 15) => D(offsetDays, h, m).toISOString().replace('T', ' ').slice(0, 19);
export const ymd = (offsetDays = 0) => {
    const d = D(offsetDays);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};
const BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
const tgl = (offsetDays = 0) => { const d = D(offsetDays); return `${pad(d.getDate())} ${BULAN[d.getMonth()]} ${d.getFullYear()}`; };
const ddmm = (offsetDays = 0) => { const d = D(offsetDays); return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`; };

// Pseudo-random deterministik supaya angka konsisten setiap kali dibuka.
let _s = 20260824;
const rnd = () => { _s = (_s * 1103515245 + 12345) % 2147483648; return _s / 2147483648; };
const pick = arr => arr[Math.floor(rnd() * arr.length)];
const between = (a, b) => a + Math.floor(rnd() * (b - a + 1));

export function paginate(items, perPage = 20, path = '/admin') {
    const total = items.length;
    const lastPage = Math.max(1, Math.ceil(total / perPage));
    return {
        current_page: 1,
        data: items.slice(0, perPage),
        first_page_url: `${path}?page=1`,
        from: total ? 1 : null,
        last_page: lastPage,
        last_page_url: `${path}?page=${lastPage}`,
        links: [
            { url: null, label: '&laquo; Previous', active: false },
            ...Array.from({ length: lastPage }, (_, i) => ({ url: `${path}?page=${i + 1}`, label: String(i + 1), active: i === 0 })),
            { url: lastPage > 1 ? `${path}?page=2` : null, label: 'Next &raquo;', active: false },
        ],
        next_page_url: lastPage > 1 ? `${path}?page=2` : null,
        path,
        per_page: perPage,
        prev_page_url: null,
        to: Math.min(perPage, total) || null,
        total,
    };
}

// ── Brand ───────────────────────────────────────────────────────────
export const brands = [
    { id: 1, name: 'Kafanku', slug: 'kafanku', color: 'indigo', created_at: iso(400), updated_at: iso(12) },
    { id: 2, name: "Al Ma'tsurat", slug: 'al-matsurat', color: 'emerald', created_at: iso(310), updated_at: iso(9) },
    { id: 3, name: 'Brand Premium', slug: 'brand-premium', color: 'amber', created_at: iso(180), updated_at: iso(4) },
];
export const brandsLite = brands.map(b => ({ id: b.id, name: b.name, color: b.color }));
export const brandsNameOnly = brands.map(b => ({ id: b.id, name: b.name }));
const brandById = id => brands.find(b => b.id === id) ?? null;

// ── Pelanggan (lembaga) ─────────────────────────────────────────────
const BUYERS = [
    { name: 'DKM Al-Ikhlas', phone: '081234500111', email: 'dkm.alikhlas@contoh.id', city: 'Bandung', province: 'Jawa Barat', district: 'Coblong' },
    { name: 'Yayasan Peduli Ummat', phone: '081234500222', email: 'sekretariat@peduliummat.contoh.id', city: 'Jakarta Selatan', province: 'DKI Jakarta', district: 'Tebet' },
    { name: 'Ponpes Darussalam', phone: '081234500333', email: 'admin@darussalam.contoh.id', city: 'Garut', province: 'Jawa Barat', district: 'Tarogong Kidul' },
    { name: 'DKM Masjid Nurul Iman', phone: '081234500444', email: 'nuruliman@contoh.id', city: 'Bekasi', province: 'Jawa Barat', district: 'Bekasi Timur' },
    { name: 'Lazis Amanah Sejahtera', phone: '081234500555', email: 'program@amanahsejahtera.contoh.id', city: 'Surabaya', province: 'Jawa Timur', district: 'Gubeng' },
    { name: 'DKM Baiturrahman', phone: '081234500666', email: 'baiturrahman@contoh.id', city: 'Semarang', province: 'Jawa Tengah', district: 'Banyumanik' },
    { name: 'Yayasan Rumah Tahfidz Insani', phone: '081234500777', email: 'insani@contoh.id', city: 'Yogyakarta', province: 'DI Yogyakarta', district: 'Depok' },
    { name: 'Ponpes Al-Hikmah', phone: '081234500888', email: 'alhikmah@contoh.id', city: 'Cirebon', province: 'Jawa Barat', district: 'Kesambi' },
    { name: 'DKM Al-Muhajirin', phone: '081234500999', email: 'muhajirin@contoh.id', city: 'Depok', province: 'Jawa Barat', district: 'Beji' },
    { name: 'Yayasan Bina Insan Mulia', phone: '081234501010', email: 'binainsan@contoh.id', city: 'Malang', province: 'Jawa Timur', district: 'Lowokwaru' },
    { name: 'Majelis Taklim An-Nur', phone: '081234501111', email: 'annur@contoh.id', city: 'Tangerang', province: 'Banten', district: 'Cipondoh' },
    { name: 'DKM Ar-Rahman', phone: '081234501212', email: 'arrahman@contoh.id', city: 'Bogor', province: 'Jawa Barat', district: 'Bogor Tengah' },
];

// ── Kategori ────────────────────────────────────────────────────────
export const categories = [
    { id: 1, name: 'Kain Kafan', slug: 'kain-kafan', parent_id: null, brand_id: 1, created_at: iso(390), updated_at: iso(30) },
    { id: 2, name: 'Paket Kafan Siap Pakai', slug: 'paket-kafan-siap-pakai', parent_id: 1, brand_id: 1, created_at: iso(380), updated_at: iso(30) },
    { id: 3, name: 'Perlengkapan Jenazah', slug: 'perlengkapan-jenazah', parent_id: null, brand_id: 1, created_at: iso(375), updated_at: iso(28) },
    { id: 4, name: 'Wewangian & Kapur Barus', slug: 'wewangian-kapur-barus', parent_id: 3, brand_id: 1, created_at: iso(370), updated_at: iso(25) },
    { id: 5, name: 'Perlengkapan Masjid', slug: 'perlengkapan-masjid', parent_id: null, brand_id: 2, created_at: iso(300), updated_at: iso(22) },
    { id: 6, name: 'Paket Premium', slug: 'paket-premium', parent_id: null, brand_id: 3, created_at: iso(170), updated_at: iso(10) },
];
categories.forEach(c => {
    c.parent = c.parent_id ? { ...categories.find(x => x.id === c.parent_id), parent: undefined, brand: undefined } : null;
    c.brand = brandById(c.brand_id);
});

// ── Produk ──────────────────────────────────────────────────────────
const PRODUK = [
    { id: 1, name: 'Kain Kafan Katun Primissima 5 Meter', cat: 1, brand: 1, harga: 185000, hpp: 118000, stok: 240 },
    { id: 2, name: 'Paket Kafan Siap Pakai Pria Lengkap', cat: 2, brand: 1, harga: 465000, hpp: 298000, stok: 86 },
    { id: 3, name: 'Paket Kafan Siap Pakai Wanita Lengkap', cat: 2, brand: 1, harga: 495000, hpp: 316000, stok: 74 },
    { id: 4, name: 'Kain Kafan Katun Halus 12 Meter', cat: 1, brand: 1, harga: 395000, hpp: 252000, stok: 132 },
    { id: 5, name: 'Set Perlengkapan Memandikan Jenazah', cat: 3, brand: 1, harga: 275000, hpp: 172000, stok: 41 },
    { id: 6, name: 'Kapur Barus Kristal 250 gram', cat: 4, brand: 1, harga: 45000, hpp: 24000, stok: 9 },
    { id: 7, name: 'Minyak Wangi Non Alkohol 30 ml', cat: 4, brand: 1, harga: 38000, hpp: 19000, stok: 0 },
    { id: 8, name: 'Kain Kafan Sutra Halus Premium 12 Meter', cat: 6, brand: 3, harga: 875000, hpp: 560000, stok: 23 },
    { id: 9, name: 'Paket Kafan Premium Eksklusif', cat: 6, brand: 3, harga: 1250000, hpp: 790000, stok: 12 },
    { id: 10, name: 'Sajadah Masjid Roll 1 Meter', cat: 5, brand: 2, harga: 165000, hpp: 98000, stok: 156 },
    { id: 11, name: 'Mukena Katun Jepang Dewasa', cat: 5, brand: 2, harga: 210000, hpp: 128000, stok: 68 },
    { id: 12, name: 'Keranda Jenazah Aluminium Lipat', cat: 3, brand: 1, harga: 2450000, hpp: 1680000, stok: 4 },
    { id: 13, name: 'Kain Kafan Katun Ekonomis 5 Meter', cat: 1, brand: 1, harga: 125000, hpp: 78000, stok: 310 },
    { id: 14, name: 'Set Kapan Bayi & Anak', cat: 2, brand: 1, harga: 185000, hpp: 112000, stok: 6 },
    { id: 15, name: 'Buku Panduan Pengurusan Jenazah', cat: 3, brand: 2, harga: 65000, hpp: 32000, stok: 92 },
];

const variantOf = (p, idx, suffix, priceDelta = 0, stockShare = 1) => ({
    id: p.id * 10 + idx,
    product_id: p.id,
    name: suffix,
    sku: `KFN-${pad(p.id)}${idx}`,
    price: p.harga + priceDelta,
    compare_price: p.harga + priceDelta + 40000,
    hpp: p.hpp + Math.round(priceDelta * 0.6),
    wholesale_enabled: true,
    wholesale_price: Math.round((p.harga + priceDelta) * 0.86),
    wholesale_min_qty: 12,
    reseller_enabled: idx === 1,
    reseller_price: Math.round((p.harga + priceDelta) * 0.8),
    reseller_min_qty: 24,
    stock: Math.round(p.stok * stockShare),
    weight: 800 + idx * 250,
    is_active: true,
    deleted_at: null,
    created_at: iso(300 - p.id),
    updated_at: iso(p.id),
});

export const products = PRODUK.map(p => {
    const variants = [
        variantOf(p, 1, 'Standar', 0, 0.6),
        variantOf(p, 2, 'Isi 3 (Hemat)', Math.round(p.harga * 1.8), 0.4),
    ];
    return {
        id: p.id,
        name: p.name,
        slug: p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
        description: `${p.name}. Bahan pilihan, jahitan rapi, siap pakai untuk kebutuhan DKM, yayasan, dan pesantren. Tersedia harga khusus pembelian grosir.`,
        category_id: p.cat,
        brand_id: p.brand,
        is_active: p.id !== 7,
        deleted_at: null,
        created_at: iso(300 - p.id),
        updated_at: iso(p.id),
        category: categories.find(c => c.id === p.cat) ?? null,
        brand: brandById(p.brand),
        primary_image: { id: p.id, product_id: p.id, url: '', order: 0, is_primary: true, created_at: iso(300), updated_at: iso(30) },
        images: [
            { id: p.id * 10 + 1, product_id: p.id, url: '', order: 0, is_primary: true, created_at: iso(300), updated_at: iso(30) },
            { id: p.id * 10 + 2, product_id: p.id, url: '', order: 1, is_primary: false, created_at: iso(300), updated_at: iso(30) },
        ],
        variants,
    };
});
const productById = id => products.find(p => p.id === id) ?? products[0];

// ── Pesanan ─────────────────────────────────────────────────────────
const STATUSES = ['pending', 'confirmed', 'processing', 'label_printed', 'shipped', 'delivered', 'completed', 'cancelled'];
export const statusLabels = {
    pending_payment: 'Menunggu Pembayaran', pending: 'Pending', confirmed: 'Dikonfirmasi',
    processing: 'Diproses', label_printed: 'Label Dicetak', shipped: 'Dikirim',
    delivered: 'Diterima', completed: 'Selesai', cancelled: 'Dibatalkan',
    returned: 'Retur', expired: 'Kedaluwarsa',
};
export const statusColors = {
    pending_payment: 'orange', pending: 'yellow', confirmed: 'blue', processing: 'indigo',
    label_printed: 'teal', shipped: 'purple', delivered: 'teal', completed: 'green',
    cancelled: 'red', returned: 'orange', expired: 'gray',
};

const SOURCES = ['marketplace', 'web', 'manual'];
const PLATFORMS = { marketplace: ['shopee', 'tiktok_shop'], web: [null], manual: [null] };
const KURIR = [['jne', 'REG'], ['sicepat', 'BEST'], ['jnt', 'EZ'], ['anteraja', 'Reguler']];

export const orders = Array.from({ length: 48 }, (_, i) => {
    const buyer = BUYERS[i % BUYERS.length];
    const source = SOURCES[i % 3];
    const platform = pick(PLATFORMS[source]);
    const brand = brands[i % 3];
    const status = i < 4 ? 'pending' : STATUSES[between(0, STATUSES.length - 1)];
    const items = Array.from({ length: between(1, 3) }, (_, k) => {
        const p = productById(between(1, 15));
        const v = p.variants[k % 2];
        const qty = between(2, 25);
        return {
            id: (i + 1) * 100 + k,
            order_id: i + 1,
            product_variant_id: v.id,
            product_name: p.name,
            variant_name: v.name,
            sku: v.sku,
            qty,
            price: v.price,
            hpp: v.hpp,
            subtotal: v.price * qty,
            created_at: iso(i, 10, 5),
            updated_at: iso(i, 10, 5),
            variant: { ...v, product: { ...p, variants: undefined, images: undefined } },
        };
    });
    const subtotal = items.reduce((s, it) => s + it.subtotal, 0);
    const hpp_total = items.reduce((s, it) => s + it.hpp * it.qty, 0);
    const shipping_cost = between(18000, 145000);
    const voucher_discount = i % 5 === 0 ? 50000 : 0;
    const [courier, service] = KURIR[i % 4];
    const paid = !['pending', 'cancelled'].includes(status);
    return {
        id: i + 1,
        order_number: `KFN-${ymd(i).replace(/-/g, '')}-${pad(i + 1)}`,
        source,
        brand_id: brand.id,
        partner_id: i % 7 === 0 ? 2 : null,
        revenue_source: source === 'marketplace' ? 'marketplace' : 'direct',
        platform,
        ext_order_id: platform ? `${platform.toUpperCase()}-${900000 + i}` : null,
        customer_name: buyer.name,
        customer_phone: buyer.phone,
        customer_email: buyer.email,
        customer_address: `Jl. Melati Raya No. ${between(1, 90)}, RT 0${between(1, 9)}/RW 0${between(1, 9)}`,
        customer_district: buyer.district,
        customer_city: buyer.city,
        customer_province: buyer.province,
        customer_postal_code: String(between(10000, 69999)),
        courier,
        courier_service: service,
        tracking_number: paid ? `${courier.toUpperCase()}${between(100000000, 999999999)}` : null,
        shipping_cost,
        subtotal,
        admin_fee: source === 'marketplace' ? Math.round(subtotal * 0.045) : 0,
        affiliate_commission: i % 7 === 0 ? Math.round(subtotal * 0.05) : 0,
        commission_paid: i % 14 === 0,
        voucher_discount,
        total: subtotal + shipping_cost - voucher_discount,
        hpp_total,
        status,
        payment_method: source === 'manual' ? 'transfer' : pick(['qris', 'va_bca', 'cod', 'transfer']),
        cod_amount: 0,
        notes: i % 6 === 0 ? 'Mohon dikirim sebelum Jumat, untuk kegiatan santunan.' : null,
        created_by: 1,
        xendit_invoice_id: null,
        xendit_payment_url: null,
        payment_channel: paid ? 'QRIS' : null,
        paid_at: paid ? iso(i, 11, 30) : null,
        biteship_order_id: null,
        resi: paid ? `${courier.toUpperCase()}${between(100000000, 999999999)}` : null,
        voucher_code: voucher_discount ? 'BERKAH50' : null,
        voucher_id: voucher_discount ? 1 : null,
        discount_amount: voucher_discount,
        created_at: iso(i, 10, 5),
        updated_at: iso(Math.max(0, i - 1), 16, 40),
        items,
        creator: { id: 1, name: 'William Pradana', email: 'william@portal-demo.id', email_verified_at: iso(400), role: 'admin', field_modules: null, created_at: iso(400), updated_at: iso(3) },
        brand,
        logs: [
            { id: (i + 1) * 10 + 1, order_id: i + 1, status, note: 'Status diperbarui otomatis oleh sistem.', created_by: 1, created_at: iso(i, 14, 2), updated_at: iso(i, 14, 2), creator: { id: 1, name: 'William Pradana', email: 'william@portal-demo.id', role: 'admin' } },
            { id: (i + 1) * 10 + 2, order_id: i + 1, status: 'pending', note: 'Pesanan dibuat.', created_by: 1, created_at: iso(i, 10, 5), updated_at: iso(i, 10, 5), creator: { id: 1, name: 'William Pradana', email: 'william@portal-demo.id', role: 'admin' } },
        ],
    };
});

export const orderById = id => orders.find(o => o.id === Number(id)) ?? orders[0];

// ── Voucher ─────────────────────────────────────────────────────────
export const vouchers = [
    { id: 1, code: 'BERKAH50', name: 'Diskon Berkah Ramadan', description: 'Potongan tetap untuk pembelian paket kafan minimal 1 juta.', type: 'fixed', value: 50000, min_purchase: 1000000, max_discount: null, product_scope: 'all', applies_to: 'both', brand_id: 1, is_active: true, starts_at: iso(60), expires_at: iso(-30), usage_limit: 500, used_count: 187, deleted_at: null, created_at: iso(70), updated_at: iso(2) },
    { id: 2, code: 'DKM10', name: 'Diskon Khusus DKM', description: 'Potongan 10 persen untuk pengurus masjid.', type: 'percentage', value: 10, min_purchase: 500000, max_discount: 150000, product_scope: 'specific', applies_to: 'physical', brand_id: 1, is_active: true, starts_at: iso(120), expires_at: null, usage_limit: null, used_count: 342, deleted_at: null, created_at: iso(130), updated_at: iso(5) },
    { id: 3, code: 'GRATISONGKIR', name: 'Gratis Ongkir Nasional', description: 'Bebas ongkir untuk pembelian di atas 2 juta.', type: 'free_shipping', value: 0, min_purchase: 2000000, max_discount: 100000, product_scope: 'all', applies_to: 'physical', brand_id: null, is_active: true, starts_at: iso(20), expires_at: iso(-14), usage_limit: 200, used_count: 64, deleted_at: null, created_at: iso(25), updated_at: iso(1) },
    { id: 4, code: 'EBOOKGRATIS', name: 'Ebook Panduan Gratis', description: 'Harga khusus produk digital.', type: 'flat_price', value: 0, min_purchase: 0, max_discount: null, product_scope: 'specific', applies_to: 'digital', brand_id: 2, is_active: false, starts_at: iso(200), expires_at: iso(40), usage_limit: 1000, used_count: 911, deleted_at: null, created_at: iso(210), updated_at: iso(40) },
    { id: 5, code: 'PREMIUM15', name: 'Promo Brand Premium', description: 'Diskon 15 persen paket premium.', type: 'percentage', value: 15, min_purchase: 1500000, max_discount: 300000, product_scope: 'specific', applies_to: 'physical', brand_id: 3, is_active: true, starts_at: iso(10), expires_at: iso(-45), usage_limit: 100, used_count: 23, deleted_at: null, created_at: iso(12), updated_at: iso(1) },
];

export const vouchersWithCounts = vouchers.map(v => ({
    ...v, usages_count: v.used_count, brand: brandById(v.brand_id),
}));

export const voucherById = id => vouchers.find(v => v.id === Number(id)) ?? vouchers[0];

// ── Produk digital ──────────────────────────────────────────────────
export const digitalProducts = [
    { id: 1, name: 'Panduan Lengkap Pengurusan Jenazah', slug: 'panduan-pengurusan-jenazah', landing_url: 'https://contoh.id/panduan', description: 'Ebook 84 halaman untuk pengurus DKM dan relawan.', price: 79000, is_lead_magnet: false, cover_image: null, file_path: 'ebooks/panduan.pdf', brand_id: 1, is_active: true, created_at: iso(220), updated_at: iso(8), deleted_at: null, cover_url: null },
    { id: 2, name: 'Checklist Persiapan Takziah Masjid', slug: 'checklist-takziah', landing_url: null, description: 'Lead magnet gratis untuk membangun database DKM.', price: 0, is_lead_magnet: true, cover_image: null, file_path: 'ebooks/checklist.pdf', brand_id: 1, is_active: true, created_at: iso(190), updated_at: iso(15), deleted_at: null, cover_url: null },
    { id: 3, name: 'Template Dokumen RT/RW Lengkap', slug: 'template-dokumen-rt', landing_url: 'https://contoh.id/template-rt', description: '36 template surat siap pakai untuk pengurus RT dan RW.', price: 149000, is_lead_magnet: false, cover_image: null, file_path: 'ebooks/template-rt.zip', brand_id: 2, is_active: true, created_at: iso(150), updated_at: iso(3), deleted_at: null, cover_url: null },
    { id: 4, name: 'Modul Manajemen Kas Masjid', slug: 'modul-kas-masjid', landing_url: null, description: 'Panduan pembukuan sederhana untuk bendahara masjid.', price: 99000, is_lead_magnet: false, cover_image: null, file_path: 'ebooks/kas-masjid.pdf', brand_id: 2, is_active: true, created_at: iso(120), updated_at: iso(20), deleted_at: null, cover_url: null },
];

export const digitalProductsWithCounts = digitalProducts.map((p, i) => ({
    ...p,
    downloads_count: [1284, 3921, 640, 415][i],
    paid_purchases_count: [412, 0, 288, 176][i],
    brand: brandById(p.brand_id),
    revenue: p.price * [412, 0, 288, 176][i],
}));

export const digitalProductById = id => digitalProducts.find(p => p.id === Number(id)) ?? digitalProducts[0];

export const digitalDownloads = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    digital_product_id: 1,
    name: BUYERS[i % BUYERS.length].name,
    phone: BUYERS[i % BUYERS.length].phone,
    ip_address: `103.${between(1, 250)}.${between(1, 250)}.${between(1, 250)}`,
    downloaded_at: iso(i, 13, 20),
    created_at: iso(i, 13, 20),
    updated_at: iso(i, 13, 20),
}));

export const digitalPurchases = Array.from({ length: 20 }, (_, i) => {
    const b = BUYERS[i % BUYERS.length];
    const status = i % 6 === 0 ? 'pending' : i % 11 === 0 ? 'expired' : 'paid';
    return {
        id: i + 1,
        digital_product_id: 1,
        customer_name: b.name,
        customer_phone: b.phone,
        customer_email: b.email,
        amount: 79000,
        voucher_id: null,
        voucher_code: null,
        discount_amount: 0,
        status,
        access_token: `demo${String(i).padStart(2, '0')}${'x'.repeat(42)}`,
        midtrans_order_id: `EBK-${ymd(i).replace(/-/g, '')}-${pad(i + 1)}`,
        snap_token: null,
        payment_url: null,
        payment_channel: status === 'paid' ? 'QRIS' : null,
        paid_at: status === 'paid' ? iso(i, 15, 10) : null,
        download_count: status === 'paid' ? between(0, 3) : 0,
        download_limit: 3,
        expires_at: iso(-30 + i),
        created_at: iso(i, 14, 55),
        updated_at: iso(i, 15, 10),
    };
});

// ── Inventori ───────────────────────────────────────────────────────
export const invCategories = [
    { id: 1, name: 'Kain Gulungan', slug: 'kain-gulungan', unit: 'meter', sort_order: 1, created_at: iso(300), updated_at: iso(20) },
    { id: 2, name: 'Bahan Jahit', slug: 'bahan-jahit', unit: 'pcs', sort_order: 2, created_at: iso(300), updated_at: iso(20) },
    { id: 3, name: 'Kemasan', slug: 'kemasan', unit: 'pcs', sort_order: 3, created_at: iso(300), updated_at: iso(20) },
    { id: 4, name: 'Wewangian', slug: 'wewangian', unit: 'botol', sort_order: 4, created_at: iso(300), updated_at: iso(20) },
];

const ITEM_SRC = [
    { id: 1, cat: 1, name: 'Kain Katun Primissima Roll', code: 'KN-PRM', unit: 'meter', stock: 1840, min: 500, hpp: 21500 },
    { id: 2, cat: 1, name: 'Kain Katun Ekonomis Roll', code: 'KN-EKO', unit: 'meter', stock: 320, min: 400, hpp: 13800 },
    { id: 3, cat: 1, name: 'Kain Sutra Halus Roll', code: 'KN-SUT', unit: 'meter', stock: 96, min: 120, hpp: 64000 },
    { id: 4, cat: 2, name: 'Benang Jahit Putih', code: 'BJ-PTH', unit: 'roll', stock: 240, min: 60, hpp: 8500 },
    { id: 5, cat: 2, name: 'Tali Pengikat Kafan', code: 'TL-KFN', unit: 'pcs', stock: 4200, min: 1000, hpp: 1200 },
    { id: 6, cat: 3, name: 'Box Kemasan Paket Kafan', code: 'BX-PKT', unit: 'pcs', stock: 380, min: 200, hpp: 6800 },
    { id: 7, cat: 3, name: 'Plastik Vacuum Seal', code: 'PL-VAC', unit: 'pcs', stock: 62, min: 300, hpp: 2400 },
    { id: 8, cat: 4, name: 'Kapur Barus Kristal Curah', code: 'KB-CRH', unit: 'kg', stock: 18, min: 25, hpp: 62000 },
    { id: 9, cat: 4, name: 'Minyak Wangi Non Alkohol Curah', code: 'MW-CRH', unit: 'liter', stock: 0, min: 10, hpp: 185000 },
    { id: 10, cat: 1, name: 'Kain Kafan Potong 5 Meter', code: 'KN-P05', unit: 'pcs', stock: 512, min: 150, hpp: 112000 },
    { id: 11, cat: 1, name: 'Kain Kafan Potong 12 Meter', code: 'KN-P12', unit: 'pcs', stock: 208, min: 100, hpp: 248000 },
];

export const invItems = ITEM_SRC.map(it => ({
    id: it.id,
    category_id: it.cat,
    name: it.name,
    code: it.code,
    unit: it.unit,
    stock: it.stock,
    min_stok: it.min,
    hpp: it.hpp,
    description: null,
    is_active: true,
    created_at: iso(280 - it.id),
    updated_at: iso(it.id),
    category: invCategories.find(c => c.id === it.cat),
    recipes: [],
}));

// Resep produksi: kain potong dibuat dari kain roll.
invItems[9].recipes = [
    { id: 1, output_item_id: 10, input_item_id: 1, qty: 5, created_at: iso(200), updated_at: iso(30), input_item: { ...invItems[0], recipes: undefined, category: undefined } },
    { id: 2, output_item_id: 10, input_item_id: 4, qty: 0.2, created_at: iso(200), updated_at: iso(30), input_item: { ...invItems[3], recipes: undefined, category: undefined } },
];
invItems[10].recipes = [
    { id: 3, output_item_id: 11, input_item_id: 1, qty: 12, created_at: iso(200), updated_at: iso(30), input_item: { ...invItems[0], recipes: undefined, category: undefined } },
    { id: 4, output_item_id: 11, input_item_id: 5, qty: 3, created_at: iso(200), updated_at: iso(30), input_item: { ...invItems[4], recipes: undefined, category: undefined } },
];

export const allInvItems = invItems.map(i => ({ id: i.id, name: i.name, unit: i.unit, code: i.code, category_id: i.category_id }));
export const allInvItemsFull = invItems.map(i => ({ id: i.id, name: i.name, unit: i.unit, stock: i.stock, category_id: i.category_id, code: i.code, category: i.category }));

const SKU_SRC = [
    { id: 1, brand: 1, code: 'SKU-KFP-01', name: 'Paket Kafan Pria Lengkap', toko: 'Gudang Pusat', stock: 86 },
    { id: 2, brand: 1, code: 'SKU-KFW-01', name: 'Paket Kafan Wanita Lengkap', toko: 'Gudang Pusat', stock: 74 },
    { id: 3, brand: 1, code: 'SKU-KN5-01', name: 'Kain Kafan 5 Meter Standar', toko: 'Gudang Pusat', stock: 240 },
    { id: 4, brand: 1, code: 'SKU-KN12-01', name: 'Kain Kafan 12 Meter Halus', toko: 'Gudang Pusat', stock: 132 },
    { id: 5, brand: 3, code: 'SKU-PRM-01', name: 'Paket Kafan Premium Eksklusif', toko: 'Gudang Premium', stock: 12 },
    { id: 6, brand: 2, code: 'SKU-SJD-01', name: 'Sajadah Masjid Roll', toko: 'Gudang Cabang', stock: 156 },
    { id: 7, brand: 1, code: 'SKU-SETB-01', name: 'Set Kafan Bayi & Anak', toko: 'Gudang Pusat', stock: 6 },
    { id: 8, brand: 1, code: 'SKU-PRLK-01', name: 'Set Perlengkapan Memandikan', toko: 'Gudang Pusat', stock: 0 },
];

export const invSkus = SKU_SRC.map(s => ({
    id: s.id,
    brand_id: s.brand,
    code: s.code,
    name: s.name,
    toko: s.toko,
    stock: s.stock,
    is_active: true,
    created_at: iso(260 - s.id),
    updated_at: iso(s.id),
    brand: brandById(s.brand),
    bom: [],
    couples: [],
}));

invSkus[0].bom = [
    { id: 1, sku_id: 1, item_id: 11, qty: 1, created_at: iso(200), updated_at: iso(20), item: { ...invItems[10], recipes: undefined, category: undefined } },
    { id: 2, sku_id: 1, item_id: 5, qty: 5, created_at: iso(200), updated_at: iso(20), item: { ...invItems[4], recipes: undefined, category: undefined } },
    { id: 3, sku_id: 1, item_id: 6, qty: 1, created_at: iso(200), updated_at: iso(20), item: { ...invItems[5], recipes: undefined, category: undefined } },
];
invSkus[1].bom = [
    { id: 4, sku_id: 2, item_id: 11, qty: 1, created_at: iso(200), updated_at: iso(20), item: { ...invItems[10], recipes: undefined, category: undefined } },
    { id: 5, sku_id: 2, item_id: 8, qty: 0.05, created_at: iso(200), updated_at: iso(20), item: { ...invItems[7], recipes: undefined, category: undefined } },
];
invSkus[4].couples = [
    { id: 1, sku_id: 5, component_sku_id: 4, created_at: iso(150), updated_at: iso(15), component_sku: { ...invSkus[3], bom: undefined, couples: undefined, brand: undefined } },
];

export const allSkusLite = invSkus.map(s => ({ id: s.id, code: s.code, name: s.name, brand_id: s.brand_id, stock: s.stock }));

const MOVE_TYPES = ['in', 'out', 'produce', 'assemble', 'correct'];
const demoUser = { id: 1, name: 'William Pradana', email: 'william@portal-demo.id', email_verified_at: iso(400), role: 'admin', field_modules: null, created_at: iso(400), updated_at: iso(3) };
const fieldUser = { id: 4, name: 'Ahmad Fauzi', email: 'ahmad@portal-demo.id', email_verified_at: iso(200), role: 'lapangan', field_modules: ['gudang', 'produksi_kain'], created_at: iso(200), updated_at: iso(5) };

export const invMovements = Array.from({ length: 60 }, (_, i) => {
    const type = MOVE_TYPES[i % 5];
    const isSku = i % 3 === 0;
    const subj = isSku ? invSkus[i % invSkus.length] : invItems[i % invItems.length];
    return {
        id: 1000 - i,
        type,
        subject_type: isSku ? 'sku' : 'item',
        subject_id: subj.id,
        qty: between(2, 180),
        note: i % 4 === 0 ? 'Input dari tim lapangan.' : null,
        created_by: i % 2 ? 1 : 4,
        created_at: iso(Math.floor(i / 3), 8 + (i % 9), (i * 7) % 60),
        creator: i % 2 ? demoUser : fieldUser,
        subject_name: isSku ? `[${subj.code}] ${subj.name}` : subj.name,
        subject_unit: isSku ? 'pcs' : subj.unit,
    };
});

// ── Partner ─────────────────────────────────────────────────────────
const PARTNER_NAMES = ['Ustadz Hasan Basri', 'Ibu Siti Aminah', 'Bapak Sulaiman', 'Ustadzah Nurul Hikmah', 'Bapak Rahmat Hidayat', 'Toko Berkah Amanah', 'CV Sinar Ukhuwah', 'Ibu Fatimah Zahra'];
const BANKS = ['BCA', 'BSI', 'Mandiri', 'BNI'];

export const makePartners = (type) => PARTNER_NAMES.map((name, i) => {
    const sales = between(2_500_000, 68_000_000);
    const rate = type === 'affiliate' ? [5, 7, 10][i % 3] : [12, 15, 18][i % 3];
    const earned = Math.round(sales * rate / 100);
    const paid = Math.round(earned * (i % 3 === 0 ? 1 : 0.6));
    return {
        id: i + 1,
        name,
        phone: `0812345${pad(60 + i)}${pad(i)}`,
        email: `${name.toLowerCase().replace(/[^a-z]+/g, '.')}@contoh.id`,
        referral_code: `${type === 'affiliate' ? 'AFF' : 'RSL'}${pad(i + 1)}${['KFN', 'ALM', 'PRM'][i % 3]}`,
        commission_rate: rate,
        status: i === 2 ? 'pending' : i === 6 ? 'suspended' : 'active',
        bank: `${BANKS[i % 4]} ${between(1000000000, 9999999999)} a.n. ${name}`,
        orders: between(3, 96),
        sales,
        commission_earned: earned,
        commission_paid: paid,
        commission_pending: earned - paid,
        joined: tgl(300 - i * 18),
    };
});

// ── Landing page ────────────────────────────────────────────────────
export const landingDomains = ['pusatkainkafan.com', 'kafanku.id', 'brandpremium.id'];

export const landings = [
    { id: 1, name: 'Paket Kafan Masjid 2026', brand: 'Kafanku', brand_id: '1', category: 'Iklan', type: 'html', mode: 'slug', domain: 'kafanku.id', slug: 'paket-kafan-masjid', subdomain: null, url: 'https://kafanku.id/paket-kafan-masjid', is_active: true, created: tgl(78) },
    { id: 2, name: 'Tripwire Panduan Jenazah', brand: 'Kafanku', brand_id: '1', category: 'Tripwire', type: 'zip', mode: 'subdomain', domain: 'kafanku.id', slug: null, subdomain: 'panduan', url: 'https://panduan.kafanku.id', is_active: true, created: tgl(56) },
    { id: 3, name: 'Katalog Grosir DKM', brand: "Al Ma'tsurat", brand_id: '2', category: 'Toko', type: 'zip', mode: 'root', domain: 'pusatkainkafan.com', slug: null, subdomain: null, url: 'https://pusatkainkafan.com', is_active: true, created: tgl(34) },
    { id: 4, name: 'Promo Paket Premium', brand: 'Brand Premium', brand_id: '3', category: 'Iklan', type: 'html', mode: 'slug', domain: 'brandpremium.id', slug: 'promo-premium', subdomain: null, url: 'https://brandpremium.id/promo-premium', is_active: false, created: tgl(19) },
    { id: 5, name: 'Template Dokumen RT', brand: "Al Ma'tsurat", brand_id: '2', category: 'Produk Digital', type: 'html', mode: 'slug', domain: 'kafanku.id', slug: 'template-rt', subdomain: null, url: 'https://kafanku.id/template-rt', is_active: true, created: tgl(7) },
];

export const landingBuiltins = [
    { key: 'masjidhidup', name: 'Masjid Hidup', brand: 'Kafanku', category: 'Tripwire', url: 'https://kafanku.id/masjid-hidup', is_active: true },
    { key: 'paket-ekonomis', name: 'Paket Ekonomis', brand: 'Kafanku', category: 'Iklan', url: 'https://kafanku.id/paket-ekonomis', is_active: true },
    { key: 'paket-ekonomis-order', name: 'Paket Ekonomis (Order)', brand: 'Kafanku', category: 'Iklan', url: 'https://kafanku.id/paket-ekonomis/order', is_active: true },
    { key: 'kafan-masjid', name: 'Kafan Masjid', brand: 'Kafanku', category: 'Iklan', url: 'https://kafanku.id/kafan-masjid', is_active: true },
    { key: 'template-rt', name: 'Template RT', brand: "Al Ma'tsurat", category: 'Produk Digital', url: 'https://kafanku.id/template-rt', is_active: true },
    { key: 'generator-surat-rt', name: 'Generator Surat RT', brand: "Al Ma'tsurat", category: 'Produk Digital', url: 'https://kafanku.id/generator-surat-rt', is_active: true },
    { key: 'bp-home', name: 'Beranda Brand Premium', brand: 'Brand Premium', category: 'Toko', url: 'https://brandpremium.id', is_active: true },
    { key: 'bp-katalog', name: 'Katalog Brand Premium', brand: 'Brand Premium', category: 'Toko', url: 'https://brandpremium.id/katalog', is_active: true },
    { key: 'bp-tripwire', name: 'Tripwire Brand Premium', brand: 'Brand Premium', category: 'Tripwire', url: 'https://brandpremium.id/promo', is_active: false },
];

export const landingFileSample = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Paket Kafan Masjid 2026</title>
</head>
<body>
    <h1>Paket Kafan Masjid 2026</h1>
    <p>Halaman contoh untuk demo. Konten asli tidak ditampilkan.</p>
</body>
</html>`;

// ── Pengguna ────────────────────────────────────────────────────────
export const users = [
    { id: 1, name: 'William Pradana', email: 'william@portal-demo.id', role: 'admin', role_label: 'Admin', field_modules: [], created_at: iso(400), is_self: true },
    { id: 2, name: 'Rizky Maulana', email: 'rizky@portal-demo.id', role: 'admin', role_label: 'Admin', field_modules: [], created_at: iso(340), is_self: false },
    { id: 3, name: 'Dewi Anggraini', email: 'dewi@portal-demo.id', role: 'operator', role_label: 'Operator', field_modules: [], created_at: iso(280), is_self: false },
    { id: 4, name: 'Ahmad Fauzi', email: 'ahmad@portal-demo.id', role: 'lapangan', role_label: 'Tim Lapangan', field_modules: ['gudang', 'produksi_kain'], created_at: iso(200), is_self: false },
    { id: 5, name: 'Nur Aisyah', email: 'aisyah@portal-demo.id', role: 'cs', role_label: 'CS', field_modules: [], created_at: iso(160), is_self: false },
    { id: 6, name: 'Bagas Pratama', email: 'bagas@portal-demo.id', role: 'admin_gudang', role_label: 'Admin Gudang', field_modules: ['gudang', 'barang_masuk'], created_at: iso(90), is_self: false },
    { id: 7, name: 'Siti Marwah', email: 'marwah@portal-demo.id', role: 'lapangan', role_label: 'Tim Lapangan', field_modules: ['produksi_perlengkapan'], created_at: iso(45), is_self: false },
];
export const roles = { admin: 'Admin', operator: 'Operator', cs: 'CS', lapangan: 'Tim Lapangan', admin_gudang: 'Admin Gudang' };
export const fieldModules = { gudang: 'Stok Gudang', produksi_kain: 'Produksi Kain', produksi_perlengkapan: 'Produksi Perlengkapan', barang_masuk: 'Barang Masuk' };

// ── Customer ────────────────────────────────────────────────────────
export const customers = BUYERS.map((b, i) => ({
    name: b.name,
    phone: b.phone,
    email: b.email,
    brands: [brands[i % 3].name, i % 4 === 0 ? brands[(i + 1) % 3].name : null].filter(Boolean).join(', '),
    types: i % 5 === 0 ? 'Fisik, Digital' : i % 7 === 0 ? 'Digital' : 'Fisik',
    orders: between(1, 18),
    total: between(850_000, 96_000_000),
    last: iso(i * 2, 16, 30),
})).sort((a, b) => (a.last < b.last ? 1 : -1));

// ── SaaS Rukunku ────────────────────────────────────────────────────
const RUKUN_NAMES = [
    ['RT 03 / RW 05 Cipedes', 'rt', 'Bapak Slamet Riyadi'],
    ['RW 08 Sukajadi', 'rw', 'Bapak Herman Susilo'],
    ['Masjid Al-Ikhlas Coblong', 'masjid', 'Ustadz Hasan Basri'],
    ['RT 01 / RW 02 Antapani', 'rt', 'Bapak Dedi Kurnia'],
    ['Masjid Nurul Iman Bekasi', 'masjid', 'Ustadz Abdul Karim'],
    ['RW 04 Tebet Barat', 'rw', 'Ibu Retno Wulandari'],
    ['Paguyuban Warga Griya Asri', 'lainnya', 'Bapak Joko Santoso'],
    ['RT 07 / RW 01 Banyumanik', 'rt', 'Bapak Agus Salim'],
    ['Masjid Baiturrahman Semarang', 'masjid', 'Ustadz Fadhil Rahman'],
    ['RT 05 / RW 03 Lowokwaru', 'rt', 'Ibu Endang Sulastri'],
];
export const rukunkuRegions = RUKUN_NAMES.map(([name, type, leader], i) => ({
    id: i + 1,
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    type,
    type_label: { rt: 'RT', rw: 'RW', masjid: 'Masjid', lainnya: 'Lainnya' }[type],
    leader_name: leader,
    phone: `0813${between(10000000, 99999999)}`,
    pin_plain: i % 4 === 3 ? null : String(between(100000, 999999)),
    address: `Jl. Kenanga No. ${between(1, 60)}`,
    balance: i % 5 === 4 ? -between(150_000, 900_000) : between(500_000, 42_000_000),
    tx_count: between(6, 340),
    item_count: between(2, 28),
    created_at: iso(300 - i * 22, 9, 0),
    public_url: `https://kafanku.id/rukunku/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
}));
export const rukunkuTypes = { rt: 'RT', rw: 'RW', masjid: 'Masjid', lainnya: 'Lainnya' };

// ── SaaS Surat RT ───────────────────────────────────────────────────
const SURAT_MENUS = [
    ['Surat Pengantar Umum', 'Surat Pengantar', 'surat'],
    ['Surat Pengantar KTP', 'Surat Pengantar', 'surat'],
    ['Surat Pengantar KK', 'Surat Pengantar', 'surat'],
    ['Surat Pengantar Nikah', 'Surat Pengantar', 'surat'],
    ['Surat Keterangan Domisili', 'Surat Keterangan', 'surat'],
    ['Surat Keterangan Tidak Mampu', 'Surat Keterangan', 'surat'],
    ['Surat Keterangan Usaha', 'Surat Keterangan', 'surat'],
    ['Surat Keterangan Kematian', 'Surat Keterangan', 'surat'],
    ['Surat Keterangan Kelahiran', 'Surat Keterangan', 'surat'],
    ['Surat Undangan Rapat Warga', 'Surat Undangan', 'surat'],
    ['Surat Undangan Kerja Bakti', 'Surat Undangan', 'surat'],
    ['Surat Undangan Santunan', 'Surat Undangan', 'surat'],
    ['Berita Acara Rapat RT', 'Administrasi', 'isian'],
    ['Berita Acara Serah Terima', 'Administrasi', 'isian'],
    ['Notulen Musyawarah Warga', 'Administrasi', 'isian'],
    ['Daftar Hadir Rapat', 'Administrasi', 'table'],
    ['Buku Kas Umum RT', 'Keuangan', 'table'],
    ['Laporan Iuran Warga Bulanan', 'Keuangan', 'table'],
    ['Rekap Kas Tahunan', 'Keuangan', 'table'],
    ['Daftar Inventaris RT', 'Keuangan', 'table'],
    ['Data Kependudukan RT', 'Data Warga', 'table'],
    ['Kartu Keluarga Warga', 'Data Warga', 'table'],
    ['Data Warga Pindah', 'Data Warga', 'table'],
    ['Data Warga Baru', 'Data Warga', 'table'],
    ['Proposal Kegiatan 17 Agustus', 'Proposal', 'proposal'],
    ['Proposal Renovasi Pos Ronda', 'Proposal', 'proposal'],
    ['Proposal Santunan Yatim', 'Proposal', 'proposal'],
    ['Proposal Kerja Bakti Lingkungan', 'Proposal', 'proposal'],
    ['Formulir Pengajuan Bantuan', 'Formulir', 'isian'],
    ['Formulir Pendaftaran Warga', 'Formulir', 'isian'],
    ['Formulir Izin Keramaian', 'Formulir', 'isian'],
    ['Formulir Pengaduan Warga', 'Formulir', 'isian'],
    ['Jadwal Ronda Malam', 'Jadwal', 'table'],
    ['Jadwal Kerja Bakti', 'Jadwal', 'table'],
    ['Jadwal Piket Posyandu', 'Jadwal', 'table'],
    ['Struktur Organisasi RT', 'Jadwal', 'isian'],
];
export const suratDocuments = SURAT_MENUS.map(([menu, category, archetype], i) => ({
    slug: menu.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    no: i + 1,
    menu,
    title: menu.replace(/^Surat /, 'Surat '),
    category,
    archetype,
}));

export const suratBuyers = BUYERS.slice(0, 9).map((b, i) => ({
    name: b.name,
    phone: b.phone,
    amount: 149000,
    paid_at: `${tgl(i * 4)} ${pad(9 + (i % 9))}:${pad((i * 13) % 60)}`,
}));

// ── Tim lapangan ────────────────────────────────────────────────────
const FIELD_TYPES = ['Barang Masuk', 'Stok Keluar', 'Produksi Kain', 'Produksi Perlengkapan'];
export const fieldRecent = (n, withBy = false) => Array.from({ length: n }, (_, i) => {
    const it = invItems[i % invItems.length];
    const base = {
        type: FIELD_TYPES[i % 4],
        subject: it.name,
        qty: between(4, 220),
        note: i % 3 === 0 ? 'Sesuai catatan gudang.' : null,
        at: `${pad(D(Math.floor(i / 3)).getDate())} ${BULAN[D(Math.floor(i / 3)).getMonth()]} ${pad(8 + (i % 10))}:${pad((i * 11) % 60)}`,
    };
    return withBy ? { ...base, by: ['Ahmad Fauzi', 'Bagas Pratama', 'Siti Marwah', 'Sistem'][i % 4] } : base;
});

export const fieldItems = invItems.map(i => ({ id: i.id, code: i.code, name: i.name, unit: i.unit, stock: i.stock, category: i.category?.name ?? null }));

export const fieldVariants = products.flatMap(p => p.variants.map(v => ({
    id: v.id, sku: v.sku, name: `${p.name} — ${v.name}`, stock: v.stock, brand: p.brand?.name ?? 'Lainnya',
})));

export const fieldCards = [
    { key: 'gudang', label: 'Stok Gudang', desc: 'Barang jadi masuk & keluar gudang', href: '/admin/lapor/gudang', icon: 'warehouse', accent: 'indigo' },
    { key: 'produksi_kain', label: 'Produksi Kain', desc: 'Potongan kain harian + waste', href: '/admin/lapor/produksi-kain', icon: 'scissors', accent: 'emerald' },
    { key: 'produksi_perlengkapan', label: 'Produksi Perlengkapan', desc: 'Rakit bahan → set / pouch', href: '/admin/lapor/produksi-perlengkapan', icon: 'package', accent: 'amber' },
    { key: 'barang_masuk', label: 'Barang Masuk', desc: 'Bahan baku dari supplier + konversi', href: '/admin/lapor/barang-masuk', icon: 'packagePlus', accent: 'rose' },
];

// ── Agregat dashboard / keuangan ────────────────────────────────────
const revenueOrders = orders.filter(o => ['confirmed', 'processing', 'label_printed', 'shipped', 'delivered', 'completed'].includes(o.status));
const sum = (arr, f) => arr.reduce((s, x) => s + f(x), 0);

export const dashboardCharts = {
    daily: Array.from({ length: 30 }, (_, i) => {
        const off = 29 - i;
        return { label: ddmm(off), date: tgl(off), revenue: between(1_400_000, 28_500_000), orders: between(1, 14) };
    }),
    monthly: Array.from({ length: 12 }, (_, i) => {
        const d = new Date(); d.setMonth(d.getMonth() - (11 - i));
        return { label: `${BULAN[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`, revenue: between(120_000_000, 480_000_000), orders: between(90, 340) };
    }),
    bySource: [
        { source: 'marketplace', label: 'Marketplace', count: orders.filter(o => o.source === 'marketplace').length, revenue: sum(orders.filter(o => o.source === 'marketplace'), o => o.total) },
        { source: 'web', label: 'Website', count: orders.filter(o => o.source === 'web').length, revenue: sum(orders.filter(o => o.source === 'web'), o => o.total) },
        { source: 'manual', label: 'Manual/CS', count: orders.filter(o => o.source === 'manual').length, revenue: sum(orders.filter(o => o.source === 'manual'), o => o.total) },
    ],
};

export const dashboardStats = {
    totalOrders: 1284,
    totalProducts: products.length,
    totalUsers: users.length,
    revenue: {
        total: sum(revenueOrders, o => o.total),
        profit: sum(revenueOrders, o => o.total - o.hpp_total - o.shipping_cost - o.admin_fee),
        order_count: revenueOrders.length,
    },
};

const HUMAN = ['baru saja', '12 menit yang lalu', '48 menit yang lalu', '2 jam yang lalu', '5 jam yang lalu', '1 hari yang lalu'];
export const recentOrders = orders.slice(0, 6).map((o, i) => ({
    id: o.id, order_number: o.order_number, customer_name: o.customer_name,
    total: o.total, status: o.status, source: o.source, created_at: HUMAN[i],
}));

export const lowStock = [
    { id: 7, name: 'Minyak Wangi Non Alkohol 30 ml', sku: 'KFN-071', stock: 0 },
    { id: 14, name: 'Set Kapan Bayi & Anak', sku: 'KFN-141', stock: 6 },
    { id: 6, name: 'Kapur Barus Kristal 250 gram', sku: 'KFN-061', stock: 9 },
    { id: 12, name: 'Keranda Jenazah Aluminium Lipat', sku: 'KFN-121', stock: 4 },
    { id: 9, name: 'Paket Kafan Premium Eksklusif', sku: 'KFN-091', stock: 12 },
    { id: 8, name: 'Kain Kafan Sutra Halus Premium 12 Meter', sku: 'KFN-081', stock: 23 },
];

export const financeSummary = (() => {
    const produk = sum(revenueOrders, o => o.subtotal);
    const ongkir = sum(revenueOrders, o => o.shipping_cost);
    const diskon = sum(revenueOrders, o => o.voucher_discount);
    const hpp = sum(revenueOrders, o => o.hpp_total);
    const komisi = sum(revenueOrders, o => o.affiliate_commission);
    return {
        orders: revenueOrders.length,
        omzet: produk + ongkir - diskon,
        produk, ongkir, diskon, hpp, komisi,
        laba: produk - diskon - hpp - komisi,
    };
})();

export const financePerBrand = brands.map(b => {
    const os = revenueOrders.filter(o => o.brand_id === b.id);
    return {
        brand: b.name,
        cnt: os.length,
        omzet: sum(os, o => o.subtotal + o.shipping_cost - o.voucher_discount),
        laba: sum(os, o => o.subtotal - o.voucher_discount - o.hpp_total - o.affiliate_commission),
    };
}).sort((a, b) => b.omzet - a.omzet);

export const financePerSource = ['marketplace', 'web', 'manual'].map(src => {
    const os = revenueOrders.filter(o => o.source === src);
    return { source: src, cnt: os.length, omzet: sum(os, o => o.subtotal + o.shipping_cost - o.voucher_discount) };
});

export const financeDaily = Array.from({ length: 30 }, (_, i) => ({ date: ymd(29 - i), omzet: between(1_400_000, 28_500_000) }));

export const financeTopProducts = PRODUK.slice(0, 10)
    .map(p => ({ name: p.name, qty: between(18, 420), omzet: 0 }))
    .map((x, i) => ({ ...x, omzet: x.qty * PRODUK[i].harga }))
    .sort((a, b) => b.omzet - a.omzet);

// ── Marketing ───────────────────────────────────────────────────────
export const marketingStats = {
    total_vouchers: vouchers.length,
    active_vouchers: vouchers.filter(v => v.is_active).length,
    total_usages: vouchers.reduce((s, v) => s + v.used_count, 0),
    total_discount: 84_350_000,
};

export const topVouchers = [...vouchers]
    .sort((a, b) => b.used_count - a.used_count)
    .map(v => ({ ...v, usages_count: v.used_count, usages_sum_discount_amount: v.used_count * (v.type === 'fixed' ? v.value : 42000) }));

export const voucherUsageChart = Array.from({ length: 30 }, (_, i) => ({
    date: ymd(29 - i), count: between(0, 22), total_discount: between(0, 2_400_000),
}));

export const voucherUsages = Array.from({ length: 22 }, (_, i) => {
    const b = BUYERS[i % BUYERS.length];
    return {
        ref: `KFN-${ymd(i).replace(/-/g, '')}-${pad(i + 1)}`,
        customer: b.name,
        total: between(1_200_000, 24_000_000),
        discount: 50000,
        time: iso(i, 12, 45),
        type: i % 6 === 0 ? 'Digital' : 'Fisik',
    };
});

// ── Inventori: agregat ──────────────────────────────────────────────
export const inventoryStats = {
    totalItems: invItems.length,
    totalSkus: invSkus.length,
    lowItems: invItems.filter(i => i.stock > 0 && i.stock < i.min_stok).length,
    emptyItems: invItems.filter(i => i.stock === 0).length,
    lowSkus: invSkus.filter(s => s.stock > 0 && s.stock < 20).length,
    emptySkus: invSkus.filter(s => s.stock === 0).length,
};

export const skuByBrand = brands.map(b => ({
    id: b.id, name: b.name, color: b.color,
    stock: invSkus.filter(s => s.brand_id === b.id).reduce((s, x) => s + x.stock, 0),
}));

export const alertItems = invItems
    .filter(i => i.stock < i.min_stok)
    .map(i => ({ id: i.id, name: i.name, unit: i.unit, stock: i.stock, category_id: i.category_id, category: i.category }));

export const alertSkus = invSkus
    .filter(s => s.stock < 20)
    .map(s => ({ id: s.id, code: s.code, name: s.name, brand_id: s.brand_id, stock: s.stock, brand: s.brand }));

// ── Auth / shared ───────────────────────────────────────────────────
export const authUser = {
    id: 1,
    name: 'William Pradana',
    email: 'william@portal-demo.id',
    email_verified_at: iso(400),
    role: 'admin',
    field_modules: null,
    created_at: iso(400),
    updated_at: iso(3),
};
