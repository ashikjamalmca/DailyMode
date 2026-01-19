'use client';

export default function ServicesHero() {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#d1fa3c] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#d1fa3c] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-[#d1fa3c] font-bold uppercase text-xs tracking-widest mb-8">
            <span className="w-2 h-2 bg-[#d1fa3c] rounded-full"></span> Our Services
          </div>
          <h1 className="text-5xl xx:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8">
            DIGITAL<br />
            <span className="text-[#d1fa3c]">EXCELLENCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From concept to launch, we deliver end-to-end digital solutions that drive real business results
          </p>
        </div>
      </div>
    </section>
  );
}
