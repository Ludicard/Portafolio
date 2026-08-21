import Reveal from '../animations/Reveal';
import profileImg from '../../assets/images/perfil.jpg';

const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center pt-20"
      aria-label="Introduction"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Profile Photo (Left on Desktop, Top on Mobile) */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start mb-4 lg:mb-0">
            <Reveal delay={0} direction="up">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border border-wine/30 ring-4 ring-white/5 bg-[#0a0c10]">
                <img 
                  src={profileImg} 
                  alt="Sergio - Software Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Text Content (Right on Desktop, Bottom on Mobile) */}
          <div className="w-full lg:w-3/5">
            <Reveal delay={100}>
              <p className="text-wine-light font-medium tracking-wide text-sm uppercase mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-wine-light mr-4" aria-hidden="true"></span>
                SOFTWARE ENGINEER · FULL STACK DEVELOPER
              </p>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
                Hi, I'm <span className="text-wine-light">Sergio</span>.
              </h1>
            </Reveal>
            
            <Reveal delay={300}>
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-300 mb-6 leading-snug">
                Building software, systems, and ideas into real products.
              </h2>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
                I'm an 8th semester Software Engineering student and Full Stack Developer focused on building reliable software, exploring system architecture, and turning ideas into products that can grow.
              </p>
            </Reveal>
            
            <Reveal delay={500}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#projects"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-wine hover:bg-wine-light transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-wine-light"
                >
                  View Projects
                </a>
                <a 
                  href="#contact"
                  className="inline-flex justify-center items-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-white bg-transparent hover:border-wine hover:text-wine-light transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-wine-light"
                >
                  Get in Touch
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center z-10" aria-hidden="true">
        <Reveal delay={700} direction="none">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mb-2">Scroll Down</span>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
