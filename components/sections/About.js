export default function About() {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale mb-24 logo-strip">
        <h3 className="font-bold text-xl">automotions</h3>
        <h3 className="font-bold text-xl">dokter.nl</h3>
        <h3 className="font-bold text-xl">MKB</h3>
        <h3 className="font-bold text-xl">BIASOFT</h3>
        <h3 className="font-bold text-xl">Breda City</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 text-daily-yellow font-bold uppercase text-xs tracking-widest mb-4">
            <span className="w-2 h-2 bg-daily-yellow rounded-full"></span> About us
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            We are digital game-changers with a good vibe attitude. Driven by human connection and a growth mindset.
          </p>
        </div>
        <div className="md:col-span-9">
          <h2 className="text-3xl lg:text-6xl font-medium leading-relaxed text-reveal-trigger">
            Digital powerhouse for platforms & AI. We develop your digital infrastructure to accelerate business and maximize impact – on people, market and world.
          </h2>
        </div>
      </div>
      </div>
    </section>
  );
}
