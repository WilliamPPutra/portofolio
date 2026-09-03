/**
 * Props asli yang diambil dari storefront live, dibekukan agar demo ini tetap
 * hidup meski domain aslinya suatu saat tidak diperpanjang.
 *
 * Satu-satunya perubahan terhadap data asli: URL gambar diarahkan ke salinan
 * WebP di dalam demo. Halaman kOS memakai gambar apa adanya bila URL-nya sudah
 * absolut, jadi jalur `/storage/...` milik Laravel tidak pernah tersentuh.
 */
import raw from './store.json';

const asset = (file) =>
    new URL(`img/${String(file).split('/').pop().replace(/\.[^.]+$/, '.webp')}`, document.baseURI).href;

const mapImages = (product) => ({
    ...product,
    images: (product.images ?? []).map((im) => ({ ...im, url: im.url ? asset(im.url) : im.url })),
});

export const waNumber = raw.home.waNumber;

export const homeProducts = raw.home.products.map((p) => ({
    ...p,
    primary_image: p.primary_image ? asset(p.primary_image) : p.primary_image,
}));

export const products = Object.fromEntries(
    Object.entries(raw.products).map(([slug, props]) => [slug, { ...props, product: mapImages(props.product) }]),
);

export const checkouts = Object.fromEntries(
    Object.entries(raw.checkouts).map(([slug, props]) => [slug, { ...props, product: mapImages(props.product) }]),
);

export const slugs = Object.keys(products);
