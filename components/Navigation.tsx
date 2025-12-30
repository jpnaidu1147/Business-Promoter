import React, { useState, useEffect } from 'react';
import { Menu, X, Binary } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 border-b border-matrix-dim backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 border border-matrix-green bg-black group-hover:bg-matrix-green transition-colors duration-300">
            <Binary className="text-matrix-green group-hover:text-black" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-bold text-white tracking-wider text-lg">BUSINESS</span>
            <span className="font-mono text-matrix-green text-xs tracking-[0.3em]">PROMOTER</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-matrix-green font-mono text-sm uppercase tracking-widest transition-colors relative group"
            >
              <span className="opacity-0 group-hover:opacity-100 absolute -left-3 text-matrix-green transition-opacity">&gt;</span>
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-6 py-2 border border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-black transition-all font-mono text-sm font-bold"
          >
            ENTER
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-matrix-green"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-matrix-green p-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-matrix-green font-mono uppercase tracking-widest py-2 border-l-2 border-transparent hover:border-matrix-green pl-4 transition-all bg-white/5 hover:bg-white/10"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;