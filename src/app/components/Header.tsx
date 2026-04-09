import { useState, useEffect } from 'react';
import { Flame, Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-gray-900/50'
            : 'bg-white/95 backdrop-blur-sm shadow-lg'
          : darkMode
          ? 'bg-gray-900/50 backdrop-blur-md shadow-md shadow-gray-900/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group"
          >
            <div className="bg-gradient-to-br from-[#E53935] to-[#FF7043] p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              TrishuFire Enterprise
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors hover:text-[#E53935] ${
                  darkMode ? 'text-white hover:text-[#FF7043]' : 'text-gray-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'
              } hover:scale-110`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:block bg-gradient-to-r from-[#E53935] to-[#FF7043] text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden py-4 border-t ${
              darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
            }`}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-2 font-medium transition-colors hover:text-[#E53935] ${
                    darkMode ? 'text-white hover:text-[#FF7043]' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mx-4 bg-gradient-to-r from-[#E53935] to-[#FF7043] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
