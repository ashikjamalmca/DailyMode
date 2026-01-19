'use client';

import { useEffect, useRef } from 'react';

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "Daily Mode transformed our digital infrastructure. Their AI solutions increased our efficiency by 300%.",
      author: "Sarah Chen",
      role: "CEO, TechVision",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Working with this team feels like having a secret weapon. They understand both tech and business.",
      author: "Marcus Johnson",
      role: "Founder, StartupHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The platform they built scaled with us from 1K to 1M users. Incredible engineering.",
      author: "Lisa van Berg",
      role: "CTO, GrowthCo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Not just developers - strategic partners who care about our success as much as we do.",
      author: "David Park",
      role: "Director, InnovateLab",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-[80px] bg-black text-white overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-16">
        <div className="flex items-center gap-2 text-[#d1fa3c] font-bold uppercase text-xs tracking-widest mb-6">
          <span className="w-2 h-2 bg-[#d1fa3c] rounded-full"></span> Testimonials
        </div>
        <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold tracking-tight">
          TRUSTED BY<br />INNOVATORS
        </h2>
      </div>

      <div ref={scrollRef} className="flex gap-8 overflow-x-hidden whitespace-nowrap px-6">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="inline-block w-[90vw] md:w-[600px] lg:w-[700px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-12 hover:bg-white/10 transition-all duration-300 group flex-shrink-0">
            <div className="flex items-start gap-6 mb-8">
              <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full object-cover grayscale group-hover:grayscale-0 transition flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xl md:text-2xl">{testimonial.author}</h4>
                <p className="text-gray-400 text-base">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed whitespace-normal text-gray-300 group-hover:text-white transition">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
