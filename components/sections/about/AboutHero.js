"use client";

export default function AboutHero() {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-black text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#d1fa3c] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#d1fa3c] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#d1fa3c]/10 text-[#d1fa3c] font-semibold uppercase text-xs tracking-widest mb-6 px-4 py-2 rounded-full border border-[#d1fa3c]/20">
              <span className="w-2 h-2 bg-[#d1fa3c] rounded-full"></span> About Daily Mode
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-8">
              WE ARE<br />
              <span className="text-[#d1fa3c]">DIGITAL</span><br />
              PIONEERS
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
              A team of passionate creators, developers, and strategists
              building the future of digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold">
                Est. 2020
              </div>
              <div className="bg-[#d1fa3c] text-black px-6 py-3 rounded-full font-bold">
                50+ Projects
              </div>
              <div className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-bold">
                15+ Team Members
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#d1fa3c] rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
