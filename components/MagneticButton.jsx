'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Magnetic hover button, the cursor gently pulls the button and its label.
 * Renders as a Next <Link> when `href` is given, otherwise a <button>.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'solid', // 'solid' | 'ghost' | 'outline'
  className = '',
  strength = 0.4,
  ...rest
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * strength, y: y * strength });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const variants = {
    // Light-context (default) buttons
    solid: 'bg-appleink text-white hover:opacity-85',
    blue: 'bg-appleblue text-white hover:opacity-85',
    ghost: 'bg-black/[0.04] text-appleink hover:bg-black/[0.07] border border-black/5',
    outline: 'bg-transparent text-appleink border border-black/15 hover:border-black/40',
    // Dark-tile buttons
    onDark: 'bg-white text-appleink hover:opacity-90',
    ghostDark: 'bg-white/[0.06] text-chalk hover:bg-white/[0.12] border border-white/10',
  };

  const inner = (
    <motion.span
      className="relative z-10 block"
      animate={{ x: pos.x * 0.35, y: pos.y * 0.35 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.3 }}
    >
      {children}
    </motion.span>
  );

  const shared = `group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 will-change-transform ${variants[variant]} ${className}`;

  const motionProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    animate: { x: pos.x, y: pos.y },
    transition: { type: 'spring', stiffness: 200, damping: 15, mass: 0.3 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block will-change-transform">
        <Link href={href} className={shared} onClick={onClick} {...rest}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} className={shared} onClick={onClick} {...rest}>
      {inner}
    </motion.button>
  );
}
