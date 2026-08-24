'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react';
import { Users, Sparkles, Play, Pause, Film, Eye, Images, Heart, MessageCircle, Send, MoreHorizontal, Music2, Instagram, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang, pick } from '@/lib/i18n';
import { team, compare, arsenal, influencers, reelAccount, instagram } from '@/lib/contentAssets';
import Reveal from '@/components/Reveal';
import { SectionKicker } from '@/components/Bits';

const t = (lang, en, id) => (lang === 'id' ? id : en);
const asset = (p) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${p}`;

export default function TeamContent() {
  const { lang } = useLang();

  return (
    <section className="bg-applegray">
      <div className="shell py-24 sm:py-32">
        {/* BIG OPENER */}
        <Reveal>
          <span className="eyebrow text-applesub">{t(lang, 'Behind the growth', 'Di balik pertumbuhan')}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-5 max-w-4xl text-5xl text-appleink sm:text-6xl md:text-7xl">
            {t(lang, 'Behind every number: a team and a content engine.', 'Di balik tiap angka: tim dan mesin konten.')}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-applesub sm:text-xl">
            {t(
              lang,
              'The growth above was not luck. It was produced by a deliberately small team and a content system rebuilt around AI.',
              'Pertumbuhan di atas bukan keberuntungan. Semua diproduksi oleh tim yang sengaja kecil dan sistem konten yang dibangun ulang di sekitar AI.'
            )}
          </p>
        </Reveal>

        {/* TEAM */}
        <div className="mt-20">
          <Reveal>
            <SectionKicker icon={Users} eyebrow={t(lang, 'The team', 'Tim')} />
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="display mt-6 max-w-3xl text-3xl text-appleink sm:text-4xl">
              {t(lang, 'Lean team, amplified by AI.', 'Tim ramping, diperkuat AI.')}
            </h3>
          </Reveal>
        </div>
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
                <VideoCard slug={c.slug} badge={pick(c.badge, lang)} caption={pick(c.name, lang)} />
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
                <VideoCard slug={c.slug} badge={pick(c.viewsLabel, lang)} kol handle={c.name} />
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

        {/* INSTAGRAM INSIGHTS */}
        <Reveal>
          <div className="mt-16 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/[0.08] bg-black/[0.03] text-appleink">
              <Instagram size={18} strokeWidth={1.6} />
            </span>
            <span className="eyebrow text-applesub">{t(lang, 'Instagram reach', 'Jangkauan Instagram')}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-applesub">
            {t(
              lang,
              'The aggregate of that content, straight from Instagram Insights: over a million views in a single month, mostly from Reels, mostly from non-followers.',
              'Akumulasi dari konten itu, langsung dari Instagram Insights: sejuta lebih views dalam sebulan, mayoritas dari Reels, mayoritas dari non-follower.'
            )}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <InstagramInsights lang={lang} />
        </Reveal>
      </div>
    </section>
  );
}

/* ── Instagram Insights card (IG styled) ── */
function InstagramInsights({ lang }) {
  const IG = '#E1306C';
  const s = instagram.series;
  const max = Math.max(...s);
  const pts = s.map((v, i) => `${(i / (s.length - 1)) * 100},${40 - (v / max) * 34}`).join(' ');
  const area = `0,40 ${pts} 100,40`;

  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] border border-appleline/60 bg-white shadow-sm">
      {/* header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl text-white" style={{ background: 'linear-gradient(135deg,#F58529,#DD2A7B,#8134AF)' }}>
            <Instagram size={16} />
          </span>
          <div>
            <p className="text-sm font-bold text-slate-800">Instagram Insights</p>
            <p className="text-[11px] text-slate-400">{pick(instagram.period, lang)}</p>
          </div>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-500">@{reelAccount.collab}</span>
      </div>

      <div className="grid gap-6 p-6 lg:grid-cols-2">
        {/* left: overview stats + chart */}
        <div>
          <div className="grid grid-cols-3 gap-3">
            {instagram.overview.map((o, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 p-3.5">
                <p className="text-[11px] font-medium text-slate-500">{pick(o.k, lang)}</p>
                <p className={`mt-1 text-xl font-bold ${o.up ? 'text-emerald-600' : 'text-slate-900'}`}>{o.v}</p>
                {o.sub && <p className="text-[10px] text-slate-400">{o.sub}</p>}
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-slate-500">
            <b className="text-slate-700">{instagram.reach.followers}%</b> {t(lang, 'followers', 'follower')} ·{' '}
            <b className="text-slate-700">{instagram.reach.nonFollowers}%</b> {t(lang, 'non-followers', 'non-follower')}
          </p>
          {/* views over time */}
          <div className="mt-4 rounded-2xl border border-slate-100 p-4">
            <p className="mb-2 text-xs font-semibold text-slate-500">{t(lang, 'Views over time', 'Views dari waktu ke waktu')}</p>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-24 w-full">
              <defs>
                <linearGradient id="igfill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={IG} stopOpacity="0.28" />
                  <stop offset="100%" stopColor={IG} stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points={area} fill="url(#igfill)" />
              <polyline points={pts} fill="none" stroke={IG} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="mt-1 flex justify-between text-[9px] text-slate-400">
              <span>Jun 1</span><span>Jun 15</span><span>Jun 30</span>
            </div>
          </div>
        </div>

        {/* right: by type + followers */}
        <div className="flex flex-col justify-between gap-5">
          <div className="rounded-2xl border border-slate-100 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-500">{t(lang, 'Views by content type', 'Views per tipe konten')}</p>
              <p className="text-[11px] text-slate-400">{instagram.byType.viewers} {t(lang, 'viewers', 'penonton')}</p>
            </div>
            {[instagram.byType.reels, instagram.byType.posts].map((row) => (
              <div key={row.label} className="mb-2.5 last:mb-0">
                <div className="mb-1 flex items-center justify-between text-[11px]">
                  <span className="font-medium text-slate-600">{row.label}</span>
                  <span className="font-bold text-slate-800">{row.value}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: 'linear-gradient(90deg,#F58529,#DD2A7B,#8134AF)' }} />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-2xl p-5 text-white" style={{ background: 'linear-gradient(135deg,#DD2A7B,#8134AF)' }}>
            <div>
              <p className="text-[11px] text-white/75">{t(lang, 'Followers', 'Follower')}</p>
              <p className="text-3xl font-bold">{instagram.followers.total}</p>
              <p className="text-[11px] text-white/80">{instagram.followers.growth} {pick(instagram.followers.since, lang)}</p>
            </div>
            <TrendingUp size={40} className="text-white/40" />
          </div>
        </div>
      </div>
    </div>
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

/* ── Instagram Reels styled video card (click to play/pause) ── */
function VideoCard({ slug, badge, handle = reelAccount.handle, collab = reelAccount.collab, caption, kol }) {
  const [play, setPlay] = useState(false);
  const [started, setStarted] = useState(false);
  const vref = useRef(null);
  const src = asset(`/media/${slug}.mp4`);
  const poster = asset(`/media/${slug}.jpg`);

  const toggle = () => {
    const v = vref.current;
    if (!started) {
      setStarted(true);
      setPlay(true);
      return;
    }
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlay(true);
    } else {
      v.pause();
      setPlay(false);
    }
  };

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[1.75rem] bg-black shadow-lg ring-1 ring-black/10">
      {/* media */}
      {started ? (
        <video
          ref={vref}
          src={src}
          poster={poster}
          autoPlay
          playsInline
          loop
          onPlay={() => setPlay(true)}
          onPause={() => setPlay(false)}
          onClick={toggle}
          className="h-full w-full object-cover"
        />
      ) : (
        <img src={poster} alt="" className="h-full w-full object-cover" loading="lazy" onClick={toggle} />
      )}

      {/* scrims */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      {/* top bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-3.5 py-3 text-white">
        <span className="text-[13px] font-semibold">Reels</span>
        <Instagram size={17} />
      </div>

      {/* metric badge */}
      {badge && (
        <span className="pointer-events-none absolute right-3 top-11 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
          {badge}
        </span>
      )}

      {/* play/pause button */}
      <button onClick={toggle} className="group absolute inset-0 flex items-center justify-center" aria-label="Play or pause">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-black shadow-lg transition-all duration-300 ${
            play ? 'scale-90 opacity-0 group-hover:opacity-100' : 'opacity-100 group-hover:scale-110'
          }`}
        >
          {play ? <Pause size={22} className="fill-black" /> : <Play size={22} className="ml-0.5 fill-black" />}
        </span>
      </button>

      {/* right action rail (no counts, heart shown as already liked) */}
      <div className="pointer-events-none absolute bottom-20 right-2 flex flex-col items-center gap-4 text-white">
        <Heart size={23} className="drop-shadow" style={{ fill: '#FF3040', color: '#FF3040' }} />
        <MessageCircle size={23} className="drop-shadow" />
        <Send size={22} className="drop-shadow" />
        <MoreHorizontal size={22} className="drop-shadow" />
        <span className="mt-0.5 flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg ring-1 ring-white/50">
          {kol ? (
            <span className="flex h-full w-full items-center justify-center bg-white/20">
              <Music2 size={12} />
            </span>
          ) : (
            <img src={asset('/media/avatar-kafanku.jpg')} alt="" className="h-full w-full object-cover" loading="lazy" />
          )}
        </span>
      </div>

      {/* bottom account + caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 pb-3.5 pl-3 pr-11 text-white">
        <div className="flex min-w-0 items-center gap-1.5">
          {kol ? <Avatar type="kol" size={24} /> : <CollabAvatars size={24} />}
          <span className="min-w-0 truncate text-[9.5px] font-semibold leading-tight">
            {handle}
            {collab && !kol && <span className="font-normal text-white/85"> and {collab}</span>}
          </span>
        </div>
        {caption && <p className="mt-1.5 truncate text-[10.5px] text-white/80">{caption}</p>}
      </div>
    </div>
  );
}

/* Profile avatars (real brand logos, square 1:1 masked into a circle) */
function Avatar({ type, size = 26, className = '' }) {
  const box = { width: size, height: size };
  if (type === 'pkk' || type === 'kafanku') {
    return (
      <span className={`shrink-0 overflow-hidden rounded-full bg-white ${className}`} style={box}>
        <img src={asset(`/media/avatar-${type}.jpg`)} alt="" className="h-full w-full object-cover" loading="lazy" />
      </span>
    );
  }
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full bg-white/25 ${className}`} style={box}>
      <Users size={Math.round(size * 0.5)} className="text-white" />
    </span>
  );
}

/* The overlapping "collab" avatar pair used on brand posts */
function CollabAvatars({ size = 26 }) {
  return (
    <span className="flex shrink-0 items-center">
      <Avatar type="pkk" size={size} className="ring-2 ring-black/60" />
      <Avatar type="kafanku" size={size} className="-ml-2.5 ring-2 ring-black/60" />
    </span>
  );
}

/* ── Instagram post carousel: swipe on mobile, arrows/drag on desktop ── */
function CarouselCard({ slug, count }) {
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    setIdx(Math.max(0, Math.min(count - 1, Math.round(el.scrollLeft / el.clientWidth))));
  };

  const goTo = (i) => {
    const el = ref.current;
    if (!el) return;
    const next = Math.max(0, Math.min(count - 1, i));
    el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' });
    setIdx(next);
  };

  // Pointer drag so a desktop mouse can swipe too
  const onPointerDown = (e) => {
    const el = ref.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const onPointerUp = () => {
    const el = ref.current;
    if (!el || !drag.current.down) return;
    drag.current.down = false;
    goTo(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl bg-black shadow-md ring-1 ring-black/5">
      {/* IG post header */}
      <div className="flex items-center gap-2 px-3 py-2.5">
        <CollabAvatars size={26} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold leading-tight text-white">
            {reelAccount.handle}
            <span className="font-normal text-white/85"> and {reelAccount.collab}</span>
          </p>
          <p className="flex items-center gap-1 truncate text-[9.5px] leading-tight text-white/70">
            <Music2 size={9} /> {reelAccount.audio}
          </p>
        </div>
        <MoreHorizontal size={16} className="shrink-0 text-white/80" />
      </div>

      {/* slides */}
      <div className="relative aspect-[4/5] w-full">
        <div
          ref={ref}
          onScroll={onScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="no-scrollbar flex h-full w-full cursor-grab snap-x snap-mandatory overflow-x-auto overscroll-x-contain active:cursor-grabbing"
        >
          {Array.from({ length: count }).map((_, i) => (
            <img
              key={i}
              src={asset(`/media/${slug}-${i + 1}.jpg`)}
              alt=""
              loading="lazy"
              draggable={false}
              className="h-full w-full flex-none snap-center select-none object-cover"
            />
          ))}
        </div>

        {/* counter */}
        <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
          <Images size={11} /> {idx + 1}/{count}
        </span>

        {/* desktop arrows */}
        {idx > 0 && (
          <button
            onClick={() => goTo(idx - 1)}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-black shadow transition hover:bg-white sm:flex"
          >
            <ChevronLeft size={17} />
          </button>
        )}
        {idx < count - 1 && (
          <button
            onClick={() => goTo(idx + 1)}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-black shadow transition hover:bg-white sm:flex"
          >
            <ChevronRight size={17} />
          </button>
        )}
      </div>

      {/* IG action bar */}
      <div className="flex items-center gap-3.5 px-3 py-2.5 text-white">
        <Heart size={19} style={{ fill: '#FF3040', color: '#FF3040' }} />
        <MessageCircle size={19} />
        <Send size={18} />
        <div className="flex flex-1 justify-center gap-1">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-1.5 bg-white' : 'w-1.5 bg-white/35'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
