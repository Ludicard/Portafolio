import type { CSSProperties } from 'react';

/** Pétalos azules que caen lentamente. Se desactivan con "reducir movimiento". */
const PETALS = [
  { left: '6%', size: 14, duration: 16, delay: 0, drift: 80, opacity: 0.55 },
  { left: '18%', size: 10, duration: 21, delay: 6, drift: -40, opacity: 0.4 },
  { left: '31%', size: 12, duration: 18, delay: 11, drift: 60, opacity: 0.5 },
  { left: '47%', size: 9, duration: 24, delay: 3, drift: 90, opacity: 0.35 },
  { left: '58%', size: 15, duration: 17, delay: 9, drift: -70, opacity: 0.55 },
  { left: '69%', size: 11, duration: 22, delay: 14, drift: 50, opacity: 0.45 },
  { left: '81%', size: 13, duration: 19, delay: 4, drift: -60, opacity: 0.5 },
  { left: '92%', size: 9, duration: 25, delay: 12, drift: 40, opacity: 0.35 },
];

const Petals = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {PETALS.map((p, i) => (
      <svg
        key={i}
        viewBox="0 0 20 24"
        className="absolute top-0 animate-petal-fall motion-reduce:hidden"
        style={{
          left: p.left,
          width: p.size,
          height: p.size * 1.2,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          '--petal-drift': `${p.drift}px`,
          '--petal-opacity': p.opacity,
          '--petal-rot': `${(i % 2 ? -1 : 1) * (360 + i * 40)}deg`,
        } as CSSProperties}
      >
        <defs>
          <linearGradient id={`petal-${i}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: 'var(--color-petal-light)' }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-accent)' }} />
          </linearGradient>
        </defs>
        <path d="M10 0 C19 7 19 17 10 24 C1 17 1 7 10 0 Z" fill={`url(#petal-${i})`} />
        <path d="M10 3 Q11 12 10 21" style={{ stroke: 'var(--color-petal-vein)' }} strokeOpacity="0.35" strokeWidth="0.8" fill="none" />
      </svg>
    ))}
  </div>
);

export default Petals;
