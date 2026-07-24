'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { useLang } from '@/lib/i18n';

/**
 * Full-screen overlay that hosts a playable demo.
 * All demo state lives in the child component, so closing (unmount)
 * throws the data away — nothing is persisted.
 *
 * Renders conditionally (no AnimatePresence) so closing unmounts the child
 * instantly and reliably — the enter animation still plays via `initial/animate`.
 */
export default function DemoModal({ open, onClose, title, children }) {
  const { lang } = useLang();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex flex-col bg-black/60 backdrop-blur-sm"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
          <ShieldCheck size={13} className="text-emerald-400" />
          {lang === 'en' ? 'Live demo · nothing is saved' : 'Demo langsung · data tidak disimpan'}
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-medium text-white/80 sm:block">{title}</span>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Stage */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-0 flex-1 items-stretch justify-center px-3 pb-4 sm:px-6 sm:pb-6"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
