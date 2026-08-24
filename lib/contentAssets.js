// ─────────────────────────────────────────────────────────────────────────────
//  Team narrative + content showcase (before/after I led + the new arsenal).
//  Media lives in /public/media (compressed by the build). Narratives are the
//  point: each piece says what changed and why it worked.
// ─────────────────────────────────────────────────────────────────────────────

export const team = {
  narrative: {
    en: 'Those numbers were not a solo effort. I ran a deliberately lean team of 10 people, operations included, with just 5 of us on marketing and creative, myself among them. We stayed small on purpose. By leaning hard on AI across content, copy, and production, a handful of people could output like a much larger studio. I also had a hand in recruiting the new team, filtering for people who move fast and think in systems.',
    id: 'Angka-angka itu bukan kerja sendirian. Saya menjalankan tim yang sengaja ramping, total 10 orang termasuk operasional, dengan hanya 5 orang di marketing dan kreatif, saya termasuk di dalamnya. Kami tetap kecil dengan sengaja. Dengan memaksimalkan AI di konten, naskah, dan produksi, segelintir orang bisa berproduksi seperti studio yang jauh lebih besar. Saya juga ikut andil merekrut tim baru, menyaring orang yang bergerak cepat dan berpikir sistem.',
  },
  stats: [
    { v: '10', k: { en: 'People, ops included', id: 'Orang, termasuk ops' } },
    { v: '5', k: { en: 'Marketing & creative', id: 'Marketing & kreatif' } },
    { v: 'AI', k: { en: 'Augmented workflow', id: 'Alur kerja dibantu AI' } },
    { v: '1', k: { en: 'Recruiter & filter', id: 'Ikut rekrut & filter' } },
  ],
};

// slug maps to /media/<slug>.mp4 and /media/<slug>.jpg (poster)
export const compare = [
  {
    label: { en: 'Carousel design', id: 'Desain carousel' },
    before: {
      kind: 'carousel',
      slug: 'carousel-lama',
      count: 4,
      tag: { en: 'Before', id: 'Sebelum' },
      d: { en: 'Conventional Canva design, no system behind it.', id: 'Desain konvensional di Canva, tanpa sistem.' },
    },
    after: {
      kind: 'carousel',
      slug: 'carousel-baru',
      count: 7,
      tag: { en: 'After', id: 'Sesudah' },
      d: { en: 'AI-assisted design that lifted account engagement.', id: 'Desain berbantuan AI yang menaikkan engagement akun.' },
    },
  },
  {
    label: { en: 'Video content', id: 'Konten video' },
    before: {
      kind: 'video',
      slug: 'konten-lama',
      tag: { en: 'Before', id: 'Sebelum' },
      d: { en: 'Flat voice-over. Informative, but easy to scroll past.', id: 'Voice over yang datar. Informatif, tapi gampang di-skip.' },
    },
    after: {
      kind: 'video',
      slug: 'edukasi-baru',
      tag: { en: 'After', id: 'Sesudah' },
      d: { en: 'A fresh monologue format, education first, richer visuals.', id: 'Format monolog yang segar, edukasi dulu, visual lebih kaya.' },
    },
  },
];

export const arsenal = [
  {
    kind: 'video',
    slug: 'hardsell',
    name: { en: 'Hardsell monologue', id: 'Hardsell monolog' },
    badge: { en: 'High conversion · Meta Ads', id: 'Konversi tinggi · Meta Ads' },
    d: { en: 'A monologue-style hardsell. This drove high conversion on Meta Ads.', id: 'Hardsell bergaya monolog. Ini mendorong konversi tinggi di Meta Ads.' },
  },
  {
    kind: 'video',
    slug: 'ai',
    name: { en: 'AI host monologue', id: 'Monolog host AI' },
    badge: { en: 'Organic conversion up', id: 'Konversi organik naik' },
    d: { en: 'A monologue in a new style with an AI-generated host, lifting organic conversion.', id: 'Monolog gaya baru dengan host buatan AI, menaikkan konversi organik.' },
  },
  {
    kind: 'video',
    slug: 'ai-skit',
    name: { en: 'AI skit', id: 'AI Skit' },
    badge: { en: 'Soft selling', id: 'Soft selling' },
    d: { en: 'A soft-selling drama skit, produced with AI.', id: 'Drama soft-selling, diproduksi dengan AI.' },
  },
];

// The brand account shown on the Reels-style cards
export const reelAccount = {
  handle: 'pusat_kainkafan',
  collab: 'kafankuofficial',
};

// Instagram Insights (real numbers, custom period around June 2026)
export const instagram = {
  period: { en: 'Jun 2026 · custom range', id: 'Jun 2026 · rentang custom' },
  overview: [
    { k: { en: 'Views', id: 'Views' }, v: '1,35 jt', sub: '1.350.535' },
    { k: { en: 'Net followers', id: 'Net followers' }, v: '+1.186', up: true },
    { k: { en: 'Interactions', id: 'Interaksi' }, v: '118,3 rb' },
  ],
  reach: { followers: 4, nonFollowers: 96 },
  byType: {
    viewers: '402.367',
    reels: { label: 'Reels', value: '747 rb', pct: 87 },
    posts: { label: 'Posts', value: '111 rb', pct: 13 },
  },
  followers: { total: '25.138', growth: '+5,0%', since: { en: 'since May 31', id: 'sejak 31 Mei' } },
  // Views over time, relative shape of the real Jun 1 to 30 curve
  series: [37, 33, 40, 34, 30, 44, 40, 65, 55, 58, 50, 55, 52, 70, 44, 36, 33, 32, 40, 43],
};

export const influencers = {
  narrative: {
    en: 'A few of the many KOLs and affiliates we onboarded. I set the brief, my team carried it to the creators. Awareness and conversion followed.',
    id: 'Beberapa dari banyak KOL dan affiliator yang kami ajak kerja sama. Saya susun brief-nya, tim saya meneruskannya ke kreator. Awareness dan konversi mengikuti.',
  },
  items: [
    { kind: 'video', slug: 'influencer-1', name: 'Influencer 1', views: '30K', viewsLabel: { en: '30K views', id: '30rb views' } },
    { kind: 'video', slug: 'influencer-2', name: 'Influencer 2', views: '10.2M', viewsLabel: { en: '10.2M views', id: '10,2 jt views' } },
    { kind: 'video', slug: 'influencer-3', name: 'Influencer 3', views: '16M', viewsLabel: { en: '16M views', id: '16 jt views' } },
  ],
};
