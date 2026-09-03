/**
 * Pengganti axios untuk demo statis toko.
 *
 * Halaman Checkout asli memanggil API ongkir dan voucher milik Laravel. Di sini
 * endpoint itu dijawab dengan data contoh yang bentuknya persis sama, supaya
 * alur "pilih wilayah lalu cek ongkir" tetap bisa dicoba tanpa server.
 */

const ok = (data) => Promise.resolve({ data, status: 200 });

// ── Wilayah contoh ──────────────────────────────────────────────────
const PROVINCES = [
    { id: 'jabar', name: 'Jawa Barat' },
    { id: 'dki', name: 'DKI Jakarta' },
    { id: 'jateng', name: 'Jawa Tengah' },
    { id: 'jatim', name: 'Jawa Timur' },
    { id: 'banten', name: 'Banten' },
];

const CITIES = {
    jabar: [
        { id: 'bandung', name: 'Kota Bandung' },
        { id: 'bekasi', name: 'Kota Bekasi' },
        { id: 'bogor', name: 'Kota Bogor' },
    ],
    dki: [
        { id: 'jaksel', name: 'Jakarta Selatan' },
        { id: 'jaktim', name: 'Jakarta Timur' },
    ],
    jateng: [
        { id: 'semarang', name: 'Kota Semarang' },
        { id: 'solo', name: 'Kota Surakarta' },
    ],
    jatim: [
        { id: 'surabaya', name: 'Kota Surabaya' },
        { id: 'malang', name: 'Kota Malang' },
    ],
    banten: [
        { id: 'tangsel', name: 'Tangerang Selatan' },
        { id: 'serang', name: 'Kota Serang' },
    ],
};

const DISTRICTS = {
    bandung: [
        { id: 'coblong', name: 'Coblong', postal_code: '40132' },
        { id: 'lengkong', name: 'Lengkong', postal_code: '40261' },
    ],
    bekasi: [{ id: 'bekasi-selatan', name: 'Bekasi Selatan', postal_code: '17144' }],
    bogor: [{ id: 'bogor-tengah', name: 'Bogor Tengah', postal_code: '16121' }],
    jaksel: [
        { id: 'kebayoran-baru', name: 'Kebayoran Baru', postal_code: '12110' },
        { id: 'tebet', name: 'Tebet', postal_code: '12810' },
    ],
    jaktim: [{ id: 'matraman', name: 'Matraman', postal_code: '13140' }],
    semarang: [{ id: 'banyumanik', name: 'Banyumanik', postal_code: '50264' }],
    solo: [{ id: 'laweyan', name: 'Laweyan', postal_code: '57146' }],
    surabaya: [{ id: 'gubeng', name: 'Gubeng', postal_code: '60281' }],
    malang: [{ id: 'klojen', name: 'Klojen', postal_code: '65111' }],
    tangsel: [{ id: 'serpong', name: 'Serpong', postal_code: '15310' }],
    serang: [{ id: 'serang-kota', name: 'Serang', postal_code: '42111' }],
};

// Tarif contoh. Biaya ikut berat supaya angkanya terasa masuk akal.
function rates(weightGram) {
    const kg = Math.max(1, Math.ceil((weightGram || 1000) / 1000));
    const build = (name, code, service, description, perKg, etd) => ({
        name, code, service, description, cost: perKg * kg, etd,
    });
    return [
        build('JNE', 'jne', 'REG', 'Layanan reguler', 18000, '2-3 hari'),
        build('JNE', 'jne', 'YES', 'Sampai besok', 32000, '1 hari'),
        build('J&T Express', 'jnt', 'EZ', 'Layanan ekonomis', 17000, '2-4 hari'),
        build('SiCepat', 'sicepat', 'REG', 'Layanan reguler', 16500, '2-3 hari'),
        build('Anteraja', 'anteraja', 'REG', 'Layanan reguler', 19000, '2-3 hari'),
    ];
}

// ── Router permintaan ───────────────────────────────────────────────
function handleGet(url, config = {}) {
    const u = String(url);

    if (u.includes('/api/shipping/provinces')) return ok({ data: PROVINCES });

    const city = u.match(/\/api\/shipping\/cities\/([^/?]+)/);
    if (city) return ok({ data: CITIES[city[1]] ?? [] });

    const district = u.match(/\/api\/shipping\/districts\/([^/?]+)/);
    if (district) return ok({ data: DISTRICTS[district[1]] ?? [] });

    if (u.includes('/api/shipping/postal-code')) {
        const q = String(config?.params?.district ?? '').toLowerCase();
        const hit = Object.values(DISTRICTS).flat().find((d) => q.includes(d.name.toLowerCase()));
        return ok({ postal_code: hit?.postal_code ?? '' });
    }

    return ok({});
}

function handlePost(url, body = {}) {
    const u = String(url);

    if (u.includes('/api/shipping/biteship-rates')) {
        return ok({ data: rates(body?.weight) });
    }

    if (u.includes('/api/voucher/validate')) {
        const code = String(body?.code ?? '').trim().toUpperCase();
        // Satu kode yang berlaku, supaya alur promo bisa dicoba.
        if (code === 'KAFANKU10') {
            const discount = Math.round((Number(body?.subtotal) || 0) * 0.1);
            return ok({
                valid: true,
                code,
                type: 'percent',
                value: 10,
                discount_amount: discount,
                message: 'Kode promo berhasil dipakai.',
            });
        }
        return ok({ valid: false, message: 'Kode promo tidak ditemukan atau sudah tidak berlaku.' });
    }

    return ok({ ok: true });
}

const axios = {
    get: (url, config) => handleGet(url, config),
    post: (url, body) => handlePost(url, body),
    put: () => ok({ ok: true }),
    patch: () => ok({ ok: true }),
    delete: () => ok({ ok: true }),
    request: ({ method = 'get', url, data, ...rest }) =>
        (String(method).toLowerCase() === 'post' ? handlePost(url, data) : handleGet(url, rest)),
    defaults: { headers: { common: {} } },
    create: () => axios,
};

export default axios;
export { axios };
