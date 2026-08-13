import Reveal from '../animations/Reveal';

const Contact = () => {
  return (
    <section id="contact" className="min-h-[100svh] flex flex-col justify-center py-32 border-t border-white/5 relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050608]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center w-full">
        
        <Reveal delay={0}>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Let's work together.</h2>
        </Reveal>
        
        <Reveal delay={100}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Currently open for new opportunities. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:placeholder@email.com"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-wine hover:bg-wine-light transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-wine-light w-full sm:w-auto hover:scale-105 transform duration-200"
            >
              placeholder@email.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16 flex justify-center space-x-8">
            <a href="#" className="text-gray-500 hover:text-wine-light transition-colors hover:-translate-y-1 transform duration-200">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-wine-light transition-colors hover:-translate-y-1 transform duration-200">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;
