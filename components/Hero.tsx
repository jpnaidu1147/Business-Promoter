
import React from 'react';

const Hero: React.FC = () => {
  const logoUrl = "https://lh3.googleusercontent.com/d/1b0BASDpDuMgTJIGL16jqlPb2Uvc2-5vK";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 bg-transparent overflow-hidden">
      <div className="max-w-5xl w-full space-y-6 flex flex-col items-center relative z-10">
        
        {/* Bangalore Hub Status Node */}
        <div className="absolute -top-10 right-0 hidden lg:flex items-center space-x-2 font-mono text-[9px] text-[#00FF41]/40 border border-[#00FF41]/20 px-3 py-1 bg-black/40">
           <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF41] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF41]"></span>
          </span>
          <span>NODE: BLR_HUB_ACTIVE</span>
          <span className="opacity-20">|</span>
          <span>LAT: 12.9716° N</span>
        </div>

        <div className="mb-4 group relative">
          <div className="absolute inset-0 bg-[#00FF41] blur-[40px] md:blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
          <img 
            src={logoUrl} 
            alt="BUSINESS PROMOTER Logo" 
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] object-contain neon-logo animate-pulse group-hover:scale-105 transition-transform duration-1000 relative z-10"
          />
        </div>

        <div className="inline-block px-3 py-1 border border-[#00FF41] text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] mb-2 bg-black/40 backdrop-blur-sm">
          SYSTEM_STATUS: <span className="text-white">ONLINE_&_DOMINANT</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-none matrix-text-glow italic select-none uppercase">
          BUSINESS <br />
          <span className="text-[#00FF41]">PROMOTER</span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-2xl tracking-[0.3em] md:tracking-[0.4em] font-light max-w-2xl mx-auto uppercase py-2 leading-relaxed">
          <span className="text-[#00FF41]">LIMITLESS</span> BY TECHNOLOGY <br className="hidden sm:block" />
          <span className="text-white">POWERED</span> BY VISION
        </p>

        <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 w-full sm:w-auto">
          <button className="w-full sm:w-auto relative group px-8 md:px-10 py-4 bg-[#00FF41] text-black font-bold text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_#00FF41] glitch-hover">
            <span className="relative z-10">Initialize Growth</span>
          </button>
          
          <button className="w-full sm:w-auto relative group px-8 md:px-10 py-4 border-2 border-[#00FF41] text-[#00FF41] font-bold text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase overflow-hidden transition-all duration-300 hover:text-black">
            <div className="absolute inset-0 bg-[#00FF41] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10">Decrypt Services</span>
          </button>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col items-center space-y-1 opacity-50">
          <div className="text-[7px] md:text-[9px] font-mono animate-pulse tracking-widest uppercase">
            [ LOGGING_CORE_ASSETS: SUCCESS ]
          </div>
          <div className="text-[7px] md:text-[9px] font-mono animate-pulse delay-75 tracking-widest uppercase">
            [ ASSETS_STRUCTURED: JS_CSS_ENABLED ]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
