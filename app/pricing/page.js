'use client';

import MainLayout from '@/components/layout/MainLayout';
import Pricing from '@/components/sections/services/Pricing';
import FAQ from '@/components/sections/services/FAQ';

export default function PricingPage() {
  const toggleContact = () => {
    window.dispatchEvent(new CustomEvent('toggleContact', { detail: true }));
  };

  const comparison = [
    {
      feature: 'Custom Design',
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      feature: 'Responsive Development',
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      feature: 'SEO Optimization',
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Enterprise'
    },
    {
      feature: 'CMS Integration',
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      feature: 'E-commerce Features',
      starter: false,
      professional: 'Basic',
      enterprise: 'Advanced'
    },
    {
      feature: 'AI/ML Integration',
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      feature: 'Custom Integrations',
      starter: '1',
      professional: '3',
      enterprise: 'Unlimited'
    },
    {
      feature: 'Support Duration',
      starter: '1 month',
      professional: '3 months',
      enterprise: '12 months'
    },
    {
      feature: 'Priority Support',
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      feature: 'Dedicated Team',
      starter: false,
      professional: false,
      enterprise: true
    }
  ];

  const renderValue = (value) => {
    if (value === true) return <span className="text-[#d1fa3c] text-2xl">✓</span>;
    if (value === false) return <span className="text-gray-300 text-xl">—</span>;
    return <span className="text-sm font-semibold">{value}</span>;
  };

  return (
    <MainLayout>
      
      {/* Hero */}
      <section className="min-h-[70vh] pt-32 pb-20 flex items-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-[#d1fa3c] font-bold uppercase text-xs tracking-widest mb-6">
              <span className="w-2 h-2 bg-[#d1fa3c] rounded-full"></span> Pricing
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8">
              SIMPLE,<br />
              TRANSPARENT<br />
              PRICING
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Choose the package that fits your needs. All prices are starting points and can be customized to your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Pricing />

      {/* Comparison Table */}
      <section className="py-[80px] bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-6">
              COMPARE<br />PACKAGES
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what's included in each package
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-6 px-4 font-bold text-lg">Feature</th>
                  <th className="text-center py-6 px-4 font-bold text-lg">Starter</th>
                  <th className="text-center py-6 px-4 font-bold text-lg bg-[#d1fa3c]/10">Professional</th>
                  <th className="text-center py-6 px-4 font-bold text-lg">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-6 px-4 font-medium">{item.feature}</td>
                    <td className="py-6 px-4 text-center">{renderValue(item.starter)}</td>
                    <td className="py-6 px-4 text-center bg-[#d1fa3c]/5">{renderValue(item.professional)}</td>
                    <td className="py-6 px-4 text-center">{renderValue(item.enterprise)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={toggleContact}
              className="bg-black text-white px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="py-[80px] bg-[#d1fa3c]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold mb-8">
            READY TO<br />GET STARTED?
          </h2>
          <p className="text-xl text-black/80 mb-12">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <button 
            onClick={toggleContact}
            className="bg-black text-white px-12 py-6 rounded-full text-lg font-bold hover:scale-105 transition-transform"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </MainLayout>
  );
}
