import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative py-10 border-t border-accent/15 bg-background/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="font-display tracking-[0.15em] text-gray-300">SERGIO</span>. {t.footer.rights}
          </p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#about" className="text-gray-500 hover:text-accent-light transition-colors">{t.nav.about}</a>
          <a href="#projects" className="text-gray-500 hover:text-accent-light transition-colors">{t.nav.projects}</a>
          <a href="#experience" className="text-gray-500 hover:text-accent-light transition-colors">{t.nav.experience}</a>
          <a href="#contact" className="text-gray-500 hover:text-accent-light transition-colors">{t.nav.contact}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
