'use client';

import { useState } from 'react';

export default function ServicesList() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Websites & Platforms",
      icon: "🌐",
      description: "Custom websites and web applications built for performance, scalability, and user experience.",
      features: [
        "Responsive web design",
        "Progressive web apps (PWA)",
        "CMS integration",
        "Performance optimization",
        "SEO & accessibility"
      ],
      tech: ["React", "Next.js", "Node.js", "Tailwind CSS"]
    },
    {
      title: "Automation & AI",
      icon: "🤖",
      description: "Intelligent automation solutions that streamline operations and unlock new possibilities.",
      features: [
        "Process automation",
        "AI/ML integration",
        "Chatbots & virtual assistants",
        "Predictive analytics",
        "Custom AI models"
      ],
      tech: ["Python", "TensorFlow", "OpenAI", "LangChain"]
    },
    {
      title: "E-commerce Solutions",
      icon: "🛒",
      description: "Powerful online stores that convert visitors into customers and scale with your growth.",
      features: [
        "Custom webshop development",
        "Payment gateway integration",
        "Inventory management",
        "Multi-channel selling",
        "Analytics & reporting"
      ],
      tech: ["Shopify", "WooCommerce", "Stripe", "Next.js"]
    },
    {
      title: "Data & Performance",
      icon: "📊",
      description: "Data-driven insights and optimization strategies that maximize your digital ROI.",
      features: [
        "Analytics implementation",
        "Performance monitoring",
        "A/B testing",
        "Data visualization",
        "Business intelligence"
      ],
      tech: ["Google Analytics", "Mixpanel", "Tableau", "Python"]
    }
  ];

  return (
    <section className="py-[80px] bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Service Navigation */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    activeService === index
                      ? 'bg-black text-white'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl xl:text-5xl flex-shrink-0">{service.icon}</span>
                    <h3 className="text-xl xl:text-2xl font-bold">{service.title}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="text-7xl mb-6">{services[activeService].icon}</div>
              <h2 className="text-4xl font-bold mb-6">{services[activeService].title}</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wide text-black mb-4">
                  What's Included
                </h4>
                <ul className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-daily-yellow rounded-full"></span>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-black mb-4">
                  Technologies We Use
                </h4>
                <div className="flex flex-wrap gap-3">
                  {services[activeService].tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
