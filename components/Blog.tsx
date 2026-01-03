
import React from 'react';
import { AppRoute, BlogArticle } from '../types';

const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: '1',
    slug: 'what-is-digital-marketing-guide',
    title: 'What Is Digital Marketing? A Simple Guide for Business Owners',
    excerpt: 'An essential breakdown of how digital systems outperform traditional marketing for Indian SMEs and local businesses.',
    date: 'OCT 24, 2024',
    readTime: '6 MIN',
    category: 'FUNDAMENTALS',
    accentColor: 'cyan',
    content: ''
  },
  {
    id: '2',
    slug: 'why-digital-marketing-is-no-longer-optional',
    title: 'Why Digital Marketing Is No Longer Optional for Businesses',
    excerpt: 'In an era where the first point of contact is a search engine, visibility is synonymous with existence.',
    date: 'OCT 26, 2024',
    readTime: '5 MIN',
    category: 'STRATEGY',
    accentColor: 'blue',
    content: ''
  },
  {
    id: '3',
    slug: 'key-components-explained-simply',
    title: 'Key Components of Digital Marketing Explained Simply',
    excerpt: 'Demystifying SEO, PPC, and Social Media to help you architect a cohesive growth strategy.',
    date: 'OCT 28, 2024',
    readTime: '8 MIN',
    category: 'GUIDE',
    accentColor: 'purple',
    content: ''
  },
  {
    id: '4',
    slug: 'how-digital-marketing-helps-grow-faster',
    title: 'How Digital Marketing Helps Businesses Grow Faster',
    excerpt: 'Scale your operations through data-driven decisions and 24/7 brand visibility.',
    date: 'OCT 30, 2024',
    readTime: '7 MIN',
    category: 'GROWTH',
    accentColor: 'cyan',
    content: ''
  },
  {
    id: '5',
    slug: 'common-digital-marketing-myths',
    title: 'Common Digital Marketing Myths That Stop Business Growth',
    excerpt: 'Debunking the misconceptions about cost and complexity that hold Indian startups back.',
    date: 'NOV 02, 2024',
    readTime: '5 MIN',
    category: 'INSIGHTS',
    accentColor: 'blue',
    content: ''
  },
  {
    id: '6',
    slug: 'why-choose-business-promoter',
    title: 'Why Choose BUSINESS PROMOTER for Digital Marketing?',
    excerpt: 'Discover our expertise-driven approach to creating limitless growth for our partners.',
    date: 'NOV 05, 2024',
    readTime: '4 MIN',
    category: 'ABOUT',
    accentColor: 'purple',
    content: ''
  }
];

interface BlogProps {
  onSelectArticle: (slug: string) => void;
}

const Blog: React.FC<BlogProps> = ({ onSelectArticle }) => {
  const getGlowClass = (color: string) => {
    switch(color) {
      case 'cyan': return 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] border-cyan-500/50 group-hover:border-cyan-400';
      case 'blue': return 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border-blue-500/50 group-hover:border-blue-400';
      case 'purple': return 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] border-purple-500/50 group-hover:border-purple-400';
      default: return 'group-hover:shadow-[0_0_30px_rgba(0,255,65,0.6)] border-[#00FF41]/50 group-hover:border-[#00FF41]';
    }
  };

  const getTextClass = (color: string) => {
    switch(color) {
      case 'cyan': return 'text-cyan-400';
      case 'blue': return 'text-blue-400';
      case 'purple': return 'text-purple-400';
      default: return 'text-[#00FF41]';
    }
  };

  return (
    <section className="pt-24 pb-20 md:pt-40 md:pb-32 px-4 bg-transparent relative z-10 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-20 text-center bg-black/60 backdrop-blur-md py-8 md:py-12 border border-[#00FF41]/10 shadow-2xl relative">
          <div className="text-[8px] md:text-[10px] text-[#00FF41] tracking-[0.4em] md:tracking-[0.8em] uppercase mb-4 font-mono font-bold bg-black/60 inline-block px-3 md:px-4 py-1">
            [ DATA_STREAM_ARCHIVE ]
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Knowledge <span className="text-[#00FF41] matrix-text-glow">Base</span>
          </h2>
          <p className="text-[#00FF41] font-mono text-xs md:text-sm tracking-widest uppercase bg-black/60 inline-block px-4 py-1">Expert Insights for the Digital Evolution</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BLOG_ARTICLES.map((article) => (
            <div 
              key={article.id}
              onClick={() => onSelectArticle(article.slug)}
              className={`group relative bg-black/70 backdrop-blur-md border p-6 md:p-8 cursor-pointer transition-all duration-500 flex flex-col min-h-[350px] md:min-h-[400px] shadow-2xl ${getGlowClass(article.accentColor)}`}
            >
              <div className="absolute top-0 left-0 w-full h-1 overflow-hidden">
                 <div className={`h-full w-full ${article.accentColor === 'cyan' ? 'bg-cyan-500' : article.accentColor === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
              </div>

              <div className="flex justify-between items-start mb-4 md:mb-6">
                <span className={`text-[8px] md:text-[10px] font-mono font-bold tracking-[0.2em] md:tracking-[0.3em] border px-2 py-1 ${getTextClass(article.accentColor)} border-current bg-black/50`}>
                  {article.category}
                </span>
                <span className="text-[8px] md:text-[10px] text-white/50 font-mono font-bold">{article.readTime} READ</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 leading-tight group-hover:text-white transition-colors">
                {article.title}
              </h3>

              <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow font-medium">
                {article.excerpt}
              </p>

              <div className="mt-auto pt-4 md:pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[8px] md:text-[10px] text-white/40 font-mono font-bold tracking-widest">{article.date}</span>
                <span className={`text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase transition-all flex items-center ${getTextClass(article.accentColor)}`}>
                  READ_MORE <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>

              <div className={`absolute bottom-0 right-0 w-6 md:w-8 h-6 md:h-8 opacity-20 group-hover:opacity-60 transition-opacity border-b-2 border-r-2 ${getTextClass(article.accentColor)}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
