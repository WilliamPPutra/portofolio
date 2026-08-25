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

  // TikTok: three engines (organic Shop, Ads, Affiliate)
  tiktok: {
    // TikTok Shop (organic), Q4 2025 vs the previous 4 months
    shop: {
      gmv: 'Rp 473 jt',
      growth: '+1.002%',
      mult: '≈11x lipat',
      period: { en: 'Q4 2025 vs prior 4 months', id: 'Q4 2025 vs 4 bulan sebelumnya' },
      orders: '631',
      ordersGrowth: '+814%',
      buyers: '573',
      buyersGrowth: '+839%',
      productImpr: '10,1 jt',
      productImprGrowth: '+581%',
    },
    // Monthly GMV (juta rupiah). Dec dropped sharply, so we show the Sep to Nov ramp.
    monthly: [
      { m: 'Sep', v: 98.3 },
      { m: 'Okt', v: 167.1 },
      { m: 'Nov', v: 186.8 },
    ],
    peakMonth: 'Nov',
    // TikTok Ads (GMV Max), trailing 6 months
    ads: {
      roi6: '10,23',
      roi1: '9,53',
      revenue: 'Rp 600,9 jt',
      spend: 'Rp 58,7 jt',
      orders: '821',
      cpo: 'Rp 71.562',
      period: { en: '6 months', id: '6 bulan' },
    },
    // TikTok Affiliate (creator collabs), Oct 2025
    affiliate: {
      gmv: 'Rp 122 jt',
      gmvGrowth: '+80,89%',
      commission: 'Rp 9,5 jt',
      commissionGrowth: '+103,19%',
      sold: '183',
      soldGrowth: '+74,29%',
      video: '110',
      videoGrowth: '+83,33%',
      live: '97',
      liveGrowth: '+42,65%',
      period: { en: 'Oct 2025', id: 'Okt 2025' },
    },
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

    // True channel ROAS, reconciled from ad spend against the channel P&L.
    // CTWA closes on WhatsApp, so the Meta dashboard alone cannot report this.
    roas: {
      blended: '4,11',
      bep: '2,53',           // break-even ROAS implied by the gross margin
      margin: '39,5%',       // gross margin on the channel
      headroom: '1,62x',     // how far above break-even the channel ran
      contribution: '15,2%', // gross profit after ad spend, as a share of channel revenue
      period: { en: 'Jan to Jul 2026', id: 'Jan hingga Jul 2026' },
      // Monthly ROAS. Values are ratios, never currency.
      monthly: [
        { m: 'Jan', v: 5.0 },
        { m: 'Feb', v: 3.46 },
        { m: 'Mar', v: 7.03 },
        { m: 'Apr', v: 4.98 },
        { m: 'Mei', v: 3.44 },
        { m: 'Jun', v: 3.94 },
        { m: 'Jul', v: 2.47 },
      ],
    },

    // The two moments worth explaining rather than hiding
    notes: {
      scale: {
        month: 'April',
        spendMult: '≈3x',
        roasDelta: '-29%',
        revDelta: '+111%',
      },
      fatigue: {
        month: 'Juli',
        monthEn: 'July',
        roas: '2,47',
        gap: '-2%',
      },
    },
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
