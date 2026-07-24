'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, LayoutDashboard, Boxes, Wallet, Globe, Gamepad2, Building2, Sparkles, Play } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { projects as P } from '@/lib/content';
import Reveal from '@/components/Reveal';
import Frame from '@/components/commerce/Frame';
import { SectionKicker, DetailHero } from '@/components/Bits';
import { DashboardView, InventoryView, FinanceView, WebBuilderView } from '@/components/commerce/views';
import DemoModal from '@/components/demos/DemoModal';
import KepulangankuGame from '@/components/demos/KepulangankuGame';
import RukunkuApp from '@/components/demos/RukunkuApp';

const SCREEN_VIEW = { dashboard: DashboardView, inventory: InventoryView, finance: FinanceView, builder: WebBuilderView };
const SCREEN_ICON = { LayoutDashboard, Boxes, Wallet, Globe };

export default function ProjectsPage() {
  const { lang } = useLang();
  const os = P.os;
  const [demo, setDemo] = useState(null); // 'kepulanganku' | 'rukunku' | null

  return (
    <>
      <DetailHero
        icon={Layers}
        eyebrow={pick(P.eyebrow, lang)}
        title={pick(P.title, lang)}
        tagline={pick(P.lede, lang)}
        titleClass="text-4xl sm:text-5xl md:text-6xl"
      />

      {/* Commerce OS intro — light gray */}
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* Four screens as alternating-color bands */}
      {os.screens.map((screen) => (
        <CommerceBand key={screen.key} screen={screen} lang={lang} />
      ))}

      {/* Lead magnets — light gray */}
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
                <LeadCard
                  lead={l}
                  icon={i === 0 ? Gamepad2 : Building2}
                  lang={lang}
                  kepulangan={i === 0}
                  onTry={() => setDemo(i === 0 ? 'kepulanganku' : 'rukunku')}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Playable in-memory demos */}
      <DemoModal open={demo === 'kepulanganku'} onClose={() => setDemo(null)} title="Kepulanganku — Amanah Terakhir">
        <KepulangankuGame />
      </DemoModal>
      <DemoModal open={demo === 'rukunku'} onClose={() => setDemo(null)} title="Rukunku App">
        <RukunkuApp />
      </DemoModal>
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
        {/* Centered heading (Apple product-section style) */}
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

        {/* Full-width mockup below */}
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-5xl">
          <Frame flush>
            <View lang={lang} />
          </Frame>
        </Reveal>
      </div>
    </div>
  );
}

function LeadCard({ lead, icon: Icon, lang, kepulangan, onTry }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-appleline/60 bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-lg"
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-700 ${
          kepulangan ? 'bg-gradient-to-br from-indigo-300/50 to-fuchsia-300/40 opacity-100' : 'bg-emerald-200/40 opacity-0 group-hover:opacity-100'
        }`}
      />
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
      {/* Try-it button */}
      <div className="relative mt-7 flex items-center gap-3 pt-1">
        <button
          onClick={onTry}
          className="inline-flex items-center gap-2 rounded-full bg-appleink px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
        >
          <Play size={15} className="fill-white" />
          {lang === 'en' ? 'Try the demo' : 'Coba demo'}
        </button>
        <span className="text-[11px] text-muted">{lang === 'en' ? 'nothing is saved' : 'data tidak disimpan'}</span>
      </div>
    </motion.div>
  );
}
