'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, RotateCcw, Sparkles, MessageCircle, BookOpen } from 'lucide-react';

/* Brand palette (from the real game's theme.js) */
const C = {
  navy950: '#10162B',
  navy900: '#1A2340',
  navy700: '#2B3A5B',
  gold: '#F4C22B',
  gold600: '#C9A227',
  cream: '#F6F2E8',
};

/* Real content (fiqih Syafi'i) from the game's steps.js / questions.js */
const RITES = [
  {
    phase: 'Memandikan',
    outro: 'Jenazah telah suci. Kini saatnya dikafani.',
    steps: [
      { judul: 'Niat & Tutup Aurat', teks: 'Niatkan memandikan karena Allah. Aurat tetap tertutup kain sepanjang proses.', dalil: 'Fardhu kifayah' },
      { judul: 'Bersihkan Kotoran', teks: 'Tekan perut perlahan agar kotoran keluar, lalu bersihkan dengan tangan beralas kain.', dalil: '' },
      { judul: 'Wudhukan Jenazah', teks: 'Wudhukan seperti wudhu sholat: wajah, kedua tangan, usap kepala, lalu kaki.', dalil: 'HR. Bukhari & Muslim' },
      { judul: 'Basuh Tubuh, Dahulukan Kanan', teks: 'Basuh dengan bilangan ganjil (3, 5, 7), dahulukan bagian kanan, pakai air campur daun bidara.', dalil: 'HR. Bukhari & Muslim' },
      { judul: 'Basuhan Akhir Kapur Barus', teks: 'Jadikan basuhan yang terakhir dicampur kapur barus.', dalil: 'HR. Bukhari & Muslim' },
      { judul: 'Keringkan Tubuh', teks: 'Keringkan dengan kain bersih sebelum dikafani.', dalil: '' },
    ],
  },
  {
    phase: 'Mengkafani',
    outro: 'Jenazah telah terbungkus rapi. Saatnya diantar ke tempat peristirahatan.',
    steps: [
      { judul: 'Bentangkan 3 Lembar Kain', teks: 'Bentangkan tiga lembar kain putih bertumpuk, beri wangi pada tiap lembar.', dalil: 'HR. Muslim' },
      { judul: 'Taburi Kapur Barus', teks: 'Taburkan kapur barus atau cendana di atas kain.', dalil: '' },
      { judul: 'Baringkan Jenazah', teks: 'Baringkan dengan hati-hati di atas kain, tetap tertutup, lalu rapikan posisi.', dalil: '' },
      { judul: 'Tutup dengan Kapas Beri Wangi', teks: 'Tutup bagian tertentu dengan kapas yang telah diberi wangi.', dalil: '' },
      { judul: 'Lipat Kain, Kanan lalu Kiri', teks: 'Lipat sisi kanan ke kiri, lalu lembar berikutnya, hingga terbungkus rapi.', dalil: '' },
      { judul: 'Ikat Kain Kafan', teks: 'Ikat di beberapa titik ganjil (3 sampai 5). Simpul di sisi kiri agar mudah dibuka di liang lahat.', dalil: '' },
    ],
  },
  {
    phase: 'Penguburan',
    outro: 'Jasad telah dikembalikan ke tanah. Kini ia sendiri, menanti pertanyaan.',
    steps: [
      { judul: 'Turunkan ke Liang Lahat', teks: 'Turunkan perlahan dari arah kaki sambil mengucap: Bismillah wa ala millati Rasulillah.', dalil: 'HR. Abu Dawud & Tirmidzi' },
      { judul: 'Hadapkan ke Kiblat', teks: 'Baringkan miring ke kanan, wajah menghadap kiblat, pipi kanan menyentuh tanah.', dalil: '' },
      { judul: 'Buka Ikatan Kafan', teks: 'Buka simpul tali, sandarkan tubuh dengan gumpalan tanah.', dalil: '' },
      { judul: 'Timbun & Doakan', teks: 'Tutup dengan papan penyangga, timbun tanah, lalu doakan dan talqinkan.', dalil: 'HR. Abu Dawud' },
    ],
  },
];

const QUESTIONS = [
  { arab: 'مَنْ رَبُّكَ؟', translit: 'Man Rabbuka?', id: 'Siapakah Tuhanmu?', correct: 'Rabbiyallah, Tuhanku Allah', wrong: ['Aku tidak tahu', 'Diriku sendiri'], respon: 'Cahaya melapangkan tempatmu.' },
  { arab: 'مَا دِيْنُكَ؟', translit: 'Ma Dinuka?', id: 'Apakah agamamu?', correct: 'Diniyal Islam, agamaku Islam', wrong: ['Aku lupa', 'Mengikuti kebanyakan orang'], respon: 'Ketenangan menyelimutimu.' },
  { arab: 'مَنْ نَبِيُّكَ؟', translit: 'Man Nabiyyuka?', id: 'Siapakah nabimu?', correct: 'Nabiyyi Muhammad ﷺ', wrong: ['Aku tidak mengenalnya', 'Hanya mendengar namanya'], respon: 'Pintu ke arah surga terbuka, wanginya sampai kepadamu.' },
];

