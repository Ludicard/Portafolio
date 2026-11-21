import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import ThornDivider from './components/decor/ThornDivider';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-background text-gray-200 font-sans overflow-x-clip">
        {/* Fondo: halos de luz azul y textura de grano */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[140px]" />
          <div className="absolute top-1/3 -right-48 h-[32rem] w-[32rem] rounded-full bg-glow/10 blur-[150px]" />
          <div className="absolute -bottom-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-gold/5 blur-[140px]" />
          <div className="absolute inset-0 bg-grain opacity-[0.035] mix-blend-overlay" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <ThornDivider />
            <About />
            <ThornDivider />
            <Projects />
            <ThornDivider />
            <Skills />
            <ThornDivider />
            <Experience />
            <ThornDivider />
            <Education />
            <ThornDivider />
            <Certifications />
            <ThornDivider />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
