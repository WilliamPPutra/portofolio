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
    { href: '/side-job', label: { en: 'Side Job', id: 'Side Job' } },
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
        en: 'From the retail floor to marketing leadership, a deliberate climb through operations, data, and brand.',
        id: 'Dari lantai ritel hingga memimpin marketing, pendakian yang disengaja melewati operasional, data, dan brand.',
      },
    },
    {
      href: '/portfolio',
      icon: 'Award',
      theme: 'light',
      n: '02',
      name: { en: 'Portfolio', id: 'Portofolio' },
      tag: {
        en: 'Kafanku, how I turned brand cannibalization and warehouse waste into a year of B2B growth.',
        id: 'Kafanku, mengubah kanibalisasi brand dan limbah gudang menjadi setahun pertumbuhan B2B.',
      },
    },
    {
      href: '/projects',
      icon: 'Layers',
      theme: 'light',
      n: '03',
      name: { en: 'Projects', id: 'Proyek' },
      tag: {
        en: 'Commerce OS & interactive lead magnets, the systems and tools I built from scratch.',
        id: 'Commerce OS & lead magnet interaktif, sistem dan alat yang saya bangun dari nol.',
      },
    },
    {
      href: '/side-job',
      icon: 'Camera',
      theme: 'light',
      n: '04',
      name: { en: 'Side Job', id: 'Side Job' },
      tag: {
        en: 'Freelance model for product photography, how I spend the hours between campaigns.',
        id: 'Model lepas untuk foto produk, cara saya mengisi waktu di sela kampanye.',
      },
    },
  ],
};

