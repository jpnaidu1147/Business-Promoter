
import React, { useState } from 'react';

const WhatsAppChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const phoneNumber = "917892611988";
  
  const PRE_FILLED_QUERIES = [
    { label: "DECODE_SEO_STRATEGY", text: "Hello! I want to decode the SEO strategy for my business and unlock growth signals." },
    { label: "INITIALIZE_PPC_UPLINK", text: "Greetings. I'm looking to initialize a PPC campaign to inject traffic into my digital stream." },
    { label: "ARCHITECT_WEB_NODE", text: "I need an architect to build a high-performance web or mobile ecosystem for my brand." },
    { label: "SYNC_SOCIAL_AUTOMATION", text: "Tell me how to sync AI-powered automation into my social media presence." },
    { label: "REQUEST_SYSTEM_AUDIT", text: "I request a complete digital system audit for my current business performance." }
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(customMessage);
    setCustomMessage('');
  };

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[60] font-mono">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[280px] sm:w-[320px] bg-black/95 border border-[#25D366] shadow-[0_0_40px_rgba(37,211,102,0.3)] animate-in slide-in-from-bottom-5 duration-300 backdrop-blur-2xl">
          {/* Header */}
          <div className="bg-[#25D366] text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.961-2.628-.086-.117-.718-.953-.718-1.816 0-.862.451-1.287.612-1.46.161-.174.348-.217.464-.217h.334c.116 0 .261-.043.392.261l.537 1.291c.043.116.087.232 0 .435-.087.174-.13.304-.261.435-.13.174-.275.348-.392.478-.13.13-.261.261-.13.478.13.217.58 1.001 1.247 1.566.826.731 1.522.957 1.739 1.044.217.087.348.087.478-.043.13-.13.565-.653.718-.87.152-.217.304-.174.522-.087.217.087 1.348.653 1.587.739.239.13.391.174.435.304.043.087.043.522-.13.913z"/>
              </svg>
              <span className="font-bold text-[10px] sm:text-xs tracking-widest uppercase">Support_Stream</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:scale-125 transition-transform text-xl p-1">✕</button>
          </div>
          
          {/* Body */}
          <div className="p-4 space-y-4 max-h-[350px] sm:max-h-[400px] overflow-y-auto custom-scrollbar">
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-3 text-[10px] sm:text-[11px] text-[#25D366] leading-relaxed">
              <span className="text-white font-bold">NODE:</span> Connected to the source. Choose your objective or enter a custom directive:
            </div>
            
            <div className="space-y-1.5 md:space-y-2">
              <div className="text-[8px] md:text-[9px] text-[#25D366]/60 font-bold uppercase tracking-widest mb-1">PRE_SET_PROTOCOLS</div>
              {PRE_FILLED_QUERIES.map((query, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(query.text)}
                  className="w-full text-left p-2 border border-[#25D366]/20 hover:border-[#25D366] hover:bg-[#25D366]/10 text-[9px] sm:text-[10px] text-white/90 transition-all flex items-center group"
                >
                  <span className="text-[#25D366] mr-2 opacity-0 group-hover:opacity-100 transition-opacity font-bold">{">"}</span>
                  {query.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#25D366]/20">
              <div className="text-[8px] md:text-[9px] text-[#25D366]/60 font-bold uppercase tracking-widest mb-2">CUSTOM_DIRECTIVE</div>
              <form onSubmit={handleCustomSubmit} className="space-y-2">
                <textarea 
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Write your own Query..."
                  className="w-full bg-black border border-[#25D366]/30 p-2 text-[10px] sm:text-[11px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#25D366] min-h-[60px] resize-none"
                />
                <button 
                  type="submit"
                  className="w-full bg-[#25D366] text-black text-[10px] font-bold py-3 md:py-2 uppercase tracking-widest hover:bg-white transition-colors"
                >
                  EXECUTE_SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 group ${isOpen ? 'rotate-0' : ''}`}
        aria-label="WhatsApp Chat"
      >
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`}>
          {isOpen ? (
            <span className="text-xl md:text-2xl font-black">✕</span>
          ) : (
            <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-white drop-shadow-md">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.961-2.628-.086-.117-.718-.953-.718-1.816 0-.862.451-1.287.612-1.46.161-.174.348-.217.464-.217h.334c.116 0 .261-.043.392.261l.537 1.291c.043.116.087.232 0 .435-.087.174-.13.304-.261.435-.13.174-.275.348-.392.478-.13.13-.261.261-.13.478.13.217.58 1.001 1.247 1.566.826.731 1.522.957 1.739 1.044.217.087.348.087.478-.043.13-.13.565-.653.718-.87.152-.217.304-.174.522-.087.217.087 1.348.653 1.587.739.239.13.391.174.435.304.043.087.043.522-.13.913z"/>
            </svg>
          )}
        </div>
        {!isOpen && (
          <span className="font-black text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] uppercase text-white drop-shadow-sm">
            WhatsApp Us
          </span>
        )}
      </button>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #25D366;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppChatbot;
