
import React from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: 'seo-strategy',
    title: '📊 SEO & Strategy',
    description: 'Advanced SEO (On-Page, Off-Page, Technical)\nCompetitor Analysis & Keyword Planning\nGoogle My Business Ranking\nGrowth Roadmaps & Funnel Strategy',
    icon: '01',
    matrixCode: '010101_SEO',
    imageUrl: 'https://lh3.googleusercontent.com/d/1KHOXv_01AF2wxl26lshkRJv-pW3QsNTC'
  },
  {
    id: 'performance-marketing',
    title: '💰 Performance Marketing',
    description: 'High-velocity lead acquisition via Google Ads & Meta Ads.\nStrategic Remarketing and Funnel Optimization.\nData-driven scaling for maximum ROI in the digital stream.',
    icon: '02',
    matrixCode: '111001_PPC',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'social-automation',
    title: '📱 Social Automation',
    description: 'AI-Powered WhatsApp & Chatbot Workflows.\nViral Content Synchronization & Community Management.\nScale brand engagement with 24/7 automated streams.',
    icon: '03',
    matrixCode: '110110_SMM',
    imageUrl: 'https://lh3.googleusercontent.com/d/14G1TkvramXyqmNXH6tllhFMihCP5ZKRo'
  },
  {
    id: 'creative-branding',
    title: '🎥 Creative Branding',
    description: 'Cinematic Video Production & Visual Identity.\nLogo Design, High-Fidelity UI/UX, and Brand Narrative.\nImpactful creative that cuts through digital noise.',
    icon: '04',
    matrixCode: '110011_CRE',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'web-app-dev',
    title: '🌐 Web & App Dev',
    description: 'Full-stack Web Ecosystems & Mobile App Engineering.\nE-commerce Platforms (Shopify, WooCommerce, Custom).\nHigh-performance interfaces designed for conversion.',
    icon: '05',
    matrixCode: '011100_DEV',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'marketplace-services',
    title: '📦 Marketplace Ops',
    description: 'Amazon & Flipkart Node Optimization.\nProduct Cataloging, A+ Content, and Review Management.\nInfiltrating global marketplaces with tactical efficiency.',
    icon: '06',
    matrixCode: '001011_MKT',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'analytics-automation',
    title: '📈 Data Analytics',
    description: 'Decoding complex data streams into growth intelligence.\nCustom CRM Integrations & Marketing Automation.\nEnd-to-end tracking and performance dashboards.',
    icon: '07',
    matrixCode: '101010_ANA',
    imageUrl: 'https://lh3.googleusercontent.com/d/15K425N16jBgiAkhvqD9aYve6IKuZ7_Ar'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <div className="text-[8px] md:text-[10px] text-[#00FF41]/60 tracking-[0.5em] md:tracking-[0.8em] uppercase mb-4 font-mono font-bold">
            [ SYSTEM_CAPABILITIES_INDEX ]
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 tracking-widest uppercase matrix-text-glow italic leading-tight">
            Available Protocols
          </h2>
          <div className="h-1 w-20 md:w-32 bg-[#00FF41] mx-auto shadow-[0_0_15px_#00FF41]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div 
              key={s.id}
              className="group relative border border-[#00FF41]/20 bg-black/60 backdrop-blur-md hover:border-[#00FF41] transition-all duration-500 overflow-hidden flex flex-col rounded-sm"
            >
              {/* Image Header */}
              <div className="h-40 md:h-48 overflow-hidden relative border-b border-[#00FF41]/20 bg-black flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={s.imageUrl} 
                  alt={s.title} 
                  className={`w-full h-full ${s.id === 'social-automation' || s.id === 'analytics-automation' ? 'object-contain p-4' : 'object-cover'} grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 transform group-hover:scale-110`}
                />
              </div>

              <div className="p-5 md:p-6 flex-grow flex flex-col">
                <div className="text-2xl md:text-3xl font-black text-[#00FF41]/20 group-hover:text-[#00FF41] transition-colors mb-3 md:mb-4 font-mono">
                  {s.icon}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-[#00FF41] transition-colors uppercase tracking-wider font-mono">
                  {s.title}
                </h3>
                
                <p className="text-[10px] md:text-xs text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed mb-6 font-mono flex-grow whitespace-pre-wrap">
                  {s.description}
                </p>

                <div className="transform md:translate-y-4 group-hover:translate-y-0 transition-all md:opacity-0 group-hover:opacity-100 mt-auto">
                  <button className="w-full border border-[#00FF41] py-3 md:py-2 text-[10px] font-bold text-[#00FF41] hover:bg-[#00FF41] hover:text-black transition-all uppercase tracking-[0.2em] md:tracking-[0.3em] bg-black/40">
                    Execute_Protocol
                  </button>
                </div>
              </div>

              {/* Scanline inside card */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00FF41] opacity-0 group-hover:opacity-50 group-hover:animate-scanline-card"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scanline-card {
          0% { transform: translateY(-300px); }
          100% { transform: translateY(0px); }
        }
        .animate-scanline-card {
          animation: scanline-card 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;
