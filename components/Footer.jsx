'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useLang, pick } from '@/lib/i18n';
import { footer, nav } from '@/lib/content';
import Reveal from './Reveal';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const { lang } = useLang();
  const email = 'wpputra90@gmail.com';

  return (
    <footer className="relative bg-ink text-chalk">
      <div className="shell py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow mb-6 text-muted">{pick(footer.sub, lang)}</p>
          <h2 className="display max-w-3xl text-5xl text-chalk sm:text-6xl md:text-7xl">
            {pick(footer.cta, lang)}
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href={`mailto:${email}`} variant="onDark">
              {lang === 'en' ? 'Contact me' : 'Hubungi Saya'}
              <ArrowUpRight size={16} />
            </MagneticButton>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col justify-between gap-6 border-t border-white/[0.08] pt-8 text-sm text-muted sm:flex-row sm:items-center">
          <span>{pick(footer.rights, lang)}</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nav.links.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-chalk">
                {pick(l.label, lang)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
