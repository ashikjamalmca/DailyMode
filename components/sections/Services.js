export default function Services() {
  return (
    <section className="py-20 bg-gray-50" id="talks">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div id="automation">
          <div className="flex items-center gap-2 text-[#d1fa3c] font-bold uppercase text-xs tracking-widest mb-6 service-badge-anim">
            <span className="w-2 h-2 bg-[#d1fa3c] rounded-full"></span> Expertise
          </div>
          <h3 className="text-3xl font-bold leading-tight mb-6 service-title-anim">
            Multi-disciplinary teams working on your business goals.
          </h3>
          <button className="border border-black px-6 py-3 rounded-full text-sm font-bold hover:bg-black hover:text-white transition service-btn-anim">
            OUR SERVICES
          </button>
        </div>

        <div className="space-y-6 text-right">
          <div className="service-item service-anim-item border-b border-gray-200 pb-6 group cursor-pointer">
            <h2 className="text-4xl md:text-5xl text-gray-300 font-light group-hover:text-black group-hover:font-medium transition-all duration-300">
              Websites
            </h2>
          </div>
          <div className="service-item service-anim-item border-b border-gray-200 pb-6 group cursor-pointer">
            <h2 className="text-4xl md:text-5xl text-gray-300 font-light group-hover:text-black group-hover:font-medium transition-all duration-300">
              Automation & AI
            </h2>
          </div>
          <div className="service-item service-anim-item border-b border-gray-200 pb-6 group cursor-pointer">
            <h2 className="text-4xl md:text-5xl text-gray-300 font-light group-hover:text-black group-hover:font-medium transition-all duration-300">
              Webshops
            </h2>
          </div>
          <div className="service-item service-anim-item border-b border-gray-200 pb-6 group cursor-pointer">
            <h2 className="text-4xl md:text-5xl text-gray-300 font-light group-hover:text-black group-hover:font-medium transition-all duration-300">
              Data & Performance
            </h2>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
