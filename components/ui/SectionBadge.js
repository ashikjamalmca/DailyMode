export default function SectionBadge({ children, center = false, animate = false }) {
  return (
    <div className={`inline-flex items-center gap-2 bg-[#d1fa3c]/10 border border-[#d1fa3c]/30 text-[#d1fa3c] font-bold uppercase text-xs tracking-widest px-4 py-2 rounded-full ${center ? 'mx-auto' : ''}`}>
      <span className={`w-2 h-2 bg-[#d1fa3c] rounded-full ${animate ? 'animate-pulse' : ''}`}></span>
      {children}
    </div>
  );
}
