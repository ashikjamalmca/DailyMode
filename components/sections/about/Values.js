export default function Values() {
  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We don't follow trends, we set them. Always exploring new technologies and approaches to solve problems better."
    },
    {
      icon: "🤝",
      title: "Human Connection",
      description: "Technology serves people. We build with empathy, understanding that behind every project are real humans with real needs."
    },
    {
      icon: "💡",
      title: "Growth Mindset",
      description: "We're always learning, always improving. Every challenge is an opportunity to level up our skills and knowledge."
    },
    {
      icon: "⚡",
      title: "Speed & Quality",
      description: "Fast delivery doesn't mean cutting corners. We move quickly while maintaining the highest standards of quality."
    },
    {
      icon: "🎯",
      title: "Results Driven",
      description: "Beautiful code and design matter, but what matters most is delivering measurable business impact for our clients."
    },
    {
      icon: "🌍",
      title: "Sustainable Impact",
      description: "We build for the long term. Our solutions are scalable, maintainable, and designed to grow with your business."
    }
  ];

  return (
    <section className="py-[80px] bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#d1fa3c]/10 text-[#d1fa3c] font-semibold uppercase text-xs tracking-widest px-4 py-2 rounded-full border border-[#d1fa3c]/20">
              <span className="w-2 h-2 bg-[#d1fa3c] rounded-full"></span> Our Values
            </div>
          </div>
          <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-6">
            WHAT WE<br />STAND FOR
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#d1fa3c] transition-all duration-300 group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#d1fa3c] transition-colors">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
