import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const flagUs = "https://flagcdn.com/w40/us.png";
const flagEs = "https://flagcdn.com/w40/es.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

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
    <header className="fixed top-0 w-full z-50 bg-[#0f1115]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full relative">
          
          {/* Spacer for desktop symmetry */}
          <div className="hidden md:block w-1/4"></div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center flex-1" aria-label="Desktop navigation">
            <ul className="flex justify-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-wine-light text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-wine rounded-sm px-1 py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center justify-end w-full md:w-1/4 gap-4">
            
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-wine"
                aria-label="Toggle language menu"
              >
                <span className="flex items-center justify-center w-5 h-5">
                  <img src={language === 'en' ? flagUs : flagEs} alt="Current language" className="w-5 h-auto rounded-sm object-cover shadow-sm" />
                </span>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-[#1a1f2e] ring-1 ring-black ring-opacity-5 border border-white/10 overflow-hidden z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                      className={`flex items-center w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-wine/20 text-wine-light' : 'text-gray-300 hover:bg-white/5'} transition-colors`}
                      role="menuitem"
                    >
                      <img src={flagUs} alt="English" className="w-4 h-auto rounded-sm object-cover mr-2" /> English
                    </button>
                    <button
                      onClick={() => { setLanguage('es'); setIsLangOpen(false); }}
                      className={`flex items-center w-full text-left px-4 py-2 text-sm ${language === 'es' ? 'bg-wine/20 text-wine-light' : 'text-gray-300 hover:bg-white/5'} transition-colors`}
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
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-wine-light hover:bg-wine/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-wine transition-colors"
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
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#0f1115] border-b border-white/5`} 
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-wine-light hover:bg-wine/10 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-wine"
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
