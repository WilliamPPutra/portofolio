'use client';

/**
 * Subtle ambient depth, a soft radial glow + fine grain.
 * Purely decorative, sits behind content.
 */
export default function Ambient({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div
        className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.14] blur-[120px]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,255,255,0.55), rgba(255,255,255,0))',
        }}
      />
      <div className="absolute inset-0 grain opacity-40" />
    </div>
  );
}
