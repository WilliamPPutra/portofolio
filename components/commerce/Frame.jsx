'use client';

import { ShieldCheck, Lock } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { projects } from '@/lib/content';

/**
 * A macOS-style browser window that frames a mockup screenshot,
 * with the floating "Simulated Data" privacy badge.
 */
export default function Frame({ children, url = 'kos.kafanku.id/admin', flush = false }) {
  const { lang } = useLang();
  return (
    <div className="relative min-w-0">
      {/* Privacy badge */}
      <div className="absolute -top-3 right-3 z-20 sm:right-5">
        <div className="flex items-center gap-1.5 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-appleink shadow-lg backdrop-blur-md">
          <ShieldCheck size={13} className="text-emerald-500" />
          {pick(projects.os.privacy, lang)}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] text-slate-400 shadow-sm">
            <Lock size={10} />
            {url}
          </div>
        </div>
        {/* Canvas */}
        <div className={flush ? 'bg-white' : 'bg-slate-100 p-4 sm:p-5'}>{children}</div>
      </div>
    </div>
  );
}
