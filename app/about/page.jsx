'use client';

import { Compass } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { about } from '@/lib/content';
import Reveal from '@/components/Reveal';
import { DetailHero } from '@/components/Bits';

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <>
      <DetailHero
        icon={Compass}
        eyebrow={pick(about.journeyEyebrow, lang)}
        title={pick(about.journeyTitle, lang)}
        tagline={pick(about.journeyLede, lang)}
      />

      {/* Eras, light gray */}
      <section className="bg-applegray">
        <div className="shell py-20 sm:py-28">
          <div className="flex flex-col gap-5">
            {about.eras.map((era, i) => (
              <Reveal key={i} delay={0.05}>
                <div className="group grid gap-8 rounded-[1.75rem] border border-black/[0.06] bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-md sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="flex flex-col justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-semibold tracking-tightest text-black/10">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-applesub">
                        {pick(era.tag, lang)}
                      </span>
                    </div>
                    <div>
                      <h3 className="display text-3xl sm:text-4xl">{pick(era.year, lang)}</h3>
                      <p className="mt-2 text-sm text-applesub">{pick(era.role, lang)}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-appleink/80">{pick(era.body, lang)}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {era.points.map((p, j) => (
                        <li key={j} className="rounded-full border border-black/[0.08] bg-applegray px-3 py-1.5 text-xs text-applesub">
                          {pick(p, lang)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ethos, white with dark tiles */}
      <section className="bg-white">
        <div className="shell py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow text-applesub">{pick(about.ethosEyebrow, lang)}</p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {about.ethos.map((e, i) => (
              <Reveal key={i} delay={0.07 * i}>
                <div className="h-full rounded-3xl bg-appleink p-8 text-chalk">
                  <span className="text-sm font-semibold text-white">{pick(e.k, lang)}</span>
                  <p className="mt-4 text-sm leading-relaxed text-chalk-dim">{pick(e.v, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
