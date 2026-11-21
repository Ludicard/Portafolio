import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const flagUs = "https://flagcdn.com/w40/us.png";
const flagEs = "https://flagcdn.com/w40/es.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  // Fondo más sólido al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const ids = ['hero', 'about', 'projects', 'experience', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${scrolled ? 'bg-background/85 border-accent/15 shadow-[0_8px_30px_-12px_rgba(var(--rgb-accent),0.35)]' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full relative">
          
          {/* Marca: rosa + nombre */}
          <a href="#hero" className="group flex items-center gap-2.5 shrink-0 md:w-1/4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light rounded-md" aria-label="Inicio">
            <span className="font-display text-lg font-semibold tracking-[0.2em] text-imperial">SERGIO</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center flex-1" aria-label="Desktop navigation">
            <ul className="flex justify-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-1 ${active === link.href.slice(1) ? 'text-white' : 'text-gray-400 hover:text-accent-light'}`}
                  >
                    {link.name}
                    <span className={`absolute left-1/2 -bottom-1 h-px -translate-x-1/2 bg-gradient-to-r from-gold to-accent-light transition-all duration-300 ${active === link.href.slice(1) ? 'w-full' : 'w-0'}`} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center justify-end md:w-1/4 gap-4">
            
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Toggle language menu"
              >
                <span className="flex items-center justify-center w-5 h-5">
                  <img src={language === 'en' ? flagUs : flagEs} alt="Current language" className="w-5 h-auto rounded-sm object-cover shadow-sm" />
                </span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-surface-2 border border-accent/25 overflow-hidden z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                      className={`flex items-center w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-accent/20 text-accent-light' : 'text-gray-300 hover:bg-white/5'} transition-colors`}
                      role="menuitem"
                    >
                      <img src={flagUs} alt="English" className="w-4 h-auto rounded-sm object-cover mr-2" /> English
                    </button>
                    <button
                      onClick={() => { setLanguage('es'); setIsLangOpen(false); }}
                      className={`flex items-center w-full text-left px-4 py-2 text-sm ${language === 'es' ? 'bg-accent/20 text-accent-light' : 'text-gray-300 hover:bg-white/5'} transition-colors`}
                      role="menuitem"
                    >
                      <img src={flagEs} alt="Español" className="w-4 h-auto rounded-sm object-cover mr-2" /> Español
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-accent-light hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-background/95 border-b border-accent/15`} 
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-accent-light hover:bg-accent/10 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
