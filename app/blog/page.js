'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function BlogPage() {
  const [filter, setFilter] = useState('all');

  const articles = [
    {
      id: 1,
      slug: 'ai-web-development',
      title: 'The Future of AI in Web Development',
      category: 'AI & AUTOMATION',
      excerpt: 'How artificial intelligence is revolutionizing the way we build and optimize websites.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Sarah Chen',
      date: 'Nov 28, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      slug: 'scalable-ecommerce',
      title: 'Building Scalable E-commerce Platforms',
      category: 'E-COMMERCE',
      excerpt: 'Best practices for creating online stores that can handle growth and scale efficiently.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'David Park',
      date: 'Nov 25, 2024',
      readTime: '7 min read'
    },
    {
      id: 3,
      slug: 'nextjs-14',
      title: 'Next.js 14: What You Need to Know',
      category: 'DEVELOPMENT',
      excerpt: 'Exploring the latest features and improvements in Next.js 14 and how to leverage them.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Marcus Johnson',
      date: 'Nov 20, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      slug: 'ux-trends-2025',
      title: 'UX Design Trends for 2025',
      category: 'DESIGN',
      excerpt: 'The design trends that will shape digital experiences in the coming year.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Marcus Johnson',
      date: 'Nov 15, 2024',
      readTime: '4 min read'
    },
    {
      id: 5,
      slug: 'website-performance',
      title: 'Optimizing Website Performance',
      category: 'DEVELOPMENT',
      excerpt: 'Practical tips and techniques to make your website lightning fast.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'David Park',
      date: 'Nov 10, 2024',
      readTime: '8 min read'
    },
    {
      id: 6,
      slug: 'chatgpt-integration',
      title: 'ChatGPT Integration: A Complete Guide',
      category: 'AI & AUTOMATION',
      excerpt: 'Step-by-step guide to integrating ChatGPT into your web applications.',
      image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Emma Rodriguez',
      date: 'Nov 5, 2024',
      readTime: '10 min read'
    }
  ];

  const categories = ['all', 'AI & AUTOMATION', 'E-COMMERCE', 'DEVELOPMENT', 'DESIGN'];

  const filteredArticles = filter === 'all' 
    ? articles 
    : articles.filter(a => a.category === filter);

  return (
    <MainLayout darkNav={true}>
      
      {/* Hero */}
      <section className="min-h-[70vh] pt-32 pb-20 flex items-center relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-daily-yellow rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-daily-yellow rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-daily-yellow/10 text-daily-yellow font-semibold uppercase text-xs tracking-widest mb-6 px-4 py-2 rounded-full border border-daily-yellow/20">
              <span className="w-2 h-2 bg-daily-yellow rounded-full"></span> Insights & Articles
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8">
              <span className="text-daily-yellow">BLOG</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Thoughts, tutorials, and insights on web development, AI, design, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
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

          {/* Featured Article */}
          {filter === 'all' && (
            <a href={`/blog/${articles[0].slug}`} className="mb-16 group cursor-pointer block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img 
                    src={articles[0].image} 
                    alt={articles[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-daily-yellow text-black px-4 py-2 rounded-full text-xs font-bold uppercase">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-daily-yellow text-xs font-bold uppercase tracking-wide mb-4">
                    {articles[0].category}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-daily-yellow transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center flex-wrap gap-3 xl:gap-4 text-sm text-gray-500">
                    <span className="font-semibold">{articles[0].author}</span>
                    <span>•</span>
                    <span>{articles[0].date}</span>
                    <span>•</span>
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
              </div>
            </a>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(filter === 'all' ? 1 : 0).map((article) => (
              <a 
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group cursor-pointer block"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-daily-yellow text-xs font-bold uppercase tracking-wide mb-3">
                  {article.category}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-daily-yellow transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center flex-wrap gap-2 xl:gap-3 text-sm text-gray-500">
                  <span className="font-semibold">{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
