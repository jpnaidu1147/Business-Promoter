import React from 'react';
import { Github, Twitter, Linkedin, Binary } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-matrix-dim py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <Binary className="text-matrix-green" size={24} />
               <span className="font-orbitron font-bold text-white text-lg">BUSINESS PROMOTER</span>
            </div>
            <p className="text-gray-500 text-sm font-mono leading-relaxed">
              Unplugging businesses from the ordinary since 2005. Welcome to the real world of growth.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-orbitron">Coordinates</h4>
            <ul className="space-y-2 text-gray-500 text-sm font-mono">
              <li>101 Zion Mainframe</li>
              <li>Level 12, Sector 7</li>
              <li>The Construct, 00101</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-orbitron">Links</h4>
            <ul className="space-y-2 text-gray-500 text-sm font-mono">
              <li><a href="#home" className="hover:text-matrix-green transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-matrix-green transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-matrix-green transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-matrix-green transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-orbitron">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-matrix-dim flex items-center justify-center text-gray-400 hover:text-matrix-green hover:border-matrix-green transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-matrix-dim flex items-center justify-center text-gray-400 hover:text-matrix-green hover:border-matrix-green transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-matrix-dim flex items-center justify-center text-gray-400 hover:text-matrix-green hover:border-matrix-green transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <p>&copy; {new Date().getFullYear()} Business Promoter. All rights reserved.</p>
          <p className="mt-2 md:mt-0">System Version 4.0.1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;