// ─────────────────────────────────────────────────────────────────────────────
//  Bilingual content source of truth.  Every string is { en, id }.
//  Written in an Apple-style micro-copy voice: confident, spare, human.
// ─────────────────────────────────────────────────────────────────────────────

export const nav = {
  brand: { en: 'William Pradana Putra', id: 'William Pradana Putra' },
  links: [
    { href: '/about', label: { en: 'About Me', id: 'Tentang' } },
    { href: '/portfolio', label: { en: 'Portfolio', id: 'Portofolio' } },
    { href: '/projects', label: { en: 'Projects', id: 'Proyek' } },
    { href: '/photoshoot', label: { en: 'Photo Shoot', id: 'Photo Shoot' } },
  ],
  cta: { en: "Let's talk", id: 'Hubungi' },
};

// ── HUB (homepage section cards) ──────────────────────────────────────────────
export const hub = {
  eyebrow: { en: 'The Hub', id: 'Pusat' },
  heading: {
    en: 'Four chapters. Pick where to begin.',
    id: 'Empat bab. Pilih dari mana mulai.',
  },
  cta: { en: 'Learn more', id: 'Selengkapnya' },
  cards: [
    {
      href: '/about',
      icon: 'Compass',
      theme: 'light',
      n: '01',
      name: { en: 'About Me', id: 'Tentang Saya' },
      tag: {
        en: 'From the retail floor to marketing leadership — a deliberate climb through operations, data, and brand.',
        id: 'Dari lantai ritel hingga memimpin marketing — pendakian yang disengaja melewati operasional, data, dan brand.',
      },
    },
    {
      href: '/portfolio',
      icon: 'Award',
      theme: 'dark',
      n: '02',
      name: { en: 'Portfolio', id: 'Portofolio' },
      tag: {
        en: 'Kafanku — how I turned brand cannibalization and warehouse waste into a year of B2B growth.',
        id: 'Kafanku — mengubah kanibalisasi brand dan limbah gudang menjadi setahun pertumbuhan B2B.',
      },
    },
    {
      href: '/projects',
      icon: 'Layers',
      theme: 'gradient',
      n: '03',
      name: { en: 'Projects', id: 'Proyek' },
      tag: {
        en: 'Commerce OS & interactive lead magnets — the systems and tools I built from scratch.',
        id: 'Commerce OS & lead magnet interaktif — sistem dan alat yang saya bangun dari nol.',
      },
    },
    {
      href: '/photoshoot',
      icon: 'Camera',
      theme: 'lightgray',
      n: '04',
      name: { en: 'Photo Shoot Project', id: 'Proyek Photo Shoot' },
      tag: {
        en: 'Commercial modeling — understanding visual branding from in front of the lens.',
        id: 'Modeling komersial — memahami visual branding dari depan lensa.',
      },
    },
  ],
};

