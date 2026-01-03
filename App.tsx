
import React, { useState, useEffect } from 'react';
import { AppRoute } from './types';
import VideoBackground from './components/VideoBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import OracleComponent from './components/OracleComponent';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import WhatsAppChatbot from './components/WhatsAppChatbot';

const BIOS_SEQUENCE = [
  "BIOS Version 4.0 - BusinessPromoterAI",
  "",
  "Initializing System...",
  "Detecting CPUs: 64-Core Neural Accelerator",
  "RAM Detected: 2TB Quantum Memory",
  "Loading Kernel: BusinessPromoterOS :: Ready",
  "",
  "Launching Interface..."
];

const PORTFOLIO_CLIENTS = [
  {
    name: "IK CONSTRUCTIONS",
    sector: "CONSTRUCTION_&_INFRASTRUCTURE",
    location: "BANGALORE_NODE",
    id: "CNST_BLR_01",
    status: "SYSTEM_OPTIMIZED"
  },
  {
    name: "SHREE DADA STEEL",
    sector: "STEEL_TRADING_&_INDUSTRIAL",
    location: "BANGALORE_HUB",
    id: "STL_TRD_02",
    status: "MARKET_DOMINANT"
  },
  {
    name: "ZEPHYR LOGISTICS",
    sector: "SUPPLY_CHAIN_SYNC",
    location: "GLOBAL_STREAM",
    id: "LOGI_GLO_03",
    status: "ACTIVE_FLOW"
  },
  {
    name: "LUMINA RETAIL",
    sector: "E-COMMERCE_ARCHITECTURE",
    location: "VIRTUAL_MARKET",
    id: "RETL_VIR_04",
    status: "REVENUE_MAXIMIZED"
  },
  {
    name: "NEXUS REALTY",
    sector: "PROPERTY_ALGORITHM",
    location: "BLR_URBAN_GRID",
    id: "REAL_EST_05",
    status: "NODE_ESTABLISHED"
  },
  {
    name: "TITAN VENTURES",
    sector: "CAPITAL_UPLINK",
    location: "FINANCE_CORE",
    id: "FIN_CORE_06",
    status: "DATA_DRIVEN"
  }
];

