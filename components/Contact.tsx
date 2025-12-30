import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d0d0d_1px,transparent_1px),linear-gradient(to_bottom,#0d0d0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-black/90 border border-matrix-dim p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-matrix-green to-transparent"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-orbitron font-bold text-white mb-4">
              Initiate Uplink
            </h2>
            <p className="text-gray-400">
              Ready to unplug from the ordinary? Send us a signal.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12 animate-pulse">
              <CheckCircle className="w-16 h-16 text-matrix-green mx-auto mb-6" />
              <h3 className="text-2xl text-white font-bold mb-2">Signal Received.</h3>
              <p className="text-gray-400">Our agents will make contact shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-matrix-green underline hover:text-white"
              >
                Send another transmission
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-matrix-green uppercase tracking-widest">Operator Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:border-matrix-green focus:ring-1 focus:ring-matrix-green outline-none transition-all placeholder-gray-700"
                    placeholder="Neo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-matrix-green uppercase tracking-widest">Contact Frequency (Email)</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-black border border-gray-800 text-white p-3 focus:border-matrix-green focus:ring-1 focus:ring-matrix-green outline-none transition-all placeholder-gray-700"
                    placeholder="neo@nebuchadnezzar.ship"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-matrix-green uppercase tracking-widest">Mission Objective</label>
                <select className="w-full bg-black border border-gray-800 text-white p-3 focus:border-matrix-green focus:ring-1 focus:ring-matrix-green outline-none transition-all">
                  <option>SEO Optimization</option>
                  <option>PPC Campaigns</option>
                  <option>Social Media Management</option>
                  <option>Web Development</option>
                  <option>Full Digital Transformation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-matrix-green uppercase tracking-widest">Message Data</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-black border border-gray-800 text-white p-3 focus:border-matrix-green focus:ring-1 focus:ring-matrix-green outline-none transition-all placeholder-gray-700"
                  placeholder="I need to know kung fu..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-matrix-green/10 border border-matrix-green text-matrix-green font-bold py-4 uppercase tracking-[0.2em] hover:bg-matrix-green hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {status === 'submitting' ? 'Transmitting...' : (
                  <>
                    Send Transmission <Send size={18} className="group-hover:translate-x-1 transition-transform"/>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;