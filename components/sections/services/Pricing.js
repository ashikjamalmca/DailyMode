'use client';

export default function Pricing() {
  const toggleContact = () => {
    window.dispatchEvent(new CustomEvent('toggleContact', { detail: true }));
  };

  const packages = [
    {
      name: "Starter",
      price: "€5K - €15K",
      description: "Perfect for small businesses and startups",
      features: [
        "Landing page or simple website",
        "Responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month support"
      ],
      highlight: false
    },
    {
      name: "Professional",
      price: "€15K - €50K",
      description: "For growing businesses with bigger ambitions",
      features: [
        "Custom web application",
        "Advanced features & integrations",
        "CMS implementation",
        "Performance optimization",
        "3 months support",
        "Analytics setup"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "€50K+",
      description: "Comprehensive solutions for large organizations",
      features: [
        "Complex platform development",
        "AI/ML integration",
        "Custom architecture",
        "Dedicated team",
        "12 months support",
        "Priority support & SLA"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-[80px] bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 text-daily-yellow font-bold uppercase text-xs tracking-widest mb-6">
            <span className="w-2 h-2 bg-daily-yellow rounded-full"></span> Pricing
          </div>
          <h2 className="text-4xl xs:text-4xl xs:text-5xl lg:text-7xl font-bold mb-6">
            TRANSPARENT<br />PRICING
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the package that fits your needs. All prices are indicative and can be customized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 ${
                pkg.highlight 
                  ? 'bg-daily-yellow text-black scale-105' 
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {pkg.highlight && (
                <div className="text-xs font-bold uppercase tracking-wide mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-4xl font-black mb-4">{pkg.price}</div>
              <p className={`mb-8 ${pkg.highlight ? 'text-black/70' : 'text-gray-400'}`}>
                {pkg.description}
              </p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${pkg.highlight ? 'bg-black' : 'bg-daily-yellow'}`}></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={toggleContact}
                className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Need something custom? Let's talk about your specific requirements.
          </p>
          <button 
            onClick={toggleContact}
            className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
