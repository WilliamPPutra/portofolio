'use client';

import { Award, Recycle, Boxes, Sparkles } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { kafanku as K } from '@/lib/content';
import Reveal from '@/components/Reveal';
import { DetailHero } from '@/components/Bits';
import GrowthStory from '@/components/kafanku/GrowthStory';
import TeamContent from '@/components/kafanku/TeamContent';

export default function PortfolioPage() {
  const { lang } = useLang();

  return (
    <>
      <DetailHero
        icon={Award}
        eyebrow={pick(K.eyebrow, lang)}
        title={pick(K.title, lang)}
        tagline={pick(K.tagline, lang)}
        titleClass="text-6xl sm:text-7xl md:text-8xl"
      />

      {/* Meta strip + philosophy, white */}
      <section className="bg-white">
        <div className="shell py-20 sm:py-28">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-appleline/60 bg-appleline/40 sm:grid-cols-4">
              {K.meta.map((m, i) => (
                <div key={i} className="bg-white px-5 py-5">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-applesub">{pick(m.k, lang)}</p>
                  <p className="mt-2 text-sm font-medium text-appleink">{pick(m.v, lang)}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <span className="text-sm font-semibold text-applesub">{K.ch1.n} · {pick(K.ch1.kicker, lang)}</span>
                <h3 className="display mt-4 text-3xl text-appleink sm:text-4xl">{pick(K.ch1.title, lang)}</h3>
                <p className="mt-5 text-base leading-relaxed text-appleink/80">{pick(K.ch1.body, lang)}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-appleline/60 bg-applegray p-6">
                  <p className="text-base font-semibold">{lang === 'en' ? 'Premium sister brand' : 'Brand kakak premium'}</p>
                  <p className="mt-1 text-sm text-applesub">{lang === 'en' ? 'The “iPhone”' : 'Sang “iPhone”'}</p>
                  <p className="mt-4 text-xs text-applesub">{lang === 'en' ? 'Premium · aspirational' : 'Premium · aspiratif'}</p>
                </div>
                <div className="rounded-3xl bg-appleink p-6 text-chalk">
                  <p className="text-base font-semibold text-white">Kafanku</p>
                  <p className="mt-1 text-sm text-chalk-dim">{lang === 'en' ? 'The “mid-tier Android”' : '“Android menengah”'}</p>
                  <p className="mt-4 text-xs text-muted">{lang === 'en' ? 'Reachable · wider market' : 'Terjangkau · pasar luas'}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Circular innovation, black band */}
      <section className="bg-ink text-chalk">
        <div className="shell py-20 sm:py-28">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-sm font-semibold text-muted">{K.ch2.n} · {pick(K.ch2.kicker, lang)}</span>
                <h3 className="display mt-4 text-3xl text-white sm:text-4xl">{pick(K.ch2.title, lang)}</h3>
                <p className="mt-5 text-base leading-relaxed text-chalk-dim">{pick(K.ch2.body, lang)}</p>
                <p className="mt-8 border-l-2 border-white/25 pl-5 text-xl font-medium leading-snug text-white sm:text-2xl">
                  {pick(K.ch2.pull, lang)}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { i: Recycle, t: lang === 'en' ? 'Premium off-cuts' : 'Sisa kain premium', s: lang === 'en' ? 'Warehouse waste' : 'Limbah gudang' },
                  { i: Boxes, t: lang === 'en' ? 'BOM assembly' : 'Perakitan BOM', s: lang === 'en' ? 'Auto stock deduction' : 'Potong stok otomatis' },
                  { i: Sparkles, t: 'Paket Ekonomis', s: lang === 'en' ? 'High-margin SKU' : 'SKU margin tinggi', hi: true },
                ].map((n, i) => (
                  <div key={i} className={`flex items-center gap-4 rounded-2xl border p-4 ${n.hi ? 'border-white/20 bg-white/[0.08]' : 'border-white/10 bg-white/[0.03]'}`}>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                      <n.i size={18} strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{n.t}</p>
                      <p className="text-xs text-muted">{n.s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem / pivot / result + matrix + outcomes, light gray */}
      <section className="bg-applegray">
        <div className="shell py-20 sm:py-28">
          <div className="grid gap-6 lg:grid-cols-3">
            {[K.ch3, K.ch4, K.ch5].map((ch, i) => (
              <Reveal key={i} delay={0.07 * i}>
                <div className="flex h-full flex-col rounded-3xl border border-appleline/60 bg-white p-8">
                  <span className="text-sm font-semibold text-applesub">{ch.n} · {pick(ch.kicker, lang)}</span>
                  <h4 className="display mt-3 text-2xl">{pick(ch.title, lang)}</h4>
                  <p className="mt-4 text-sm leading-relaxed text-appleink/75">{pick(ch.body || ch.intro, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* The three pivot moves */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {K.ch4.moves.map((m, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <div className="flex h-full flex-col rounded-3xl border border-appleline/60 bg-white p-7">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-semibold tracking-tightest text-black/15">{m.n}</span>
                    <h5 className="text-lg font-semibold text-appleink">{pick(m.t, lang)}</h5>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-applesub">{pick(m.d, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-applesub">{pick(K.ch4.matrixTitle, lang)}</h4>
              <div className="overflow-x-auto rounded-3xl border border-appleline/60 bg-white">
                <table className="w-full min-w-[560px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-appleline/60 bg-applegray">
                      <th className="px-6 py-4 font-medium text-applesub"> </th>
                      {K.ch4.matrix.cols.map((c, i) => (
                        <th key={i} className="px-6 py-4 font-semibold text-appleink">{pick(c, lang)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {K.ch4.matrix.rows.map((row, i) => (
                      <tr key={i} className="border-b border-appleline/40 last:border-0">
                        <td className="px-6 py-4 text-applesub">{pick(row.k, lang)}</td>
                        <td className="px-6 py-4 text-appleink/80">{pick(row.a, lang)}</td>
                        <td className="px-6 py-4 text-appleink/80">{pick(row.b, lang)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {K.ch5.outcomes.map((o, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <div className="h-full rounded-3xl border border-appleline/60 bg-white p-6">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-applesub">{pick(o.k, lang)}</p>
                  <p className="mt-3 text-lg font-medium text-appleink">{pick(o.v, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth by the numbers, multi-platform infographic */}
      <GrowthStory />

      {/* Team + content showcase (before/after, arsenal, influencers) */}
      <TeamContent />
    </>
  );
}