const MUHASABAH =
  'Yang menuntun lisan di alam kubur bukan hafalan sesaat, melainkan iman yang dirawat tiap hari. Semoga kita termasuk yang husnul khatimah.';

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default function KepulangankuGame() {
  const [stage, setStage] = useState('title'); // title | rite | kubur | end
  const [riteIdx, setRiteIdx] = useState(0);
  const [kuburScore, setKuburScore] = useState(0);

  const reset = () => {
    setStage('title');
    setRiteIdx(0);
    setKuburScore(0);
  };

  return (
    <div
      className="flex w-full max-w-md flex-col overflow-hidden rounded-[2rem] shadow-2xl"
      style={{ background: C.navy950, color: C.cream }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: `1px solid ${C.navy700}` }}>
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg text-[13px] font-black" style={{ background: C.gold, color: C.navy950 }}>
            K
          </span>
          <div className="leading-tight">
            <p className="text-[13px] font-bold" style={{ color: C.cream }}>Amanah Terakhir</p>
            <p className="text-[9px]" style={{ color: C.gold }}>Kepulanganku · Kafanku</p>
          </div>
        </div>
        <span className="text-[10px]" style={{ color: '#7C89A8' }}>demo edukasi</span>
      </div>

      {/* Body, plain conditional render (each stage animates itself in) */}
      <div className="min-h-[440px] flex-1 overflow-y-auto p-5">
        {stage === 'title' && <Title onStart={() => setStage('rite')} />}
        {stage === 'rite' && (
          <Rite
            key={`rite-${riteIdx}`}
            rite={RITES[riteIdx]}
            index={riteIdx}
            total={RITES.length}
            onDone={() => {
              if (riteIdx < RITES.length - 1) setRiteIdx((i) => i + 1);
              else setStage('kubur');
            }}
          />
        )}
        {stage === 'kubur' && (
          <Kubur
            onDone={(score) => {
              setKuburScore(score);
              setStage('end');
            }}
          />
        )}
        {stage === 'end' && <End score={kuburScore} onReset={reset} />}
      </div>
    </div>
  );
}

/* ── Title ── */
function Title({ onStart }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-full flex-col items-center justify-center text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black" style={{ background: C.gold, color: C.navy950 }}>
        ﷽
      </div>
      <h3 className="text-2xl font-bold" style={{ color: C.cream }}>Perjalanan Pemuliaan Jenazah</h3>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: '#AEB8D0' }}>
        Sebuah pengalaman naratif tentang tata cara <b style={{ color: C.gold }}>fardhu kifayah</b>, memandikan, mengkafani,
        dan menguburkan, hingga pertanyaan di alam kubur. Selesaikan tiap tahap sesuai urutannya.
      </p>
      <button
        onClick={onStart}
        className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold transition-transform active:scale-95"
        style={{ background: C.gold, color: C.navy950 }}
      >
        Mulai Perjalanan <ChevronRight size={16} />
      </button>
      <p className="mt-4 text-[10px]" style={{ color: '#6B7690' }}>Konten fiqih ringkas · mazhab Syafi'i</p>
    </motion.div>
  );
}

