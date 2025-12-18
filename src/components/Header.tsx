import { useState, useEffect } from 'react';

const Header = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if URL hash is #contact on load
    if (window.location.hash === '#contact') {
      window.history.replaceState(null, '', ' '); // Clear hash
      // Logic handled in App.tsx via prop if needed, 
      // but simpler to just handle onClick.
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Insights', href: '#insights' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 ease-out ${isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 py-3 px-6 rounded-full'
            : 'bg-transparent py-4 px-8'
            }`}
        >
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="cursor-pointer" onClick={() => scrollToSection('#home')}>
              <img
                src="/src/assets/logo.jpeg"
                alt="Dexel Logo"
                className="w-16 h-16 rounded-lg object-cover"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white hover:shadow-sm rounded-full transition-all duration-300"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              {/* CTA Button */}
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
              >
                <span>Let's Talk</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-800"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-3xl font-display font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onNavigate('contact');
            }}
            className="mt-4 bg-black text-white px-8 py-4 rounded-full text-lg font-medium"
          >
            Start a Project
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
