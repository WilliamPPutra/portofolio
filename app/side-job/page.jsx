'use client';

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { sidejob as SJ } from '@/lib/content';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';
import { DetailHero } from '@/components/Bits';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const src = (f) => `${base}/sidejob/${f}`;
const t = (lang, en, id) => (lang === 'id' ? id : en);
const EMAIL = 'wpputra90@gmail.com';

/**
 * Split the gallery into `cols` columns of near-equal height.
 *
 * Longest-processing-time first: place the tallest photo into whatever column
 * is currently shortest. Purely a function of the w/h in the content file, so
 * the server and the client always produce the same split.
 */
function packColumns(items, cols) {
  const heights = new Array(cols).fill(0);
  const columns = Array.from({ length: cols }, () => []);
  const shortest = () => heights.indexOf(Math.min(...heights));

  [...items.keys()]
    .sort((a, b) => items[b].h / items[b].w - items[a].h / items[a].w || a - b)
    .forEach((i) => {
      const c = shortest();
      columns[c].push(i);
      heights[c] += items[i].h / items[i].w;
    });

  // Keep the original order inside each column so the eye still reads downward.
  columns.forEach((c) => c.sort((a, b) => a - b));

  // The closing photo reads better in the last column. Only swap it with a
  // photo of identical proportions, so the balance above is untouched.
  const last = items.length - 1;
  const from = columns.findIndex((c) => c.includes(last));
  if (from !== -1 && from !== cols - 1) {
    const target = columns[cols - 1];
    const j = target.findIndex((i) => items[i].h / items[i].w === items[last].h / items[last].w);
    if (j !== -1) {
      const swapped = target[j];
      target[j] = last;
      columns[from][columns[from].indexOf(last)] = swapped;
      columns.forEach((c) => c.sort((a, b) => a - b));
    }
  }

  return columns;
}

function Masonry({ cols, className, lang, onOpen }) {
  const columns = packColumns(SJ.gallery, cols);
  return (
    <div className={`gap-4 ${className}`}>
      {columns.map((col, c) => (
        <div key={c} className="flex min-w-0 flex-1 flex-col gap-4">
          {col.map((i) => {
            const g = SJ.gallery[i];
            return (
              <Reveal key={g.src} delay={0.03 * i} className="block">
                <button
                  onClick={() => onOpen(i)}
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
            );
          })}
        </div>
      ))}
    </div>
  );
}

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

          {/* One layout per breakpoint. CSS multi-column balanced these badly and
              left a tall hole in the last column, so the split is computed here. */}
          <div className="mt-10">
            <Masonry cols={2} className="flex sm:hidden" lang={lang} onOpen={setOpen} />
            <Masonry cols={3} className="hidden sm:flex lg:hidden" lang={lang} onOpen={setOpen} />
            <Masonry cols={4} className="hidden lg:flex" lang={lang} onOpen={setOpen} />
          </div>
        </div>
      </section>

      {/* Collaboration invite */}
      <section className="bg-white">
        <div className="shell py-16 sm:py-24">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-ink px-7 py-12 text-chalk sm:px-12 sm:py-16">
              <div className="mx-auto max-w-2xl text-center">
                <span className="eyebrow text-muted">{pick(SJ.collab.eyebrow, lang)}</span>
                <h2 className="display mt-4 text-3xl text-white sm:text-4xl md:text-5xl">
                  {pick(SJ.collab.title, lang)}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-chalk-dim">{pick(SJ.collab.body, lang)}</p>

                <ul className="mt-8 flex flex-wrap justify-center gap-2">
                  {SJ.collab.tags.map((tag, i) => (
                    <li
                      key={i}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-chalk"
                    >
                      {pick(tag, lang)}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-col items-center gap-3">
                  <MagneticButton href={`mailto:${EMAIL}?subject=${encodeURIComponent(pick(SJ.collab.subject, lang))}`} variant="onDark">
                    {pick(SJ.collab.cta, lang)}
                  </MagneticButton>
                  <p className="text-xs text-muted">{pick(SJ.collab.note, lang)}</p>
                </div>
              </div>
            </div>
          </Reveal>
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
