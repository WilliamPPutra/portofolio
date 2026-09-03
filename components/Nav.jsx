'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { nav } from '@/lib/content';
import LanguageToggle from './LanguageToggle';

export default function Nav() {
  const { lang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Only the homepage has a dark hero. At its top (not scrolled) the nav floats
  // over black → use light text. Detail pages have light heros → always dark text.
  const overHero = pathname === '/' && !scrolled;

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      {/* Drops in with CSS, not Framer. The bar is the first thing on screen,
          so it must not wait for hydration to become visible. */}
      <header
        className="reveal-now fixed inset-x-0 top-0 z-50"
        style={{ '--reveal-y': '-80px' }}
      >
        <div
          className={`border-b transition-all duration-500 ${
            scrolled
              ? 'border-black/[0.06] bg-white/70 backdrop-blur-xl backdrop-saturate-150'
              : 'border-transparent bg-transparent'
          }`}
        >
          <nav className="shell flex h-16 items-center justify-between">
            {/* Brand mark */}
            <Link href="/" className="group flex items-center gap-2.5">
              <span
                className={`block h-8 w-8 overflow-hidden rounded-full border transition-colors ${
                  overHero
                    ? 'border-white/25 group-hover:border-white/50'
                    : 'border-appleink/15 group-hover:border-appleink/40'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/avatar.webp`}
                  alt={pick(nav.brand, lang)}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover object-top"
                />
              </span>
              <span
                className={`hidden text-sm font-medium tracking-tight transition-colors sm:block ${
                  overHero ? 'text-chalk' : 'text-appleink'
                }`}
              >
                {pick(nav.brand, lang)}
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden items-center gap-1 md:flex">
              {nav.links.map((l) => {
                const activeLink = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                      activeLink
                        ? overHero
                          ? 'text-chalk'
                          : 'text-appleink'
                        : overHero
                        ? 'text-chalk/60 hover:text-chalk'
                        : 'text-applesub hover:text-appleink'
                    }`}
                  >
                    {activeLink && (
                      <motion.span
                        layoutId="nav-active"
                        className={`absolute inset-0 -z-10 rounded-full ${
                          overHero ? 'bg-white/10' : 'bg-black/[0.05]'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {pick(l.label, lang)}
                  </Link>
                );
              })}
            </div>

            {/* Right cluster */}
            <div className="flex items-center gap-3">
              <LanguageToggle tone={overHero ? 'dark' : 'light'} />
              <a
                href="mailto:wpputra90@gmail.com"
                className={`hidden rounded-full px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80 sm:inline-block ${
                  overHero ? 'bg-chalk text-ink' : 'bg-appleink text-white'
                }`}
              >
                {pick(nav.cta, lang)}
              </a>
              <button
                onClick={() => setOpen((o) => !o)}
                className={`flex h-9 w-9 items-center justify-center rounded-full border md:hidden ${
                  overHero ? 'border-white/20 text-chalk' : 'border-black/10 text-appleink'
                }`}
                aria-label="Menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-16 border-t border-black/[0.06] px-6 py-8"
            >
              <div className="flex flex-col gap-1">
                {nav.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`rounded-2xl px-4 py-4 text-2xl font-medium tracking-tight ${
                      isActive(l.href) ? 'text-appleink' : 'text-applesub'
                    }`}
                  >
                    {pick(l.label, lang)}
                  </Link>
                ))}
                <a
                  href="mailto:wpputra90@gmail.com"
                  className="mt-4 rounded-full bg-appleink px-6 py-4 text-center text-base font-medium text-white"
                >
                  {pick(nav.cta, lang)}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
