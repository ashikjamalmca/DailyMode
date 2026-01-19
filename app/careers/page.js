"use client";

import MainLayout from "@/components/layout/MainLayout";

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Full-Stack Developer",
      location: "Roosendaal / Remote",
      type: "Full-time",
      department: "Engineering",
      description:
        "We're looking for an experienced full-stack developer to join our core team and work on cutting-edge projects.",
    },
    {
      title: "AI/ML Engineer",
      location: "Den Haag / Hybrid",
      type: "Full-time",
      department: "AI & Innovation",
      description:
        "Help us build the next generation of AI-powered solutions for our clients.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full-time",
      department: "Design",
      description:
        "Create beautiful, intuitive interfaces that users love. Experience with modern design tools required.",
    },
    {
      title: "Project Manager",
      location: "Roosendaal",
      type: "Full-time",
      department: "Operations",
      description:
        "Lead client projects from kickoff to delivery, ensuring quality and timely execution.",
    },
    {
      title: "Frontend Developer (React/Next.js)",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description:
        "Build responsive, performant web applications using React and Next.js.",
    },
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description:
        "Above market rates with annual reviews and performance bonuses",
    },
    {
      icon: "🏠",
      title: "Remote Flexibility",
      description:
        "Work from home, office, or anywhere. We trust you to deliver",
    },
    {
      icon: "📚",
      title: "Learning Budget",
      description:
        "€2,000/year for courses, conferences, and professional development",
    },
    {
      icon: "🏖️",
      title: "Unlimited PTO",
      description:
        "Take the time you need to recharge. Minimum 25 days encouraged",
    },
    {
      icon: "🚀",
      title: "Latest Tech",
      description:
        "MacBook Pro, external monitors, and any tools you need to excel",
    },
    {
      icon: "🎯",
      title: "Impact & Ownership",
      description:
        "Work on real projects with real impact. Your voice matters here",
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
    },
    {
      icon: "🎉",
      title: "Team Events",
      description: "Regular team outings, hackathons, and celebrations",
    },
  ];

  const toggleContact = () => {
    window.dispatchEvent(new CustomEvent("toggleContact", { detail: true }));
  };

  return (
    <MainLayout darkNav={true}>

      {/* Hero */}
      <section className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#d1fa3c] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#d1fa3c] rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[#d1fa3c] font-bold uppercase text-xs tracking-widest mb-6">
              <span className="w-2 h-2 bg-[#d1fa3c] rounded-full"></span> Join
              Our Team
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8">
              BUILD THE
              <br />
              <span className="text-[#d1fa3c]">FUTURE</span>
              <br />
              WITH US
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
              We're always looking for talented people who are passionate about
              technology, innovation, and making an impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold">
                15+ Team Members
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold">
                Remote-First
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold">
                Fast Growing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-[80px] bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-6">
              WHY DAILY MODE?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just a job. It's a place to grow, learn, and build
              amazing things.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-[80px] bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 text-[#d1fa3c] font-bold uppercase text-xs tracking-widest mb-6">
              <span className="w-2 h-2 bg-[#d1fa3c] rounded-full"></span> Open
              Positions
            </div>
            <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-6">
              JOIN OUR TEAM
            </h2>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#d1fa3c] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        📍 {job.location}
                      </span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span className="text-[#d1fa3c] font-semibold">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={toggleContact}
                    className="bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform whitespace-nowrap md:block hidden"
                  >
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {job.description}
                </p>

                <button
                  onClick={toggleContact}
                  className="bg-black text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform whitespace-nowrap mt-3 w-full md:hidden"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {/* Don't see your role? */}
          <div className="mt-16 text-center bg-black text-white rounded-2xl p-6 md:p-12">
            <h3 className="text-3xl font-bold mb-4">Don't See Your Role?</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always open to meeting talented people. Send us your resume
              and let's talk.
            </p>
            <button
              onClick={toggleContact}
              className="bg-[#d1fa3c] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
