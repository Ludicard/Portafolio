import Reveal from '../animations/Reveal';
import Petals from '../decor/Petals';
import profileImg from '../../assets/images/perfil.jpg';
import cvEs from '../../assets/docs/CV 6.1 Español.pdf';
import cvEn from '../../assets/docs/CV 6.1 Ingles.pdf';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  // Choose the CV file based on current language
  const cvFile = language === 'es' ? cvEs : cvEn;
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16 lg:pt-20 lg:pb-0 overflow-hidden"
      aria-label="Introduction"
    >
      <Petals />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Profile Photo (Left on Desktop, Top on Mobile) */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start mb-4 lg:mb-0">
            <Reveal delay={0} direction="up">
              <div className="relative animate-float">
                {/* Anillo giratorio dorado → azul */}
                <div
                  className="absolute -inset-[6px] rounded-full animate-spin-slow opacity-90"
                  style={{ background: 'conic-gradient(from 0deg, var(--color-gold), var(--color-accent), var(--color-glow), var(--color-accent-deep), var(--color-gold))' }}
                  aria-hidden="true"
                />
                <div className="absolute -inset-10 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-background bg-surface">
                  <img
                    src={profileImg}
                    alt="Sergio - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Text Content (Right on Desktop, Bottom on Mobile) */}
          <div className="w-full lg:w-3/5">
            <Reveal delay={50}>
              <span className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-300 text-xs font-semibold tracking-wide">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {t.hero.available}
              </span>
            </Reveal>

            <Reveal delay={100}>
              <p className="font-display text-gold font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase mb-6 flex items-center">
                <span className="w-10 h-px bg-gradient-to-r from-gold to-accent-light mr-4" aria-hidden="true"></span>
                {t.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-5">
                {t.hero.greeting}
                <span className="text-imperial drop-shadow-[0_0_30px_rgba(var(--rgb-accent),0.35)]">{t.hero.name}</span>.
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-200 mb-6 leading-snug">
                {t.hero.tagline}
              </h2>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
                {t.hero.description}
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="group relative inline-flex justify-center items-center px-7 py-3.5 text-base font-semibold rounded-lg text-white bg-gradient-to-r from-accent to-accent-deep shadow-[0_8px_30px_-8px_rgba(var(--rgb-accent),0.8)] hover:shadow-[0_10px_40px_-6px_rgba(var(--rgb-glow),0.8)] hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent-light"
                >
                  {t.hero.viewProjects}
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex justify-center items-center px-7 py-3.5 border border-white/15 text-base font-medium rounded-lg text-white bg-white/[0.03] backdrop-blur hover:border-accent-light/60 hover:text-accent-light hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent-light"
                >
                  {t.hero.getInTouch}
                </a>
                <a
                  href={cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-7 py-3.5 border border-gold/40 text-base font-medium rounded-lg text-gold bg-gold/[0.04] hover:bg-gold/10 hover:border-gold/70 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-gold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {t.hero.downloadCv}
                </a>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <dl className="mt-12 grid grid-cols-3 max-w-lg divide-x divide-white/10 border-t border-white/10 pt-6">
                {t.hero.stats.map((stat) => (
                  <div key={stat.label} className="px-4 first:pl-0">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-3xl sm:text-4xl font-semibold text-imperial leading-none mb-2">{stat.value}</dd>
                    <dd className="text-[11px] sm:text-xs uppercase tracking-wider text-gray-500 leading-snug">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
