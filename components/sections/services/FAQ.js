'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex platform could take 3-6 months. We'll provide a detailed timeline during the discovery phase."
    },
    {
      question: "Do you work with startups or only established companies?",
      answer: "We work with businesses of all sizes! From early-stage startups to enterprise organizations. We tailor our approach and pricing to match your stage and budget."
    },
    {
      question: "What's included in your support packages?",
      answer: "Our support includes bug fixes, security updates, performance monitoring, and technical assistance. The duration and level of support varies by package, ranging from 1 month to 12 months."
    },
    {
      question: "Can you help with an existing project or only new builds?",
      answer: "Absolutely! We can take over existing projects, perform audits, optimize performance, add new features, or completely rebuild if needed. We're flexible and adapt to your situation."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment structures. Typically, we work with milestone-based payments (e.g., 30% upfront, 40% mid-project, 30% on completion). We can discuss what works best for your budget."
    },
    {
      question: "What makes Daily Mode different from other agencies?",
      answer: "We combine technical excellence with business understanding. We're not just coders - we're strategic partners who care about your success. Plus, we move fast without compromising quality."
    }
  ];

  return (
    <section className="py-[80px] bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 text-black font-bold uppercase text-xs tracking-widest mb-6">
            <span className="w-2 h-2 bg-daily-yellow rounded-full"></span> FAQ
          </div>
          <h2 className="text-4xl xs:text-4xl xs:text-5xl lg:text-7xl font-bold mb-6">
            GOT<br />QUESTIONS?
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-daily-yellow transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
              >
                <h3 className="text-xl md:text-2xl font-bold">{faq.question}</h3>
                <span className={`text-3xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 md:px-8 pb-6 md:pb-8 text-lg text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
