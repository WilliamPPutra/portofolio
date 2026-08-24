'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Renders children at a fixed pixel width and scales the whole thing down to
 * fit the available space. The app screenshot keeps its desktop layout on every
 * device, it just gets smaller on a phone, which reads tidier than reflowing.
 */
export default function FixedScale({ width = 1080, children, className = '' }) {
  const outer = useRef(null);
  const inner = useRef(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      const o = outer.current;
      const i = inner.current;
      if (!o || !i) return;
      const s = Math.min(1, o.clientWidth / width);
      setScale(s);
      setHeight(i.offsetHeight * s);
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (outer.current) ro.observe(outer.current);
    if (inner.current) ro.observe(inner.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width]);

  return (
    <div ref={outer} className={`w-full ${className}`} style={{ height: height || undefined }}>
      <div
        ref={inner}
        style={{ width, transform: `scale(${scale})`, transformOrigin: 'top left' }}
      >
        {children}
      </div>
    </div>
  );
}
