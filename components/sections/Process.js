'use client';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your business goals, challenges, and opportunities. Understanding your vision is where transformation begins.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Data-driven roadmap creation. We map out the technical architecture and user experience that will drive real results.",
      icon: "🎯"
    },
    {
      number: "03",
      title: "Build",
      description: "Agile development with continuous feedback. Watch your platform come to life with cutting-edge tech and clean code.",
      icon: "⚡"
    },
    {
      number: "04",
      title: "Launch & Scale",
      description: "Smooth deployment and ongoing optimization. We don't just launch - we ensure your platform grows with your ambitions.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-[80px] bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="process">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 text-[200px] font-black text-gray-100 select-none pointer-events-none">
        PROCESS
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-daily-yellow font-bold uppercase text-xs tracking-widest mb-6">
              <span className="w-2 h-2 bg-daily-yellow rounded-full"></span> How We Work
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              FROM IDEA TO IMPACT
            </h2>
          </div>
          <div className="md:col-span-7 flex items-end">
            <p className="text-xl text-gray-600 leading-relaxed">
              Our proven process turns ambitious visions into powerful digital realities. 
              Every project is unique, but our approach is always human-centered and results-driven.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-daily-yellow hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="absolute top-8 right-8 text-7xl opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>
              <div className="text-daily-yellow text-sm font-bold mb-4">{step.number}</div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-daily-yellow transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              <div className="mt-6 w-12 h-1 bg-gray-200 group-hover:w-full group-hover:bg-daily-yellow transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
