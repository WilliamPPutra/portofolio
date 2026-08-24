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

      {/* Lead magnet */}
      <section className="bg-applegray">
        <div className="shell py-20 sm:py-28">
          <Reveal>
            <SectionKicker icon={Sparkles} eyebrow={pick(P.leadEyebrow, lang)} />
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="display mt-7 max-w-3xl text-3xl text-appleink sm:text-4xl md:text-5xl">{pick(P.leadTitle, lang)}</h3>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
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
