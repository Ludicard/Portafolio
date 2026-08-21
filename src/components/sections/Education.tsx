import Reveal from '../animations/Reveal';
import { useLanguage } from '../../context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  return (
    <section id="education" className="min-h-[100svh] flex flex-col justify-center py-24 border-t border-white/5 bg-[#08090b]" aria-labelledby="education-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="mb-16">
          <Reveal delay={0}>
            <h2 id="education-heading" className="text-3xl font-bold text-white tracking-tight mb-2">{t.education.sectionTitle}</h2>
            <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">{t.education.sectionSubtitle}</p>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto">
          <Reveal delay={200}>
            <div className="group relative p-8 sm:p-12 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 shadow-2xl hover:shadow-wine/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-wine/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-wine/20 text-wine-light text-xs font-bold uppercase tracking-wider rounded-md border border-wine/30">{t.education.inProgress}</span>
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
                    <span className="block text-4xl sm:text-5xl font-light text-white/20 mb-1">2027</span>
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