// ── ABOUT ────────────────────────────────────────────────────────────────────
export const about = {
  eyebrow: { en: 'Marketing Manager · Brand & Growth', id: 'Marketing Manager · Brand & Growth' },
  name: { en: 'William Pradana Putra', id: 'William Pradana Putra' },
  headline: {
    en: ['Building brands people feel —', 'and growth the', 'numbers can prove.'],
    id: ['Membangun brand yang terasa —', 'dan pertumbuhan yang', 'terbukti angkanya.'],
  },
  sub: {
    en: 'Marketing Manager with a brand-builder’s eye and an operator’s discipline — from the retail floor to leading campaigns across Meta, TikTok, and marketplaces. I turn brand stories into measurable growth.',
    id: 'Marketing Manager dengan mata seorang brand-builder dan disiplin seorang operator — dari lantai ritel hingga memimpin kampanye di Meta, TikTok, dan marketplace. Saya mengubah cerita brand menjadi pertumbuhan yang terukur.',
  },
  portraitNote: { en: 'Portrait', id: 'Foto' },
  scroll: { en: 'The journey', id: 'Perjalanan' },

  journeyEyebrow: { en: 'The Journey', id: 'Perjalanan' },
  journeyTitle: {
    en: 'Three eras. One compounding thesis.',
    id: 'Tiga era. Satu tesis yang berlipat.',
  },
  journeyLede: {
    en: 'Every role added a layer the next one would need. Operations taught me how value is actually made. Marketing taught me how it moves. Leadership let me design the whole system.',
    id: 'Setiap peran menambah lapisan yang dibutuhkan peran berikutnya. Operasional mengajarkan bagaimana nilai benar-benar dibuat. Pemasaran mengajarkan bagaimana ia bergerak. Kepemimpinan membuat saya merancang keseluruhan sistem.',
  },

  eras: [
    {
      tag: { en: 'Groundwork', id: 'Fondasi' },
      year: { en: 'The Floor', id: 'Lantai Toko' },
      role: { en: 'Store Crew · Alfamart', id: 'Kru Toko · Alfamart' },
      body: {
        en: 'Career started at the very bottom — on the retail floor. Cash register, inventory control, product merchandising to strict planogram standards. This is where I learned consumer psychology and store mechanics not from a slide deck, but from the shelf.',
        id: 'Karier dimulai dari paling bawah — di lantai ritel. Mesin kasir, kontrol persediaan, penataan produk sesuai standar planogram yang ketat. Di sinilah saya belajar psikologi konsumen dan mekanika toko bukan dari slide, tapi langsung dari rak.',
      },
      points: [
        { en: 'Cash register & daily reconciliation', id: 'Mesin kasir & rekonsiliasi harian' },
        { en: 'Inventory control & stock discipline', id: 'Kontrol persediaan & disiplin stok' },
        { en: 'Planogram-standard merchandising', id: 'Merchandising standar planogram' },
      ],
    },
    {
      tag: { en: 'Growth', id: 'Pertumbuhan' },
      year: { en: 'The Data', id: 'Era Data' },
      role: {
        en: 'CS & Product Dev · Marketing Supervisor · Marketplace Specialist',
        id: 'CS & Pengembangan Produk · Supervisor Marketing · Spesialis Marketplace',
      },
      body: {
        en: 'Across Firli Group, Positive Plus Management, and PT Rumah Husnul Khatimah, the work became data-driven. Promotional campaigns, market research online and offline, influencer ecosystems, and deep-dive analysis to lift conversion rates and store health.',
        id: 'Di Firli Group, Positive Plus Management, dan PT Rumah Husnul Khatimah, pekerjaan menjadi berbasis data. Kampanye promosi, riset pasar daring dan luring, ekosistem influencer, dan analisis mendalam untuk menaikkan konversi dan kesehatan toko.',
      },
      points: [
        { en: 'Data-driven promotional campaigns', id: 'Kampanye promosi berbasis data' },
        { en: 'Influencer ecosystem management', id: 'Manajemen ekosistem influencer' },
        { en: 'Conversion & store-health analysis', id: 'Analisis konversi & kesehatan toko' },
      ],
    },
    {
      tag: { en: 'Leadership', id: 'Kepemimpinan' },
      year: { en: 'The System', id: 'Era Sistem' },
      role: { en: 'Brand Lead · Kafanku', id: 'Brand Lead · Kafanku' },
      body: {
        en: 'Everything synthesized. Leading cross-functional teams — Creative, CS, Operations — to architect full-stack brand growth. Frontline instinct plus marketing rigor, now aimed at building resilient, profitable business ecosystems.',
        id: 'Semuanya menyatu. Memimpin tim lintas fungsi — Kreatif, CS, Operasional — untuk merancang pertumbuhan brand secara menyeluruh. Insting garis depan berpadu ketelitian pemasaran, kini diarahkan membangun ekosistem bisnis yang tangguh dan menguntungkan.',
      },
      points: [
        { en: 'Cross-functional team leadership', id: 'Kepemimpinan tim lintas fungsi' },
        { en: 'Full-stack brand architecture', id: 'Arsitektur brand menyeluruh' },
        { en: 'Net-profit-first strategy', id: 'Strategi mengutamakan laba bersih' },
      ],
    },
  ],

  ethosEyebrow: { en: 'How I think', id: 'Cara saya berpikir' },
  ethos: [
    {
      k: { en: 'Creative Philosophy', id: 'Filosofi Kreatif' },
      v: {
        en: 'A brand is a belief system before it is a product. Get the philosophy right and the aesthetics, the copy, and the funnel all fall into place.',
        id: 'Sebuah brand adalah sistem keyakinan sebelum menjadi produk. Benahi filosofinya, maka estetika, naskah, dan funnel akan mengikuti.',
      },
    },
    {
      k: { en: 'System Architecture', id: 'Arsitektur Sistem' },
      v: {
        en: 'Growth that depends on heroics does not scale. I turn operations into systems — repeatable, measurable, and calm under load.',
        id: 'Pertumbuhan yang bergantung pada kerja heroik tidak akan berskala. Saya mengubah operasional menjadi sistem — dapat diulang, terukur, dan tenang di bawah tekanan.',
      },
    },
    {
      k: { en: 'Net Profitability', id: 'Laba Bersih' },
      v: {
        en: 'Revenue is vanity, margin is sanity. Every decision is weighed against the one number that keeps a business alive: sustainable net profit.',
        id: 'Omzet itu gengsi, margin itu akal sehat. Setiap keputusan ditimbang terhadap satu angka yang menjaga bisnis tetap hidup: laba bersih berkelanjutan.',
      },
    },
  ],
};

