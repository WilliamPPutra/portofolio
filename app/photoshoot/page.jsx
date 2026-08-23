'use client';

import { Camera, Aperture, ImageIcon, Info } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { photoshoot as PS } from '@/lib/content';
import Reveal from '@/components/Reveal';
import { DetailHero } from '@/components/Bits';

export default function PhotoShootPage() {
  const { lang } = useLang();

  return (
    <>
      <DetailHero
        icon={Camera}
        eyebrow={pick(PS.eyebrow, lang)}
        title={pick(PS.title, lang)}
        tagline={pick(PS.tagline, lang)}
      />

      {/* Intro, dark band */}
      <section className="bg-ink text-chalk">
        <div className="shell py-20 sm:py-28">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <p className="max-w-2xl text-lg leading-relaxed text-chalk-dim sm:text-xl">{pick(PS.intro, lang)}</p>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
                  <Aperture size={40} strokeWidth={1.1} />
                  <span className="text-xs uppercase tracking-[0.25em]">{lang === 'en' ? 'Hero Frame' : 'Frame Utama'}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categories, white */}
      <section className="bg-white">
        <div className="shell py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow text-applesub">{lang === 'en' ? 'What I shoot' : 'Yang saya kerjakan'}</p>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {PS.categories.map((c, i) => (
              <Reveal key={i} delay={0.07 * i}>
                <div className="h-full rounded-3xl border border-appleline/60 bg-applegray p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-appleink text-white">
                    <ImageIcon size={19} strokeWidth={1.5} />
                  </span>
                  <h4 className="mt-5 text-lg font-semibold text-appleink">{pick(c.k, lang)}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-applesub">{pick(c.d, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery, light gray, masonry-ish */}
      <section className="bg-applegray">
        <div className="shell py-20 sm:py-28">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="display text-3xl text-appleink sm:text-4xl">{pick(PS.galleryTitle, lang)}</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] font-medium text-applesub">
                <Info size={13} />
                {pick(PS.galleryNote, lang)}
              </span>
            </div>
          </Reveal>

          <div className="mt-10 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
            {PS.gallery.map((g, i) => (
              <Reveal key={i} delay={0.04 * i} className="block break-inside-avoid">
                <div className={`group relative ${g.ratio} w-full overflow-hidden rounded-2xl border border-appleline/60 bg-gradient-to-br from-white to-applegray`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-applesub">
                    <Camera size={26} strokeWidth={1.2} />
                    <span className="text-[10px] uppercase tracking-[0.22em]">{pick(g.label, lang)}</span>
                  </div>
                  <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 ease-apple group-hover:translate-x-[120%]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
