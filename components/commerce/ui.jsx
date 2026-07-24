'use client';

// Shared primitives for the Commerce OS mockups.
// These deliberately mimic the REAL kOS admin look: light surfaces,
// white cards, indigo accents, Rupiah formatting, Indonesian labels.

export const fmtRp = (n) => 'Rp ' + Number(n || 0).toLocaleString('id-ID');
export const fmtK = (v) => {
  v = Number(v || 0);
  if (v >= 1e9) return (v / 1e9).toFixed(1).replace('.0', '') + 'M';
  if (v >= 1e6) return (v / 1e6).toFixed(1).replace('.0', '') + 'jt';
  if (v >= 1e3) return Math.round(v / 1e3) + 'rb';
  return String(v);
};

export function StatCard({ label, value, sub, tone = 'default', icon: Icon }) {
  const tones = {
    default: 'bg-white',
    profit: 'bg-emerald-50',
    cost: 'bg-white',
    accent: 'bg-indigo-50',
  };
  const valTone =
    tone === 'profit' ? 'text-emerald-600' : tone === 'cost' ? 'text-rose-500' : 'text-slate-900';
  return (
    <div className={`rounded-xl border border-slate-200/70 p-4 shadow-sm ${tones[tone]}`}>
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-medium text-slate-500">{label}</p>
        {Icon && (
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900/5 text-slate-400">
            <Icon size={13} />
          </span>
        )}
      </div>
      <p className={`mt-2 text-lg font-bold ${valTone}`}>{value}</p>
      {sub && <p className="mt-0.5 text-[11px] text-slate-400">{sub}</p>}
    </div>
  );
}

export function Pill({ children, color = 'slate' }) {
  const map = {
    slate: 'bg-slate-100 text-slate-600',
    green: 'bg-emerald-100 text-emerald-700',
    blue: 'bg-blue-100 text-blue-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    amber: 'bg-amber-100 text-amber-700',
    purple: 'bg-purple-100 text-purple-700',
    rose: 'bg-rose-100 text-rose-700',
  };
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${map[color]}`}>
      {children}
    </span>
  );
}

export function Panel({ title, action, children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-sm ${className}`}>
      {title && (
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <h4 className="text-sm font-semibold text-slate-700">{title}</h4>
          {action && <span className="text-[11px] text-indigo-500">{action}</span>}
        </div>
      )}
      {children}
    </div>
  );
}
