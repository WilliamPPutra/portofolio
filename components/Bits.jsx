'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import Reveal from './Reveal';

/** Icon chip + eyebrow label, adapts to light/dark backgrounds. */
export function SectionKicker({ icon: Icon, eyebrow, tone = 'light' }) {
  const dark = tone === 'dark';
  return (
    <div className="flex items-center gap-3">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${
          dark ? 'border-white/10 bg-white/[0.05] text-chalk' : 'border-black/[0.08] bg-black/[0.03] text-appleink'
        }`}
      >
        <Icon size={18} strokeWidth={1.6} />
      </span>
      <span className={`eyebrow ${dark ? 'text-muted' : 'text-applesub'}`}>{eyebrow}</span>
    </div>
  );
}

/** Back-to-hub link. */
export function BackToHub() {
  const { lang } = useLang();
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1.5 text-sm text-applesub transition-colors hover:text-appleink"
    >
      <ArrowLeft size={15} />
      {lang === 'en' ? 'All sections' : 'Semua bagian'}
    </Link>
  );
}

/**
 * Standard light detail-page hero: back link, icon + eyebrow, big title, tagline.
 */
export function DetailHero({ icon, eyebrow, title, tagline, titleClass = '' }) {
  return (
    <section className="relative overflow-hidden border-b border-appleline/50 bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* soft top glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 opacity-60"
        style={{ background: 'radial-gradient(60% 100% at 50% 0%, rgba(0,0,0,0.05), transparent)' }}
      />
      <div className="shell">
        <Reveal>
          <BackToHub />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8">
            <SectionKicker icon={icon} eyebrow={eyebrow} />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className={`display mt-6 text-appleink ${titleClass || 'text-5xl sm:text-6xl md:text-7xl'}`}>
            {title}
          </h1>
        </Reveal>
        {tagline && (
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-applesub sm:text-xl">{tagline}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
