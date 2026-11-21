import Reveal from '../animations/Reveal';

type SectionHeadingProps = {
  id: string;
  /** Numeral romano que precede al título (I, II, III…) */
  numeral: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
};

/** Encabezado de sección: numeral romano dorado, rosa, título y subtítulo. */
const SectionHeading = ({ id, numeral, title, subtitle, align = 'left' }: SectionHeadingProps) => {
  const centered = align === 'center';
  return (
    <Reveal delay={0}>
      <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start'}`}>
        <div className="flex items-center gap-3 mb-4" aria-hidden="true">
          <span className="font-display text-gold text-sm tracking-[0.3em]">{numeral}</span>
          <span className="h-px w-10 bg-gradient-to-r from-gold/70 to-accent-light/60" />
          <span className="h-2 w-2 shrink-0 rotate-45 bg-gradient-to-br from-gold to-accent-light shadow-[0_0_10px_rgba(var(--rgb-glow),0.7)]" />
        </div>
        <h2 id={id} className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
          {title}
        </h2>
        <p className="font-display text-accent-light/80 tracking-[0.2em] text-xs sm:text-sm uppercase">
          {subtitle}
        </p>
      </div>
    </Reveal>
  );
};

export default SectionHeading;
