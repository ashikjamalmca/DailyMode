export default function Marquee() {
  return (
    <section className="py-20 overflow-hidden relative" id="campaigns">
      <div className="marquee-section absolute left-[-10%] w-[120%] bg-transparent">
        <div className="marquee-inner flex whitespace-nowrap gap-8 text-2xl md:text-4xl font-bold uppercase tracking-wider" style={{ WebkitTextStroke: '1px black', color: 'transparent' }}>
          <div className="flex gap-8 items-center">
            <span>Better Performance</span> 
            <span className="text-[#d1fa3c]" style={{ WebkitTextStroke: '0', color: '#d1fa3c' }}>☀</span> 
            <span className="text-black" style={{ WebkitTextStroke: '0', color: 'black' }}>Good Vibes</span> 
            <span className="text-[#d1fa3c]" style={{ WebkitTextStroke: '0', color: '#d1fa3c' }}>☀</span>
            <span>Better Performance</span> 
            <span className="text-[#d1fa3c]" style={{ WebkitTextStroke: '0', color: '#d1fa3c' }}>☀</span> 
            <span className="text-black" style={{ WebkitTextStroke: '0', color: 'black' }}>Good Vibes</span> 
            <span className="text-[#d1fa3c]" style={{ WebkitTextStroke: '0', color: '#d1fa3c' }}>☀</span>
          </div>
          <div className="flex gap-8 items-center">
            <span>Better Performance</span> 
            <span className="text-[#d1fa3c]" style={{ WebkitTextStroke: '0', color: '#d1fa3c' }}>☀</span> 
            <span className="text-black" style={{ WebkitTextStroke: '0', color: 'black' }}>Good Vibes</span> 
            <span className="text-[#d1fa3c]" style={{ WebkitTextStroke: '0', color: '#d1fa3c' }}>☀</span>
            <span>Better Performance</span> 
            <span className="text-[#d1fa3c]" style={{ WebkitTextStroke: '0', color: '#d1fa3c' }}>☀</span> 
            <span className="text-black" style={{ WebkitTextStroke: '0', color: 'black' }}>Good Vibes</span> 
            <span className="text-[#d1fa3c]" style={{ WebkitTextStroke: '0', color: '#d1fa3c' }}>☀</span>
          </div>
        </div>
      </div>
      <div className="h-32 md:h-48"></div>
    </section>
  );
}
