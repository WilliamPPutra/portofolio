'use client';

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { sidejob as SJ } from '@/lib/content';
import Reveal from '@/components/Reveal';
import { DetailHero } from '@/components/Bits';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const src = (f) => `${base}/sidejob/${f}`;
const t = (lang, en, id) => (lang === 'id' ? id : en);

export default function SideJobPage() {
  const { lang } = useLang();
  const [open, setOpen] = useState(null); // index of the photo being viewed

  const count = SJ.gallery.length;
  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + count) % count)), [count]);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % count)), [count]);

  // Keyboard control while the viewer is open
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, prev, next]);

  return (
    <>
      <DetailHero
        icon={Camera}
        eyebrow={pick(SJ.eyebrow, lang)}
        title={pick(SJ.title, lang)}
        tagline={pick(SJ.tagline, lang)}
        titleClass="text-4xl sm:text-5xl md:text-6xl"
      />

      {/* What it is */}
      <section className="bg-white">
        <div className="shell py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal>
              <p className="text-lg leading-relaxed text-applesub">{pick(SJ.intro, lang)}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {SJ.points.map((p, i) => (
                  <div key={i} className="rounded-2xl border border-appleline/60 bg-applegray p-5">
                    <p className="text-sm font-semibold text-appleink">{pick(p.k, lang)}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-applesub">{pick(p.d, lang)}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery: natural masonry, photos keep their own shape */}
      <section className="bg-applegray">
        <div className="shell py-16 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="display text-3xl text-appleink sm:text-4xl">{pick(SJ.galleryTitle, lang)}</h2>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] font-medium text-applesub">
                <Images size={13} />
                {pick(SJ.galleryNote, lang)}
              </span>
            </div>
          </Reveal>

          <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            {SJ.gallery.map((g, i) => (
              <Reveal key={g.src} delay={0.03 * i} className="block break-inside-avoid">
                <button
                  onClick={() => setOpen(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-lg"
                  aria-label={pick(g.label, lang)}
                >
                  <img
                    src={src(g.src)}
                    alt={pick(g.label, lang)}
                    width={g.w}
                    height={g.h}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    className="block h-auto w-full transition-transform duration-700 ease-apple group-hover:scale-[1.03]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute bottom-3 left-3 text-[11px] font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {pick(g.label, lang)}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Viewer */}
      {open !== null && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-3 text-white sm:px-6">
            <span className="text-xs font-medium text-white/70">
              {open + 1} / {count} · {pick(SJ.gallery[open].label, lang)}
            </span>
            <button
              onClick={close}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              aria-label={t(lang, 'Close', 'Tutup')}
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
            <img
              src={src(SJ.gallery[open].src)}
              alt={pick(SJ.gallery[open].label, lang)}
              className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
            />

            <button
              onClick={prev}
              aria-label={t(lang, 'Previous', 'Sebelumnya')}
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-5"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              aria-label={t(lang, 'Next', 'Berikutnya')}
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-5"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
