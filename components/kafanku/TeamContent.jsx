'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react';
import { Users, Sparkles, Play, Film, Eye, Images } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { team, compare, arsenal, influencers } from '@/lib/contentAssets';
import Reveal from '@/components/Reveal';
import { SectionKicker } from '@/components/Bits';

const t = (lang, en, id) => (lang === 'id' ? id : en);
const asset = (p) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${p}`;

export default function TeamContent() {
  const { lang } = useLang();

  return (
    <section className="bg-applegray">
      <div className="shell py-20 sm:py-28">
        {/* TEAM */}
        <Reveal>
          <SectionKicker icon={Users} eyebrow={t(lang, 'The team', 'Tim')} />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-7 max-w-3xl text-4xl text-appleink sm:text-5xl md:text-6xl">
            {t(lang, 'Lean team, amplified by AI.', 'Tim ramping, diperkuat AI.')}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-applesub">{pick(team.narrative, lang)}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {team.stats.map((s, i) => (
              <div key={i} className="rounded-3xl border border-appleline/60 bg-white p-6">
                <p className="display text-4xl text-appleink">{s.v}</p>
                <p className="mt-2 text-sm text-applesub">{pick(s.k, lang)}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* BEFORE vs AFTER */}
        <Reveal>
          <div className="mt-16 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/[0.08] bg-black/[0.03] text-appleink">
              <Sparkles size={18} strokeWidth={1.6} />
            </span>
            <span className="eyebrow text-applesub">{t(lang, 'Before vs after I led', 'Sebelum vs sesudah dipimpin')}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-applesub">
            {t(
              lang,
              'Same brand, different engine. After filtering and helping recruit the team, the content jumped from conventional to AI-native.',
              'Brand yang sama, mesin yang beda. Setelah menyaring dan ikut merekrut tim, kontennya lompat dari konvensional ke AI-native.'
            )}
          </p>
        </Reveal>

        <div className="mt-10 space-y-10">
          {compare.map((row, i) => (
            <Reveal key={i} delay={0.05}>
              <div>
                <p className="mb-4 text-sm font-semibold text-appleink">{pick(row.label, lang)}</p>
                <div className="grid gap-6 md:grid-cols-2">
                  <ComparePane item={row.before} lang={lang} />
                  <ComparePane item={row.after} lang={lang} highlight />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CONTENT ARSENAL */}
        <Reveal>
          <div className="mt-16 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/[0.08] bg-black/[0.03] text-appleink">
              <Film size={18} strokeWidth={1.6} />
            </span>
            <span className="eyebrow text-applesub">{t(lang, 'The content arsenal', 'Gudang konten')}</span>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {arsenal.map((c, i) => (
            <Reveal key={i} delay={0.06 * i}>
              <figure>
                <VideoCard slug={c.slug} badge={pick(c.badge, lang)} />
                <figcaption className="mt-3">
                  <p className="text-sm font-semibold text-appleink">{pick(c.name, lang)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-applesub">{pick(c.d, lang)}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* INFLUENCERS */}
        <Reveal>
          <div className="mt-16 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/[0.08] bg-black/[0.03] text-appleink">
              <Eye size={18} strokeWidth={1.6} />
            </span>
            <span className="eyebrow text-applesub">{t(lang, 'Influencers & KOLs', 'Influencer & KOL')}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-applesub">{pick(influencers.narrative, lang)}</p>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {influencers.items.map((c, i) => (
            <Reveal key={i} delay={0.06 * i}>
              <figure>
                <VideoCard slug={c.slug} badge={pick(c.viewsLabel, lang)} views={c.views} />
                <figcaption className="mt-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-appleink">{c.name}</p>
                  <p className="flex items-center gap-1 text-sm font-bold text-appleink">
                    <Eye size={14} className="text-applesub" /> {pick(c.viewsLabel, lang)}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── one side of a before/after pair ── */
function ComparePane({ item, lang, highlight }) {
  return (
    <div className={`rounded-[1.75rem] border p-4 ${highlight ? 'border-appleink/20 bg-white shadow-sm' : 'border-appleline/60 bg-white/60'}`}>
      <div className="mb-3 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
            highlight ? 'bg-appleink text-white' : 'bg-black/[0.06] text-applesub'
          }`}
        >
          {pick(item.tag, lang)}
        </span>
      </div>
      {item.kind === 'carousel' ? (
        <CarouselCard slug={item.slug} count={item.count} />
      ) : (
        <VideoCard slug={item.slug} />
      )}
      <p className="mt-3 text-sm leading-relaxed text-applesub">{pick(item.d, lang)}</p>
    </div>
  );
}

/* ── vertical (9:16) video card, click to play (lazy) ── */
function VideoCard({ slug, badge }) {
  const [play, setPlay] = useState(false);
  const src = asset(`/media/${slug}.mp4`);
  const poster = asset(`/media/${slug}.jpg`);
  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-2xl bg-black shadow-md ring-1 ring-black/5">
      {play ? (
        <video src={src} poster={poster} autoPlay controls playsInline className="h-full w-full object-cover" />
      ) : (
        <button onClick={() => setPlay(true)} className="group absolute inset-0" aria-label="Play video">
          <img src={poster} alt="" className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play size={22} className="ml-0.5 fill-black" />
            </span>
          </span>
          {badge && (
            <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
              {badge}
            </span>
          )}
        </button>
      )}
    </div>
  );
}

/* ── swipeable image carousel (social post style) ── */
function CarouselCard({ slug, count }) {
  const [idx, setIdx] = useState(1);
  const ref = useRef(null);
  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const per = el.scrollWidth / count;
    setIdx(Math.min(count, Math.round(el.scrollLeft / per) + 1));
  };
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-2xl bg-black shadow-md ring-1 ring-black/5">
      <div ref={ref} onScroll={onScroll} className="no-scrollbar flex h-full snap-x snap-mandatory overflow-x-auto">
        {Array.from({ length: count }).map((_, i) => (
          <img
            key={i}
            src={asset(`/media/${slug}-${i + 1}.jpg`)}
            alt=""
            loading="lazy"
            className="h-full w-full flex-none snap-center object-cover"
          />
        ))}
      </div>
      <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
        <Images size={11} /> {idx}/{count}
      </span>
      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all ${i + 1 === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
}
