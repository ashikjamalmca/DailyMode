'use client';

import { useParams } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import CTA from '@/components/sections/CTA';

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;

  // Project data - in real app this would come from API/CMS
  const projects = {
    'wristler': {
      title: 'Wristler',
      tagline: 'Premium Watch Marketplace',
      category: 'E-COMMERCE',
      year: '2024',
      client: 'Wristler B.V.',
      services: ['E-commerce Development', 'UI/UX Design', 'Payment Integration', 'SEO Optimization'],
      hero: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      challenge: 'Wristler needed a sophisticated e-commerce platform to connect watch enthusiasts with premium timepieces. The challenge was creating a trustworthy marketplace that could handle high-value transactions while providing an exceptional user experience.',
      solution: 'We built a custom Next.js platform with advanced filtering, secure payment processing, and a verification system for sellers. The design emphasizes luxury and trust, with high-quality imagery and smooth interactions.',
      results: [
        { metric: '5,500+', label: 'Watch Listings' },
        { metric: '€2.5M+', label: 'Transaction Volume' },
        { metric: '98%', label: 'User Satisfaction' },
        { metric: '45%', label: 'Mobile Traffic' }
      ],
      tech: ['Next.js', 'React', 'Node.js', 'Stripe', 'PostgreSQL', 'AWS'],
      images: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      testimonial: {
        quote: 'Daily Mode transformed our vision into reality. The platform they built exceeded our expectations in every way.',
        author: 'Jan van der Berg',
        role: 'Founder, Wristler'
      }
    },
    'urban': {
      title: 'Urban Creative',
      tagline: 'Digital Partnership Platform',
      category: 'PLATFORMS',
      year: '2024',
      client: 'Urban Creative Agency',
      services: ['Web Development', 'CMS Integration', 'Performance Optimization', 'Brand Integration'],
      hero: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      challenge: 'Urban Creative needed a modern web presence that showcased their portfolio while being easy to update. Performance and visual impact were critical.',
      solution: 'We developed a headless CMS solution with Next.js, allowing their team to easily manage content while maintaining blazing-fast performance. Custom animations and transitions bring their work to life.',
      results: [
        { metric: '2.1s', label: 'Page Load Time' },
        { metric: '95+', label: 'Lighthouse Score' },
        { metric: '180%', label: 'Traffic Increase' },
        { metric: '4.2min', label: 'Avg. Session' }
      ],
      tech: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      testimonial: {
        quote: 'The team at Daily Mode understood our vision perfectly. They delivered a website that truly represents our brand.',
        author: 'Sarah Martinez',
        role: 'Creative Director, Urban Creative'
      }
    },
    'techflow': {
      title: 'TechFlow',
      tagline: 'AI-Powered Workflow Automation',
      category: 'AI',
      year: '2024',
      client: 'TechFlow Solutions',
      services: ['AI Integration', 'Custom Development', 'API Development', 'Cloud Architecture'],
      hero: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      challenge: 'TechFlow wanted to automate repetitive tasks in their workflow using AI. The system needed to be intelligent, reliable, and easy to use.',
      solution: 'We built a custom AI platform using GPT-4 and custom ML models. The system learns from user behavior and automates tasks with high accuracy. Integration with existing tools was seamless.',
      results: [
        { metric: '70%', label: 'Time Saved' },
        { metric: '95%', label: 'Accuracy Rate' },
        { metric: '€150K', label: 'Annual Savings' },
        { metric: '50+', label: 'Automated Tasks' }
      ],
      tech: ['Python', 'OpenAI GPT-4', 'TensorFlow', 'FastAPI', 'Docker', 'AWS'],
      images: [
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      testimonial: {
        quote: 'The AI solution Daily Mode built has transformed how we work. It\'s like having an extra team member.',
        author: 'Michael Chen',
        role: 'CTO, TechFlow Solutions'
      }
    }
  };

  const project = projects[slug] || projects['wristler'];

  return (
    <MainLayout>
      
      {/* Hero */}
      <section className="min-h-screen pt-32 pb-20 flex items-end relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img 
            src={project.hero} 
            alt={project.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 pb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-daily-yellow text-black px-4 py-2 rounded-full text-xs font-bold uppercase">
              {project.category}
            </span>
            <span className="text-gray-400">{project.year}</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-[80px] bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">Client</h3>
              <p className="text-xl font-semibold">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">Year</h3>
              <p className="text-xl font-semibold">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">Services</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-[80px] bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">The Challenge</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Solution</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-[80px] bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-20 text-center">The Results</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-daily-yellow mb-4">
                  {result.metric}
                </div>
                <div className="text-lg text-gray-400">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-[80px] bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-[80px] bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.tech.map((tech, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-200 px-6 py-3 rounded-full text-lg font-bold hover:border-daily-yellow transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-[80px] bg-daily-yellow">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <div className="text-6xl mb-8">"</div>
          <p className="text-3xl md:text-4xl font-bold mb-12 leading-relaxed">
            {project.testimonial.quote}
          </p>
          <div>
            <p className="text-xl font-bold">{project.testimonial.author}</p>
            <p className="text-lg text-black/70">{project.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </MainLayout>
  );
}