// ── KAFANKU CASE STUDY ────────────────────────────────────────────────────────
export const kafanku = {
  eyebrow: { en: 'Brand Portfolio · Case Study', id: 'Portofolio Brand · Studi Kasus' },
  title: { en: 'Kafanku', id: 'Kafanku' },
  tagline: {
    en: 'How I turned brand cannibalization — and warehouse waste — into a year of sustainable B2B growth.',
    id: 'Bagaimana saya mengubah kanibalisasi brand — dan limbah gudang — menjadi setahun pertumbuhan B2B yang berkelanjutan.',
  },
  metaLabel: { en: 'Role', id: 'Peran' },
  meta: [
    { k: { en: 'Role', id: 'Peran' }, v: { en: 'Brand Lead', id: 'Brand Lead' } },
    { k: { en: 'Category', id: 'Kategori' }, v: { en: 'Premium shroud kits', id: 'Paket kain kafan premium' } },
    { k: { en: 'Pivot', id: 'Pivot' }, v: { en: 'B2C → B2B', id: 'B2C → B2B' } },
    { k: { en: 'Outcome', id: 'Hasil' }, v: { en: '12+ months sustained', id: '12+ bulan berkelanjutan' } },
  ],

  ch1: {
    n: '01',
    kicker: { en: 'Brand Philosophy & Building', id: 'Filosofi & Pembangunan Brand' },
    title: {
      en: 'A premium shroud kit — designed with intention.',
      id: 'Paket kain kafan premium — dirancang dengan niat.',
    },
    body: {
      en: 'Kafanku is a premium shroud kit brand (paket kain kafan premium), built under the same parent company as its older sister brand, Baju Terakhir. If Baju Terakhir was the “iPhone” of the category — high-end, aspirational — Kafanku was conceived as the considered “mid-tier Android”: the same dignity and quality of experience, made reachable for a wider market.',
      id: 'Kafanku adalah brand paket kain kafan premium, dibangun di bawah induk yang sama dengan sang kakak, Baju Terakhir. Jika Baju Terakhir adalah “iPhone” di kategorinya — kelas atas, aspiratif — Kafanku dirancang sebagai “Android kelas menengah” yang matang: martabat dan kualitas pengalaman yang sama, dibuat terjangkau untuk pasar yang lebih luas.',
    },
    pull: {
      en: 'Same dignity. A wider door.',
      id: 'Martabat yang sama. Pintu yang lebih lebar.',
    },
  },

  ch2: {
    n: '02',
    kicker: { en: 'Product Development & Circular Innovation', id: 'Pengembangan Produk & Inovasi Sirkular' },
    title: {
      en: '“Paket Ekonomis” — waste, re-engineered into revenue.',
      id: '“Paket Ekonomis” — limbah, direkayasa ulang menjadi pendapatan.',
    },
    body: {
      en: 'Rather than compete in the same premium space, I engineered a new line: Paket Ekonomis. It was manufactured from high-quality fabric off-cuts — the manufacturing waste accumulating in our warehouse from the premium lines. A circular-economy move that turned a cost sink into one of the most profitable revenue streams in the portfolio.',
      id: 'Alih-alih bersaing di ruang premium yang sama, saya merekayasa lini baru: Paket Ekonomis. Dibuat dari sisa potongan kain berkualitas tinggi — limbah produksi yang menumpuk di gudang dari lini premium. Sebuah langkah ekonomi sirkular yang mengubah pusat biaya menjadi salah satu aliran pendapatan paling menguntungkan di portofolio.',
    },
    stats: [
      { k: { en: 'Input', id: 'Bahan Baku' }, v: { en: 'Premium off-cuts', id: 'Sisa kain premium' } },
      { k: { en: 'Waste diverted', id: 'Limbah dialihkan' }, v: { en: 'Warehouse surplus', id: 'Surplus gudang' } },
      { k: { en: 'Result', id: 'Hasil' }, v: { en: 'High-margin line', id: 'Lini margin tinggi' } },
    ],
    pull: {
      en: 'The most profitable material was already in the building.',
      id: 'Bahan paling menguntungkan sudah ada di dalam gedung.',
    },
  },

  ch3: {
    n: '03',
    kicker: { en: 'The Conflict', id: 'Konflik' },
    title: {
      en: 'The cannibalization problem.',
      id: 'Masalah kanibalisasi.',
    },
    body: {
      en: 'Launching Kafanku at a lower price with a similar premium concept created a critical market overlap. In a highly price-sensitive retail market, Kafanku heavily cannibalized Baju Terakhir. Kafanku’s sales skyrocketed while Baju Terakhir’s revenue dropped drastically. The mandate was clear and hard: both brands had to thrive — without killing each other.',
      id: 'Meluncurkan Kafanku dengan harga lebih rendah namun konsep premium yang mirip menciptakan tumpang tindih pasar yang kritis. Di pasar ritel yang sangat sensitif harga, Kafanku mengkanibal Baju Terakhir secara berat. Penjualan Kafanku melonjak sementara pendapatan Baju Terakhir turun drastis. Mandatnya jelas dan berat: kedua brand harus berkembang — tanpa saling mematikan.',
    },
    before: {
      label: { en: 'Before the pivot', id: 'Sebelum pivot' },
      rows: [
        { name: { en: 'Baju Terakhir (premium)', id: 'Baju Terakhir (premium)' }, dir: 'down', note: { en: 'Revenue dropping', id: 'Pendapatan turun' } },
        { name: { en: 'Kafanku (mid-tier)', id: 'Kafanku (menengah)' }, dir: 'up', note: { en: 'Cannibalizing sister brand', id: 'Mengkanibal brand saudara' } },
      ],
    },
  },

  ch4: {
    n: '04',
    kicker: { en: 'The Strategic Pivot', id: 'Pivot Strategis' },
    title: {
      en: 'Three moves that stopped the bleeding.',
      id: 'Tiga langkah yang menghentikan pendarahan.',
    },
    intro: {
      en: 'Instead of a price war, I separated the two brands across product, audience, and channel — so each could win a market the other could not reach.',
      id: 'Alih-alih perang harga, saya memisahkan kedua brand di produk, audiens, dan kanal — agar masing-masing menang di pasar yang tak bisa dijangkau yang lain.',
    },
    moves: [
      {
        n: '01',
        t: { en: 'Product & Waste Innovation', id: 'Inovasi Produk & Limbah' },
        d: {
          en: 'Move Kafanku out of the premium fight entirely with Paket Ekonomis — the off-cut line — creating a category Baju Terakhir never occupied.',
          id: 'Keluarkan Kafanku dari pertarungan premium lewat Paket Ekonomis — lini sisa kain — menciptakan kategori yang tak pernah ditempati Baju Terakhir.',
        },
      },
      {
        n: '02',
        t: { en: 'Target Market Shift', id: 'Pergeseran Target Pasar' },
        d: {
          en: 'Repoint the message. The premium line used emotional content aimed at elderly women (B2C). We pivoted Kafanku to a functional, institutional tone for male mosque administrators (Pengurus Masjid), foundations, and B2B buyers stocking for their communities.',
          id: 'Arahkan ulang pesan. Lini premium memakai konten emosional untuk perempuan lanjut usia (B2C). Kami mengalihkan Kafanku ke nada fungsional dan institusional untuk pengurus masjid, yayasan, dan pembeli B2B yang menyetok untuk komunitasnya.',
        },
      },
      {
        n: '03',
        t: { en: 'Channel Segregation', id: 'Pemisahan Kanal' },
        d: {
          en: 'Baju Terakhir kept retail — every marketplace (Shopee/TikTok) plus Meta Ads. Kafanku’s premium scaled organically through TikTok Affiliate networks, while a brand-new Meta Ads funnel was opened exclusively for Paket Ekonomis, targeting B2B mosque committees.',
          id: 'Baju Terakhir tetap di ritel — semua marketplace (Shopee/TikTok) plus Meta Ads. Premium Kafanku berskala organik lewat jaringan TikTok Affiliate, sementara funnel Meta Ads baru dibuka khusus untuk Paket Ekonomis, menyasar takmir/pengurus masjid B2B.',
        },
      },
    ],
    matrixTitle: { en: 'The separation, at a glance', id: 'Pemisahan, sekilas' },
    matrix: {
      cols: [
        { en: 'Baju Terakhir', id: 'Baju Terakhir' },
        { en: 'Kafanku', id: 'Kafanku' },
      ],
      rows: [
        {
          k: { en: 'Positioning', id: 'Positioning' },
          a: { en: 'Premium “iPhone”', id: 'Premium “iPhone”' },
          b: { en: 'Value & institutional', id: 'Value & institusional' },
        },
        {
          k: { en: 'Audience', id: 'Audiens' },
          a: { en: 'B2C · elderly women', id: 'B2C · perempuan lansia' },
          b: { en: 'B2B · mosque committees', id: 'B2B · pengurus masjid' },
        },
        {
          k: { en: 'Tone', id: 'Nada' },
          a: { en: 'Emotional', id: 'Emosional' },
          b: { en: 'Functional', id: 'Fungsional' },
        },
        {
          k: { en: 'Channels', id: 'Kanal' },
          a: { en: 'Marketplaces + Meta Ads', id: 'Marketplace + Meta Ads' },
          b: { en: 'TikTok Affiliate + B2B Meta funnel', id: 'TikTok Affiliate + funnel Meta B2B' },
        },
      ],
    },
  },

  ch5: {
    n: '05',
    kicker: { en: 'The Result', id: 'Hasil' },
    title: {
      en: 'Total market stabilization.',
      id: 'Stabilisasi pasar menyeluruh.',
    },
    body: {
      en: 'Baju Terakhir’s premium retail market recovered and sustained its growth. Kafanku’s B2B Paket Ekonomis surged sustainably for over a year, securing long-term institutional partnerships and lifting the company’s net profit margins. Two brands, two markets, one healthy ecosystem.',
      id: 'Pasar ritel premium Baju Terakhir pulih dan mempertahankan pertumbuhannya. Paket Ekonomis B2B Kafanku melonjak berkelanjutan lebih dari setahun, mengamankan kemitraan institusional jangka panjang dan mengangkat margin laba bersih perusahaan. Dua brand, dua pasar, satu ekosistem yang sehat.',
    },
    outcomes: [
      { k: { en: 'Baju Terakhir', id: 'Baju Terakhir' }, v: { en: 'Recovered & sustained', id: 'Pulih & bertahan' } },
      { k: { en: 'Kafanku B2B', id: 'Kafanku B2B' }, v: { en: '12+ months of surge', id: '12+ bulan melonjak' } },
      { k: { en: 'Partnerships', id: 'Kemitraan' }, v: { en: 'Long-term institutional', id: 'Institusional jangka panjang' } },
      { k: { en: 'Net margin', id: 'Margin bersih' }, v: { en: 'Structurally improved', id: 'Membaik secara struktural' } },
    ],
  },
};

