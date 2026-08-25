'use client';

import { motion } from 'framer-motion';
import {
  Layers,
  Cpu,
  LayoutDashboard,
  Boxes,
  Wallet,
  Globe,
  Gamepad2,
  Sparkles,
  Wand2,
  ExternalLink,
  Check,
  Play,
} from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { projects as P } from '@/lib/content';
import Reveal from '@/components/Reveal';
import Frame from '@/components/commerce/Frame';
import FixedScale from '@/components/commerce/FixedScale';
import { SectionKicker, DetailHero } from '@/components/Bits';
import { DashboardView, InventoryView, FinanceView, WebBuilderView } from '@/components/commerce/views';

const SCREEN_VIEW = { dashboard: DashboardView, inventory: InventoryView, finance: FinanceView, builder: WebBuilderView };
const SCREEN_ICON = { LayoutDashboard, Boxes, Wallet, Globe };

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const DEMO_URL = `${base}/demo/commerce-os/index.html`;
const GAME_URL = `${base}/games/kepulanganku/index.html`;

const t = (lang, en, id) => (lang === 'id' ? id : en);

// Fixed star field for the game poster. Hardcoded so it renders identically on
// the server and the client.
const STARS = [
  { x: 8, y: 14, r: 2, o: 0.7 }, { x: 17, y: 32, r: 1, o: 0.5 }, { x: 24, y: 9, r: 1, o: 0.6 },
  { x: 31, y: 22, r: 2, o: 0.45 }, { x: 39, y: 6, r: 1, o: 0.7 }, { x: 46, y: 17, r: 1, o: 0.4 },
  { x: 54, y: 11, r: 2, o: 0.6 }, { x: 62, y: 26, r: 1, o: 0.5 }, { x: 69, y: 8, r: 1, o: 0.65 },
  { x: 76, y: 19, r: 2, o: 0.5 }, { x: 84, y: 12, r: 1, o: 0.6 }, { x: 91, y: 28, r: 1, o: 0.45 },
  { x: 12, y: 44, r: 1, o: 0.4 }, { x: 35, y: 38, r: 1, o: 0.35 }, { x: 58, y: 41, r: 1, o: 0.4 },
  { x: 80, y: 37, r: 1, o: 0.35 }, { x: 95, y: 47, r: 1, o: 0.3 }, { x: 4, y: 25, r: 1, o: 0.5 },
];

