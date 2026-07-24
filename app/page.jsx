'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import portrait from '@/public/portrait.png';
import {
  ArrowDown,
  ArrowUpRight,
  User,
  Compass,
  Award,
  Layers,
  Camera,
} from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { about, hub } from '@/lib/content';
import Reveal from '@/components/Reveal';
import Ambient from '@/components/Ambient';
import MagneticButton from '@/components/MagneticButton';

const ICONS = { Compass, Award, Layers, Camera };

export default function Home() {
  const { lang } = useLang();

  return (
    <div>
      <Hero lang={lang} />
      <HubGrid lang={lang} />
    </div>
  );
}

/* ══════════════════ HERO — black cinematic identity ══════════════════ */
function Hero({ lang }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const headline = pick(about.headline, lang);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-ink pt-28 text-chalk sm:pt-32">
      <Ambient />
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div style={{ y, opacity }}>
          <Reveal>
            <span className="eyebrow text-muted">{pick(about.eyebrow, lang)}</span>
          </Reveal>
          <h1 className="display mt-6 text-[12vw] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5rem]">
            {headline.map((line, i) => (
              <Reveal as="span" key={i} delay={0.08 * i} className="block">
                <span className={i === headline.length - 1 ? 'text-muted' : 'text-chalk'}>{line}</span>
              </Reveal>
            ))}
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-chalk-dim">{pick(about.sub, lang)}</p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href="/about" variant="onDark">
                {lang === 'en' ? 'Start with my story' : 'Mulai dari kisah saya'}
                <ArrowUpRight size={16} />
              </MagneticButton>
              <MagneticButton href="#sections" variant="ghostDark">
                {lang === 'en' ? 'Explore the hub' : 'Jelajahi pusat'}
              </MagneticButton>
            </div>
          </Reveal>
        </motion.div>

        {/* Portrait placeholder */}
        <Reveal delay={0.2}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01]">
              <Image
                src={portrait}
                alt={pick(about.name, lang)}
                fill
                priority
                sizes="(max-width: 640px) 90vw, 384px"
                className="object-cover object-top transition-transform duration-700 ease-apple group-hover:scale-[1.03]"
              />
              {/* Bottom scrim so the name plate stays legible */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
              <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/[0.10] to-transparent transition-transform duration-1000 ease-apple group-hover:translate-x-[120%]" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/[0.06] bg-ink/50 px-4 py-3 backdrop-blur-md">
                <p className="text-sm font-medium text-chalk">{pick(about.name, lang)}</p>
                <p className="text-xs text-muted">{lang === 'en' ? 'Brand Lead · Strategist' : 'Brand Lead · Strategis'}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <motion.a
        href="#sections"
        style={{ opacity }}
        className="absolute inset-x-0 bottom-8 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[10px] uppercase tracking-[0.3em]">{pick(hub.eyebrow, lang)}</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown size={16} />
          </motion.span>
        </div>
      </motion.a>
    </section>
  );
}

/* ══════════════════ HUB GRID — the four section cards ══════════════════ */
function HubGrid({ lang }) {
  return (
    <section id="sections" className="scroll-mt-16 bg-applegray">
      <div className="shell py-24 sm:py-32">
        <Reveal>
          <span className="eyebrow text-applesub">{pick(hub.eyebrow, lang)}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 max-w-3xl text-4xl text-appleink sm:text-5xl md:text-6xl">
            {pick(hub.heading, lang)}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {hub.cards.map((card, i) => (
            <Reveal key={card.href} delay={0.07 * i}>
              <HubCard card={card} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HubCard({ card, lang }) {
  const Icon = ICONS[card.icon];
  const theme = card.theme;
  const dark = theme === 'dark';

  const bg =
    theme === 'dark'
      ? 'bg-ink'
      : theme === 'gradient'
      ? 'bg-gradient-to-br from-white to-applegray'
      : theme === 'lightgray'
      ? 'bg-white'
      : 'bg-white';

  return (
    <Link href={card.href} className="group block h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className={`relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] border p-8 shadow-sm transition-shadow duration-500 group-hover:shadow-xl sm:p-10 ${
          dark ? 'border-white/10' : 'border-appleline/60'
        } ${bg}`}
      >
        {/* ambient corner for gradient/dark tiles */}
        <div
          className={`pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full blur-3xl transition-opacity duration-700 ${
            dark ? 'bg-white/[0.06] opacity-100' : 'bg-black/[0.04] opacity-0 group-hover:opacity-100'
          }`}
        />

        <div className="relative flex items-start justify-between">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
              dark ? 'border-white/10 bg-white/[0.06] text-chalk' : 'border-black/[0.08] bg-black/[0.03] text-appleink'
            }`}
          >
            <Icon size={22} strokeWidth={1.5} />
          </span>
          <span className={`text-sm font-semibold tracking-tightest ${dark ? 'text-white/25' : 'text-black/15'}`}>
            {card.n}
          </span>
        </div>

        <div className="relative mt-8">
          <h3 className={`display text-3xl sm:text-4xl ${dark ? 'text-white' : 'text-appleink'}`}>
            {pick(card.name, lang)}
          </h3>
          <p className={`mt-4 max-w-md text-sm leading-relaxed ${dark ? 'text-chalk-dim' : 'text-applesub'}`}>
            {pick(card.tag, lang)}
          </p>
          <span
            className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
              dark ? 'text-white' : 'text-appleblue'
            }`}
          >
            {pick(hub.cta, lang)}
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
