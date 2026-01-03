
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getOracleResponse } from '../services/geminiService';

const OracleComponent: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome, seeker. I am the Oracle of Growth. Do you wish to know your digital destiny, or how to break free from the noise?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getOracleResponse(messages, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section className="py-24 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto border border-[#00FF41]/50 bg-black/40 backdrop-blur-md p-1 md:p-6 shadow-[0_0_30px_rgba(0,255,65,0.15)] relative z-10">
        <div className="flex items-center justify-between border-b border-[#00FF41]/30 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-[#00FF41] rounded-full animate-pulse shadow-[0_0_10px_#00FF41]"></div>
            <h2 className="text-xl font-bold tracking-widest uppercase matrix-text-glow">The Marketing Oracle</h2>
          </div>
          <span className="text-[10px] opacity-50 font-mono tracking-tighter">UPLINK_SECURE: 256_BIT_SSL</span>
        </div>

        <div 
          ref={scrollRef}
          className="h-[450px] overflow-y-auto mb-6 space-y-4 font-mono text-sm pr-2 custom-scrollbar"
        >
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 border ${
                msg.role === 'user' 
                ? 'bg-[#00FF41]/5 border-[#00FF41]/40 text-white shadow-[0_0_10px_rgba(0,255,65,0.05)]' 
                : 'bg-black/60 border-gray-800 text-[#00FF41] shadow-[0_0_15px_rgba(0,0,0,0.5)]'
              }`}>
                <div className="text-[9px] opacity-40 mb-2 uppercase tracking-[0.2em] font-bold">
                  {msg.role === 'user' ? 'USER_ID: NEO' : 'ENTITY: ORACLE_V3'}
                </div>
                <div className="leading-relaxed whitespace-pre-wrap">{msg.text}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="p-4 bg-black/60 border border-gray-800 text-[#00FF41] animate-pulse italic tracking-widest">
                Decoding system request...
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Query the digital stream..."
            className="flex-1 bg-black/60 border border-[#00FF41]/30 p-4 text-[#00FF41] focus:outline-none focus:border-[#00FF41] placeholder:text-[#00FF41]/20 font-mono transition-all"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="px-8 py-4 bg-[#00FF41] text-black font-black uppercase hover:bg-white transition-all disabled:opacity-50 hover:shadow-[0_0_20px_#00FF41]"
          >
            EXECUTE
          </button>
        </form>
        
        <div className="mt-6 text-[9px] text-center opacity-30 uppercase tracking-[0.5em] font-bold">
          [ ACCESSING_MAIN_RECORDS... READY ]
        </div>
      </div>
    </section>
  );
};

export default OracleComponent;
