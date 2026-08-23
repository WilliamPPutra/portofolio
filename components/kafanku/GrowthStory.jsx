'use client';

import {
  ShoppingBag,
  Video,
  MessageCircle,
  TrendingUp,
  ArrowRight,
  Users,
  Eye,
  MousePointerClick,
  Target,
  Zap,
  Trophy,
  Sparkles,
} from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { BRAND, growth as G } from '@/lib/kafankuData';
import Reveal from '@/components/Reveal';
import { SectionKicker } from '@/components/Bits';

const t = (lang, en, id) => (lang === 'id' ? id : en);

export default function GrowthStory() {
  const { lang } = useLang();

  return (
    <section className="bg-white">
      <div className="shell py-20 sm:py-28">
        {/* Header */}
        <Reveal>
          <SectionKicker icon={TrendingUp} eyebrow={t(lang, 'Growth by the numbers', 'Perkembangan lewat angka')} />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-7 max-w-3xl text-4xl text-appleink sm:text-5xl md:text-6xl">
            {t(lang, 'From a new brand to a multi-channel engine.', 'Dari brand baru jadi mesin multi-kanal.')}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-applesub">
            {t(
              lang,
              'Real numbers from each platform, colored by its own brand so you can read the story at a glance: marketplace, social commerce, and a lead engine that closes on WhatsApp.',
              'Angka nyata dari tiap platform, diwarnai sesuai brand-nya biar langsung kebaca: marketplace, social commerce, dan mesin leads yang closing di WhatsApp.'
            )}
          </p>
        </Reveal>

        {/* HERO STAT, Shopee full year 2025 */}
        <Reveal delay={0.1}>
          <div
            className="relative mt-12 overflow-hidden rounded-[2rem] p-8 text-white sm:p-12"
            style={{ background: `linear-gradient(135deg, ${BRAND.shopee}, ${BRAND.shopeeDeep})` }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <PlatformChip label="Shopee" color="#ffffff22" />
                <p className="mt-4 text-sm font-medium text-white/80">{pick(G.hero.label, lang)}</p>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="display text-6xl font-bold sm:text-7xl">{G.hero.yoy}</span>
                  <span className="text-lg font-medium text-white/80">{t(lang, 'year over year', 'dibanding tahun lalu')}</span>
                </div>
                <p className="mt-3 text-sm text-white/70">
                  {t(lang, 'Grew from near zero to', 'Tumbuh dari hampir nol ke')} <b className="text-white">{G.hero.sales2025}</b>{' '}
                  {t(lang, 'in 2025', 'sepanjang 2025')} · {G.hero.orders2025} {t(lang, 'orders', 'pesanan')} ({G.hero.yoyOrders})
                </p>
              </div>
              <div className="flex gap-3">
                <HeroPill k={t(lang, 'Orders', 'Pesanan')} v={G.hero.orders2025} />
                <HeroPill k={t(lang, 'Order growth', 'Growth pesanan')} v={G.hero.yoyOrders} />
              </div>
            </div>
          </div>
        </Reveal>

        {/* PLATFORM PANELS */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* SHOPEE */}
          <Reveal>
            <Panel color={BRAND.shopee} tint="#FFF4F1" icon={ShoppingBag} name="Shopee"
              tag={t(lang, 'Marketplace engine', 'Mesin marketplace')}>
              <div className="grid grid-cols-3 gap-3">
                <BigStat color={BRAND.shopee} label="ROAS" value={G.shopee.ads.roas} sub={t(lang, 'from ads', 'dari iklan')} trophy />
                <BigStat color={BRAND.shopee} label={t(lang, 'Ad CTR', 'CTR Iklan')} value={G.shopee.ads.ctr} />
                <BigStat color={BRAND.shopee} label={t(lang, 'Sales / spend', 'Omzet / biaya')} value={`${G.shopee.ads.salesFromAds}`} sub={`/ ${G.shopee.ads.spend}`} small />
              </div>

              {/* Before -> after growth bars */}
              <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">{t(lang, 'Store sales growth', 'Pertumbuhan omzet toko')}</span>
                  <span className="rounded-full px-2.5 py-1 text-xs font-bold text-white" style={{ background: BRAND.shopee }}>
                    {G.shopee.trend.growth}
                  </span>
                </div>
                <div className="flex items-end gap-6">
                  <TrendBar h={G.shopee.trend.fromH} color="#F6B8A8" label={G.shopee.trend.fromLabel} value={G.shopee.trend.salesFrom} />
                  <ArrowRight className="mb-6 shrink-0 text-slate-300" size={20} />
                  <TrendBar h={G.shopee.trend.toH} color={BRAND.shopee} label={G.shopee.trend.toLabel} value={G.shopee.trend.salesTo} />
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Nov 2025: {t(lang, 'sales', 'omzet')} {G.shopee.nov.salesMoM} · {t(lang, 'orders', 'pesanan')} {G.shopee.nov.ordersMoM} (MoM)
              </p>
            </Panel>
          </Reveal>

          {/* TIKTOK */}
          <Reveal delay={0.06}>
            <div className="h-full overflow-hidden rounded-[2rem] p-7 text-white" style={{ background: '#0B0B0F' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: 'linear-gradient(135deg,#25F4EE,#FE2C55)' }}>
                    <Video size={20} className="text-black" />
                  </span>
                  <div>
                    <p className="text-base font-bold">TikTok</p>
                    <p className="text-[11px]" style={{ color: BRAND.tiktokCyan }}>{t(lang, 'Social commerce', 'Social commerce')}</p>
                  </div>
                </div>
                <span className="rounded-full px-3 py-1 text-xs font-bold text-black" style={{ background: BRAND.tiktokCyan }}>
                  {G.tiktok.growth} GMV
                </span>
              </div>

              {/* GMV hero + growth */}
              <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="display text-4xl font-bold">{G.tiktok.gmv}</span>
                <span className="text-sm text-white/60">GMV, {pick(G.tiktok.period, lang)}</span>
              </div>
              <p className="mt-1 text-[11px]" style={{ color: BRAND.tiktokCyan }}>{G.tiktok.mult}</p>

              {/* Metric chips */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { v: G.tiktok.orders, g: G.tiktok.ordersGrowth, l: t(lang, 'Orders', 'Pesanan') },
                  { v: G.tiktok.buyers, g: G.tiktok.buyersGrowth, l: t(lang, 'Buyers', 'Pembeli') },
                  { v: G.tiktok.productImpr, g: G.tiktok.productImprGrowth, l: t(lang, 'Impressions', 'Impresi') },
                ].map((c) => (
                  <div key={c.l} className="rounded-xl p-2.5" style={{ background: '#17171E' }}>
                    <p className="text-base font-bold">{c.v}</p>
                    <p className="text-[10px]" style={{ color: BRAND.tiktokCyan }}>{c.g}</p>
                    <p className="text-[9px] text-white/40">{c.l}</p>
                  </div>
                ))}
              </div>

              {/* Monthly bars (bars row + labels row so % heights resolve) */}
              <div className="mt-5">
                <div className="flex h-40 items-end gap-2">
                  {G.tiktok.monthly.map((d) => {
                    const max = Math.max(...G.tiktok.monthly.map((x) => x.v));
                    const peak = d.m === G.tiktok.peakMonth;
                    return (
                      <div
                        key={d.m}
                        className="flex-1 rounded-t transition-[height] duration-700 ease-out"
                        style={{
                          height: `${Math.max((d.v / max) * 100, 4)}%`,
                          background: peak ? 'linear-gradient(180deg,#25F4EE,#FE2C55)' : '#2A2A34',
                        }}
                        title={`${d.v} jt`}
                      />
                    );
                  })}
                </div>
                <div className="mt-2 flex gap-2">
                  {G.tiktok.monthly.map((d) => {
                    const peak = d.m === G.tiktok.peakMonth;
                    return (
                      <span
                        key={d.m}
                        className={`flex-1 text-center text-[9px] ${peak ? 'font-bold' : 'text-white/40'}`}
                        style={peak ? { color: BRAND.tiktokCyan } : {}}
                      >
                        {d.m}
                      </span>
                    );
                  })}
                </div>
              </div>
              <p className="mt-3 text-xs text-white/50">
                {t(lang, 'Monthly GMV, Q4 2025. Peak in', 'GMV bulanan, Q4 2025. Puncak di')}{' '}
                <b style={{ color: BRAND.tiktokCyan }}>{t(lang, 'November', 'November')}</b>.
              </p>
            </div>
          </Reveal>
        </div>

        {/* META CTWA, full width, blue, with the narrative */}
        <Reveal delay={0.05}>
          <div
            className="relative mt-6 overflow-hidden rounded-[2rem] p-8 text-white sm:p-10"
            style={{ background: `linear-gradient(135deg, ${BRAND.meta}, ${BRAND.metaDeep})` }}
          >
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              {/* Narrative */}
              <div>
                <PlatformChip label="Meta Ads · CTWA" color="#ffffff22" />
                <h3 className="display mt-4 text-3xl sm:text-4xl">
                  {t(lang, 'Not impulse buying. Conviction selling.', 'Bukan impulse buying. Tapi meyakinkan.')}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  {t(
                    lang,
                    'Most products checkout on a landing page, so a ROAS shows up right on the Meta dashboard. This category is different. A shroud kit is a considered, emotional purchase, so we use CTWA (Click To WhatsApp): the ad starts a conversation, and we convince and explain in detail on WhatsApp first. The dashboard measures leads, not a direct ROAS.',
                    'Kebanyakan produk checkout di landing page, jadi ROAS langsung muncul di dashboard Meta. Kategori ini beda. Kain kafan adalah pembelian yang penuh pertimbangan dan emosional, jadi kami pakai CTWA (Click To WhatsApp): iklan memulai percakapan, lalu kami yakinkan dan jelaskan detail dulu di WhatsApp. Dashboard mengukur leads, bukan ROAS langsung.'
                  )}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3">
                  <TrendingUp size={18} className="text-white" />
                  <span className="text-sm text-white/80">{t(lang, 'Best month revenue lift', 'Kenaikan pendapatan terbaik')}:</span>
                  <span className="text-2xl font-bold">{G.meta.revLift}</span>
                  <span className="text-xs text-white/60">{t(lang, 'MoM (April peak)', 'MoM (puncak April)')}</span>
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-3">
                <MetaStat icon={MessageCircle} label={t(lang, 'WhatsApp leads', 'Leads WhatsApp')} value={G.meta.leads} />
                <MetaStat icon={Eye} label={t(lang, 'Reach', 'Jangkauan')} value={G.meta.reach} />
                <MetaStat icon={Zap} label={t(lang, 'Impressions', 'Impresi')} value={G.meta.impressions} />
                <MetaStat icon={MousePointerClick} label={t(lang, 'Link clicks', 'Klik')} value={G.meta.clicks} />
                <MetaStat icon={Target} label="CTR" value={G.meta.ctr} />
                <MetaStat icon={Trophy} label={t(lang, 'Top campaign leads', 'Leads kampanye teratas')} value={G.meta.flagshipLeads} highlight />
              </div>
            </div>
          </div>
        </Reveal>

        {/* WHATSAPP CS FUNNEL, green */}
        <Reveal delay={0.05}>
          <div className="mt-6 overflow-hidden rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl text-white" style={{ background: BRAND.wa }}>
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="text-base font-bold text-slate-800">{t(lang, 'WhatsApp closing funnel', 'Funnel closing WhatsApp')}</p>
                  <p className="text-[11px] text-slate-400">{t(lang, 'CS Scoreboard, Jan to Jun 2026', 'Scoreboard CS, Jan hingga Jun 2026')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-white" style={{ background: BRAND.wa }}>
                <Sparkles size={15} />
                <span className="text-xs">{t(lang, 'Best CR', 'CR terbaik')}</span>
                <span className="text-xl font-bold">{G.cs.bestCr}</span>
                <span className="text-[11px] text-white/80">({pick(G.cs.bestCrMonth, lang)})</span>
              </div>
            </div>

            {/* Funnel bars: leads vs closing */}
            <div className="mt-7 grid gap-2.5">
              {G.cs.rows.map((r) => {
                const maxLeads = Math.max(...G.cs.rows.map((x) => x.leads));
                return (
                  <div key={r.m} className="flex items-center gap-3">
                    <span className="w-8 shrink-0 text-xs font-medium text-slate-500">{r.m}</span>
                    <div className="relative h-7 flex-1 overflow-hidden rounded-lg bg-slate-100">
                      <div
                        className="flex h-full items-center rounded-lg transition-[width] duration-700 ease-out"
                        style={{ width: `${(r.leads / maxLeads) * 100}%`, background: `${BRAND.wa}22` }}
                      >
                        <span className="pl-2 text-[11px] font-medium" style={{ color: BRAND.waDeep }}>
                          {r.leads.toLocaleString('id-ID')} leads
                        </span>
                      </div>
                    </div>
                    <span className="flex w-24 shrink-0 items-center justify-end gap-1.5 text-[11px]">
                      <span className="font-bold text-slate-700">{r.close}</span>
                      <span className="text-slate-400">closing</span>
                    </span>
                    <span className="w-12 shrink-0 rounded-full px-2 py-0.5 text-center text-[11px] font-bold text-white"
                      style={{ background: r.cr >= 5 ? BRAND.wa : r.cr >= 4 ? '#4FB98A' : '#9CC5B4' }}>
                      {String(r.cr).replace('.', ',')}%
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">
              <SmallStat label={t(lang, 'Total leads', 'Total leads')} value={G.cs.totalLeads} color={BRAND.waDeep} />
              <SmallStat label={t(lang, 'Total closing', 'Total closing')} value={G.cs.totalClose} color={BRAND.waDeep} />
              <SmallStat label={t(lang, 'Peak leads (Apr)', 'Puncak leads (Apr)')} value={G.cs.peakLeads} color={BRAND.waDeep} />
            </div>
          </div>
        </Reveal>

        {/* FUNNEL CONNECTOR */}
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-col items-stretch gap-3 rounded-[2rem] bg-applegray p-6 sm:flex-row sm:items-center sm:p-8">
            <FunnelNode color={BRAND.meta} icon={MessageCircle} title={t(lang, 'Meta CTWA', 'Meta CTWA')} sub={t(lang, 'starts the chat', 'memulai chat')} />
            <FunnelArrow />
            <FunnelNode color={BRAND.wa} icon={Users} title={t(lang, 'WhatsApp CS', 'CS WhatsApp')} sub={t(lang, 'convinces & closes', 'yakinkan & closing')} />
            <FunnelArrow />
            <FunnelNode color={BRAND.shopee} icon={TrendingUp} title={t(lang, 'Sustained growth', 'Pertumbuhan')} sub={t(lang, 'across channels', 'lintas kanal')} highlight />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Sub-components ── */
function Panel({ color, tint, icon: Icon, name, tag, children }) {
  return (
    <div className="h-full rounded-[2rem] border border-black/[0.06] p-7" style={{ background: tint }}>
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl text-white" style={{ background: color }}>
          <Icon size={20} />
        </span>
        <div>
          <p className="text-base font-bold text-slate-800">{name}</p>
          <p className="text-[11px] text-slate-400">{tag}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function PlatformChip({ label, color }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white" style={{ background: color }}>
      {label}
    </span>
  );
}

function BigStat({ color, label, value, sub, trophy, small }) {
  return (
    <div className="rounded-2xl bg-white p-3.5 text-center shadow-sm ring-1 ring-black/5">
      <p className="text-[10px] font-medium text-slate-400">{label}</p>
      <p className={`mt-1 font-bold ${small ? 'text-sm' : 'text-2xl'}`} style={{ color }}>
        {trophy && <Trophy size={14} className="mb-0.5 mr-1 inline" />}
        {value}
      </p>
      {sub && <p className="text-[10px] text-slate-400">{sub}</p>}
    </div>
  );
}

function TrendBar({ h, color, label, value }) {
  return (
    <div className="flex flex-1 flex-col items-center">
      <span className="mb-1.5 text-[11px] font-bold text-slate-700">{value}</span>
      <div
        className="w-full max-w-[70px] rounded-t-lg transition-[height] duration-700 ease-out"
        style={{ height: `${h * 1.1}px`, background: color }}
      />
      <span className="mt-2 text-[10px] text-slate-400">{label}</span>
    </div>
  );
}

function HeroPill({ k, v }) {
  return (
    <div className="rounded-2xl bg-white/15 px-4 py-3 text-center backdrop-blur-sm">
      <p className="text-[11px] text-white/70">{k}</p>
      <p className="mt-1 text-xl font-bold">{v}</p>
    </div>
  );
}

function MetaStat({ icon: Icon, label, value, highlight }) {
  return (
    <div className={`rounded-2xl p-4 ${highlight ? 'bg-white text-[#0866FF]' : 'bg-white/10 text-white'}`}>
      <div className={`flex items-center gap-1.5 ${highlight ? 'text-[#0866FF]' : 'text-white/70'}`}>
        <Icon size={14} />
        <span className="text-[11px] font-medium">{label}</span>
      </div>
      <p className="mt-1.5 text-2xl font-bold">{value}</p>
    </div>
  );
}

function SmallStat({ label, value, color }) {
  return (
    <div className="text-center">
      <p className="text-[11px] text-slate-400">{label}</p>
      <p className="mt-1 text-xl font-bold" style={{ color }}>{value}</p>
    </div>
  );
}

function FunnelNode({ color, icon: Icon, title, sub, highlight }) {
  return (
    <div className={`flex flex-1 items-center gap-3 rounded-2xl p-4 ${highlight ? 'text-white' : 'bg-white'}`} style={highlight ? { background: color } : {}}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: highlight ? '#ffffff33' : color }}>
        <Icon size={18} />
      </span>
      <div>
        <p className={`text-sm font-bold ${highlight ? 'text-white' : 'text-slate-800'}`}>{title}</p>
        <p className={`text-[11px] ${highlight ? 'text-white/80' : 'text-slate-400'}`}>{sub}</p>
      </div>
    </div>
  );
}

function FunnelArrow() {
  return (
    <div className="flex items-center justify-center text-slate-300">
      <ArrowRight size={20} className="rotate-90 sm:rotate-0" />
    </div>
  );
}