// ── PROJECTS ──────────────────────────────────────────────────────────────────
export const projects = {
  eyebrow: { en: 'Projects', id: 'Proyek' },
  title: { en: 'Systems, tools & lead magnets I built.', id: 'Sistem, alat & lead magnet yang saya bangun.' },
  lede: {
    en: 'A technical showcase — from a full custom Commerce OS to interactive lead magnets that capture audiences by giving something genuinely useful first.',
    id: 'Etalase teknis — dari Commerce OS kustom penuh hingga lead magnet interaktif yang menangkap audiens dengan memberi sesuatu yang benar-benar berguna terlebih dahulu.',
  },

  os: {
    eyebrow: { en: 'Flagship · Custom Software', id: 'Unggulan · Perangkat Lunak Kustom' },
    name: { en: 'Commerce OS', id: 'Commerce OS' },
    tagline: {
      en: 'A custom commerce operating system that runs the business — margins, marketing spend, inventory, and operations in one synced brain.',
      id: 'Sistem operasi commerce kustom yang menjalankan bisnis — margin, belanja iklan, inventaris, dan operasional dalam satu otak yang tersinkron.',
    },
    stack: ['Laravel', 'Inertia', 'React', 'MySQL', 'Tailwind'],
    intro: {
      en: 'Built to handle internal business infrastructure end-to-end: automated margin calculators, a marketing-spend tracker (ROAS, CPA, CPC), and operational workflow sync across brands. Below are simulated views of the real system.',
      id: 'Dibangun untuk menangani infrastruktur bisnis internal secara menyeluruh: kalkulator margin otomatis, pelacak belanja iklan (ROAS, CPA, CPC), dan sinkronisasi alur kerja operasional lintas brand. Berikut tampilan tersimulasi dari sistem asli.',
    },
    privacy: {
      en: 'Simulated Data · Privacy Protected',
      id: 'Data Simulasi · Privasi Dilindungi',
    },
    privacyNote: {
      en: 'All figures, names, and orders below are fictional placeholders generated for this portfolio. No real customer or financial data is shown.',
      id: 'Semua angka, nama, dan pesanan di bawah adalah placeholder fiktif yang dibuat untuk portofolio ini. Tidak ada data pelanggan atau keuangan asli yang ditampilkan.',
    },
    features: [
      {
        t: { en: 'Net-Profit Engine', id: 'Mesin Laba Bersih' },
        d: {
          en: 'Revenue minus COGS, affiliate commission, and discounts — computed per order, per brand, per channel. Margin visible at every level.',
          id: 'Pendapatan dikurangi HPP, komisi afiliasi, dan diskon — dihitung per pesanan, per brand, per kanal. Margin terlihat di setiap tingkat.',
        },
      },
      {
        t: { en: 'Marketing Spend Tracker', id: 'Pelacak Belanja Iklan' },
        d: {
          en: 'ROAS, CPA, and CPC per campaign and channel, tied back to real orders — so spend decisions are made on profit, not vanity reach.',
          id: 'ROAS, CPA, dan CPC per kampanye dan kanal, terhubung ke pesanan nyata — agar keputusan belanja dibuat atas laba, bukan jangkauan semu.',
        },
      },
      {
        t: { en: 'Inventory → Produce (BOM)', id: 'Inventaris → Produksi (BOM)' },
        d: {
          en: 'Bill-of-materials that turns raw fabric off-cuts into finished SKUs — the literal engine behind Kafanku’s Paket Ekonomis.',
          id: 'Bill-of-materials yang mengubah sisa kain mentah menjadi SKU jadi — mesin nyata di balik Paket Ekonomis Kafanku.',
        },
      },
      {
        t: { en: 'Operational Workflow Sync', id: 'Sinkronisasi Alur Operasional' },
        d: {
          en: 'Orders, CS, shipping (Biteship), and payments (Midtrans/Xendit) flow through one pipeline with WhatsApp notifications.',
          id: 'Pesanan, CS, pengiriman (Biteship), dan pembayaran (Midtrans/Xendit) mengalir dalam satu pipeline dengan notifikasi WhatsApp.',
        },
      },
    ],
    tabs: [
      { key: 'finance', label: { en: 'Finance', id: 'Keuangan' } },
      { key: 'marketing', label: { en: 'Marketing / ROAS', id: 'Marketing / ROAS' } },
      { key: 'inventory', label: { en: 'Inventory → Produce', id: 'Inventaris → Produksi' } },
      { key: 'orders', label: { en: 'Orders', id: 'Pesanan' } },
    ],
    // The four featured screens, shown as alternating Apple-style bands
    screens: [
      {
        key: 'dashboard',
        icon: 'LayoutDashboard',
        theme: 'dark',
        name: { en: 'Dashboard', id: 'Dashboard' },
        tag: { en: 'The command view', id: 'Pusat kendali' },
        d: {
          en: 'One screen to read the whole business — revenue, orders, products and active users, a daily sales chart and order-source split, all filtered by brand and date.',
          id: 'Satu layar untuk membaca seluruh bisnis — pendapatan, pesanan, produk dan pengguna aktif, grafik penjualan harian dan sumber pesanan, semua difilter per brand dan tanggal.',
        },
      },
      {
        key: 'inventory',
        icon: 'Boxes',
        theme: 'light',
        name: { en: 'Inventory', id: 'Inventaris' },
        tag: { en: 'Off-cuts → SKUs', id: 'Sisa kain → SKU' },
        d: {
          en: 'A bill-of-materials engine that turns raw fabric off-cuts into finished SKUs and deducts stock automatically — the literal machine behind Paket Ekonomis.',
          id: 'Mesin bill-of-materials yang mengubah sisa kain mentah menjadi SKU jadi dan memotong stok otomatis — mesin nyata di balik Paket Ekonomis.',
        },
      },
      {
        key: 'finance',
        icon: 'Wallet',
        theme: 'dark',
        name: { en: 'Finance', id: 'Keuangan' },
        tag: { en: 'Net profit, per brand', id: 'Laba bersih, per brand' },
        d: {
          en: 'Revenue minus COGS, affiliate commission, and discount — computed per order, per brand, per channel. The profit is visible at every level, not just the top line.',
          id: 'Omzet dikurangi HPP, komisi afiliasi, dan diskon — dihitung per pesanan, per brand, per kanal. Laba terlihat di setiap tingkat, bukan hanya di baris teratas.',
        },
      },
      {
        key: 'builder',
        icon: 'Globe',
        theme: 'gradient',
        name: { en: 'Landing Page', id: 'Landing Page' },
        tag: { en: 'Paste HTML or upload a .zip', id: 'Paste HTML atau upload .zip' },
        d: {
          en: 'A landing-page manager: paste raw HTML or upload an .html/.zip, pick the brand, domain, and slug or subdomain, then publish a campaign funnel in minutes — no separate hosting needed.',
          id: 'Pengelola landing page: paste HTML mentah atau upload .html/.zip, pilih brand, domain, dan slug atau subdomain, lalu publikasikan funnel kampanye dalam hitungan menit — tanpa hosting terpisah.',
        },
      },
    ],
  },

  leadEyebrow: { en: 'Lead Magnets', id: 'Lead Magnet' },
  leadTitle: { en: 'Give value first. Capture the audience second.', id: 'Beri nilai dulu. Tangkap audiens kemudian.' },
  leads: [
    {
      name: { en: 'Kepulanganku', id: 'Kepulanganku' },
      kind: { en: 'Educational Game', id: 'Gim Edukasi' },
      d: {
        en: 'An interactive educational game about funeral preparation and rituals — designed as a high-converting organic lead magnet that captures audience data through genuine consumer-psychology value.',
        id: 'Gim edukasi interaktif tentang persiapan dan tata cara pemulasaraan jenazah — dirancang sebagai lead magnet organik berkonversi tinggi yang menangkap data audiens melalui nilai psikologi konsumen yang tulus.',
      },
      tags: [
        { en: 'Interactive', id: 'Interaktif' },
        { en: 'Organic funnel', id: 'Funnel organik' },
        { en: 'Consumer psychology', id: 'Psikologi konsumen' },
      ],
    },
    {
      name: { en: 'Rukunku App', id: 'Aplikasi Rukunku' },
      kind: { en: 'Community Admin App', id: 'Aplikasi Admin Komunitas' },
      d: {
        en: 'A lightweight, highly functional web/mobile app for neighborhood administrators (Pengurus RT) and mosque committees — managing community administrative tasks, finance, and inventory in one place.',
        id: 'Aplikasi web/mobile ringan dan sangat fungsional untuk Pengurus RT dan pengurus masjid — mengelola administrasi komunitas, keuangan, dan inventaris dalam satu tempat.',
      },
      tags: [
        { en: 'PWA', id: 'PWA' },
        { en: 'Finance & inventory', id: 'Keuangan & inventaris' },
        { en: 'Community-first', id: 'Utamakan komunitas' },
      ],
    },
  ],

  creativeEyebrow: { en: 'Visual & Creative', id: 'Visual & Kreatif' },
  creativeTitle: { en: 'On both sides of the camera.', id: 'Di kedua sisi kamera.' },
  creativeBody: {
    en: 'Freelance commercial photography model for a range of brand campaigns — an adaptive, first-hand understanding of visual branding from behind the strategy and in front of the lens.',
    id: 'Model fotografi komersial lepas untuk beragam kampanye brand — pemahaman visual branding yang adaptif dan langsung, dari balik strategi maupun di depan lensa.',
  },
};

