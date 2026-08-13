import Reveal from '../animations/Reveal';

const About = () => {
  return (
    <section id="about" className="min-h-[100svh] flex flex-col justify-center py-24 border-t border-white/5" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4 flex flex-col justify-start">
            <Reveal delay={0}>
              <h2 id="about-heading" className="text-3xl font-bold text-white tracking-tight mb-2">About</h2>
              <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">Background & Approach</p>
            </Reveal>
          </div>
          
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-lg text-gray-400">
              <Reveal delay={100}>
                <p className="mb-6">
                  I'm a Software Engineering student and Full Stack Developer with a strong interest in building software that is useful, maintainable, and built to last. Alongside my studies, I build projects that allow me to explore ideas beyond the classroom and turn what I learn into practical systems.
                </p>
                <p className="mb-6">
                  I'm particularly interested in software architecture, backend development, cloud infrastructure, and the process of turning an idea into a working product. I enjoy understanding how things work under the hood and continuously improving the way I build, deploy, and maintain software. What motivates me most is taking something from an idea on paper to a real system that people can actually use.
                </p>
              </Reveal>
              
              <Reveal delay={200}>
                <div className="mt-10 p-6 border border-white/5 rounded-lg bg-white/[0.02]">
                  <h3 className="text-white text-base font-semibold mb-2">Core Philosophy</h3>
                  <p className="text-sm text-gray-300 font-medium mb-2">Be useful.</p>
                  <p className="text-sm text-gray-400 m-0 leading-relaxed">
                    I believe the most rewarding work is work that solves a real problem. I don't want to build software just for the sake of building it; I want the things I create to have a purpose, make someone's work easier, or turn a difficult problem into a simpler one. For me, the value of an engineer comes from the problems they can solve and the impact their work creates.
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
