'use client';

import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Animations from '@/components/ui/Animations';
import ProjectOverlay from '@/components/overlays/ProjectOverlay';

export default function AllWork() {
  const [filter, setFilter] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    },
    {
      id: 'fitpro',
      title: 'FitPro',
      category: 'E-COMMERCE',
      description: 'Premium fitness equipment store',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      id: 'mindful',
      title: 'Mindful',
      category: 'AI',
      description: 'Mental wellness AI companion',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    }
  ];

  const categories = ['all', 'E-COMMERCE', 'PLATFORMS', 'AI'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openProject = (id) => {
    window.dispatchEvent(new CustomEvent('openProject', { detail: id }));
  };

  return (
    <MainLayout darkNav={true}>
      <Animations />
      
      {/* Hero */}
      <section className="min-h-[70vh] pt-32 pb-20 flex items-center relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#d1fa3c] rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#d1fa3c] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#d1fa3c]/10 text-[#d1fa3c] font-semibold uppercase text-xs tracking-widest mb-6 px-4 py-2 rounded-full border border-[#d1fa3c]/20">
              <span className="w-2 h-2 bg-[#d1fa3c] rounded-full"></span> Our Work
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8">
              ALL<br />
              <span className="text-[#d1fa3c]">WORK</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Explore our portfolio of digital experiences, platforms, and AI solutions
            </p>
          </div>
        </div>
      </section>

      <main className="bg-white pt-20 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase font-bold transition ${
                  filter === cat
                    ? 'bg-black text-white'
                    : 'border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-none ${mounted ? 'work-item-trigger' : 'opacity-0'}`}
                onClick={() => openProject(project.id)}
                style={{ animationDelay: mounted ? `${index * 0.1}s` : '0s' }}
              >
                <div className="work-card overflow-hidden rounded-lg shadow-lg relative aspect-[4/5] bg-gray-100">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute bottom-6 left-6 z-20 text-white pointer-events-none">
                    <div className="bg-black px-3 py-1 rounded-md text-[10px] font-bold tracking-wider mb-3 w-fit uppercase">
                      {project.category}
                    </div>
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                  </div>
                  <div className="absolute top-6 right-6 z-20 text-white text-sm font-bold pointer-events-none">
                    {project.year}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                  <p className="text-gray-500 text-sm font-medium">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ProjectOverlay />
    </MainLayout>
  );
}