// ── PHOTO SHOOT PROJECT ───────────────────────────────────────────────────────
export const photoshoot = {
  eyebrow: { en: 'Photo Shoot · Commercial Modeling', id: 'Photo Shoot · Modeling Komersial' },
  title: { en: 'On the other side of the lens.', id: 'Di sisi lain lensa.' },
  tagline: {
    en: 'Freelance commercial photography model for a range of brand campaigns — the same brand thinking, applied in front of the camera.',
    id: 'Model fotografi komersial lepas untuk beragam kampanye brand — pemikiran brand yang sama, diterapkan di depan kamera.',
  },
  intro: {
    en: 'Understanding a brand from behind the strategy is one thing; embodying it in front of the lens is another. Modeling for commercial campaigns gave me an adaptive, first-hand feel for how visual branding actually reads — expression, styling, framing, and the tiny choices that make an image sell.',
    id: 'Memahami brand dari balik strategi itu satu hal; mewujudkannya di depan lensa adalah hal lain. Menjadi model untuk kampanye komersial memberi saya rasa langsung dan adaptif tentang bagaimana visual branding benar-benar terbaca — ekspresi, gaya, komposisi, dan pilihan kecil yang membuat sebuah gambar menjual.',
  },
  categories: [
    {
      k: { en: 'Commercial Campaigns', id: 'Kampanye Komersial' },
      d: {
        en: 'Brand and product campaigns — hero imagery built to convert, not just to look good.',
        id: 'Kampanye brand dan produk — citra utama yang dibuat untuk konversi, bukan sekadar terlihat bagus.',
      },
    },
    {
      k: { en: 'Product & Lifestyle', id: 'Produk & Lifestyle' },
      d: {
        en: 'Products in context — showing use, scale, and the feeling a buyer is really purchasing.',
        id: 'Produk dalam konteks — menunjukkan penggunaan, skala, dan perasaan yang sebenarnya dibeli pelanggan.',
      },
    },
    {
      k: { en: 'Editorial & Studio', id: 'Editorial & Studio' },
      d: {
        en: 'Controlled studio and editorial sets — clean light, deliberate styling, strong single frames.',
        id: 'Set studio dan editorial terkontrol — cahaya bersih, gaya yang disengaja, satu frame yang kuat.',
      },
    },
  ],
  galleryTitle: { en: 'Selected frames', id: 'Frame terpilih' },
  galleryNote: {
    en: 'Placeholder frames — real campaign imagery to be added.',
    id: 'Frame placeholder — materi kampanye asli akan ditambahkan.',
  },
  gallery: [
    { label: { en: 'Campaign · A', id: 'Kampanye · A' }, ratio: 'aspect-[3/4]' },
    { label: { en: 'Product · B', id: 'Produk · B' }, ratio: 'aspect-square' },
    { label: { en: 'Editorial · C', id: 'Editorial · C' }, ratio: 'aspect-square' },
    { label: { en: 'Lifestyle · D', id: 'Lifestyle · D' }, ratio: 'aspect-[3/4]' },
    { label: { en: 'Studio · E', id: 'Studio · E' }, ratio: 'aspect-[3/4]' },
    { label: { en: 'Campaign · F', id: 'Kampanye · F' }, ratio: 'aspect-square' },
  ],
};

export const footer = {
  cta: { en: "Let's build something profitable.", id: 'Mari bangun sesuatu yang menguntungkan.' },
  sub: {
    en: 'Open to Marketing Manager roles — brand, campaigns, and growth.',
    id: 'Terbuka untuk peran Marketing Manager — brand, kampanye, dan growth.',
  },
  email: { en: 'Email', id: 'Email' },
  rights: {
    en: '© ' + new Date().getFullYear() + ' William Pradana Putra. All rights reserved.',
    id: '© ' + new Date().getFullYear() + ' William Pradana Putra. Hak cipta dilindungi.',
  },
};
