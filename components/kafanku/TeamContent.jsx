'use client';

/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react';
import { Users, Sparkles, Play, Pause, Film, Eye, Images, Heart, MessageCircle, Send, MoreHorizontal, Music2, Instagram, TrendingUp } from 'lucide-react';
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

      {/* right action rail */}
      <div className="pointer-events-none absolute bottom-24 right-2.5 flex flex-col items-center gap-4 text-white">
        <RailIcon icon={Heart} label="12,4k" />
        <RailIcon icon={MessageCircle} label="318" />
        <RailIcon icon={Send} />
        <RailIcon icon={MoreHorizontal} />
        <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 ring-1 ring-white/40">
          <Music2 size={13} />
        </span>
      </div>

      {/* bottom account + caption */}
      <div className="absolute inset-x-0 bottom-0 px-3.5 pb-3.5 pr-14 text-white">
        <div className="flex items-center gap-2">
          {kol ? (
            <Avatar type="kol" />
          ) : (
            <span className="flex items-center">
              <Avatar type="pkk" />
              {collab && <Avatar type="kafanku" className="-ml-2.5 ring-2 ring-black" />}
            </span>
          )}
          <span className="text-[12.5px] font-semibold">{handle}</span>
          {collab && !kol && <span className="text-[11px] text-white/70">& {collab}</span>}
          <span className="rounded-md border border-white/50 px-2 py-0.5 text-[10px] font-semibold">Follow</span>
        </div>
        {caption && <p className="mt-2 line-clamp-1 text-[11px] text-white/85">{caption}</p>}
      </div>
    </div>
  );
}

function RailIcon({ icon: Icon, label }) {
  return (
    <span className="flex flex-col items-center gap-0.5">
      <Icon size={22} className="drop-shadow" />
      {label && <span className="text-[10px] font-medium">{label}</span>}
    </span>
  );
}

/* Profile avatars (placeholder monograms until the real logos are dropped in) */
function Avatar({ type, className = '' }) {
  if (type === 'pkk') {
    return (
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full ${className}`}
        style={{ background: '#242a56' }}
      >
        <span className="text-[9px] font-bold leading-none" style={{ color: '#F6F2E8', fontFamily: 'Georgia, serif' }}>
          PKK
        </span>
      </span>
    );
  }
  if (type === 'kafanku') {
    return (
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white ${className}`}>
        <span className="text-[13px] font-black leading-none" style={{ color: '#F4C22B' }}>
          K
        </span>
      </span>
    );
  }
  return (
    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/25 ${className}`}>
      <Users size={13} className="text-white" />
    </span>
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
