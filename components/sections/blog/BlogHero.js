export default function BlogHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-daily-yellow font-bold uppercase text-xs tracking-widest mb-6">
            <span className="w-2 h-2 bg-daily-yellow rounded-full"></span> Insights & Articles
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            DAILY<br />INSIGHTS
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Thoughts on technology, design, business, and the future of digital
          </p>
        </div>
      </div>
    </section>
  );
}
