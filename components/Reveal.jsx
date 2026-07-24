'use client';

import { motion } from 'framer-motion';

/**
 * Scroll-triggered fade + rise. Apple-style: subtle, once, eased.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
  amount = 0.35,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
