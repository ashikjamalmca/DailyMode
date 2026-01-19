export default function Culture() {
  return (
    <section className="py-[80px] relative overflow-hidden" id="culture">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
      <div className="absolute top-10 left-10 md:left-1/4 w-40 h-56 rotate-[-6deg] z-10 culture-img">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover rounded shadow-lg border-4 border-white" />
      </div>
      <div className="absolute bottom-20 right-10 md:right-1/4 w-64 h-40 rotate-[3deg] z-10 culture-img">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover rounded shadow-lg border-4 border-white" />
      </div>

      <div className="absolute top-1/3 right-[15%] z-20 animate-spin-slow">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
          <text width="500" fill="red" fontWeight="bold" fontSize="14">
            <textPath xlinkHref="#curve">DAILY MODE * DAILY MODE * DAILY MODE *</textPath>
          </text>
          <circle cx="50" cy="50" r="20" fill="red" />
        </svg>
      </div>

      <div className="relative z-30 text-center">
        <h2 className="text-[10vw] font-bold tracking-tighter leading-none bg-white/50 backdrop-blur-sm inline-block rounded-xl px-4">
          FOR THE<br />CULTURE
        </h2>
        <div className="mt-8">
          <button className="bg-white border border-gray-200 px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition transform font-semibold">
            Discover Culture
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 md:left-[15%] w-64 bg-black text-white p-4 rounded-xl shadow-2xl flex items-center gap-4 z-20 culture-img">
        <div className="w-12 h-12 bg-daily-yellow rounded flex items-center justify-center text-black font-bold">vibes</div>
        <div>
          <div className="text-xs text-gray-400">Now Playing</div>
          <div className="font-bold text-sm">We Are The People</div>
        </div>
      </div>
      </div>
    </section>
  );
}
