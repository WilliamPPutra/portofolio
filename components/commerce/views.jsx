'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  Wallet,
  Boxes,
  Percent,
  Scissors,
  ArrowRight,
  Package,
  Users,
  ShoppingCart,
  LayoutDashboard,
  Megaphone,
  BookOpen,
  ClipboardList,
  Layers,
  Globe,
  Store,
  Code2,
  Upload,
  FileArchive,
  ChevronDown,
  LogOut,
  UserCircle2,
  Search,
} from 'lucide-react';
import { fmtRp, fmtK, StatCard, Pill, Panel } from './ui';

const t = (lang, en, id) => (lang === 'id' ? id : en);

const DOT = {
  slate: 'bg-slate-400',
  green: 'bg-emerald-400',
  blue: 'bg-blue-400',
  indigo: 'bg-indigo-400',
  amber: 'bg-amber-400',
  purple: 'bg-purple-400',
  rose: 'bg-rose-400',
  teal: 'bg-teal-400',
};

/* ══════════════════ APP SHELL — the real Portal RHK chrome ══════════════════ */
const NAV = [
  { key: 'dashboard', icon: LayoutDashboard, label: { en: 'Dashboard', id: 'Dashboard' } },
  { key: 'produk', icon: Package, label: { en: 'Products', id: 'Produk' }, sub: true },
  { key: 'pesanan', icon: ShoppingCart, label: { en: 'Orders', id: 'Pesanan' } },
  { key: 'marketing', icon: Megaphone, label: { en: 'Marketing', id: 'Marketing' }, sub: true },
  { key: 'digital', icon: BookOpen, label: { en: 'Digital Products', id: 'Produk Digital' }, sub: true },
  { key: 'inventori', icon: Boxes, label: { en: 'Inventory', id: 'Inventori' }, sub: true },
  { key: 'lapangan', icon: ClipboardList, label: { en: 'Field Input', id: 'Input Lapangan' }, sub: true },
  { key: 'keuangan', icon: Wallet, label: { en: 'Finance', id: 'Keuangan' } },
  { key: 'tim', icon: Users, label: { en: 'Team & Access', id: 'Tim & Akses' }, sub: true },
  { key: 'saas', icon: Layers, label: { en: 'SaaS', id: 'SaaS' }, sub: true },
  { key: 'customer', icon: UserCircle2, label: { en: 'Customer', id: 'Customer' } },
  { key: 'landing', icon: Globe, label: { en: 'Landing Page', id: 'Landing Page' } },
  { key: 'toko', icon: Store, label: { en: 'Web Store', id: 'Toko Web' }, sub: true },
];

