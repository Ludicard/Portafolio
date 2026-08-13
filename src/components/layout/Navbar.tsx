import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f1115]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-end h-20 w-full">
          {/* Desktop Menu */}
          <nav className="hidden md:block w-full" aria-label="Desktop navigation">
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
