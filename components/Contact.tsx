
import React, { useState, useEffect } from 'react';

const ScrambledText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%#&_';
  
  useEffect(() => {
    let iteration = 0;
    let interval: number;
    
    const timeout = setTimeout(() => {
      interval = window.setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) clearInterval(interval);
        iteration += 1 / 3;
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const recipient = "writetous@businesspromoter.co.in";
    const subjectLine = encodeURIComponent(`[UPLINK_INQUIRY] ${formState.subject}`);
    const bodyText = encodeURIComponent(
      `Identity: ${formState.name}\n` +
      `Return Address: ${formState.email}\n\n` +
      `Data Stream:\n${formState.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${recipient}?subject=${subjectLine}&body=${bodyText}`;
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const inputClasses = `
    w-full bg-black/60 border border-[#00FF41]/30 p-4 md:p-3 text-white 
    placeholder:text-[#00FF41]/20 focus:outline-none focus:border-[#00FF41] 
    focus:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all duration-300
    font-mono text-sm backdrop-blur-sm
  `;

  return (
    <section className="py-16 md:py-24 px-4 bg-transparent border-y border-[#00FF41]/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase matrix-text-glow leading-tight italic">
                <ScrambledText text="ESTABLISH" /><br />
                <span className="text-white">
                  <ScrambledText text="UPLINK" delay={500} />
                </span>
              </h2>
              <p className="text-[#00FF41]/80 text-base md:text-lg max-w-md leading-relaxed font-mono">
                <ScrambledText text="The system is waiting for your input. Reach out to the architects of your digital future." delay={1000} />
              </p>
            </div>

            {/* Direct Contact HUD */}
            <div className="space-y-6 pt-6 md:pt-8 border-t border-[#00FF41]/20">
              <div className="group">
                <div className="text-[8px] md:text-[10px] text-[#00FF41]/40 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1 font-bold">DIRECT_COMMS_MAIL</div>
                <a 
                  href="mailto:writetous@businesspromoter.co.in" 
                  className="text-white text-base sm:text-lg md:text-2xl font-mono hover:text-[#00FF41] transition-colors flex items-center group-hover:matrix-text-glow break-all"
                >
                  <span className="text-[#00FF41] mr-2 md:mr-4 shrink-0">>></span>
                  writetous@businesspromoter.co.in
                </a>
              </div>

              <div className="group">
                <div className="text-[8px] md:text-[10px] text-[#00FF41]/40 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1 font-bold">MOBILE_FREQUENCY</div>
                <a 
                  href="tel:+917892611988" 
                  className="text-white text-base sm:text-lg md:text-2xl font-mono hover:text-[#00FF41] transition-colors flex items-center group-hover:matrix-text-glow"
                >
                  <span className="text-[#00FF41] mr-2 md:mr-4 shrink-0">>></span>
                  +91 78926 11988
                </a>
              </div>
            </div>

            <div className="text-[8px] md:text-[10px] text-[#00FF41]/30 font-mono italic tracking-[0.2em] uppercase">
              // HUB_COORD: 12.9716° N, 77.5946° E [BANGALORE]
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-1 bg-[#00FF41]/20 blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black/60 backdrop-blur-md border border-[#00FF41]/40 p-5 md:p-10 shadow-2xl">
              {isSuccess ? (
                <div className="py-12 md:py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="text-5xl md:text-6xl text-[#00FF41] animate-pulse">✓</div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white">Transmission Prepared</h3>
                  <p className="text-[#00FF41]/60 text-[10px] md:text-xs font-mono px-4">Mail client triggered. Please finalize send in your local environment.</p>
                  <button onClick={() => setIsSuccess(false)} className="text-[8px] md:text-[10px] underline tracking-widest text-[#00FF41] mt-4">SEND ANOTHER TRANSMISSION</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    <input required type="text" name="name" value={formState.name} onChange={handleChange} placeholder="IDENTIFY YOURSELF" className={inputClasses} />
                    <input required type="email" name="email" value={formState.email} onChange={handleChange} placeholder="RETURN_ADDRESS.EXE" className={inputClasses} />
                  </div>
                  <input required type="text" name="subject" value={formState.subject} onChange={handleChange} placeholder="NATURE_OF_INQUIRY" className={inputClasses} />
                  <textarea required rows={4} name="message" value={formState.message} onChange={handleChange} placeholder="ENTER_DATA_STREAM..." className={`${inputClasses} resize-none`}></textarea>
                  <button disabled={isSubmitting} className="w-full relative py-4 bg-[#00FF41]/5 border border-[#00FF41] text-[#00FF41] font-bold uppercase text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] overflow-hidden group/btn">
                    <div className="absolute inset-0 bg-[#00FF41] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                    <span className="relative z-10 group-hover/btn:text-black transition-colors">{isSubmitting ? 'PREPARING_REDIRECT...' : 'EXECUTE_SEND'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
