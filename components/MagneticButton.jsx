'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Anything that is not an in-app route gets a plain anchor, so mailto: and tel:
// are handed straight to the OS instead of going through the router.
const isExternal = (href) => typeof href === 'string' && /^(mailto:|tel:|https?:|#)/.test(href);

/**
 * Magnetic hover button, the cursor gently pulls the button and its label.
 * Renders as a Next <Link> when `href` is an in-app route, otherwise an <a>.
 *
 * The magnet only runs on devices with a real hovering pointer. On touch, a tap
 * synthesises a mousemove, which used to slide the button out from under the
 * finger and swallow the tap.
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
  // Starts false so the server render and touch devices both get a still button.
  const [magnetic, setMagnetic] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setMagnetic(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || !magnetic) return;
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

  const shared = `group relative inline-flex touch-manipulation items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 will-change-transform ${variants[variant]} ${className}`;

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
        {isExternal(href) ? (
          <a href={href} className={shared} onClick={onClick} {...rest}>
            {inner}
          </a>
        ) : (
          <Link href={href} className={shared} onClick={onClick} {...rest}>
            {inner}
          </Link>
        )}
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} className={shared} onClick={onClick} {...rest}>
      {inner}
    </motion.button>
  );
}
