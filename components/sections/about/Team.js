export default function Team() {
  const team = [
    {
      name: "Alex van der Berg",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Visionary leader with 10+ years in digital transformation"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Tech architect specializing in AI and scalable systems"
    },
    {
      name: "Marcus Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Award-winning designer with a passion for user experience"
    },
    {
      name: "Lisa de Vries",
      role: "Head of Strategy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Strategic thinker connecting business goals with tech solutions"
    },
    {
      name: "David Park",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Full-stack expert building robust and elegant solutions"
    },
    {
      name: "Emma Rodriguez",
      role: "AI Specialist",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Machine learning engineer pushing the boundaries of AI"
    }
  ];

  return (
    <section className="py-[80px] bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-daily-yellow/10 text-black font-semibold uppercase text-xs tracking-widest px-4 py-2 rounded-full border border-daily-yellow/20">
              <span className="w-2 h-2 bg-daily-yellow rounded-full"></span> Our Team
            </div>
          </div>
          <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-6">
            MEET THE<br />MAKERS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse team of experts united by passion for innovation and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-300 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
