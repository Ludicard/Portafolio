import Reveal from '../animations/Reveal';
import SectionHeading from '../decor/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  return (
    <section id="education" className="flex flex-col justify-center py-24 sm:py-32" aria-labelledby="education-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="mb-16">
          <SectionHeading id="education-heading" numeral="V" title={t.education.sectionTitle} subtitle={t.education.sectionSubtitle} />
        </div>

        <div className="max-w-4xl mx-auto">
          <Reveal delay={200}>
            <div className="group border-imperial relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-surface-2/80 to-surface/40 transition-all duration-500 shadow-[0_30px_80px_-40px_rgba(var(--rgb-accent),0.7)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent/20 text-accent-light text-xs font-bold uppercase tracking-wider rounded-md border border-accent/30">{t.education.inProgress}</span>
                    <span className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-medium uppercase tracking-wider rounded-md border border-white/10">{t.education.semester}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">{t.education.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-lg font-medium text-gray-200">{t.education.university}</span>
                    <span className="hidden sm:block text-white/20" aria-hidden="true">•</span>
                    <span className="text-gray-500">{t.education.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-start md:items-end justify-center border-t border-white/10 pt-6 md:border-none md:pt-0 mt-2 md:mt-0">
                  <div className="text-left md:text-right">
                    <span className="block font-display text-4xl sm:text-5xl font-semibold text-imperial mb-1">2027</span>
                    <span className="block text-xs uppercase tracking-widest text-gray-500 font-medium">{t.education.expectedGraduation}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Education;
