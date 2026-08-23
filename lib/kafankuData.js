// ─────────────────────────────────────────────────────────────────────────────
//  Kafanku growth data, real figures from platform dashboards & the brand P&L.
//  Per the brief: Meta revenue is shown as a percentage lift only (never Rupiah),
//  and the sister brand is never named.
// ─────────────────────────────────────────────────────────────────────────────

// Official platform brand colors so each panel reads as its platform instantly.
export const BRAND = {
  shopee: '#EE4D2D',
  shopeeDeep: '#C0341B',
  tiktokCyan: '#25F4EE',
  tiktokPink: '#FE2C55',
  meta: '#0866FF',
  metaDeep: '#0A2FB3',
  wa: '#25D366',
  waDeep: '#0B7C63',
};

export const growth = {
  // Headline: Shopee full-year 2025 (from the yearly Seller Center view)
  hero: {
    yoy: '+4.495%',
    yoyOrders: '+5.322%',
    sales2025: 'Rp 992 jt',
    orders2025: '2.006',
    label: { en: 'Shopee sales, full year 2025', id: 'Penjualan Shopee, sepanjang 2025' },
  },

  shopee: {
    // Shopee Ads (Nov 2025)
    ads: {
      roas: '8,96',
      salesFromAds: 'Rp 125,2 jt',
      spend: 'Rp 14 jt',
      ctr: '3,78%',
      orders: 185,
      clicks: '11,2 rb',
      impressions: '296,9 rb',
    },
    // Store growth (real anchors)
    trend: {
      fromLabel: 'Feb 2025',
      fromH: 20,  // relative bar heights
      toLabel: 'Nov 2025',
      toH: 100,
      growth: '+413%',
      salesFrom: 'Rp 31 jt',
      salesTo: 'Rp 160 jt',
    },
    nov: { salesMoM: '+23,41%', ordersMoM: '+28,05%', conv: '0,80%' },
  },

  tiktok: {
    // TikTok Shop analytics, Q4 2025 (Sep to Dec) vs the previous 4 months.
    gmv: 'Rp 473 jt',
    growth: '+1.002%',
    mult: '≈11x lipat',
    period: { en: 'Sep to Dec 2025 vs prior 4 months', id: 'Sep hingga Des 2025 vs 4 bulan sebelumnya' },
    orders: '631',
    ordersGrowth: '+814%',
    buyers: '573',
    buyersGrowth: '+839%',
    productImpr: '10,1 jt',
    productImprGrowth: '+581%',
    clicks: '1,02 jt',
    clicksGrowth: '+356%',
    // Monthly GMV (juta rupiah)
    monthly: [
      { m: 'Sep', v: 98.3 },
      { m: 'Okt', v: 167.1 },
      { m: 'Nov', v: 186.8 },
      { m: 'Des', v: 21.0 },
    ],
    peakMonth: 'Nov',
  },

  // Meta Ads: CTWA (Click To WhatsApp), NOT impulse checkout, so no dashboard ROAS.
  // Revenue shown as percentage lift only.
  meta: {
    revLift: '+111%',      // peak month (April) vs previous month
    revLiftAlt: '+148%',   // peak vs lowest month
    leads: '38.104',
    reach: '6,96 jt',
    impressions: '12,2 jt',
    clicks: '92.488',
    ctr: '0,76%',
    flagshipLeads: '15.870',
    flagshipReach: '2,07 jt',
  },

  // WhatsApp CS closing funnel (CS Scoreboard, Jan to Jun 2026)
  cs: {
    rows: [
      { m: 'Jan', leads: 1625, close: 99, cr: 6.1 },
      { m: 'Feb', leads: 2082, close: 83, cr: 4.0 },
      { m: 'Mar', leads: 2738, close: 95, cr: 3.5 },
      { m: 'Apr', leads: 5402, close: 181, cr: 3.4 },
      { m: 'Mei', leads: 3738, close: 102, cr: 2.7 },
      { m: 'Jun', leads: 2567, close: 111, cr: 4.3 },
    ],
    totalLeads: '18.152',
    totalClose: '671',
    bestCr: '6,1%',
    bestCrMonth: { en: 'January', id: 'Januari' },
    peakLeads: '5.402',
  },
};
