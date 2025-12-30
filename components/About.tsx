import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 z-10">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white">
              The <span className="text-matrix-green">Truth</span> About Marketing
            </h2>
            <div className="h-1 w-20 bg-matrix-green"></div>
            <p className="text-gray-400 font-mono leading-relaxed text-lg">
              You've felt it your entire business life. That there's something wrong with the way things are done. You don't know what it is, but it's there, like a splinter in your mind.
            </p>
            <p className="text-gray-400 font-mono leading-relaxed">
              Most agencies offer you an illusion. Vanilla metrics. Empty promises. We offer you the truth. At Business Promoter, we strip away the facade and focus on the raw code of success: <strong className="text-white">ROI, Conversion Rates, and Market Dominance.</strong>
            </p>
            <div className="flex gap-4 pt-4">
                <div className="border-l-2 border-matrix-green pl-4">
                    <h4 className="text-white font-bold text-2xl">98%</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Client Retention</p>
                </div>
                <div className="border-l-2 border-matrix-green pl-4">
                    <h4 className="text-white font-bold text-2xl">300%</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Avg Growth</p>
                </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative h-[400px] w-full flex items-center justify-center group">
            {/* Abstract representation of red/blue pill or duality */}
            <div className="absolute inset-0 bg-matrix-green/5 rounded-full filter blur-3xl animate-pulse"></div>
            
            <div className="relative grid grid-cols-2 gap-8 transform hover:scale-105 transition-transform duration-500">
                <div className="w-40 h-40 rounded-full border-4 border-blue-500/50 bg-black flex items-center justify-center relative overflow-hidden group-hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="absolute inset-0 bg-blue-900/20"></div>
                    <span className="text-blue-400 font-orbitron font-bold z-10 text-center px-2">The Illusion<br/><span className="text-xs font-mono font-normal text-blue-300">Stay Small</span></span>
                </div>

                <div className="w-40 h-40 rounded-full border-4 border-red-500/50 bg-black flex items-center justify-center relative overflow-hidden group-hover:border-red-500 transition-colors cursor-pointer">
                    <div className="absolute inset-0 bg-red-900/20"></div>
                    <span className="text-red-400 font-orbitron font-bold z-10 text-center px-2">The Truth<br/><span className="text-xs font-mono font-normal text-red-300">Scale Up</span></span>
                </div>
            </div>
            
            <div className="absolute bottom-0 text-center w-full">
                <p className="text-xs text-gray-600 font-mono blink">HOVER TO CHOOSE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;