// ── ABOUT ────────────────────────────────────────────────────────────────────
export const about = {
  eyebrow: { en: 'Marketing Manager · Brand & Growth', id: 'Marketing Manager · Brand & Growth' },
  name: { en: 'William Pradana Putra', id: 'William Pradana Putra' },
  headline: {
    en: ['Brand, campaigns,', 'and the systems', 'that scale them.'],
    id: ['Brand, kampanye,', 'dan sistem yang', 'menskalakannya.'],
  },
  sub: {
    en: 'Marketing Manager who runs all three. I lead brand and campaigns across Meta, TikTok, and marketplaces, and build the internal tools that let a small team operate like a large one.',
    id: 'Marketing Manager yang menjalankan ketiganya. Saya memimpin brand dan kampanye di Meta, TikTok, dan marketplace, sekaligus membangun alat internal yang membuat tim kecil bisa bekerja seperti tim besar.',
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
        en: 'Career started at the very bottom, on the retail floor. Cash register, inventory control, product merchandising to strict planogram standards. This is where I learned consumer psychology and store mechanics not from a slide deck, but from the shelf.',
        id: 'Karier dimulai dari paling bawah, di lantai ritel. Mesin kasir, kontrol persediaan, penataan produk sesuai standar planogram yang ketat. Di sinilah saya belajar psikologi konsumen dan mekanika toko bukan dari slide, tapi langsung dari rak.',
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
      role: { en: 'Marketing Manager · Kafanku', id: 'Marketing Manager · Kafanku' },
      body: {
        en: 'Everything synthesized. Leading cross-functional teams, Creative, CS, Operations, to architect full-stack brand growth. Frontline instinct plus marketing rigor, now aimed at building resilient, profitable business ecosystems.',
        id: 'Semuanya menyatu. Memimpin tim lintas fungsi, Kreatif, CS, Operasional, untuk merancang pertumbuhan brand secara menyeluruh. Insting garis depan berpadu ketelitian pemasaran, kini diarahkan membangun ekosistem bisnis yang tangguh dan menguntungkan.',
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
        en: 'Growth that depends on heroics does not scale. I turn operations into systems, repeatable, measurable, and calm under load.',
        id: 'Pertumbuhan yang bergantung pada kerja heroik tidak akan berskala. Saya mengubah operasional menjadi sistem, dapat diulang, terukur, dan tenang di bawah tekanan.',
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
    en: 'How I turned brand cannibalization, and warehouse waste, into a year of sustainable B2B growth.',
    id: 'Bagaimana saya mengubah kanibalisasi brand, dan limbah gudang, menjadi setahun pertumbuhan B2B yang berkelanjutan.',
  },
  metaLabel: { en: 'Role', id: 'Peran' },
  meta: [
    { k: { en: 'Role', id: 'Peran' }, v: { en: 'Marketing Manager', id: 'Marketing Manager' } },
    { k: { en: 'Category', id: 'Kategori' }, v: { en: 'Premium shroud kits', id: 'Paket kain kafan premium' } },
    { k: { en: 'Pivot', id: 'Pivot' }, v: { en: 'B2C → B2B', id: 'B2C → B2B' } },
    { k: { en: 'Outcome', id: 'Hasil' }, v: { en: '12+ months sustained', id: '12+ bulan berkelanjutan' } },
  ],

  ch1: {
    n: '01',
    kicker: { en: 'Brand Philosophy & Building', id: 'Filosofi & Pembangunan Brand' },
    title: {
      en: 'A premium shroud kit, designed with intention.',
      id: 'Paket kain kafan premium, dirancang dengan niat.',
    },
    body: {
      en: 'Kafanku is a premium shroud kit brand (paket kain kafan premium), built under the same parent company as an older, premium sister brand. If that sister brand was the “iPhone” of the category, high-end and aspirational, Kafanku was conceived as the considered “mid-tier Android”: the same dignity and quality of experience, made reachable for a wider market.',
      id: 'Kafanku adalah brand paket kain kafan premium, dibangun di bawah induk yang sama dengan sebuah brand kakak yang premium. Jika brand kakak itu adalah “iPhone” di kategorinya, kelas atas dan aspiratif, Kafanku dirancang sebagai “Android kelas menengah” yang matang: martabat dan kualitas pengalaman yang sama, dibuat terjangkau untuk pasar yang lebih luas.',
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
      en: '“Paket Ekonomis”, waste, re-engineered into revenue.',
      id: '“Paket Ekonomis”, limbah, direkayasa ulang menjadi pendapatan.',
    },
    body: {
      en: 'Rather than compete in the same premium space, I engineered a new line: Paket Ekonomis. It was manufactured from high-quality fabric off-cuts, the manufacturing waste accumulating in our warehouse from the premium lines. A circular-economy move that turned a cost sink into one of the most profitable revenue streams in the portfolio.',
      id: 'Alih-alih bersaing di ruang premium yang sama, saya merekayasa lini baru: Paket Ekonomis. Dibuat dari sisa potongan kain berkualitas tinggi, limbah produksi yang menumpuk di gudang dari lini premium. Sebuah langkah ekonomi sirkular yang mengubah pusat biaya menjadi salah satu aliran pendapatan paling menguntungkan di portofolio.',
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
      en: 'Launching Kafanku at a lower price with a similar premium concept created a critical market overlap. In a highly price-sensitive retail market, Kafanku heavily cannibalized the premium sister brand. Kafanku’s sales skyrocketed while the sister brand’s revenue dropped drastically. The mandate was clear and hard: both brands had to thrive without killing each other.',
      id: 'Meluncurkan Kafanku dengan harga lebih rendah namun konsep premium yang mirip menciptakan tumpang tindih pasar yang kritis. Di pasar ritel yang sangat sensitif harga, Kafanku mengkanibal brand kakak premium secara berat. Penjualan Kafanku melonjak sementara pendapatan brand kakak turun drastis. Mandatnya jelas dan berat: kedua brand harus berkembang tanpa saling mematikan.',
    },
    before: {
      label: { en: 'Before the pivot', id: 'Sebelum pivot' },
      rows: [
        { name: { en: 'Premium sister brand', id: 'Brand kakak premium' }, dir: 'down', note: { en: 'Revenue dropping', id: 'Pendapatan turun' } },
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
      en: 'Instead of a price war, I separated the two brands across product, audience, and channel, so each could win a market the other could not reach.',
      id: 'Alih-alih perang harga, saya memisahkan kedua brand di produk, audiens, dan kanal, agar masing-masing menang di pasar yang tak bisa dijangkau yang lain.',
    },
    moves: [
      {
        n: '01',
        t: { en: 'Product & Waste Innovation', id: 'Inovasi Produk & Limbah' },
        d: {
          en: 'Move Kafanku out of the premium fight entirely with Paket Ekonomis, the off-cut line, creating a category the premium line never occupied.',
          id: 'Keluarkan Kafanku dari pertarungan premium lewat Paket Ekonomis, lini sisa kain, menciptakan kategori yang tak pernah ditempati lini premium.',
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
          en: 'The premium line kept retail: every marketplace (Shopee/TikTok) plus Meta Ads. Kafanku’s premium scaled organically through TikTok Affiliate networks, while a brand-new Meta Ads funnel was opened exclusively for Paket Ekonomis, targeting B2B mosque committees.',
          id: 'Lini premium tetap di ritel: semua marketplace (Shopee/TikTok) plus Meta Ads. Premium Kafanku berskala organik lewat jaringan TikTok Affiliate, sementara funnel Meta Ads baru dibuka khusus untuk Paket Ekonomis, menyasar takmir/pengurus masjid B2B.',
        },
      },
    ],
    matrixTitle: { en: 'The separation, at a glance', id: 'Pemisahan, sekilas' },
    matrix: {
      cols: [
        { en: 'Premium line', id: 'Lini Premium' },
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
      en: 'The premium line’s retail market recovered and sustained its growth. Kafanku’s B2B Paket Ekonomis surged sustainably for over a year, securing long-term institutional partnerships and lifting the company’s net profit margins. Two brands, two markets, one healthy ecosystem.',
      id: 'Pasar ritel lini premium pulih dan mempertahankan pertumbuhannya. Paket Ekonomis B2B Kafanku melonjak berkelanjutan lebih dari setahun, mengamankan kemitraan institusional jangka panjang dan mengangkat margin laba bersih perusahaan. Dua brand, dua pasar, satu ekosistem yang sehat.',
    },
    outcomes: [
      { k: { en: 'Premium line', id: 'Lini premium' }, v: { en: 'Recovered & sustained', id: 'Pulih & bertahan' } },
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
    en: 'A technical showcase, from a full custom Commerce OS to interactive lead magnets that capture audiences by giving something genuinely useful first.',
    id: 'Etalase teknis, dari Commerce OS kustom penuh hingga lead magnet interaktif yang menangkap audiens dengan memberi sesuatu yang benar-benar berguna terlebih dahulu.',
  },

  os: {
    eyebrow: { en: 'Flagship · Custom Software', id: 'Unggulan · Perangkat Lunak Kustom' },
    name: { en: 'Commerce OS', id: 'Commerce OS' },
    tagline: {
      en: 'A custom commerce operating system that runs the business, margins, marketing spend, inventory, and operations in one synced brain.',
      id: 'Sistem operasi commerce kustom yang menjalankan bisnis, margin, belanja iklan, inventaris, dan operasional dalam satu otak yang tersinkron.',
    },
    stack: ['Laravel', 'Inertia', 'React', 'MySQL', 'Tailwind'],
    intro: {
      en: 'Built to handle internal business infrastructure end-to-end: automated margin calculators, a marketing-spend tracker (ROAS, CPA, CPC), and operational workflow sync across brands. Below are simulated views of the real system.',
      id: 'Dibangun untuk menangani infrastruktur bisnis internal secara menyeluruh: kalkulator margin otomatis, pelacak belanja iklan (ROAS, CPA, CPC), dan sinkronisasi alur kerja operasional lintas brand. Berikut tampilan tersimulasi dari sistem asli.',
    },
    // The honest framing: a marketer using AI to build tools, not a programmer.
    aiNote: {
      eyebrow: { en: 'How this was built', id: 'Bagaimana ini dibangun' },
      title: {
        en: 'AI is not just for content. I use it to build the systems the whole company runs on.',
        id: 'AI bukan cuma untuk konten. Saya pakai untuk membangun sistem yang menjalankan seluruh perusahaan.',
      },
      body: {
        en: 'Most people stop at using AI to help the creative team produce content faster. I take it further. I use AI to build the internal tools other divisions need, so operations, finance, and CS get the same leverage the creative team does. That is how Commerce OS started: the team was losing hours to manual work, recording orders by hand, creating shipping labels one by one, recalculating COGS and margin in spreadsheets. I described the problem, used AI to build the system, then tested it against how the team actually works day to day.',
        id: 'Kebanyakan orang berhenti di memakai AI untuk membantu tim kreatif memproduksi konten lebih cepat. Saya membawanya lebih jauh. Saya memakai AI untuk membangun alat internal yang dibutuhkan divisi lain, supaya operasional, keuangan, dan CS mendapat keuntungan yang sama seperti tim kreatif. Dari situlah Commerce OS lahir: tim kehilangan banyak waktu untuk kerja manual, mencatat pesanan satu per satu, membuat resi manual, menghitung ulang HPP dan margin di spreadsheet. Saya merumuskan masalahnya, memakai AI untuk membangun sistemnya, lalu mengujinya sesuai cara kerja tim sehari-hari.',
      },
      points: [
        {
          t: { en: 'Beyond the creative team', id: 'Melampaui tim kreatif' },
          d: {
            en: 'AI writes and designs faster, yes. It can also build the tools operations and finance work in every day.',
            id: 'AI memang mempercepat naskah dan desain. Tapi AI juga bisa membangun alat yang dipakai operasional dan keuangan tiap hari.',
          },
        },
        {
          t: { en: 'Manual orders, digitized', id: 'Pesanan manual, didigitalisasi' },
          d: {
            en: 'Orders that used to be typed into chats and spreadsheets now enter one pipeline with a clear status.',
            id: 'Pesanan yang dulu diketik di chat dan spreadsheet kini masuk satu pipeline dengan status yang jelas.',
          },
        },
        {
          t: { en: 'Shipping labels, automated', id: 'Resi, otomatis' },
          d: {
            en: 'Shipping labels are generated from the order itself, so no one retypes an address again.',
            id: 'Resi dibuat langsung dari pesanannya, jadi tidak ada lagi yang mengetik ulang alamat.',
          },
        },
        {
          t: { en: 'COGS and margin, calculated', id: 'HPP dan margin, terhitung' },
          d: {
            en: 'COGS, discount, and commission are deducted automatically, so the real margin is visible per order.',
            id: 'HPP, diskon, dan komisi terpotong otomatis, jadi margin sebenarnya terlihat per pesanan.',
          },
        },
      ],
    },
    demoCta: { en: 'Open the live demo', id: 'Buka demo langsung' },
    demoNote: {
      en: 'Opens in a new tab. Simulated data only.',
      id: 'Terbuka di tab baru. Hanya data simulasi.',
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
          en: 'Revenue minus COGS, affiliate commission, and discounts, computed per order, per brand, per channel. Margin visible at every level.',
          id: 'Pendapatan dikurangi HPP, komisi afiliasi, dan diskon, dihitung per pesanan, per brand, per kanal. Margin terlihat di setiap tingkat.',
        },
      },
      {
        t: { en: 'Marketing Spend Tracker', id: 'Pelacak Belanja Iklan' },
        d: {
          en: 'ROAS, CPA, and CPC per campaign and channel, tied back to real orders, so spend decisions are made on profit, not vanity reach.',
          id: 'ROAS, CPA, dan CPC per kampanye dan kanal, terhubung ke pesanan nyata, agar keputusan belanja dibuat atas laba, bukan jangkauan semu.',
        },
      },
      {
        t: { en: 'Inventory → Produce (BOM)', id: 'Inventaris → Produksi (BOM)' },
        d: {
          en: 'Bill-of-materials that turns raw fabric off-cuts into finished SKUs, the literal engine behind Kafanku’s Paket Ekonomis.',
          id: 'Bill-of-materials yang mengubah sisa kain mentah menjadi SKU jadi, mesin nyata di balik Paket Ekonomis Kafanku.',
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
          en: 'One screen to read the whole business, revenue, orders, products and active users, a daily sales chart and order-source split, all filtered by brand and date.',
          id: 'Satu layar untuk membaca seluruh bisnis, pendapatan, pesanan, produk dan pengguna aktif, grafik penjualan harian dan sumber pesanan, semua difilter per brand dan tanggal.',
        },
      },
      {
        key: 'inventory',
        icon: 'Boxes',
        theme: 'light',
        name: { en: 'Inventory', id: 'Inventaris' },
        tag: { en: 'Off-cuts → SKUs', id: 'Sisa kain → SKU' },
        d: {
          en: 'A bill-of-materials engine that turns raw fabric off-cuts into finished SKUs and deducts stock automatically, the literal machine behind Paket Ekonomis.',
          id: 'Mesin bill-of-materials yang mengubah sisa kain mentah menjadi SKU jadi dan memotong stok otomatis, mesin nyata di balik Paket Ekonomis.',
        },
      },
      {
        key: 'finance',
        icon: 'Wallet',
        theme: 'dark',
        name: { en: 'Finance', id: 'Keuangan' },
        tag: { en: 'Net profit, per brand', id: 'Laba bersih, per brand' },
        d: {
          en: 'Revenue minus COGS, affiliate commission, and discount, computed per order, per brand, per channel. The profit is visible at every level, not just the top line.',
          id: 'Omzet dikurangi HPP, komisi afiliasi, dan diskon, dihitung per pesanan, per brand, per kanal. Laba terlihat di setiap tingkat, bukan hanya di baris teratas.',
        },
      },
      {
        key: 'builder',
        icon: 'Globe',
        theme: 'gradient',
        name: { en: 'Landing Page', id: 'Landing Page' },
        tag: { en: 'Paste HTML or upload a .zip', id: 'Paste HTML atau upload .zip' },
        d: {
          en: 'A landing-page manager: paste raw HTML or upload an .html/.zip, pick the brand, domain, and slug or subdomain, then publish a campaign funnel in minutes, no separate hosting needed.',
          id: 'Pengelola landing page: paste HTML mentah atau upload .html/.zip, pilih brand, domain, dan slug atau subdomain, lalu publikasikan funnel kampanye dalam hitungan menit, tanpa hosting terpisah.',
        },
      },
    ],
  },

  // The customer-facing storefront, built on the same system as Commerce OS
  store: {
    eyebrow: { en: 'Storefront', id: 'Toko Online' },
    name: { en: 'The Kafanku store', id: 'Toko Kafanku' },
    url: 'pusatkainkafan.com',
    href: 'https://pusatkainkafan.com/',
    tagline: {
      en: 'Commerce OS runs the back office. This is the half the customer actually sees: a storefront I built so the brand stopped renting its shelf space from a marketplace.',
      id: 'Commerce OS mengurus dapurnya. Ini bagian yang benar-benar dilihat pelanggan: toko online yang saya bangun supaya brand berhenti menyewa rak di marketplace.',
    },
    body: {
      en: 'Selling only through marketplaces means the platform owns the customer, sets the fee, and decides who sees you. So we built our own. Every order that lands here carries no commission, arrives with the buyer contact attached, and flows straight into the same dashboard the team already uses. The checkout is deliberately plain, because the audience is often buying under difficult circumstances and does not need to be sold to twice.',
      id: 'Jualan hanya lewat marketplace berarti platform yang memiliki pelanggannya, menentukan komisinya, dan mengatur siapa yang melihat kita. Jadi kami bangun sendiri. Setiap pesanan yang masuk di sini tanpa komisi, membawa kontak pembeli, dan langsung mengalir ke dashboard yang sama yang dipakai tim. Checkout-nya sengaja dibuat sederhana, karena pembelinya sering sedang dalam situasi sulit dan tidak perlu dijuali dua kali.',
    },
    stack: ['Laravel', 'Inertia', 'React', 'Tailwind'],
    cta: { en: 'Visit the live store', id: 'Kunjungi tokonya' },
    note: { en: 'Opens the real site in a new tab.', id: 'Membuka situs aslinya di tab baru.' },
    shots: [
      {
        img: 'store-home.webp',
        tag: { en: 'Homepage', id: 'Beranda' },
        t: { en: 'A shopfront, not a catalogue dump', id: 'Etalase, bukan tumpukan katalog' },
        d: {
          en: 'The hero answers who this is for before it sells anything, then the trust signals do the rest: years in the trade, reseller count, national coverage. WhatsApp sits one tap away throughout, because this audience asks before it buys.',
          id: 'Bagian atas menjawab ini untuk siapa sebelum menjual apa pun, lalu sinyal kepercayaan yang bekerja: lama berdagang, jumlah reseller, jangkauan nasional. WhatsApp selalu satu ketukan jauhnya, karena pembeli di kategori ini bertanya dulu sebelum membeli.',
        },
      },
      {
        img: 'store-product.webp',
        tag: { en: 'Product detail', id: 'Detail produk' },
        t: { en: 'Every question answered on one screen', id: 'Semua pertanyaan terjawab di satu layar' },
        d: {
          en: 'Gallery, variant, live stock, and a shipping-cost check that runs before the buyer commits, so the total holds no surprises. Two ways to finish are offered side by side, WhatsApp for the ones who want a person, web checkout for the ones who do not.',
          id: 'Galeri, varian, stok real-time, dan cek ongkir yang jalan sebelum pembeli memutuskan, jadi totalnya tidak menyimpan kejutan. Dua cara menyelesaikan pesanan disandingkan, WhatsApp untuk yang ingin bicara dengan orang, checkout web untuk yang tidak.',
        },
      },
      {
        img: 'store-checkout.webp',
        tag: { en: 'Checkout', id: 'Checkout' },
        t: { en: 'The shortest path we could justify', id: 'Jalur terpendek yang masih masuk akal' },
        d: {
          en: 'No account, no upsell, no second page of offers. Order summary, recipient details, promo code, total. The submit button stays disabled until shipping is actually picked, which quietly removes the most common reason an order used to fail.',
          id: 'Tanpa akun, tanpa upsell, tanpa halaman penawaran kedua. Ringkasan pesanan, data penerima, kode promo, total. Tombol lanjut tetap nonaktif sampai kurir benar-benar dipilih, yang diam-diam menghapus penyebab paling sering pesanan gagal.',
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
        en: 'An interactive educational game about funeral preparation and rituals, designed as a high-converting organic lead magnet that captures audience data through genuine consumer-psychology value.',
        id: 'Gim edukasi interaktif tentang persiapan dan tata cara pemulasaraan jenazah, dirancang sebagai lead magnet organik berkonversi tinggi yang menangkap data audiens melalui nilai psikologi konsumen yang tulus.',
      },
      tags: [
        { en: 'Interactive', id: 'Interaktif' },
        { en: 'Organic funnel', id: 'Funnel organik' },
        { en: 'Consumer psychology', id: 'Psikologi konsumen' },
      ],
      href: '/games/kepulanganku/index.html',
      cta: { en: 'Play the game', id: 'Mainkan gamenya' },
    },
  ],

  creativeEyebrow: { en: 'Visual & Creative', id: 'Visual & Kreatif' },
  creativeTitle: { en: 'On both sides of the camera.', id: 'Di kedua sisi kamera.' },
  creativeBody: {
    en: 'Freelance commercial photography model for a range of brand campaigns, an adaptive, first-hand understanding of visual branding from behind the strategy and in front of the lens.',
    id: 'Model fotografi komersial lepas untuk beragam kampanye brand, pemahaman visual branding yang adaptif dan langsung, dari balik strategi maupun di depan lensa.',
  },
};

// ── SIDE JOB (freelance product-photography model) ───────────────────────────
export const sidejob = {
  eyebrow: { en: 'Side Job · Freelance Model', id: 'Side Job · Model Lepas' },
  title: { en: 'My side job is in front of the camera.', id: 'Side job saya ada di depan kamera.' },
  tagline: {
    en: 'Outside of marketing, I work as a freelance model for product photography. It is how I spend my free time, and it keeps me close to how a product is actually sold.',
    id: 'Di luar marketing, saya menerima pekerjaan lepas sebagai model untuk foto produk. Ini cara saya mengisi waktu luang, sekaligus menjaga saya tetap dekat dengan bagaimana sebuah produk benar-benar dijual.',
  },
  intro: {
    en: 'Marketing is the day job. This is what I do with the hours in between. Brands book me to model their products, apparel, bags, everyday carry, for catalogues, marketplace listings, and social content. It pays, it is genuinely fun, and it turns out to be useful: standing where the product is being sold teaches you things about styling, framing, and expression that no brief ever does.',
    id: 'Marketing adalah pekerjaan utama. Ini yang saya kerjakan di sela-selanya. Brand menyewa saya untuk memodelkan produk mereka, apparel, tas, barang harian, untuk katalog, listing marketplace, dan konten sosial. Dibayar, benar-benar menyenangkan, dan ternyata berguna: berdiri di posisi produk itu dijual mengajarkan hal soal styling, komposisi, dan ekspresi yang tidak pernah diajarkan brief mana pun.',
  },
  points: [
    {
      k: { en: 'Product & apparel', id: 'Produk & apparel' },
      d: {
        en: 'Clothing, bags, and everyday carry shot the way a buyer wants to picture them.',
        id: 'Pakaian, tas, dan barang harian difoto seperti cara calon pembeli membayangkannya.',
      },
    },
    {
      k: { en: 'Studio & outdoor', id: 'Studio & outdoor' },
      d: {
        en: 'Clean studio sets for catalogue work, street and outdoor light for social content.',
        id: 'Set studio bersih untuk katalog, cahaya jalanan dan outdoor untuk konten sosial.',
      },
    },
    {
      k: { en: 'Filling the free hours', id: 'Mengisi waktu luang' },
      d: {
        en: 'Weekends and evenings, mostly. A side job that doubles as a way to stay creative.',
        id: 'Kebanyakan akhir pekan dan malam hari. Side job yang sekaligus jadi cara tetap kreatif.',
      },
    },
  ],
  galleryTitle: { en: 'The gallery', id: 'Galeri' },
  galleryNote: {
    en: 'Click any photo to view it larger.',
    id: 'Klik foto mana pun untuk melihat lebih besar.',
  },

  // Closing invitation under the gallery
  collab: {
    eyebrow: { en: 'Open for collaboration', id: 'Terbuka untuk kolaborasi' },
    title: {
      en: 'Got a product that needs a face?',
      id: 'Punya produk yang butuh wajah?',
    },
    body: {
      en: 'I take bookings for catalogue shoots, marketplace listings, and social content. Apparel, bags, and everyday carry are where I am most comfortable, and because marketing is my day job I tend to arrive already thinking about how the shot has to sell. Tell me the product and the date, and I will tell you if I am free.',
      id: 'Saya menerima booking untuk pemotretan katalog, listing marketplace, dan konten sosial. Apparel, tas, dan barang harian adalah area yang paling saya kuasai, dan karena marketing adalah pekerjaan utama saya, biasanya saya datang sudah sambil memikirkan bagaimana foto itu harus menjual. Sebutkan produk dan tanggalnya, nanti saya kabari apakah saya kosong.',
    },
    tags: [
      { en: 'Catalogue & lookbook', id: 'Katalog & lookbook' },
      { en: 'Marketplace listing', id: 'Listing marketplace' },
      { en: 'Social content', id: 'Konten sosial' },
      { en: 'Studio or on location', id: 'Studio atau on location' },
    ],
    cta: { en: 'Email me about a booking', id: 'Email saya soal booking' },
    subject: { en: 'Model booking enquiry', id: 'Permintaan booking model' },
    note: {
      en: 'Weekends and evenings are easiest. Rates depend on scope, just ask.',
      id: 'Akhir pekan dan malam hari paling memungkinkan. Tarif menyesuaikan lingkup kerja, tanya saja.',
    },
  },
  // Files live in /public/sidejob. w and h drive the natural masonry layout.
  gallery: [
    { src: 'sidejob-01.webp', w: 900, h: 1200, label: { en: 'Studio · everyday carry', id: 'Studio · barang harian' } },
    { src: 'sidejob-02.webp', w: 900, h: 1200, label: { en: 'Studio · everyday carry', id: 'Studio · barang harian' } },
    { src: 'sidejob-03.webp', w: 900, h: 1200, label: { en: 'Studio · everyday carry', id: 'Studio · barang harian' } },
    { src: 'sidejob-04.webp', w: 900, h: 1200, label: { en: 'Apparel · outdoor', id: 'Apparel · outdoor' } },
    { src: 'sidejob-05.webp', w: 900, h: 1200, label: { en: 'Apparel · outdoor', id: 'Apparel · outdoor' } },
    { src: 'sidejob-06.webp', w: 900, h: 1200, label: { en: 'Apparel · outdoor', id: 'Apparel · outdoor' } },
    { src: 'sidejob-07.webp', w: 900, h: 1200, label: { en: 'Apparel · outdoor', id: 'Apparel · outdoor' } },
    { src: 'sidejob-08.webp', w: 900, h: 1200, label: { en: 'Apparel · outdoor', id: 'Apparel · outdoor' } },
    { src: 'sidejob-09.webp', w: 900, h: 1200, label: { en: 'Apparel · outdoor', id: 'Apparel · outdoor' } },
    { src: 'sidejob-10.webp', w: 900, h: 1350, label: { en: 'Apparel · street', id: 'Apparel · street' } },
    { src: 'sidejob-11.webp', w: 900, h: 1350, label: { en: 'Apparel · street', id: 'Apparel · street' } },
    { src: 'sidejob-12.webp', w: 900, h: 1200, label: { en: 'Apparel · outdoor', id: 'Apparel · outdoor' } },
    { src: 'sidejob-13.webp', w: 900, h: 1350, label: { en: 'Apparel · street', id: 'Apparel · street' } },
    { src: 'sidejob-14.webp', w: 900, h: 1124, label: { en: 'Studio · portrait', id: 'Studio · potret' } },
    { src: 'sidejob-15.webp', w: 900, h: 1124, label: { en: 'Studio · portrait', id: 'Studio · potret' } },
    { src: 'sidejob-16.webp', w: 900, h: 1124, label: { en: 'Studio · portrait', id: 'Studio · potret' } },
  ],
};

export const footer = {
  cta: { en: "Let's build something profitable.", id: 'Mari bangun sesuatu yang menguntungkan.' },
  sub: {
    en: 'Open to Marketing Manager roles, Brand Lead, Advertiser, and other Digital Marketing related.',
    id: 'Terbuka untuk peran Marketing Manager, Brand Lead, Advertiser, dan bidang Digital Marketing lainnya.',
  },
  email: { en: 'Email', id: 'Email' },
  rights: {
    en: '© ' + new Date().getFullYear() + ' William Pradana Putra. All rights reserved.',
    id: '© ' + new Date().getFullYear() + ' William Pradana Putra. Hak cipta dilindungi.',
  },
};
