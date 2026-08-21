import Reveal from '../animations/Reveal';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="min-h-[100svh] flex flex-col justify-center py-32 border-t border-white/5 relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#040814]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center w-full">
        
        <Reveal delay={0}>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">{t.contact.title}</h2>
        </Reveal>
        
        <Reveal delay={100}>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            {t.contact.subtitle}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:sergiomasin456@gmail.com"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-wine hover:bg-wine-light transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-wine-light w-full sm:w-auto hover:scale-105 transform duration-200 shadow-lg"
            >
              sergiomasin456@gmail.com
            </a>
            <a 
              href="mailto:luckydicey38@gmail.com"
              className="inline-flex justify-center items-center px-8 py-4 border border-white/10 text-base font-medium rounded-md text-gray-300 bg-white/5 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-wine-light w-full sm:w-auto hover:scale-105 transform duration-200"
            >
              luckydicey38@gmail.com
            </a>
            <a 
              href="https://wa.me/593963083283"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 border border-[#25D366]/30 text-base font-medium rounded-md text-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-[#25D366] w-full sm:w-auto hover:scale-105 transform duration-200 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 1.76.452 3.42 1.258 4.862L2 22l5.32-1.353c1.4.743 2.99 1.155 4.68 1.155 5.523 0 10-4.484 10-10.017C22 6.484 17.522 2 12 2zm5.064 14.507c-.206.582-1.189 1.118-1.636 1.15-.39.028-.888.06-2.545-.589-2.032-.796-3.34-2.855-3.443-2.992-.103-.137-.822-1.096-.822-2.093 0-.996.518-1.488.704-1.683.186-.196.402-.244.536-.244.135 0 .27.001.385.007.121.006.284-.047.44.331.161.393.551 1.348.6 1.446.049.098.082.213.016.345-.065.132-.103.214-.207.336-.103.123-.217.265-.308.358-.103.102-.213.214-.097.414.116.2.518.855 1.107 1.383.759.68 1.4 1.1 1.6 1.218.2.119.317.098.437-.039.12-.138.518-.6.657-.808.139-.208.277-.174.463-.104.186.069 1.176.554 1.378.653.201.099.336.148.385.231.049.083.049.48-.157 1.062z" clipRule="evenodd" />
              </svg>
              +593 96 308 3283
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-16 flex justify-center space-x-8">
            <a href="https://github.com/Ludicard" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-wine-light transition-colors hover:-translate-y-1 transform duration-200">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sergio-masin-b2a421338/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-wine-light transition-colors hover:-translate-y-1 transform duration-200">
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
