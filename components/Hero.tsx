import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Wake up, Entrepreneur... The market has you.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-4xl w-full text-center space-y-8 z-10">
        
        <div className="inline-block p-2 border border-matrix-green bg-black/80 backdrop-blur-sm mb-4 animate-pulse">
            <span className="text-matrix-green font-mono text-sm tracking-widest uppercase">
                System Status: Online
            </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-orbitron font-bold text-white tracking-tighter mb-4 glow-text min-h-[120px] md:min-h-[160px]">
          {text}<span className="animate-pulse text-matrix-green">_</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-mono leading-relaxed">
          We are <span className="text-matrix-green font-bold">Business Promoter</span>. We decode the algorithm. We free your brand from obscurity.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-matrix-green text-black font-bold text-lg uppercase tracking-widest hover:bg-white transition-all duration-300 clip-path-slant"
          >
            <span className="absolute inset-0 border-2 border-transparent group-hover:border-matrix-green translate-x-1 translate-y-1 transition-transform"></span>
            Take The Red Pill
            <span className="block text-xs normal-case opacity-75">Unlock Growth</span>
          </button>
          
          <button className="px-8 py-4 border border-matrix-green text-matrix-green font-bold text-lg uppercase tracking-widest hover:bg-matrix-green/10 transition-all duration-300">
            View Our Code
            <span className="block text-xs normal-case opacity-75">Our Portfolio</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 text-left">
          <div className="p-4 border border-matrix-dim bg-black/50 backdrop-blur">
            <Terminal className="text-matrix-green mb-2" size={24} />
            <h3 className="text-white font-bold">Data Driven</h3>
            <p className="text-sm text-gray-400">Deciphering the matrix of user data.</p>
          </div>
          <div className="p-4 border border-matrix-dim bg-black/50 backdrop-blur">
            <ShieldCheck className="text-matrix-green mb-2" size={24} />
            <h3 className="text-white font-bold">Secure Growth</h3>
            <p className="text-sm text-gray-400">Protected strategies for scaling.</p>
          </div>
          <div className="p-4 border border-matrix-dim bg-black/50 backdrop-blur">
            <Zap className="text-matrix-green mb-2" size={24} />
            <h3 className="text-white font-bold">High Velocity</h3>
            <p className="text-sm text-gray-400">Rapid deployment of campaigns.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;