function AppShell({ active, title, lang, children }) {
  return (
    <div className="flex min-h-[540px] overflow-hidden rounded-xl bg-slate-50 text-slate-800">
      {/* Sidebar */}
      <aside className="hidden w-[186px] shrink-0 flex-col border-r border-slate-200 bg-white sm:flex">
        {/* Logo */}
        <div className="flex items-center gap-2.5 border-b border-slate-100 px-4 py-3.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-[11px] font-bold text-white">
            RHK
          </span>
          <div className="leading-tight">
            <p className="text-[13px] font-bold text-slate-800">Portal RHK</p>
            <p className="text-[9px] text-slate-400">powered by kOS v2.0</p>
          </div>
        </div>
        {/* Nav */}
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-2.5 py-3 no-scrollbar">
          {NAV.map((item) => {
            const on = item.key === active;
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] ${
                  on ? 'bg-indigo-50 font-semibold text-indigo-600' : 'text-slate-500'
                }`}
              >
                <Icon size={15} className={on ? 'text-indigo-500' : 'text-slate-400'} />
                <span className="flex-1 truncate">{t(lang, item.label.en, item.label.id)}</span>
                {item.sub && <ChevronDown size={12} className="text-slate-300" />}
              </div>
            );
          })}
        </nav>
        {/* User */}
        <div className="flex items-center gap-2 border-t border-slate-100 px-3 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
            <UserCircle2 size={18} />
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-[12px] font-semibold text-slate-700">William</p>
            <p className="truncate text-[10px] text-slate-400">admin@kafanku.com</p>
          </div>
          <LogOut size={14} className="text-slate-300" />
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3">
          <h3 className="text-[15px] font-bold text-slate-800">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] text-slate-400 md:flex">
              <Search size={12} /> {t(lang, 'Search…', 'Cari…')}
            </span>
            <span className="h-7 w-7 rounded-full bg-slate-100" />
          </div>
        </header>
        <div className="flex-1 p-4 sm:p-5">{children}</div>
      </div>
    </div>
  );
}

/* ══════════════════ DONUT (Sumber Pesanan) ══════════════════ */
function Donut({ segments, center, sub }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <div className="relative mx-auto h-[168px] w-[168px]">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="#f1f5f9" strokeWidth="15" />
        {segments.map((s, i) => {
          const len = (s.v / 100) * c;
          const el = (
            <circle
              key={i}
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth="15"
              strokeDasharray={`${len} ${c - len}`}
              strokeDashoffset={-acc}
              strokeLinecap="butt"
            />
          );
          acc += len;
          return el;
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-slate-800">{center}</span>
        <span className="text-[11px] text-slate-400">{sub}</span>
      </div>
    </div>
  );
}

/* ══════════════════ 1 · DASHBOARD (real Portal RHK) ══════════════════ */
export function DashboardView({ lang }) {
  const brands = [
    { name: t(lang, 'All Brands', 'Semua Brand'), active: true },
    { name: "Al Ma'tsurat", dot: 'teal' },
    { name: 'Baju Terakhir', dot: 'green' },
    { name: 'Kafanku', dot: 'indigo' },
  ];
  const bars = [26.3, 8, 6, 5, 14.5, 4, 3.5, 9, 7, 6.5, 12, 5.5, 4.5, 8.5, 6, 3, 5, 7.5];
  const maxBar = Math.max(...bars);
  const donut = [
    { v: 58, color: '#6366f1' },
    { v: 31, color: '#f59e0b' },
    { v: 11, color: '#3b82f6' },
  ];

  return (
    <AppShell active="dashboard" title="Dashboard" lang={lang}>
      <div className="space-y-4">
        {/* Greeting banner */}
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-5 text-white">
          <p className="text-lg font-bold">{t(lang, 'Good afternoon, William!', 'Selamat siang, William!')} 👋</p>
          <p className="mt-1 text-sm text-white/80">
            {t(lang, "Kafanku's omni-channel operations. Everything in one place.", 'Sistem operasional omni-channel Kafanku. Semua di satu tempat.')}
          </p>
        </div>

        {/* Brand filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[13px] font-medium text-slate-500">Brand:</span>
          {brands.map((b) => (
            <span
              key={b.name}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium ${
                b.active ? 'bg-indigo-600 text-white' : 'border border-slate-200 bg-white text-slate-600'
              }`}
            >
              {b.dot && <span className={`h-2 w-2 rounded-full ${DOT[b.dot]}`} />}
              {b.name}
            </span>
          ))}
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {/* Pendapatan (custom) */}
          <div className="rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500 text-white">
                  <TrendingUp size={14} />
                </span>
                <span className="text-[11px] font-medium text-slate-500">{t(lang, 'Revenue', 'Pendapatan')}</span>
              </span>
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500">13 Jul 2026</span>
            </div>
            <p className="mt-2 text-lg font-bold text-slate-900">{fmtRp(128_400_000)}</p>
            <p className="mt-0.5 text-[11px] text-slate-400">
              275 {t(lang, 'orders', 'pesanan')} · <span className="text-emerald-600">Profit: Rp 41,2jt</span>
            </p>
          </div>
          <KPI icon={ShoppingCart} tint="bg-blue-500" label={t(lang, 'Total Orders', 'Total Pesanan')} value="275" />
          <KPI icon={Package} tint="bg-emerald-500" label={t(lang, 'Total Products', 'Total Produk')} value="8" />
          <KPI icon={Users} tint="bg-orange-500" label={t(lang, 'Active Users', 'Pengguna Aktif')} value="9" />
        </div>

        {/* Charts */}
        <div className="grid gap-3 lg:grid-cols-3">
          {/* Performa Penjualan */}
          <div className="rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm lg:col-span-2">
            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-blue-500"><TrendingUp size={16} /></span>
                <h4 className="text-sm font-semibold text-slate-700">{t(lang, 'Sales Performance', 'Performa Penjualan')}</h4>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="rounded-md bg-indigo-50 px-2 py-1 text-[10px] font-medium text-indigo-600">{t(lang, 'Revenue', 'Pendapatan')}</span>
                <span className="rounded-md px-2 py-1 text-[10px] text-slate-400">{t(lang, 'Orders', 'Pesanan')}</span>
                <span className="flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[10px] text-slate-500">
                  30 {t(lang, 'Days', 'Hari')} <ChevronDown size={10} />
                </span>
              </div>
            </div>
            <p className="mb-3 text-[11px] text-slate-400">{t(lang, 'Sales per day · hover a bar for detail', 'Penjualan per hari · arahkan kursor ke batang untuk detail')}</p>
            <div className="flex h-[150px] items-end gap-1">
              {bars.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(b / maxBar) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 rounded-t bg-indigo-400/80 hover:bg-indigo-500"
                  title={`${b}jt`}
                />
              ))}
            </div>
          </div>

          {/* Sumber Pesanan */}
          <div className="rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-indigo-500"><Percent size={15} /></span>
              <h4 className="text-sm font-semibold text-slate-700">{t(lang, 'Order Sources', 'Sumber Pesanan')}</h4>
            </div>
            <Donut segments={donut} center="275" sub={t(lang, 'orders', 'pesanan')} />
            <div className="mt-3 space-y-1.5">
              {[
                { k: 'Marketplace', v: '58%', c: '#6366f1' },
                { k: 'Manual', v: '31%', c: '#f59e0b' },
                { k: 'Web', v: '11%', c: '#3b82f6' },
              ].map((s) => (
                <div key={s.k} className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <span className="h-2 w-2 rounded-full" style={{ background: s.c }} />
                    {s.k}
                  </span>
                  <span className="font-medium text-slate-700">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function KPI({ icon: Icon, tint, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2.5">
        <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-white ${tint}`}>
          <Icon size={17} />
        </span>
        <div>
          <p className="text-[11px] font-medium text-slate-500">{label}</p>
          <p className="text-lg font-bold text-slate-900">{value}</p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════ 2 · INVENTORY → PRODUCE (BOM) ══════════════════ */
export function InventoryView({ lang }) {
  const bom = [
    { item: t(lang, 'Premium cotton off-cut · A-grade', 'Sisa katun premium · grade A'), qty: '2.4 m', stock: 320 },
    { item: t(lang, 'Off-cut · B-grade', 'Sisa kain · grade B'), qty: '1.8 m', stock: 540 },
    { item: t(lang, 'Packaging · economy box', 'Kemasan · box ekonomis'), qty: '1 pcs', stock: 1_200 },
    { item: t(lang, 'Care label + tag', 'Label perawatan + tag'), qty: '1 set', stock: 2_800 },
  ];
  return (
    <AppShell active="inventori" title={t(lang, 'Inventory — Produce (BOM)', 'Inventori — Produksi (BOM)')} lang={lang}>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <StatCard label={t(lang, 'Raw items', 'Bahan baku')} value="18" sub={t(lang, 'off-cut SKUs', 'SKU sisa kain')} icon={Scissors} />
          <StatCard label={t(lang, 'Produced today', 'Diproduksi hari ini')} value="240" sub="Paket Ekonomis" icon={Package} tone="accent" />
          <StatCard label={t(lang, 'Waste diverted', 'Limbah dialihkan')} value="96%" sub={t(lang, 'of surplus', 'dari surplus')} icon={Boxes} tone="profit" />
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
          <Panel title={t(lang, 'Produce · Bill of Materials', 'Produksi · Bill of Materials')}>
            <div className="p-4">
              <div className="mb-3 flex items-center justify-between rounded-lg bg-indigo-50 px-3 py-2">
                <span className="text-xs font-medium text-indigo-700">{t(lang, 'Output SKU', 'SKU Hasil')}: PKT-EKO-01</span>
                <span className="text-xs text-indigo-500">×240</span>
              </div>
              <table className="w-full text-sm">
                <thead className="text-[10px] uppercase tracking-wide text-slate-400">
                  <tr>
                    <th className="pb-2 text-left">{t(lang, 'Component', 'Komponen')}</th>
                    <th className="pb-2 text-center">{t(lang, 'Qty / unit', 'Qty / unit')}</th>
                    <th className="pb-2 text-right">{t(lang, 'On hand', 'Stok')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {bom.map((b, i) => (
                    <tr key={i}>
                      <td className="py-2.5 text-slate-700">{b.item}</td>
                      <td className="py-2.5 text-center text-slate-500">{b.qty}</td>
                      <td className="py-2.5 text-right">
                        <span className={b.stock < 400 ? 'text-amber-600' : 'text-slate-500'}>{b.stock}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="mt-4 w-full rounded-lg bg-indigo-600 py-2.5 text-xs font-semibold text-white">
                {t(lang, 'Run production → deduct stock', 'Jalankan produksi → potong stok')}
              </button>
            </div>
          </Panel>

          <Panel title={t(lang, 'Circular flow', 'Alur sirkular')}>
            <div className="flex flex-col gap-2 p-4">
              <FlowRow icon={Scissors} label={t(lang, 'Premium off-cuts', 'Sisa kain premium')} sub={t(lang, 'Warehouse waste', 'Limbah gudang')} />
              <div className="flex justify-center text-slate-300"><ArrowRight size={16} className="rotate-90" /></div>
              <FlowRow icon={Boxes} label={t(lang, 'BOM assembly', 'Perakitan BOM')} sub={t(lang, 'Auto stock deduction', 'Potong stok otomatis')} />
              <div className="flex justify-center text-slate-300"><ArrowRight size={16} className="rotate-90" /></div>
              <FlowRow icon={Package} label="Paket Ekonomis" sub={t(lang, 'High-margin SKU', 'SKU margin tinggi')} tone="indigo" />
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}

function FlowRow({ icon: Icon, label, sub, tone }) {
  const cls = tone === 'indigo' ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-50 border-slate-200';
  const ic = tone === 'indigo' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-500';
  return (
    <div className={`flex items-center gap-3 rounded-lg border p-3 ${cls}`}>
      <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${ic}`}>
        <Icon size={15} />
      </span>
      <div>
        <p className="text-xs font-semibold text-slate-800">{label}</p>
        <p className="text-[11px] text-slate-400">{sub}</p>
      </div>
    </div>
  );
}

/* ══════════════════ 3 · FINANCE — Net-Profit engine ══════════════════ */
export function FinanceView({ lang }) {
  const summary = { produk: 171_200_000, diskon: 8_900_000, hpp: 96_400_000, komisi: 12_300_000, omzet: 184_650_000 };
  const laba = summary.produk - summary.diskon - summary.hpp - summary.komisi;
  const perBrand = [
    { brand: 'Kafanku', cnt: 412, omzet: 121_400_000, laba: 34_820_000, color: 'bg-indigo-500' },
    { brand: 'Baju Terakhir', cnt: 168, omzet: 63_250_000, laba: 18_760_000, color: 'bg-slate-800' },
  ];
  const daily = [22, 31, 28, 44, 39, 52, 47, 61, 55, 68, 72, 64, 79, 88];
  const waterfall = [
    { k: t(lang, 'Product Rev.', 'Pendapatan'), v: summary.produk, type: 'base' },
    { k: t(lang, 'Discount', 'Diskon'), v: -summary.diskon, type: 'neg' },
    { k: 'HPP (COGS)', v: -summary.hpp, type: 'neg' },
    { k: t(lang, 'Commission', 'Komisi'), v: -summary.komisi, type: 'neg' },
    { k: t(lang, 'Net Profit', 'Laba Bersih'), v: laba, type: 'profit' },
  ];
  const maxW = Math.max(...waterfall.map((w) => Math.abs(w.v)));

  return (
    <AppShell active="keuangan" title={t(lang, 'Finance — Reports', 'Keuangan — Laporan')} lang={lang}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard label={t(lang, 'Revenue (Omzet)', 'Omzet')} value={fmtRp(summary.omzet)} sub="580 order" icon={Wallet} tone="accent" />
          <StatCard label="HPP (COGS)" value={fmtRp(summary.hpp)} sub="52.2%" icon={Boxes} tone="cost" />
          <StatCard label={t(lang, 'Affiliate Comm.', 'Komisi Afiliasi')} value={fmtRp(summary.komisi)} icon={Percent} tone="cost" />
          <StatCard label={t(lang, 'Net Profit', 'Laba Bersih')} value={fmtRp(laba)} sub="+ margin 32.4%" icon={TrendingUp} tone="profit" />
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          <Panel title={t(lang, 'Profit breakdown', 'Rincian laba')}>
            <div className="space-y-3 p-4">
              {waterfall.map((w, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 text-[11px] text-slate-500">{w.k}</span>
                  <div className="relative h-6 flex-1 overflow-hidden rounded-md bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(Math.abs(w.v) / maxW) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-md ${w.type === 'profit' ? 'bg-emerald-500' : w.type === 'neg' ? 'bg-rose-300' : 'bg-indigo-500'}`}
                    />
                  </div>
                  <span className={`w-24 shrink-0 text-right text-[11px] font-semibold ${w.type === 'neg' ? 'text-rose-500' : w.type === 'profit' ? 'text-emerald-600' : 'text-slate-700'}`}>
                    {w.v < 0 ? '– ' : ''}
                    {fmtK(Math.abs(w.v))}
                  </span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title={t(lang, 'Daily revenue', 'Omzet harian')} action={t(lang, 'Last 14 days', '14 hari terakhir')}>
            <div className="flex h-[168px] items-end gap-1 p-4">
              {daily.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(d / 88) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 rounded-t bg-indigo-500/85 hover:bg-indigo-500"
                />
              ))}
            </div>
          </Panel>
        </div>

        <Panel title={t(lang, 'Net profit per brand', 'Laba bersih per brand')} action={t(lang, 'View all', 'Lihat semua')}>
          <div className="overflow-x-auto">
          <table className="w-full min-w-[440px] text-sm">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-4 py-2.5 text-left">Brand</th>
                <th className="px-4 py-2.5 text-center">{t(lang, 'Orders', 'Order')}</th>
                <th className="px-4 py-2.5 text-right">{t(lang, 'Revenue', 'Omzet')}</th>
                <th className="px-4 py-2.5 text-right">{t(lang, 'Net profit', 'Laba')}</th>
                <th className="px-4 py-2.5 text-right">{t(lang, 'Margin', 'Margin')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {perBrand.map((b) => (
                <tr key={b.brand} className="hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${b.color}`} />
                      <span className="font-medium text-slate-800">{b.brand}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center text-slate-500">{b.cnt}</td>
                  <td className="px-4 py-3 text-right text-slate-700">{fmtRp(b.omzet)}</td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-600">{fmtRp(b.laba)}</td>
                  <td className="px-4 py-3 text-right text-slate-500">{((b.laba / b.omzet) * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}

/* ══════════════════ 4 · LANDING PAGE (real: paste/upload, not blocks) ══════════════════ */
export function WebBuilderView({ lang }) {
  const contentModes = [
    { icon: Code2, label: 'Paste HTML', active: true },
    { icon: Upload, label: 'Upload .html' },
    { icon: FileArchive, label: 'Upload .zip' },
  ];
  return (
    <AppShell active="landing" title="Landing Page" lang={lang}>
      <div className="space-y-4">
        {/* Section intro */}
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
            <Globe size={20} />
          </span>
          <div>
            <h4 className="text-base font-bold text-slate-800">Landing Page</h4>
            <p className="text-xs text-slate-400">
              {t(lang, 'Create & manage landing pages (paste/upload/ZIP), choose domain & slug/subdomain.', 'Buat & kelola landing page (paste/upload/ZIP), pilih domain & slug/subdomain.')}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700">
            <Upload size={13} /> {t(lang, 'Upload Landing Page', 'Upload Landing Page')}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs text-slate-400">
            <Layers size={13} /> {t(lang, 'Active Landing Pages (10)', 'Landing Page Aktif (10)')}
          </span>
        </div>

        {/* Create form */}
        <div className="rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm">
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <span className="text-slate-400">+</span> {t(lang, 'Create New Landing Page', 'Buat Landing Page Baru')}
          </p>

          <Field label="Nama">
            <div className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-400">{t(lang, 'e.g. Ramadhan Promo', 'mis. Promo Ramadhan')}</div>
          </Field>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <Field label="Brand">
              <Select value="Umum" />
            </Field>
            <Field label={t(lang, 'Category (optional)', 'Kategori (opsional)')}>
              <div className="rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-400">{t(lang, 'e.g. Tripwire', 'mis. Tripwire')}</div>
            </Field>
            <Field label="Domain">
              <Select value="kafanku.id" />
            </Field>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Field label={t(lang, 'Access via', 'Akses lewat')}>
              <div className="flex gap-2">
                <span className="flex-1 rounded-lg border-2 border-indigo-400 bg-indigo-50 py-2 text-center text-xs font-medium text-indigo-700">Slug (/path)</span>
                <span className="flex-1 rounded-lg border border-slate-200 py-2 text-center text-xs text-slate-500">Subdomain</span>
              </div>
            </Field>
            <Field label="Slug">
              <div className="flex items-center overflow-hidden rounded-lg border border-slate-200">
                <span className="bg-slate-50 px-2.5 py-2 text-xs text-slate-400">kafanku.id/</span>
                <span className="px-2 py-2 text-xs text-slate-700">promo</span>
              </div>
            </Field>
          </div>

          {/* Isi Landing */}
          <div className="mt-4">
            <p className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
              <Code2 size={12} /> {t(lang, 'Landing Content', 'Isi Landing')}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {contentModes.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className={`flex flex-col items-center gap-1.5 rounded-lg border-2 py-4 text-xs font-medium ${
                      m.active ? 'border-indigo-400 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-500'
                    }`}
                  >
                    <Icon size={18} />
                    {m.label}
                  </div>
                );
              })}
            </div>
            {/* Paste area */}
            <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-[10px] leading-relaxed text-slate-400">
              &lt;!DOCTYPE html&gt;<br />
              &lt;html&gt; … &lt;body&gt;<br />
              &nbsp;&nbsp;&lt;section class="hero"&gt;Paket Ekonomis Kafanku&lt;/section&gt;<br />
              &lt;/body&gt; &lt;/html&gt;
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <span className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-500">{t(lang, 'Preview', 'Pratinjau')}</span>
            <span className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">{t(lang, 'Save & Publish', 'Simpan & Publish')}</span>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <p className="mb-1 text-[11px] font-medium text-slate-500">{label}</p>
      {children}
    </div>
  );
}
function Select({ value }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700">
      {value}
      <ChevronDown size={13} className="text-slate-400" />
    </div>
  );
}
