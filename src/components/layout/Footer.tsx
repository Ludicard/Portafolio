const Footer = () => {
  return (
    <footer className="bg-[#050608] py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Sergio. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href="#about" className="text-gray-500 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-gray-500 hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="text-gray-500 hover:text-white transition-colors">Experience</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
