'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Wallet,
  Boxes,
  Plus,
  X,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  Package,
  Users,
} from 'lucide-react';

const rupiah = (n) => 'Rp ' + Number(n || 0).toLocaleString('id-ID');

/* Seed dummy data — resets whenever the demo is closed */
const SEED_TX = [
  { id: 1, type: 'in', category: 'Iuran Warga', desc: 'Iuran bulanan blok A', amount: 2_400_000, date: '2026-07-01' },
  { id: 2, type: 'out', category: 'Kain Kafan', desc: 'Restok 5 set kain kafan', amount: 1_250_000, date: '2026-07-03' },
  { id: 3, type: 'in', category: 'Donasi', desc: 'Infak Jumat', amount: 850_000, date: '2026-07-05' },
  { id: 4, type: 'out', category: 'Kebersihan', desc: 'Honor petugas', amount: 500_000, date: '2026-07-08' },
];
const SEED_ITEMS = [
  { id: 1, name: 'Kain Kafan (set)', unit: 'set', stock: 3, min: 5, kafan: true },
  { id: 2, name: 'Kursi Lipat', unit: 'pcs', stock: 40, min: 20, kafan: false },
  { id: 3, name: 'Tenda 3×3', unit: 'unit', stock: 2, min: 2, kafan: false },
  { id: 4, name: 'Papan Nisan', unit: 'pcs', stock: 6, min: 4, kafan: false },
];

const CATS_IN = ['Iuran Warga', 'Donasi', 'Infak', 'Lainnya'];
const CATS_OUT = ['Kain Kafan', 'Kebersihan', 'Konsumsi', 'Perbaikan', 'Lainnya'];

