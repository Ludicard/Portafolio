import Reveal from '../animations/Reveal';
import { useLanguage } from '../../context/LanguageContext';

const Certifications = () => {
  const { t } = useLanguage();
  
  const certifications = [
    {
      ...t.certifications.items[0],
      link: "https://coursera.org/share/71b83bac04f3cb369b2be47e08963ef5"
    },
    {
      ...t.certifications.items[1],
      link: "https://coursera.org/share/57992a20e68ca9caec4be7f5dbee549f"
    }
  ];

  return (
    <section id="certifications" className="min-h-[100svh] flex flex-col justify-center py-24 border-t border-white/5" aria-labelledby="certifications-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="mb-12">
          <Reveal delay={0}>
            <h2 id="certifications-heading" className="text-3xl font-bold text-white tracking-tight mb-2">{t.certifications.sectionTitle}</h2>
            <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">{t.certifications.sectionSubtitle}</p>
          </Reveal>
        </div>

        <div className="flex flex-col space-y-4">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={100 + (index * 100)}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border border-white/5 rounded-lg bg-white/[0.01] hover:bg-white/[0.02] transition-colors group">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">{cert.name}</h3>
                  <p className="text-wine-light font-medium tracking-wide text-sm mt-1">{cert.institution}</p>
                </div>
                <a 
                  href={cert.link}
                  className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-wine-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.certifications.verify}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