const App: React.FC = () => {
  const [route, setRoute] = useState<AppRoute>(AppRoute.HOME);
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [showBooter, setShowBooter] = useState(true);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < BIOS_SEQUENCE.length) {
        setBootLines(prev => [...prev, BIOS_SEQUENCE[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsInitialized(true);
          setTimeout(() => setShowBooter(false), 1000);
        }, 800);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleBlogSelect = (slug: string) => {
    setSelectedBlogSlug(slug);
    setRoute(AppRoute.BLOG_POST);
  };

  const renderContent = () => {
    switch (route) {
      case AppRoute.HOME:
        return (
          <>
            <Hero />
            <Services />
            <div className="py-20 md:py-32 text-center bg-transparent px-4">
               <button 
                onClick={() => setRoute(AppRoute.ORACLE)}
                className="group relative w-full max-w-xs md:max-w-md lg:max-w-none px-6 md:px-12 py-5 bg-black/60 border-2 border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all uppercase font-black tracking-[0.2em] md:tracking-[0.4em] shadow-[0_0_30px_rgba(0,255,65,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#00FF41] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 text-sm md:text-base">Consult The Oracle</span>
              </button>
            </div>
            <Contact />
          </>
        );
      case AppRoute.ABOUT:
        return (
          <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 max-w-7xl mx-auto space-y-16 md:space-y-32 bg-transparent relative z-10 overflow-hidden">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase matrix-text-glow italic opacity-90 leading-none">About Us</h2>
              <div className="h-1 w-24 md:w-48 bg-[#00FF41] shadow-[0_0_15px_#00FF41]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 font-mono leading-relaxed">
              <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-white/90">
                <p className="bg-black/60 p-6 md:p-8 border-l-4 border-[#00FF41] backdrop-blur-md shadow-2xl">
                  Business Promoter is a premier digital marketing powerhouse based in Bangalore. We don't just market; we architect digital evolution for brands seeking limitless horizons.
                </p>
                <p className="opacity-80 px-6 md:px-8 bg-black/40 backdrop-blur-sm p-4 md:p-6 border border-[#00FF41]/5 shadow-xl">
                  Our specialists are the gatekeepers of the digital matrix, decoding complex algorithms to ensure your vision becomes the dominant signal in the noise of the marketplace.
                </p>
              </div>
              <div className="border border-[#00FF41]/40 p-6 md:p-10 bg-black/80 backdrop-blur-xl space-y-4 md:space-y-6 shadow-2xl relative">
                <div className="absolute top-0 right-0 p-4 text-[8px] md:text-[10px] text-[#00FF41]/30 uppercase tracking-widest font-bold">NODE_INFO: HQ_BANGALORE</div>
                <div className="text-[#00FF41] font-black text-xl md:text-2xl tracking-[0.2em] mb-4 underline decoration-[#00FF41]/30 underline-offset-8">[ MISSION_MANIFESTO ]</div>
                <p className="text-sm md:text-base text-gray-300">
                  To bridge the gap between human vision and technological capability. We empower businesses in Bangalore and beyond with precision-engineered digital strategies that defy traditional limits.
                </p>
                <div className="pt-6 grid grid-cols-3 gap-2 md:gap-4 border-t border-[#00FF41]/20">
                  <div className="text-center">
                    <div className="text-[#00FF41] font-bold text-lg md:text-xl">500+</div>
                    <div className="text-[8px] md:text-[9px] opacity-40 uppercase">Nodes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#00FF41] font-bold text-lg md:text-xl">10Y+</div>
                    <div className="text-[8px] md:text-[9px] opacity-40 uppercase">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#00FF41] font-bold text-lg md:text-xl">99%</div>
                    <div className="text-[8px] md:text-[9px] opacity-40 uppercase">Signal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Section Header */}
            <div className="text-center space-y-4">
              <div className="text-[10px] text-[#00FF41]/60 tracking-[0.6em] uppercase font-mono font-bold">
                [ LEADERSHIP_ARRAY_INITIALIZED ]
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase matrix-text-glow italic leading-tight">The Architects</h2>
            </div>

            {/* Leadership Grid */}
            <div className="space-y-24">
              {/* Vishwanath Naik */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center relative z-10">
                  <div className="lg:col-span-5 group">
                    <div className="relative bg-black border-2 border-[#00FF41]/40 overflow-hidden aspect-[4/5] shadow-[0_0_20px_rgba(0,255,65,0.1)]">
                      <img 
                        src="https://lh3.googleusercontent.com/d/13csW97UvFan0Y96ZhvhNF52yPW0f08H8" 
                        alt="Vishwanath Naik" 
                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="text-[#00FF41] font-black text-lg md:text-2xl tracking-[0.2em] uppercase italic">Vishwanath Naik</div>
                        <div className="text-white/40 text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-mono mt-1">Founding_Node_Alpha</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6 md:space-y-8 font-mono bg-black/60 backdrop-blur-md p-6 md:p-12 border border-[#00FF41]/10 shadow-2xl relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[10px]">[ ID_01_CEO ]</div>
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-6xl font-black text-white uppercase italic">Vishwanath Naik</h3>
                      <div className="text-[#00FF41] font-bold text-base md:text-xl uppercase tracking-widest">Founder & CEO</div>
                      <div className="h-0.5 w-16 md:w-24 bg-[#00FF41] mt-4"></div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                      As the Founder & CEO of Business Promoter, he is the strategic force behind the company’s vision, growth philosophy, and performance-driven digital solutions. He has pioneered the integration of high-velocity analytics with creative brand storytelling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Jaiprakash Naidu */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center relative z-10">
                  <div className="lg:col-span-7 lg:order-2 space-y-6 md:space-y-8 font-mono bg-black/60 backdrop-blur-md p-6 md:p-12 border border-[#00FF41]/10 shadow-2xl relative">
                    <div className="absolute top-0 left-0 p-4 opacity-10 font-mono text-[10px]">[ ID_02_DIR ]</div>
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-6xl font-black text-white uppercase italic">Jaiprakash Naidu</h3>
                      <div className="text-[#00FF41] font-bold text-base md:text-xl uppercase tracking-widest">Director</div>
                      <div className="h-0.5 w-16 md:w-24 bg-[#00FF41] mt-4"></div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                      Jaiprakash Naidu, Director at Business Promoter, is a visionary leader dedicated to driving operational excellence and high-impact digital transformation. With a sharp focus on business scaling and client success, he oversees the strategic execution of integrated marketing solutions that deliver measurable results in the competitive Indian landscape.
                    </p>
                  </div>

                  <div className="lg:col-span-5 lg:order-1 group">
                    <div className="relative bg-black border-2 border-[#00FF41]/40 overflow-hidden aspect-[4/5] shadow-[0_0_20px_rgba(0,255,65,0.1)]">
                      <img 
                        src="https://lh3.googleusercontent.com/d/1aRgS6moeHL-sVRJrG06CfdzUhUnQFOJO" 
                        alt="Jaiprakash Naidu" 
                        className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="text-[#00FF41] font-black text-lg md:text-2xl tracking-[0.2em] uppercase italic">Jaiprakash Naidu</div>
                        <div className="text-white/40 text-[8px] md:text-[10px] tracking-[0.4em] uppercase font-mono mt-1">Founding_Node_Beta</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case AppRoute.SERVICES:
        return (
          <div className="pt-20 min-h-screen bg-transparent">
            <Services />
            <div className="py-24 text-center space-y-10 relative z-10 px-4">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] matrix-text-glow">Ready to enter the stream?</h3>
              <button 
                onClick={() => setRoute(AppRoute.ORACLE)}
                className="w-full max-w-xs md:max-w-none px-12 py-4 border-2 border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all uppercase font-black tracking-[0.2em] md:tracking-[0.4em]"
              >
                Decode Your Strategy
              </button>
            </div>
          </div>
        );
      case AppRoute.PORTFOLIO:
        return (
          <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 max-w-[1400px] mx-auto bg-transparent relative z-10">
            <div className="mb-12 md:mb-20">
              <h2 className="text-5xl md:text-9xl font-black uppercase matrix-text-glow italic mb-4 opacity-90">Portfolio</h2>
              <div className="text-[10px] text-[#00FF41]/60 tracking-[0.4em] font-mono">[ ARCHIVE_ACCESS: GRANTED ] [ FILTER: BANGALORE_HUB ]</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {PORTFOLIO_CLIENTS.map(client => (
                <div key={client.id} className="group relative min-h-[280px] border border-[#00FF41]/30 overflow-hidden bg-black/80 backdrop-blur-xl flex flex-col p-6 md:p-8 cursor-crosshair transition-all duration-500 hover:border-[#00FF41] hover:scale-[1.03] shadow-2xl">
                  {/* Visual ID Tag */}
                  <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="text-[10px] font-mono text-[#00FF41] tracking-widest">[ {client.id} ]</div>
                  </div>

                  <div className="flex-grow flex flex-col justify-center">
                    <div className="text-[8px] md:text-[9px] text-[#00FF41]/50 font-mono tracking-[0.4em] uppercase mb-4">
                      {client.sector}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter group-hover:text-[#00FF41] transition-colors mb-2">
                      {client.name}
                    </h3>
                    <div className="h-0.5 w-12 bg-[#00FF41]/30 group-hover:w-full transition-all duration-700"></div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-[#00FF41]/10 flex justify-between items-end font-mono">
                    <div className="space-y-1">
                      <div className="text-[8px] opacity-40 uppercase">Location</div>
                      <div className="text-[10px] text-[#00FF41]">{client.location}</div>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="text-[8px] opacity-40 uppercase">Status</div>
                      <div className="text-[10px] text-[#00FF41] animate-pulse">{client.status}</div>
                    </div>
                  </div>

                  {/* Matrix Scan Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF41]/5 to-transparent opacity-0 group-hover:opacity-100 animate-scanline-card pointer-events-none"></div>
                </div>
              ))}
            </div>
          </section>
        );
      case AppRoute.CONTACT:
        return (
          <div className="pt-20 min-h-screen bg-transparent">
            <Contact />
          </div>
        );
      case AppRoute.ORACLE:
        return (
          <div className="pt-20 min-h-screen bg-transparent">
            <OracleComponent />
          </div>
        );
      case AppRoute.BLOG:
        return (
          <div className="pt-20 min-h-screen bg-transparent">
            <Blog onSelectArticle={handleBlogSelect} />
          </div>
        );
      case AppRoute.BLOG_POST:
        return (
          <div className="pt-20 min-h-screen bg-transparent">
            <BlogPost slug={selectedBlogSlug || ''} setRoute={setRoute} />
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="relative min-h-screen text-[#00FF41] bg-transparent">
      {showBooter && (
        <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-start justify-start p-6 md:p-10 font-mono text-[#00FF41] transition-opacity duration-1000 ${isInitialized ? 'opacity-0' : 'opacity-100'}`}>
          <div className="max-w-3xl space-y-1 md:space-y-2">
            {bootLines.map((line, idx) => (
              <div key={idx} className="flex items-center text-sm md:text-base">
                <span className="mr-3">{line}</span>
              </div>
            ))}
            {!isInitialized && (
              <div className="inline-block w-2 md:w-2.5 h-4 md:h-5 bg-[#00FF41] animate-pulse ml-1"></div>
            )}
          </div>
          <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 text-[8px] md:text-[10px] opacity-30 tracking-[0.3em] md:tracking-[0.5em] uppercase">
            [ STATUS: BOOT_SEQUENCE_ACTIVE ]
          </div>
        </div>
      )}

      {isInitialized && (
        <>
          <VideoBackground />
          <Navigation currentRoute={route} setRoute={setRoute} />
          <main className="transition-all duration-700 ease-in-out">
            {renderContent()}
          </main>
          <WhatsAppChatbot />
          <footer className="py-12 md:py-20 border-t border-[#00FF41]/20 bg-black/60 backdrop-blur-md text-center relative z-10">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-[9px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] uppercase opacity-40 mb-6 font-bold">
                BUSINESS PROMOTER // HUB_BANGALORE // SECTOR_07_B
              </div>
              <div className="text-[10px] text-gray-500 font-mono space-y-2">
                <div>© 2024 - 2025 BUSINESS PROMOTER. ALL TRANSMISSIONS LOGGED.</div>
                <div className="text-[#00FF41]/30 italic tracking-widest text-[9px]">POWERED BY VISION. LIMITLESS BY TECHNOLOGY. BEYOND THE SYSTEM.</div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;
