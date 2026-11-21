
/** Enredadera horizontal con espinas y una rosa en el centro. Separa secciones. */
const ThornDivider = () => {
  // Espinas alternadas arriba/abajo a lo largo de cada lado de la enredadera
  const thorns = Array.from({ length: 9 }, (_, i) => i);

  const side = (mirror: boolean) => (
    <svg
      viewBox="0 0 520 24"
      preserveAspectRatio="none"
      className={`h-4 flex-1 ${mirror ? '-scale-x-100' : ''}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`vine-fade-${mirror ? 'r' : 'l'}`} x1="0" x2="1">
          <stop offset="0%" style={{ stopColor: 'var(--color-accent)' }} stopOpacity="0" />
          <stop offset="100%" style={{ stopColor: 'var(--color-accent-light)' }} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <g stroke={`url(#vine-fade-${mirror ? 'r' : 'l'})`} fill="none" strokeWidth="1.2" strokeLinecap="round">
        <path d="M0 12 C 65 6, 130 18, 195 12 S 325 6, 390 12 S 480 16, 520 12" />
        {thorns.map((i) => {
          const x = 40 + i * 52;
          const up = i % 2 === 0;
          return (
            <path
              key={i}
              d={up ? `M${x} 11.5 L${x + 7} 3 L${x + 6} 11` : `M${x} 12.5 L${x + 7} 21 L${x + 6} 13`}
              fill={`url(#vine-fade-${mirror ? 'r' : 'l'})`}
            />
          );
        })}
      </g>
    </svg>
  );

  return (
    <div className="max-w-5xl mx-auto px-6 flex items-center gap-4 opacity-80" aria-hidden="true">
      {side(false)}
      <span className="h-2.5 w-2.5 shrink-0 rotate-45 bg-gradient-to-br from-gold to-accent-light shadow-[0_0_10px_rgba(var(--rgb-glow),0.7)]" />
      {side(true)}
    </div>
  );
};

export default ThornDivider;
