export default function SectionBadge({ children, center = false, animate = false }) {
  return (
    <div className={`inline-flex items-center gap-2 bg-daily-yellow/10 border border-daily-yellow/30 text-daily-yellow font-bold uppercase text-xs tracking-widest px-4 py-2 rounded-full ${center ? 'mx-auto' : ''}`}>
      <span className={`w-2 h-2 bg-daily-yellow rounded-full ${animate ? 'animate-pulse' : ''}`}></span>
      {children}
    </div>
  );
}
