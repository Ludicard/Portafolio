import Reveal from '../animations/Reveal';

const Education = () => {
  return (
    <section id="education" className="min-h-[100svh] flex flex-col justify-center py-24 border-t border-white/5 bg-[#08090b]" aria-labelledby="education-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="mb-16">
          <Reveal delay={0}>
            <h2 id="education-heading" className="text-3xl font-bold text-white tracking-tight mb-2">Education</h2>
            <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">Academic background and ongoing education</p>
          </Reveal>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-white/10 ml-3 sm:ml-4 pb-4">
          
          {/* Subtle timeline-like marker */}
          <div className="absolute -left-[4.5px] top-2.5 z-10" aria-hidden="true">
            <Reveal delay={100} direction="none">
              <div className="w-2 h-2 rounded-full bg-wine-light ring-4 ring-[#08090b]"></div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">Software Engineering</h3>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-6">
              <span className="text-lg text-gray-300 font-medium">Universidad de Las Américas (UDLA)</span>
              <span className="hidden sm:block text-white/20" aria-hidden="true">•</span>
              <span className="text-sm text-gray-500">Quito, Ecuador</span>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-gray-400 tracking-wide">2023 — 2027</span>
              <Reveal delay={500} direction="none">
                <span className="px-3 py-1 bg-wine/10 border border-wine/20 rounded-md text-xs font-semibold text-wine-light tracking-wide uppercase">In Progress</span>
              </Reveal>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default Education;