/* ── Rite: tap steps in the correct order ── */
function Rite({ rite, index, total, onDone }) {
  const shuffled = useMemo(() => shuffle(rite.steps), [rite]);
  const [done, setDone] = useState([]); // completed step objects, in order
  const [toast, setToast] = useState(null);
  const [shakeKey, setShakeKey] = useState(0);

  const nextExpected = rite.steps[done.length];
  const finished = done.length === rite.steps.length;
  const remaining = shuffled.filter((s) => !done.includes(s));

  const tap = (s) => {
    if (s === nextExpected) {
      setDone((d) => [...d, s]);
      setToast(null);
    } else {
      setToast('Belum urutannya. Perhatikan langkah berikutnya.');
      setShakeKey((k) => k + 1);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      {/* Phase header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-widest" style={{ color: C.gold }}>Tahap {index + 1} / {total}</p>
          <h3 className="text-xl font-bold" style={{ color: C.cream }}>{rite.phase}</h3>
        </div>
        <div className="flex gap-1">
          {rite.steps.map((_, i) => (
            <span key={i} className="h-1.5 w-4 rounded-full" style={{ background: i < done.length ? C.gold : C.navy700 }} />
          ))}
        </div>
      </div>

      {!finished ? (
        <>
          <p className="mb-3 text-xs" style={{ color: '#AEB8D0' }}>
            Ketuk langkah yang benar untuk <b style={{ color: C.cream }}>langkah ke-{done.length + 1}</b>.
          </p>
          <motion.div key={shakeKey} animate={toast ? { x: [0, -6, 6, -4, 0] } : {}} transition={{ duration: 0.35 }} className="grid gap-2">
            {remaining.map((s) => (
              <button
                key={s.judul}
                onClick={() => tap(s)}
                className="rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors"
                style={{ background: C.navy900, color: C.cream, border: `1px solid ${C.navy700}` }}
              >
                {s.judul}
              </button>
            ))}
          </motion.div>
          {toast && <p className="mt-3 text-center text-xs" style={{ color: '#F6A6A6' }}>{toast}</p>}
        </>
      ) : null}

      {/* Completed list (revealed knowledge) */}
      {done.length > 0 && (
        <div className="mt-4 space-y-2">
          {done.map((s, i) => (
            <motion.div
              key={s.judul}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl p-3"
              style={{ background: C.navy900, border: `1px solid ${C.gold600}` }}
            >
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ background: C.gold, color: C.navy950 }}>
                  <Check size={12} />
                </span>
                <span className="text-sm font-semibold" style={{ color: C.cream }}>{i + 1}. {s.judul}</span>
              </div>
              <p className="mt-1.5 pl-7 text-xs leading-relaxed" style={{ color: '#AEB8D0' }}>{s.teks}</p>
              {s.dalil && (
                <p className="mt-1 flex items-center gap-1 pl-7 text-[10px]" style={{ color: C.gold }}>
                  <BookOpen size={10} /> {s.dalil}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {finished && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5">
          <p className="rounded-2xl p-4 text-center text-sm italic" style={{ background: C.navy700, color: C.cream }}>
            {rite.outro}
          </p>
          <button
            onClick={onDone}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-transform active:scale-95"
            style={{ background: C.gold, color: C.navy950 }}
          >
            Lanjut <ChevronRight size={16} />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ── Alam Kubur: three questions ── */
function Kubur({ onDone }) {
  const [qi, setQi] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);
  const [firstTry, setFirstTry] = useState(true);
  const q = QUESTIONS[qi];
  const options = useMemo(() => shuffle([q.correct, ...q.wrong]), [qi]); // eslint-disable-line

  const solved = picked === q.correct;

  const choose = (opt) => {
    if (solved) return;
    setPicked(opt);
    if (opt === q.correct) {
      if (firstTry) setScore((s) => s + 1);
    } else {
      setFirstTry(false);
    }
  };

  const next = () => {
    if (qi < QUESTIONS.length - 1) {
      setQi((i) => i + 1);
      setPicked(null);
      setFirstTry(true);
    } else {
      onDone(score);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
      <p className="text-[11px] uppercase tracking-widest" style={{ color: C.gold }}>Alam Kubur · {qi + 1}/3</p>
      <p className="mt-6 text-4xl leading-relaxed" style={{ color: C.cream, fontFamily: 'serif' }}>{q.arab}</p>
      <p className="mt-2 text-xs italic" style={{ color: '#8C97B4' }}>{q.translit}</p>
      <p className="mt-1 text-sm font-semibold" style={{ color: C.cream }}>{q.id}</p>

      <div className="mt-6 grid gap-2 text-left">
        {options.map((opt) => {
          const isCorrect = opt === q.correct;
          const isPicked = picked === opt;
          let bg = C.navy900, border = C.navy700, col = C.cream;
          if (picked) {
            if (isCorrect) { bg = 'rgba(52,211,153,0.12)'; border = '#34D399'; }
            else if (isPicked) { bg = 'rgba(246,166,166,0.10)'; border = '#F6A6A6'; }
          }
          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              disabled={solved}
              className="rounded-2xl px-4 py-3 text-sm font-medium transition-colors"
              style={{ background: bg, color: col, border: `1px solid ${border}` }}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {picked && !solved && <p className="mt-3 text-xs" style={{ color: '#F6A6A6' }}>Belum tepat. Renungkan kembali, lalu pilih lagi.</p>}

      {solved && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
          <p className="rounded-2xl p-3 text-sm" style={{ background: 'rgba(52,211,153,0.10)', color: '#A7F3D0', border: '1px solid #34D399' }}>
            {q.respon}
          </p>
          <button
            onClick={next}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-transform active:scale-95"
            style={{ background: C.gold, color: C.navy950 }}
          >
            {qi < QUESTIONS.length - 1 ? 'Pertanyaan berikutnya' : 'Selesai'} <ChevronRight size={16} />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ── Penutup ── */
function End({ score, onReset }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-full flex-col items-center justify-center text-center">
      <Sparkles size={34} style={{ color: C.gold }} />
      <h3 className="mt-4 text-2xl font-bold" style={{ color: C.cream }}>Perjalanan Selesai</h3>
      <p className="mt-2 text-sm" style={{ color: C.gold }}>{score} / 3 dijawab tepat pada percobaan pertama</p>
      <p className="mt-4 text-sm leading-relaxed" style={{ color: '#AEB8D0' }}>{MUHASABAH}</p>

      <a
        href="https://wa.me/6282120298641"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform active:scale-95"
        style={{ background: C.gold, color: C.navy950 }}
      >
        <MessageCircle size={16} /> Siapkan kain kafan terbaik
      </a>
      <button
        onClick={onReset}
        className="mt-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium"
        style={{ color: C.cream, border: `1px solid ${C.navy700}` }}
      >
        <RotateCcw size={13} /> Main lagi
      </button>
      <p className="mt-5 text-[10px]" style={{ color: '#6B7690' }}>Ini demo edukasi. Tidak ada data yang disimpan.</p>
    </motion.div>
  );
}
