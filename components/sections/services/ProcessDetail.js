export default function ProcessDetail() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Discovery & Research",
      duration: "1-2 weeks",
      activities: [
        "Stakeholder interviews",
        "Market & competitor analysis",
        "User research",
        "Technical feasibility study",
        "Project roadmap creation"
      ]
    },
    {
      phase: "Phase 2",
      title: "Strategy & Design",
      duration: "2-3 weeks",
      activities: [
        "Information architecture",
        "Wireframing & prototyping",
        "UI/UX design",
        "Technical architecture",
        "Design system creation"
      ]
    },
    {
      phase: "Phase 3",
      title: "Development",
      duration: "4-8 weeks",
      activities: [
        "Agile sprint planning",
        "Frontend development",
        "Backend development",
        "API integration",
        "Quality assurance testing"
      ]
    },
    {
      phase: "Phase 4",
      title: "Launch & Optimize",
      duration: "Ongoing",
      activities: [
        "Deployment & migration",
        "Performance monitoring",
        "User feedback collection",
        "Continuous optimization",
        "Support & maintenance"
      ]
    }
  ];

  return (
    <section className="py-[80px] bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 text-black font-bold uppercase text-xs tracking-widest mb-6">
            <span className="w-2 h-2 bg-daily-yellow rounded-full"></span> Our Process
          </div>
          <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-6">
            HOW WE<br />DELIVER
          </h2>
        </div>

        <div className="space-y-8">
          {phases.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 hover:border-daily-yellow hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <div className="text-black opacity-40 text-sm font-bold mb-2">{item.phase}</div>
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
                    {item.duration}
                  </div>
                </div>
                <div className="md:col-span-8">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-daily-yellow rounded-full flex items-center justify-center text-black text-xs font-bold flex-shrink-0 mt-1">
                          {idx + 1}
                        </span>
                        <span className="text-lg">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