export default function ProjectsPage() {
  const { lang } = useLang();
  const os = P.os;

  return (
    <>
      <DetailHero
        icon={Layers}
        eyebrow={pick(P.eyebrow, lang)}
        title={pick(P.title, lang)}
        tagline={pick(P.lede, lang)}
        titleClass="text-4xl sm:text-5xl md:text-6xl"
      />

      {/* How this was built: AI-assisted, not a programmer */}
      <section className="bg-white">
        <div className="shell py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <Reveal>
                <SectionKicker icon={Wand2} eyebrow={pick(os.aiNote.eyebrow, lang)} />
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display mt-7 text-3xl text-appleink sm:text-4xl md:text-5xl">
                  {pick(os.aiNote.title, lang)}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-applesub">{pick(os.aiNote.body, lang)}</p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {os.aiNote.points.map((pt, i) => (
                  <div key={i} className="rounded-3xl border border-appleline/60 bg-applegray p-6">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-appleink text-white">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-appleink">{pick(pt.t, lang)}</p>
                    <p className="mt-2 text-sm leading-relaxed text-applesub">{pick(pt.d, lang)}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Commerce OS intro + live demo */}
      <section className="bg-applegray">
        <div className="shell py-20 sm:py-24">
          <Reveal>
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-appleink text-white">
                  <Cpu size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="eyebrow text-applesub">{pick(os.eyebrow, lang)}</p>
                  <h3 className="display text-3xl text-appleink sm:text-4xl">{pick(os.name, lang)}</h3>
                </div>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-appleink/80">{pick(os.tagline, lang)}</p>
              <div className="flex flex-wrap gap-2">
                {os.stack.map((s) => (
                  <span key={s} className="rounded-full border border-black/[0.08] bg-white px-3 py-1 text-xs text-applesub">{s}</span>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-appleink px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
                >
                  <ExternalLink size={15} />
                  {pick(os.demoCta, lang)}
                </a>
                <span className="text-[11px] text-muted">{pick(os.demoNote, lang)}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Four screens as alternating-color bands */}
      {os.screens.map((screen) => (
        <CommerceBand key={screen.key} screen={screen} lang={lang} />
      ))}

      {/* Try it yourself, after the screenshots */}
      <section className="border-t border-appleline/50 bg-white">
        <div className="shell py-16 text-center sm:py-20">
          <Reveal>
            <h3 className="display mx-auto max-w-2xl text-3xl text-appleink sm:text-4xl">
              {t(lang, 'Rather click around than read about it?', 'Lebih suka klik sendiri daripada membaca?')}
            </h3>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-applesub">
              {t(
                lang,
                'Every screen above is live in the demo. Open it and browse the sidebar yourself.',
                'Semua layar di atas ada di demo. Buka dan telusuri sendiri menu di sampingnya.'
              )}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-appleink px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
              >
                <ExternalLink size={16} />
                {pick(os.demoCta, lang)}
              </a>
              <span className="text-[11px] text-muted">{pick(os.demoNote, lang)}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-applegray">
        <div className="shell py-20 sm:py-28">
          <Reveal>
            <SectionKicker icon={Sparkles} eyebrow={pick(P.leadEyebrow, lang)} />
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="display mt-7 max-w-3xl text-3xl text-appleink sm:text-4xl md:text-5xl">{pick(P.leadTitle, lang)}</h3>
          </Reveal>

          {/* Live preview of the real game, same idea as the app screenshots */}
          <Reveal delay={0.08}>
            <div className="mx-auto mt-12 max-w-4xl">
              <GamePreview lang={lang} />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {P.leads.map((l, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <LeadCard lead={l} icon={Gamepad2} lang={lang} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CommerceBand({ screen, lang }) {
  const View = SCREEN_VIEW[screen.key];
  const Icon = SCREEN_ICON[screen.icon];
  const theme = screen.theme;
  const bg =
    theme === 'dark'
      ? 'bg-ink text-chalk'
      : theme === 'gradient'
      ? 'bg-gradient-to-b from-white to-applegray text-appleink'
      : 'bg-white text-appleink';
  const dark = theme === 'dark';

  return (
    <div className={`overflow-x-hidden ${bg}`}>
      <div className="shell py-20 sm:py-28">
        {/* Centered heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-center">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                dark ? 'border-white/10 bg-white/[0.05] text-chalk' : 'border-black/[0.08] bg-black/[0.03] text-appleink'
              }`}
            >
              <Icon size={20} strokeWidth={1.6} />
            </span>
            <span className={`eyebrow mt-5 ${dark ? 'text-muted' : 'text-applesub'}`}>{pick(screen.tag, lang)}</span>
            <h3 className={`display mt-4 text-4xl sm:text-5xl md:text-6xl ${dark ? 'text-white' : 'text-appleink'}`}>
              {pick(screen.name, lang)}
            </h3>
            <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-chalk-dim' : 'text-applesub'}`}>
              {pick(screen.d, lang)}
            </p>
          </div>
        </Reveal>

        {/* Screenshot: fixed desktop layout, scaled down to fit */}
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl">
          <FixedScale width={1040}>
            <Frame flush>
              <View lang={lang} />
            </Frame>
          </FixedScale>
        </Reveal>
      </div>
    </div>
  );
}

/* A real, running preview of the game framed like the app screenshots. */
function GamePreview({ lang }) {
  return (
    <FixedScale width={960}>
      <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] text-slate-400 shadow-sm">
            pusatkainkafan.com/games/kepulanganku
          </div>
        </div>

        {/* Title-screen poster. The game itself is never loaded here, so it can
            never start its music. Sound only happens once the game is opened. */}
        <a
          href={GAME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center overflow-hidden"
          style={{ height: 560, background: 'linear-gradient(180deg,#10162B 0%,#1A2340 55%,#2B1B3A 100%)' }}
        >
          {/* night sky */}
          <span className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
            {STARS.map((s, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white"
                style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.r, height: s.r, opacity: s.o }}
              />
            ))}
          </span>
          {/* moon glow behind the title */}
          <span
            className="pointer-events-none absolute h-[360px] w-[360px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(244,194,43,0.16), rgba(244,194,43,0) 68%)' }}
            aria-hidden
          />
          {/* horizon */}
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
            style={{ background: 'linear-gradient(180deg, rgba(7,9,15,0) 0%, #07090F 78%)' }}
            aria-hidden
          />

          <span className="relative flex flex-col items-center text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${base}/media/avatar-kafanku.jpg`}
              alt="Kafanku"
              width={64}
              height={64}
              loading="lazy"
              className="h-14 w-14 rounded-2xl object-cover shadow-lg"
            />
            <span className="display mt-5 text-5xl text-[#F6F2E8]">
              Kepulangan<span style={{ color: '#F4C22B' }}>ku</span>
            </span>
            <span className="mt-2 text-[11px] uppercase tracking-[0.3em]" style={{ color: '#9aa2bd' }}>
              {t(lang, 'Educational game · Kafanku', 'Gim edukasi · Kafanku')}
            </span>

            <span className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-[#10162B] shadow-xl transition-transform group-hover:scale-105"
              style={{ background: '#F4C22B' }}>
              <Play size={16} className="fill-[#10162B]" />
              {t(lang, 'Play the real game', 'Mainkan game aslinya')}
            </span>
            <span className="mt-3 text-[11px]" style={{ color: '#6B7690' }}>
              {t(lang, 'Opens in a new tab, with sound', 'Terbuka di tab baru, dengan suara')}
            </span>
          </span>
        </a>
      </div>
    </FixedScale>
  );
}

function LeadCard({ lead, icon: Icon, lang }) {
  const href = lead.href ? `${base}${lead.href}` : null;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-appleline/60 bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-lg"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-300/50 to-fuchsia-300/40 blur-3xl" />

      <div className="relative flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-appleink text-white">
          <Icon size={22} strokeWidth={1.4} />
        </span>
        <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-applesub">
          {pick(lead.kind, lang)}
        </span>
      </div>

      <h4 className="display mt-6 text-3xl text-appleink">{pick(lead.name, lang)}</h4>
      <p className="mt-4 text-sm leading-relaxed text-applesub">{pick(lead.d, lang)}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {lead.tags.map((tg, i) => (
          <span key={i} className="rounded-full border border-black/[0.08] bg-applegray px-3 py-1 text-xs text-applesub">
            {pick(tg, lang)}
          </span>
        ))}
      </div>

      {href && (
        <div className="relative mt-7 flex items-center gap-3 pt-1">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-appleink px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            <ExternalLink size={15} />
            {pick(lead.cta, lang)}
          </a>
          <span className="text-[11px] text-muted">{lang === 'en' ? 'Opens in a new tab' : 'Terbuka di tab baru'}</span>
        </div>
      )}
    </motion.div>
  );
}
