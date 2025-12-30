import React from 'react';
import { Search, Share2, Target, BarChart3, Code2, FileText, Mail, TrendingUp, Shield } from 'lucide-react';
import { Service } from '../types';

const servicesList: Service[] = [
  {
    id: 'seo',
    title: 'Code Decryption (SEO)',
    description: 'Our operators analyze search engine source code to rank you #1. We implement organic growth hacks, keyword injection, and structural optimizations that the system cannot ignore.',
    icon: 'search'
  },
  {
    id: 'ppc',
    title: 'Agent Targeting (PPC)',
    description: 'Deploying precision-guided ad agents. We manage Google Ads and Social Ads with algorithmic targeting to capture leads at the lowest cost per acquisition. Your ads will dodge the competition.',
    icon: 'target'
  },
  {
    id: 'content',
    title: 'Info Downloads (Content)',
    description: 'Injecting high-value information directly into the market. Blogs, whitepapers, and copy that rewrite the narrative and position you as "The One" in your industry.',
    icon: 'content'
  },
  {
    id: 'social',
    title: 'The Construct (SMM)',
    description: 'Building your brand\'s presence in the social simulation. We engage users on Instagram, LinkedIn, and Facebook, turning passive observers into a loyal resistance army.',
    icon: 'share'
  },
  {
    id: 'email',
    title: 'Direct Uplink (Email)',
    description: 'Establishing a hardline connection to your audience. Automated flows and newsletters that bypass spam filters and deliver your message directly to the source.',
    icon: 'email'
  },
  {
    id: 'web',
    title: 'Digital Architecture (Web)',
    description: 'Constructing high-fidelity digital experiences. Fast, responsive, and secure websites built on the latest frameworks to host your business reality. Optimized for speed and conversion.',
    icon: 'code'
  },
  {
    id: 'cro',
    title: 'Glitch Optimization (CRO)',
    description: 'We identify and fix glitches in your funnel. Optimizing the user journey through A/B testing to remove resistance, making the path to purchase inevitable.',
    icon: 'growth'
  },
  {
    id: 'analytics',
    title: 'Oracle Analytics',
    description: 'We consult the data Oracle. Advanced tracking and reporting to decipher user behavior, predicting trends so you can act before the market shifts.',
    icon: 'chart'
  },
  {
    id: 'orm',
    title: 'Residual Image (ORM)',
    description: 'Online Reputation Management. We protect your digital avatar by monitoring mentions and suppressing negativity, ensuring your brand\'s residual self-image remains pristine.',
    icon: 'shield'
  }
];

const IconMap: Record<string, React.FC<any>> = {
  search: Search,
  target: Target,
  content: FileText,
  share: Share2,
  email: Mail,
  code: Code2,
  growth: TrendingUp,
  chart: BarChart3,
  shield: Shield
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-black/80">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
            <span className="text-matrix-green">/</span> System Protocols
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            Access our comprehensive suite of digital upgrades. Enhance your business capabilities to supernatural levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="group relative p-8 border border-matrix-dim bg-[#0a0a0a] hover:bg-matrix-green/5 transition-all duration-300 hover:border-matrix-green hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] flex flex-col h-full"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-matrix-green opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-matrix-green opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-matrix-green opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-matrix-green opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="mb-6 inline-block p-3 rounded bg-matrix-green/10 text-matrix-green group-hover:text-white group-hover:bg-matrix-green transition-colors w-fit">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-matrix-green transition-colors font-orbitron">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm font-mono flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-matrix-dim/30 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-matrix-green uppercase tracking-widest">Execute Program</span>
                    <span className="text-matrix-green">&gt;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;