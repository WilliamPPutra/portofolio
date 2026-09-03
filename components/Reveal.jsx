'use client';

import { motion } from 'framer-motion';

/**
 * Scroll-triggered fade + rise. Apple-style: subtle, once, eased.
 *
 * Pass `immediate` for anything visible on first paint. That variant animates
 * with CSS instead of Framer, because Framer cannot start until React has
 * hydrated, and until then the element sits at opacity 0. On the hero that read
 * as a blank, sluggish page while the bundle downloaded.
 *
 * Everything below the fold keeps the Framer path: by the time the reader
 * scrolls to it the bundle has long since arrived, so there is nothing to gain.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as = 'div',
  amount = 0.35,
  immediate = false,
}) {
  if (immediate) {
    const Tag = as;
    return (
      <Tag
        className={`reveal-now ${className}`}
        style={{ '--reveal-delay': `${delay}s`, '--reveal-y': `${y}px` }}
      >
        {children}
      </Tag>
    );
  }

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
