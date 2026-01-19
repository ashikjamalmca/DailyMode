'use client';
import { useEffect, useState } from 'react';

const projects = {
  wristler: {
    title: 'Wristler',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Building the future of luxury watch trading. Wristler connects buyers and sellers in a secure environment. We helped them scale to over 5,500 watch listings shortly after launch by creating a seamless, high-trust digital platform that emphasizes authenticity and ease of use.',
    services: ['Digital Strategy', 'UX/UI Design', 'Web Development', 'Performance Marketing'],
    client: 'Partnership since 2023'
  },
  urban: {
    title: 'Urban Creative',
    category: 'Platforms',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'A digital partnership transforming interior design. We created a platform that connects designers with clients, streamlining the creative process. The platform features real-time 3D visualization, mood board collaboration, and a direct marketplace for furniture sourcing.',
    services: ['Platform Development', 'UX/UI Design', '3D Visualization', 'Marketplace Integration'],
    client: 'Partnership since 2024'
  },
  techflow: {
    title: 'TechFlow',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Revolutionizing workflow automation with AI. TechFlow uses machine learning to optimize business processes, reducing manual tasks by 70%. We built an intelligent system that learns from user behavior and continuously improves efficiency across teams.',
    services: ['AI Development', 'Machine Learning', 'Process Automation', 'Data Analytics'],
    client: 'Partnership since 2024'
  },
  greenspace: {
    title: 'GreenSpace',
    category: 'Platforms',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Creating a sustainable living marketplace. GreenSpace connects eco-conscious consumers with sustainable products and services. We developed a platform that tracks environmental impact, rewards green choices, and builds a community around sustainable living.',
    services: ['Platform Development', 'Sustainability Tracking', 'Community Features', 'Mobile App'],
    client: 'Partnership since 2023'
  },
  fitpro: {
    title: 'FitPro',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Premium fitness equipment for serious athletes. FitPro offers high-quality gym equipment with personalized recommendations. We created an immersive shopping experience with AR product visualization and expert workout guides integrated into the platform.',
    services: ['E-Commerce Development', 'AR Integration', 'Content Strategy', 'Performance Optimization'],
    client: 'Partnership since 2023'
  },
  mindful: {
    title: 'Mindful',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Your AI companion for mental wellness. Mindful uses conversational AI to provide personalized mental health support, meditation guidance, and mood tracking. We built an empathetic AI that adapts to individual needs while maintaining privacy and trust.',
    services: ['AI Development', 'Natural Language Processing', 'Mobile App', 'Privacy & Security'],
    client: 'Partnership since 2023'
  }
};

export default function ProjectOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const handleOpen = (e) => {
      const projectId = e.detail;
      const project = projects[projectId];
      if (project) {
        setCurrentProject(project);
        setIsOpen(true);
      }
    };
    window.addEventListener('openProject', handleOpen);
    return () => window.removeEventListener('openProject', handleOpen);
  }, []);

  const closeProject = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('project-open');
      // Trigger animation by adding class
      requestAnimationFrame(() => {
        const items = document.querySelectorAll('.project-anim-item');
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('project-anim-active');
          }, index * 80);
        });
      });
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('project-open');
      // Reset animation state
      const items = document.querySelectorAll('.project-anim-item');
      items.forEach(item => {
        item.classList.remove('project-anim-active');
      });
    }
  }, [isOpen]);

  if (!currentProject) return null;

  return (
    <div id="project-overlay" className={`fixed inset-0 bg-white z-[70] overflow-y-auto transition-all duration-700 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'}`}>
      <button onClick={closeProject} className="absolute top-8 right-8 z-50 text-black hover:scale-110 transition-transform group flex items-center gap-2">
        <span className="text-sm font-bold uppercase tracking-widest hidden md:block text-gray-500 group-hover:text-black">Close Case</span>
        <div className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center group-hover:border-black transition-colors bg-white">✕</div>
      </button>

      <div className="min-h-screen pt-32 px-6 md:px-20 pb-20 max-w-7xl mx-auto">
        <div className="project-anim-item">
          <span className="inline-block px-4 py-1.5 border border-black rounded-md text-[10px] font-bold uppercase mb-8 tracking-widest bg-black text-white">
            {currentProject.category}
          </span>
        </div>

        <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter mb-12 leading-none project-anim-item">
          {currentProject.title}
        </h1>

        <div className="relative w-full h-[60vh] mb-16 overflow-hidden rounded-2xl shadow-2xl project-anim-item">
          <img src={currentProject.image} className="w-full h-full object-cover" alt={currentProject.title} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 project-anim-item">
          <div className="md:col-span-8">
            <h3 className="text-2xl font-bold mb-6">The Story</h3>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
              {currentProject.desc}
            </p>
            <div className="mt-12 flex gap-4">
              <button className="bg-[#d1fa3c] px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                Visit Website
              </button>
            </div>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Services</h3>
              <ul className="space-y-2 text-lg font-medium border-l-2 border-gray-100 pl-4">
                {currentProject.services?.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Client</h3>
              <p className="text-lg font-medium border-l-2 border-gray-100 pl-4">{currentProject.client}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
