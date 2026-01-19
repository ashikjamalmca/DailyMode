'use client';

import Link from 'next/link';

export default function Work() {
  const openProject = (id) => {
    window.dispatchEvent(new CustomEvent('openProject', { detail: id }));
  };

  const projects = [
    {
      id: 'wristler',
      title: 'Wristler',
      category: 'E-COMMERCE',
      description: '+5,500 watch listings after launch',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2024'
    },
    {
      id: 'urban',
      title: 'Urban Creative',
      category: 'PLATFORMS',
      description: 'A digital partnership',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2024'
    },
    {
      id: 'techflow',
      title: 'TechFlow',
      category: 'AI',
      description: 'AI-powered workflow automation',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2024'
    },
    {
      id: 'greenspace',
      title: 'GreenSpace',
      category: 'PLATFORMS',
      description: 'Sustainable living marketplace',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    }
  ];

  return (
    <section className="py-24 bg-white" id="cases">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Our Work</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Selected projects showcasing our team's expertise
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => openProject(project.id)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4 text-white text-sm font-bold bg-black/50 px-3 py-1 rounded-full">
                  {project.year}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Link href="/work">
            <button className="border border-gray-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
              View All Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