export default function RukunkuApp() {
  const [tab, setTab] = useState('home');
  const [tx, setTx] = useState(SEED_TX);
  const [items, setItems] = useState(SEED_ITEMS);
  const [modal, setModal] = useState(null); // 'tx' | 'item' | null

  const saldo = useMemo(
    () => tx.reduce((s, t) => s + (t.type === 'in' ? t.amount : -t.amount), 0),
    [tx]
  );
  const lowStock = items.filter((i) => i.stock < i.min);

  const addTx = (t) => setTx((arr) => [{ ...t, id: Date.now() }, ...arr]);
  const addItem = (it) => setItems((arr) => [...arr, { ...it, id: Date.now() }]);
  const adjust = (id, d) =>
    setItems((arr) => arr.map((i) => (i.id === id ? { ...i, stock: Math.max(0, i.stock + d) } : i)));

  return (
    <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl">
      {/* App header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 px-5 pb-5 pt-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 text-sm font-black">R</span>
            <div className="leading-tight">
              <p className="text-sm font-bold">Rukunku</p>
              <p className="text-[10px] text-white/70">RT 04 · Masjid Al-Ikhlas</p>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px]">
            <Users size={11} /> 128 KK
          </span>
        </div>

        {tab !== 'inventori' && (
          <div className="mt-4">
            <p className="text-[11px] text-white/70">Saldo Kas</p>
            <p className="text-2xl font-bold">{rupiah(saldo)}</p>
          </div>
        )}
      </div>

      {/* Body — plain conditional render (each tab animates itself in) */}
      <div className="min-h-[420px] flex-1 overflow-y-auto bg-slate-50 p-4 pb-2">
        {tab === 'home' && <HomeTab saldo={saldo} tx={tx} lowStock={lowStock} onGo={setTab} />}
        {tab === 'keuangan' && <FinanceTab tx={tx} onAdd={() => setModal('tx')} />}
        {tab === 'inventori' && <InventoryTab items={items} onAdd={() => setModal('item')} onAdjust={adjust} />}
      </div>

      {/* Bottom nav */}
      <div className="grid grid-cols-3 border-t border-slate-200 bg-white">
        {[
          { k: 'home', icon: Home, label: 'Beranda' },
          { k: 'keuangan', icon: Wallet, label: 'Keuangan' },
          { k: 'inventori', icon: Boxes, label: 'Inventori' },
        ].map((n) => {
          const on = tab === n.k;
          const Icon = n.icon;
          return (
            <button key={n.k} onClick={() => setTab(n.k)} className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] ${on ? 'text-blue-600' : 'text-slate-400'}`}>
              <Icon size={18} />
              {n.label}
            </button>
          );
        })}
      </div>

      {/* Modals (conditional render — close is instant, data discarded) */}
      {modal === 'tx' && <TxModal onClose={() => setModal(null)} onSave={addTx} />}
      {modal === 'item' && <ItemModal onClose={() => setModal(null)} onSave={addItem} />}
    </div>
  );
}

/* ── Home ── */
function HomeTab({ saldo, tx, lowStock, onGo }) {
  const income = tx.filter((t) => t.type === 'in').reduce((s, t) => s + t.amount, 0);
  const expense = tx.filter((t) => t.type === 'out').reduce((s, t) => s + t.amount, 0);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
          <div className="flex items-center gap-1.5 text-emerald-600"><ArrowUpRight size={14} /><span className="text-[11px] font-medium">Pemasukan</span></div>
          <p className="mt-1 text-sm font-bold text-slate-800">{rupiah(income)}</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm">
          <div className="flex items-center gap-1.5 text-rose-500"><ArrowDownRight size={14} /><span className="text-[11px] font-medium">Pengeluaran</span></div>
          <p className="mt-1 text-sm font-bold text-slate-800">{rupiah(expense)}</p>
        </div>
      </div>

      {lowStock.length > 0 && (
        <button onClick={() => onGo('inventori')} className="flex w-full items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-left">
          <AlertTriangle size={16} className="shrink-0 text-amber-500" />
          <span className="text-xs text-amber-700">
            <b>{lowStock.length} barang</b> di bawah stok minimum — termasuk {lowStock.find((i) => i.kafan) ? 'kain kafan' : lowStock[0].name}.
          </span>
        </button>
      )}

      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <p className="mb-2 text-xs font-semibold text-slate-500">Transaksi terbaru</p>
        <div className="space-y-2.5">
          {tx.slice(0, 3).map((t) => (
            <Row key={t.id} t={t} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Finance ── */
function FinanceTab({ tx, onAdd }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-700">Buku Kas</h4>
        <button onClick={onAdd} className="flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1.5 text-[11px] font-semibold text-white">
          <Plus size={13} /> Catat
        </button>
      </div>
      <div className="space-y-2">
        {tx.map((t) => (
          <div key={t.id} className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
            <Row t={t} full />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Row({ t, full }) {
  const isIn = t.type === 'in';
  return (
    <div className="flex items-center gap-3">
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isIn ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-500'}`}>
        {isIn ? <ArrowUpRight size={15} /> : <ArrowDownRight size={15} />}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium text-slate-800">{t.category}</p>
        {full && <p className="truncate text-[11px] text-slate-400">{t.desc} · {t.date}</p>}
      </div>
      <span className={`shrink-0 text-[13px] font-semibold ${isIn ? 'text-emerald-600' : 'text-rose-500'}`}>
        {isIn ? '+' : '−'}{rupiah(t.amount).replace('Rp ', '')}
      </span>
    </div>
  );
}

/* ── Inventory ── */
function InventoryTab({ items, onAdd, onAdjust }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-700">Inventaris</h4>
        <button onClick={onAdd} className="flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1.5 text-[11px] font-semibold text-white">
          <Plus size={13} /> Barang
        </button>
      </div>
      <div className="space-y-2">
        {items.map((i) => {
          const low = i.stock < i.min;
          return (
            <div key={i.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${i.kafan ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                <Package size={17} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-medium text-slate-800">
                  {i.name} {i.kafan && <span className="rounded bg-indigo-50 px-1 text-[9px] text-indigo-500">kain kafan</span>}
                </p>
                <p className={`text-[11px] ${low ? 'font-semibold text-amber-600' : 'text-slate-400'}`}>
                  {i.stock} {i.unit} · min {i.min}{low && ' · stok menipis'}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button onClick={() => onAdjust(i.id, -1)} className="h-7 w-7 rounded-lg bg-slate-100 text-slate-600">−</button>
                <button onClick={() => onAdjust(i.id, 1)} className="h-7 w-7 rounded-lg bg-slate-100 text-slate-600">+</button>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── Modals ── */
function Sheet({ title, onClose, children }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 flex items-end justify-center bg-black/40" onClick={onClose}>
      <motion.div
        initial={{ y: 60 }}
        animate={{ y: 0 }}
        exit={{ y: 60 }}
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full space-y-3 rounded-t-3xl bg-white p-5"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-400"><X size={20} /></button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}

function TxModal({ onClose, onSave }) {
  const [type, setType] = useState('in');
  const [category, setCategory] = useState(CATS_IN[0]);
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const cats = type === 'in' ? CATS_IN : CATS_OUT;

  const save = () => {
    const amt = parseInt(String(amount).replace(/\D/g, ''), 10);
    if (!amt) return;
    onSave({ type, category, desc: desc || category, amount: amt, date: '2026-07-14' });
    onClose();
  };

  return (
    <Sheet title="Catat Transaksi" onClose={onClose}>
      <div className="grid grid-cols-2 gap-2">
        {['in', 'out'].map((tp) => (
          <button
            key={tp}
            onClick={() => { setType(tp); setCategory((tp === 'in' ? CATS_IN : CATS_OUT)[0]); }}
            className={`rounded-xl border-2 py-2.5 text-sm font-semibold ${type === tp ? (tp === 'in' ? 'border-emerald-500 bg-emerald-50 text-emerald-600' : 'border-rose-400 bg-rose-50 text-rose-500') : 'border-slate-200 text-slate-500'}`}
          >
            {tp === 'in' ? 'Pemasukan' : 'Pengeluaran'}
          </button>
        ))}
      </div>
      <Labeled label="Kategori">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500">
          {cats.map((c) => <option key={c}>{c}</option>)}
        </select>
      </Labeled>
      <Labeled label="Keterangan (opsional)">
        <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="mis. Iuran bulan Juli" className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500" />
      </Labeled>
      <Labeled label="Nominal">
        <input inputMode="numeric" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0" className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500" />
      </Labeled>
      <button onClick={save} className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white active:scale-[0.99]">Simpan</button>
    </Sheet>
  );
}

function ItemModal({ onClose, onSave }) {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('pcs');
  const [stock, setStock] = useState('');
  const [min, setMin] = useState('');

  const save = () => {
    if (!name) return;
    onSave({ name, unit: unit || 'pcs', stock: parseInt(stock, 10) || 0, min: parseInt(min, 10) || 0, kafan: false });
    onClose();
  };

  return (
    <Sheet title="Tambah Barang" onClose={onClose}>
      <Labeled label="Nama barang">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="mis. Sound system" className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500" />
      </Labeled>
      <div className="grid grid-cols-3 gap-2">
        <Labeled label="Satuan">
          <input value={unit} onChange={(e) => setUnit(e.target.value)} placeholder="pcs" className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500" />
        </Labeled>
        <Labeled label="Stok">
          <input inputMode="numeric" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="0" className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500" />
        </Labeled>
        <Labeled label="Min">
          <input inputMode="numeric" value={min} onChange={(e) => setMin(e.target.value)} placeholder="0" className="w-full rounded-xl border-2 border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500" />
        </Labeled>
      </div>
      <button onClick={save} className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white active:scale-[0.99]">Simpan</button>
    </Sheet>
  );
}

function Labeled({ label, children }) {
  return (
    <div>
      <p className="mb-1 text-[11px] font-semibold text-slate-600">{label}</p>
      {children}
    </div>
  );
}
