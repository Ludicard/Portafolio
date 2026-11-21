import Reveal from '../animations/Reveal';
import SectionHeading from '../decor/SectionHeading';
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
    <section id="certifications" className="flex flex-col justify-center py-24 sm:py-32" aria-labelledby="certifications-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="mb-12">
          <SectionHeading id="certifications-heading" numeral="VI" title={t.certifications.sectionTitle} subtitle={t.certifications.sectionSubtitle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <Reveal key={cert.id} delay={100 + (index * 100)}>
              <div className="h-full flex flex-col justify-between gap-6 p-7 border border-white/5 rounded-2xl bg-white/[0.015] hover:border-accent/30 hover:bg-accent/[0.04] hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(var(--rgb-accent),0.8)] transition-all duration-300 group">
                <div>
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/[0.06] text-gold" aria-hidden="true">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">{cert.name}</h3>
                  <p className="text-accent-light font-medium tracking-wide text-sm mt-1">{cert.institution}</p>
                </div>
                <a 
                  href={cert.link}
                  className="inline-flex items-center self-start text-sm font-medium text-accent-light hover:text-white transition-colors"
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
