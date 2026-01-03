
import React, { useState } from 'react';
import { AppRoute } from '../types';

interface NavigationProps {
  currentRoute: AppRoute;
  setRoute: (route: AppRoute) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentRoute, setRoute }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { label: '[ HOME ]', route: AppRoute.HOME },
    { label: '[ ABOUT US ]', route: AppRoute.ABOUT },
    { label: '[ SERVICES ]', route: AppRoute.SERVICES },
    { label: '[ BLOG ]', route: AppRoute.BLOG },
    { label: '[ PORTFOLIO ]', route: AppRoute.PORTFOLIO },
    { label: '[ CONTACT US ]', route: AppRoute.CONTACT },
  ];

  const logoUrl = "https://lh3.googleusercontent.com/d/1b0BASDpDuMgTJIGL16jqlPb2Uvc2-5vK";

  const handleRoute = (route: AppRoute) => {
    setRoute(route);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 border-b border-[#00FF41]/30 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand Group */}
        <div 
          className="flex items-center cursor-pointer group h-full z-50"
          onClick={() => handleRoute(AppRoute.HOME)}
        >
          <div className="relative h-full flex items-center justify-center mr-2 md:mr-4">
            <img 
              src={logoUrl} 
              alt="BUSINESS PROMOTER" 
              className="h-14 md:h-20 lg:h-28 w-auto neon-logo group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="font-black text-lg md:text-2xl xl:text-3xl tracking-tighter matrix-text-glow leading-none uppercase italic">
              BUSINESS <span className="text-white">PROMOTER</span>
            </span>
            <span className="text-[6px] md:text-[8px] text-[#00FF41]/40 tracking-[0.4em] uppercase font-mono mt-1 hidden sm:block">
              //_DIGITAL_ARCHITECTS
            </span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-6">
          {links.map((link) => (
            <button
              key={link.route}
              onClick={() => handleRoute(link.route)}
              className={`text-[12px] xl:text-[14px] tracking-[0.2em] font-bold transition-all duration-300 transform hover:text-white hover:matrix-text-glow whitespace-nowrap px-3 py-2 border-b-2 border-transparent hover:border-[#00FF41]/50 ${
                currentRoute === link.route ? 'text-white matrix-text-glow border-[#00FF41]' : 'text-[#00FF41]/70'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#00FF41] p-2 focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[#00FF41] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-[#00FF41] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-[#00FF41] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Overlay Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black/95 z-40 transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-center p-6 pt-20`}>
          <div className="flex flex-col space-y-6 w-full max-w-xs text-center">
            {links.map((link) => (
              <button
                key={link.route}
                onClick={() => handleRoute(link.route)}
                className={`text-xl tracking-[0.3em] font-black py-4 border-b border-[#00FF41]/10 transition-all ${
                  currentRoute === link.route ? 'text-white matrix-text-glow' : 'text-[#00FF41]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-10 flex flex-col space-y-4">
               <button 
                onClick={() => handleRoute(AppRoute.ORACLE)}
                className="bg-[#00FF41] text-black py-4 font-black uppercase tracking-widest text-sm"
              >
                CONSULT ORACLE
              </button>
              <div className="text-[10px] text-[#00FF41]/40 uppercase tracking-[0.4em]">
                // HUB_BANGALORE_NODE_6
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
