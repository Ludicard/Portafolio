import Reveal from '../animations/Reveal';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="min-h-[100svh] flex flex-col justify-center py-24 border-t border-white/5" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 flex flex-col justify-start">
            <Reveal delay={0}>
              <h2 id="about-heading" className="text-3xl font-bold text-white tracking-tight mb-2">{t.about.sectionTitle}</h2>
              <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">{t.about.sectionSubtitle}</p>
            </Reveal>
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
                <div className="mt-10 p-6 border border-white/5 rounded-lg bg-white/[0.02]">
                  <h3 className="text-white text-base font-semibold mb-2">{t.about.corePhilosophy}</h3>
                  <p className="text-sm text-gray-300 font-medium mb-2">{t.about.beUseful}</p>
                  <p className="text-sm text-gray-400 m-0 leading-relaxed">
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
