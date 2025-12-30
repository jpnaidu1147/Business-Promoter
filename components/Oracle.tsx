import React, { useState, useRef, useEffect } from 'react';
import { Send, Cpu, X, RefreshCw } from 'lucide-react';
import { getOracleResponse } from '../services/gemini';
import { ChatMessage } from '../types';

const Oracle: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: "Greetings. I am the Oracle. Ask, and I shall decode the path to your business success."
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await getOracleResponse(input);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText
    };

    setMessages(prev => [...prev, botMsg]);
    setLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-black border-2 border-matrix-green text-matrix-green p-4 rounded-full shadow-[0_0_15px_rgba(0,255,65,0.5)] hover:scale-110 transition-transform group"
      >
        <Cpu className="w-8 h-8 animate-pulse-fast group-hover:animate-none" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-matrix-green text-black font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
          Consult The Oracle
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-black border border-matrix-green shadow-[0_0_30px_rgba(0,255,65,0.2)] flex flex-col font-mono">
      {/* Header */}
      <div className="bg-matrix-green/20 p-3 border-b border-matrix-green flex justify-between items-center backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-matrix-green" />
          <span className="text-matrix-green font-bold tracking-widest">THE_ORACLE_V3.1</span>
        </div>
        <div className="flex gap-2">
            <button 
                onClick={() => setMessages([{ id: 'reset', role: 'model', text: "System Rebooted. How may I assist?" }])}
                className="text-matrix-dim hover:text-matrix-green transition-colors"
                title="Reset"
            >
                <RefreshCw size={18} />
            </button>
            <button 
                onClick={() => setIsOpen(false)}
                className="text-matrix-dim hover:text-red-500 transition-colors"
            >
                <X size={20} />
            </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/90">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] p-3 text-sm border ${
                msg.role === 'user' 
                  ? 'border-white/50 text-white bg-white/5 rounded-tl-lg rounded-bl-lg rounded-br-lg' 
                  : 'border-matrix-green text-matrix-green bg-matrix-green/5 rounded-tr-lg rounded-bl-lg rounded-br-lg'
              }`}
            >
              {msg.role === 'model' && <span className="block text-[10px] opacity-50 mb-1">ORACLE &gt;</span>}
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
            <div className="flex justify-start">
                <div className="text-matrix-green text-xs animate-pulse">
                    &gt; DECRYPTING RESPONSE...
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-matrix-green bg-black">
        <div className="flex items-center gap-2">
          <span className="text-matrix-green">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your query..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-gray-600 focus:ring-0"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="text-matrix-green hover:text-white transition-colors disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Oracle;