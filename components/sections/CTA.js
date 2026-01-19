'use client';

import { useEffect, useRef } from 'react';

export default function CTA() {
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (textRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        textRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleContact = () => {
    window.dispatchEvent(new CustomEvent('toggleContact', { detail: true }));
  };

  return (
    <section className="pt-32 md:pt-48 pb-32 md:pb-48 bg-daily-yellow relative overflow-hidden" id="cta">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-black rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-black rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center">
          <div ref={textRef} className="transition-transform duration-200 ease-out">
            <h2 className="text-[12vw] md:text-[10vw] lg:text-[140px] font-black tracking-tighter leading-none mb-8 text-black">
              LET'S BUILD<br />THE FUTURE
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Ready to transform your digital presence? We're here to turn your boldest ideas into reality. 
            Let's create something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={toggleContact}
              className="bg-black text-white px-10 py-5 rounded-full text-lg font-bold uppercase tracking-wide hover:scale-105 hover:shadow-2xl transition-all duration-300 group flex items-center gap-3"
            >
              Start Your Project
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
            <button className="border-2 border-black text-black px-10 py-5 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">50+</div>
              <div className="text-sm uppercase tracking-wide text-black/70 font-semibold">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">98%</div>
              <div className="text-sm uppercase tracking-wide text-black/70 font-semibold">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wide text-black/70 font-semibold">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-black mb-2">5+</div>
              <div className="text-sm uppercase tracking-wide text-black/70 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-[2.5rem] md:w-20 h-[2.5rem] md:h-20 bg-black rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-[2rem] md:w-16 h-[2rem] md:h-16 border-4 border-black rounded-full animate-spin-slow"></div>
    </section>
  );
}
