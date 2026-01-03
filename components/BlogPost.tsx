
import React, { useEffect } from 'react';
import { BlogArticle, AppRoute } from '../types';

interface BlogPostProps {
  slug: string;
  setRoute: (route: AppRoute) => void;
}

const ARTICLES_DATA: Record<string, any> = {
  'what-is-digital-marketing-guide': {
    title: 'What Is Digital Marketing? A Simple Guide for Business Owners',
    category: 'FUNDAMENTALS',
    date: 'OCT 24, 2024',
    accentColor: 'cyan',
    content: (
      <>
        <p className="text-lg md:text-xl text-white font-medium leading-relaxed">In simple terms, digital marketing is any form of advertising or promotion that appears on a screen. Whether it is a Google search result, a post on Facebook, or an email in your inbox, it is all part of the digital landscape. For a business owner in India, think of it as your virtual storefront that never closes.</p>
        
        <h2 className="text-2xl md:text-3xl font-black mt-8 md:mt-12 mb-4 md:mb-6 text-cyan-400 uppercase tracking-tight">Traditional vs. Digital</h2>
        <p className="text-gray-200">Traditional marketing involves newspapers, billboards, and flyers. While effective for decades, it has one major flaw: it is a "broadcast" system. You pay to show your ad to everyone, hoping a few are interested. Digital marketing is a "precision" system. You only pay to show your ad to people who are already looking for your services.</p>
        
        <div className="my-8 md:my-10 p-6 md:p-8 border border-cyan-500/30 bg-cyan-500/5 rounded-sm">
          <ul className="list-disc pl-6 space-y-4 md:space-y-6">
            <li><strong className="text-white">Measurability:</strong> Track exactly how many people clicked your digital ad.</li>
            <li><strong className="text-white">Cost:</strong> You can start with a budget as small as ₹500.</li>
            <li><strong className="text-white">Engagement:</strong> Talk back instantly through comments and messages.</li>
          </ul>
        </div>

        <p className="mt-6 md:mt-8 italic border-l-4 border-cyan-500 pl-4 md:pl-8 bg-black/60 py-4 md:py-6 text-white text-lg md:text-xl">
          At BUSINESS PROMOTER, we help you transition from the old broadcast model to a precision-engineered digital presence.
        </p>
      </>
    )
  },
  'why-digital-marketing-is-no-longer-optional': {
    title: 'Why Digital Marketing Is No Longer Optional for Businesses',
    category: 'STRATEGY',
    date: 'OCT 26, 2024',
    accentColor: 'blue',
    content: (
      <>
        <p className="text-lg md:text-xl text-white font-medium leading-relaxed">The consumer journey has changed. Ten years ago, if someone needed a plumber in Bangalore, they asked a neighbor. Today, they reach for their smartphone. If you aren't visible in that search, you simply don't exist to that customer.</p>
        
        <h2 className="text-2xl md:text-3xl font-black mt-8 md:mt-12 mb-4 md:mb-6 text-blue-400 uppercase tracking-tight">The Power of Trust</h2>
        <p className="text-gray-200">Visibility creates credibility. When a business has a professional website, active social media, and positive Google reviews, it signals to the consumer that the brand is reliable. This digital footprint acts as a 24/7 salesperson working on your behalf.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12">
          <div className="p-6 md:p-8 bg-blue-900/10 border border-blue-500/40 backdrop-blur-sm">
            <h3 className="font-bold text-white text-lg md:text-xl mb-2 md:mb-3 uppercase tracking-wider">ROI Efficiency</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">Stop wasting budget on uninterested audiences. Target by location, age, and interest with surgical precision.</p>
          </div>
          <div className="p-6 md:p-8 bg-blue-900/10 border border-blue-500/40 backdrop-blur-sm">
            <h3 className="font-bold text-white text-lg md:text-xl mb-2 md:mb-3 uppercase tracking-wider">Global Reach</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">A small shop in India can now sell to customers worldwide with the right digital infrastructure.</p>
          </div>
        </div>
      </>
    )
  },
  'key-components-explained-simply': {
    title: 'Key Components of Digital Marketing Explained Simply',
    category: 'GUIDE',
    date: 'OCT 28, 2024',
    accentColor: 'purple',
    content: (
      <>
        <p className="text-lg md:text-xl text-white font-medium leading-relaxed">Digital marketing isn't just one thing; it's a collection of tools. Understanding how these tools work together is the key to building a successful online presence.</p>
        
        <div className="space-y-8 md:space-y-12 mt-10 md:mt-12">
          <div className="border-b border-purple-500/20 pb-6 md:pb-8">
            <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-purple-400 uppercase tracking-tight">1. SEO (Search Engine Optimization)</h3>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base">This is the art of making your website appear at the top of Google results naturally. When someone searches for "best organic honey in India," SEO ensures your brand is the first thing they see.</p>
          </div>

          <div className="border-b border-purple-500/20 pb-6 md:pb-8">
            <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-purple-400 uppercase tracking-tight">2. Paid Ads (PPC)</h3>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base">This is the fast-track. You pay Google or Meta to show your ads to a highly specific audience instantly. Great for quick leads and sales events.</p>
          </div>

          <div className="pb-6 md:pb-8">
            <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-purple-400 uppercase tracking-tight">3. Content Marketing</h3>
            <p className="text-gray-200 leading-relaxed text-sm md:text-base">Creating valuable videos, blogs, and reels that educate your audience. It builds long-term authority and trust in the digital marketplace.</p>
          </div>
        </div>
      </>
    )
  }
};

