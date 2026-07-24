'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';

export default function LanguageToggle({ tone = 'light' }) {
  const { lang, setLang } = useLang();
  const opts = ['en', 'id'];
  const isDark = tone === 'dark';

  return (
    <div
      className={`relative flex items-center rounded-full border p-0.5 text-xs ${
        isDark ? 'border-white/15 bg-white/[0.04]' : 'border-black/10 bg-black/[0.03]'
      }`}
      role="group"
      aria-label="Language"
    >
      {opts.map((o) => {
        const active = lang === o;
        return (
          <button
            key={o}
            onClick={() => setLang(o)}
            className={`relative z-10 rounded-full px-2.5 py-1 font-semibold uppercase tracking-wide transition-colors duration-300 ${
              active
                ? isDark
                  ? 'text-ink'
                  : 'text-white'
                : isDark
                ? 'text-muted hover:text-chalk'
                : 'text-applesub hover:text-appleink'
            }`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className={`absolute inset-0 -z-10 rounded-full ${isDark ? 'bg-chalk' : 'bg-appleink'}`}
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            {o}
          </button>
        );
      })}
    </div>
  );
}
