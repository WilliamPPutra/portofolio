'use client';

import { Award, TrendingUp, TrendingDown } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { kafanku as K } from '@/lib/content';
import Reveal from '@/components/Reveal';
import { DetailHero } from '@/components/Bits';
import GrowthStory from '@/components/kafanku/GrowthStory';
import TeamContent from '@/components/kafanku/TeamContent';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

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
        logo={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/media/logo-kafanku.jpg`}
        logoAlt="Kafanku"
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
              <div>
                {/* The premium kit itself */}
                <figure className="overflow-hidden rounded-3xl border border-appleline/60 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${base}/media/paket-premium.webp`}
                    alt={lang === 'en' ? 'Kafanku premium shroud kit' : 'Paket kain kafan premium Kafanku'}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="block w-full"
                  />
                  <figcaption className="border-t border-appleline/60 px-5 py-3 text-xs text-applesub">
                    {lang === 'en' ? 'Paket Premium · the flagship kit' : 'Paket Premium · paket unggulan'}
                  </figcaption>
                </figure>
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
                {/* The economy kit built from the off-cuts */}
                <figure className="overflow-hidden rounded-3xl border border-white/10 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${base}/media/paket-ekonomis.webp`}
                    alt={lang === 'en' ? 'Kafanku Paket Ekonomis kit' : 'Paket Ekonomis Kafanku'}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="block w-full"
                  />
                  <figcaption className="border-t border-black/[0.06] px-5 py-3 text-xs text-applesub">
                    {lang === 'en'
                      ? 'Paket Ekonomis · built from premium off-cuts'
                      : 'Paket Ekonomis · dibuat dari sisa kain premium'}
                  </figcaption>
                </figure>

              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 The conflict */}
      <section className="bg-applegray">
        <div className="shell py-20 sm:py-24">
          <Chapter n={K.ch3.n} kicker={pick(K.ch3.kicker, lang)} title={pick(K.ch3.title, lang)}>
            <p className="max-w-2xl text-lg leading-relaxed text-appleink/75">{pick(K.ch3.body, lang)}</p>

            {/* what the overlap actually did, as two opposing bars */}
            <div className="mt-10 max-w-2xl">
              <p className="eyebrow text-applesub">{pick(K.ch3.before.label, lang)}</p>
              <div className="mt-5 space-y-5">
                {K.ch3.before.rows.map((r, i) => {
                  const down = r.dir === 'down';
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-sm font-medium text-appleink">{pick(r.name, lang)}</span>
                        <span className={`flex items-center gap-1.5 text-xs ${down ? 'text-rose-600' : 'text-emerald-600'}`}>
                          {down ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
                          {pick(r.note, lang)}
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-black/[0.07]">
                        <div
                          className="h-full rounded-full transition-[width] duration-700 ease-out"
                          style={{ width: down ? '32%' : '88%', background: down ? '#e11d48' : '#059669' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Chapter>
        </div>
      </section>

      {/* 04 The pivot, with its three moves and the separation matrix inside it */}
      <section className="border-y border-appleline/60 bg-white">
        <div className="shell py-20 sm:py-24">
          <Chapter n={K.ch4.n} kicker={pick(K.ch4.kicker, lang)} title={pick(K.ch4.title, lang)}>
            <p className="max-w-2xl text-lg leading-relaxed text-appleink/75">{pick(K.ch4.intro, lang)}</p>

            {/* the three moves, one per row, as an editorial list */}
            <ol className="mt-12 border-t border-appleline/60">
              {K.ch4.moves.map((m, i) => (
                <Reveal as="li" key={i} delay={0.05 * i} className="block border-b border-appleline/60">
                  <div className="grid gap-3 py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
                    <span className="display text-3xl leading-none text-black/15">{m.n}</span>
                    <div>
                      <h4 className="text-lg font-semibold text-appleink sm:text-xl">{pick(m.t, lang)}</h4>
                      <p className="mt-2 max-w-2xl text-base leading-relaxed text-applesub">{pick(m.d, lang)}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            {/* how the two brands ended up split */}
            <Reveal delay={0.05}>
              <div className="mt-14">
                <p className="eyebrow text-applesub">{pick(K.ch4.matrixTitle, lang)}</p>
                <div className="mt-5 overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-appleink/80">
                        <th className="py-3 pr-6 font-medium text-applesub"> </th>
                        {K.ch4.matrix.cols.map((c, i) => (
                          <th key={i} className="py-3 pr-6 font-semibold text-appleink">{pick(c, lang)}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {K.ch4.matrix.rows.map((row, i) => (
                        <tr key={i} className="border-b border-appleline/60">
                          <td className="py-4 pr-6 text-applesub">{pick(row.k, lang)}</td>
                          <td className="py-4 pr-6 text-appleink/80">{pick(row.a, lang)}</td>
                          <td className="py-4 pr-6 font-medium text-appleink">{pick(row.b, lang)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </Chapter>
        </div>
      </section>

      {/* 05 The result */}
      <section className="bg-applegray">
        <div className="shell py-20 sm:py-24">
          <Chapter n={K.ch5.n} kicker={pick(K.ch5.kicker, lang)} title={pick(K.ch5.title, lang)}>
            <p className="max-w-2xl text-lg leading-relaxed text-appleink/75">{pick(K.ch5.body, lang)}</p>

            <dl className="mt-12 border-t border-appleink/80">
              {K.ch5.outcomes.map((o, i) => (
                <Reveal key={i} delay={0.05 * i} className="block border-b border-appleline/60">
                  <div className="grid gap-1 py-5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-baseline sm:gap-8">
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-applesub">{pick(o.k, lang)}</dt>
                    <dd className="text-lg font-medium text-appleink">{pick(o.v, lang)}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </Chapter>
        </div>
      </section>

      {/* Growth by the numbers, multi-platform infographic */}
      <GrowthStory />

      {/* Team + content showcase (before/after, arsenal, influencers) */}
      <TeamContent />
    </>
  );
}

/* One chapter of the case study: the number and heading hold the left column,
   the narrative runs down the right. No cards, just type and hairlines. */
function Chapter({ n, kicker, title, children }) {
  return (
    <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
      <Reveal className="min-w-0">
        <div className="lg:sticky lg:top-24">
          <div className="flex items-baseline gap-3">
            <span className="display text-5xl leading-none text-black/12">{n}</span>
            <span className="eyebrow text-applesub">{kicker}</span>
          </div>
          <h3 className="display mt-4 text-3xl text-appleink sm:text-4xl">{title}</h3>
        </div>
      </Reveal>
      <Reveal delay={0.06} className="min-w-0">
        <div className="min-w-0">{children}</div>
      </Reveal>
    </div>
  );
}