const BlogPost: React.FC<BlogPostProps> = ({ slug, setRoute }) => {
  const article = ARTICLES_DATA[slug] || {
    title: 'Article Not Found',
    category: 'ERROR',
    date: 'N/A',
    accentColor: 'green',
    content: <p className="text-white">The requested data stream could not be found. Please return to the main archive.</p>
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getAccentColor = () => {
    switch(article.accentColor) {
      case 'cyan': return 'text-cyan-400 border-cyan-400';
      case 'blue': return 'text-blue-400 border-blue-400';
      case 'purple': return 'text-purple-400 border-purple-400';
      default: return 'text-[#00FF41] border-[#00FF41]';
    }
  };

  return (
    <div className="min-h-screen bg-transparent px-4">
      <article className="mt-24 md:mt-40 mb-16 md:mb-32 px-5 md:px-12 py-10 md:py-16 max-w-4xl mx-auto bg-black/70 backdrop-blur-xl relative z-10 font-mono shadow-[0_0_100px_rgba(0,0,0,1)] border-x border-[#00FF41]/10 rounded-sm">
        <button 
          onClick={() => setRoute(AppRoute.BLOG)}
          className="mb-8 md:mb-12 text-[#00FF41] text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.4em] flex items-center hover:translate-x-[-8px] transition-transform bg-black/60 px-4 py-3 border border-[#00FF41]/30"
        >
          ← BACK_TO_ARCHIVE
        </button>

        <div className="space-y-6 md:space-y-8 mb-10 md:mb-16">
          <span className={`text-[10px] md:text-[12px] font-black border px-3 md:px-4 py-1 tracking-widest uppercase bg-black ${getAccentColor()}`}>
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            {article.title}
          </h1>
          <div className="text-[10px] md:text-[12px] text-white/50 tracking-[0.2em] md:tracking-[0.3em] font-bold border-l-2 border-[#00FF41] pl-4">
            PUBLISHED: {article.date} | SOURCE: BP_CONTENT_ENGINE_V4
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-gray-300 space-y-6 md:space-y-8">
          {article.content}
        </div>

        <div className="mt-12 md:mt-20 p-8 md:p-12 border-2 border-[#00FF41] bg-black shadow-[0_0_50px_rgba(0,255,65,0.2)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#00FF41]/5 animate-pulse"></div>
          
          <div className="relative z-10">
            <h4 className="text-[#00FF41] font-black text-2xl md:text-3xl mb-4 tracking-[0.1em] md:tracking-[0.2em] uppercase italic">Take the Next Step</h4>
            <p className="text-base md:text-lg text-gray-200 mb-8 md:mb-10 font-medium leading-relaxed">Ready to implement these strategies for your business? Our architects are standing by to decode your growth potential with precision-engineered digital strategies.</p>
            <button 
              onClick={() => setRoute(AppRoute.CONTACT)}
              className="group/cta px-8 md:px-10 py-5 bg-[#00FF41] text-black font-black uppercase text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] hover:bg-white transition-all shadow-[0_0_30px_rgba(0,255,65,0.4)] flex items-center justify-center w-full md:w-auto"
            >
              EXECUTE_STRATEGY_SESSION
              <span className="ml-4 transform group-hover/cta:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
