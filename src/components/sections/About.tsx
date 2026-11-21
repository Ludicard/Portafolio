import Reveal from '../animations/Reveal';
import SectionHeading from '../decor/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="flex flex-col justify-center py-24 sm:py-32" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 flex flex-col justify-start">
            <SectionHeading id="about-heading" numeral="I" title={t.about.sectionTitle} subtitle={t.about.sectionSubtitle} />
          </div>
          
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-lg text-gray-400">
              <Reveal delay={100}>
                <p className="mb-6">
                  {t.about.p1}
                </p>
                <p className="mb-6">
                  {t.about.p2}
                </p>
              </Reveal>
              
              <Reveal delay={200}>
                <div className="border-imperial relative mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-surface-2/80 to-surface/40 overflow-hidden shadow-[0_20px_60px_-30px_rgba(var(--rgb-accent),0.6)]">
                  <h3 className="font-display text-gold text-xs tracking-[0.3em] uppercase mb-4">{t.about.corePhilosophy}</h3>
                  <p className="inline-block text-3xl sm:text-4xl font-bold text-imperial mb-4 tracking-tight">{t.about.beUseful}</p>
                  <p className="relative text-base text-gray-300 m-0 leading-relaxed max-w-2xl">
                    {t.about.philosophyText}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
