import { useEffect, useState } from 'react';
import { ShieldCheck, X, Info } from 'lucide-react';

export default function DemoBadge() {
    const [expanded, setExpanded] = useState(false);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        const onBlocked = () => {
            setToast('Pemesanan dinonaktifkan di demo.');
            const t = setTimeout(() => setToast(null), 2600);
            return () => clearTimeout(t);
        };
        window.addEventListener('demo:blocked', onBlocked);
        return () => window.removeEventListener('demo:blocked', onBlocked);
    }, []);

    return (
        <>
            {toast && (
                <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[9999] bg-gray-900 text-white text-xs px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 pointer-events-none">
                    <Info size={14} /> {toast}
                </div>
            )}

            <div className="fixed bottom-4 right-4 z-[9998] print:hidden">
                {expanded ? (
                    <div className="bg-gray-900 text-white rounded-2xl shadow-2xl px-4 py-3 max-w-sm ring-1 ring-gray-700">
                        <div className="flex items-start gap-2">
                            <ShieldCheck size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                            <div className="text-[11px] leading-relaxed">
                                <p className="font-semibold text-xs mb-1">Salinan Demo · Tidak Menerima Pesanan</p>
                                <p className="text-gray-300">
                                    Ini salinan statis dari toko yang saya bangun, disimpan di dalam portofolio agar
                                    tetap bisa dilihat kapan pun. Katalog dan harga adalah tangkapan nyata saat demo ini
                                    dibuat. Daftar wilayah, tarif ongkir, dan kode promo hanyalah contoh, dan tombol
                                    pemesanan sengaja dimatikan. Tidak ada koneksi ke server mana pun.
                                </p>
                            </div>
                            <button onClick={() => setExpanded(false)} className="text-gray-400 hover:text-white flex-shrink-0">
                                <X size={14} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => setExpanded(true)}
                        className="flex items-center gap-2 bg-gray-900 text-white text-[11px] font-semibold px-4 py-2 rounded-full shadow-xl ring-1 ring-gray-700 hover:bg-gray-800 transition"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Salinan Demo · Tidak Menerima Pesanan
                    </button>
                )}
            </div>
        </>
    );
}
