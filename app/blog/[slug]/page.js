'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { getArticle } from '@/lib/blogData';

export default function BlogArticle() {
  const params = useParams();
  const slug = params.slug;

  // Reading progress bar
  useEffect(() => {
    const updateProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('reading-progress');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  // Get article data
  const article = getArticle(slug) || {
    title: 'The Future of AI in Web Development',
    category: 'AI & AUTOMATION',
    excerpt: 'How artificial intelligence is revolutionizing the way we build and optimize websites.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    author: {
      name: 'Sarah Chen',
      role: 'CTO',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    date: 'November 28, 2024',
    readTime: '5 min read',
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming web development in ways we couldn't have imagined just a few years ago.</p>

      <h2>The Current State of AI in Web Development</h2>
      <p>Today's AI tools are helping developers write code faster, debug more efficiently, and create more personalized user experiences. From GitHub Copilot suggesting code completions to ChatGPT helping solve complex problems, AI has become an indispensable part of the modern developer's toolkit.</p>

      <h2>Key Areas of Impact</h2>
      
      <h3>1. Code Generation and Assistance</h3>
      <p>AI-powered code assistants can now understand context, suggest entire functions, and even refactor code. This doesn't replace developers—it makes them more productive and allows them to focus on higher-level problems.</p>

      <h3>2. Automated Testing</h3>
      <p>AI can generate test cases, identify edge cases humans might miss, and even predict where bugs are likely to occur based on code patterns.</p>

      <h3>3. Personalization at Scale</h3>
      <p>Machine learning models can analyze user behavior in real-time and adapt the user experience accordingly. This level of personalization was previously only available to companies with massive resources.</p>

      <h3>4. Performance Optimization</h3>
      <p>AI tools can analyze your website's performance and suggest optimizations, from image compression to code splitting strategies.</p>

      <h2>What's Coming Next</h2>
      <p>The next wave of AI in web development will be even more transformative:</p>
      
      <ul>
        <li><strong>Natural Language Interfaces:</strong> Building websites by describing what you want in plain English</li>
        <li><strong>Autonomous Debugging:</strong> AI that can identify and fix bugs without human intervention</li>
        <li><strong>Predictive UX:</strong> Interfaces that adapt before users even realize what they need</li>
        <li><strong>AI-Driven Design Systems:</strong> Design systems that evolve based on user interaction data</li>
      </ul>

      <h2>The Human Element</h2>
      <p>Despite all these advances, the human element remains crucial. AI is a tool that amplifies human creativity and problem-solving—it doesn't replace it. The best results come from developers who understand both the technology and the human needs it serves.</p>

      <h2>Getting Started</h2>
      <p>If you're looking to integrate AI into your web development workflow, start small:</p>
      
      <ol>
        <li>Try AI code assistants like GitHub Copilot or Cursor</li>
        <li>Experiment with ChatGPT for problem-solving and learning</li>
        <li>Explore AI-powered analytics tools for your websites</li>
        <li>Consider how personalization could improve your user experience</li>
      </ol>

      <h2>Conclusion</h2>
      <p>The future of web development is collaborative—humans and AI working together to build better, faster, and more intelligent web experiences. The question isn't whether to adopt AI, but how to do it thoughtfully and effectively.</p>

      <p>At Daily Mode, we're at the forefront of this revolution, helping our clients leverage AI to build next-generation web experiences. If you're curious about how AI could transform your digital presence, let's talk.</p>
    `
  };

  const relatedArticles = [
    {
      title: 'Building Scalable E-commerce Platforms',
      category: 'E-COMMERCE',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'scalable-ecommerce'
    },
    {
      title: 'Next.js 14: What You Need to Know',
      category: 'DEVELOPMENT',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'nextjs-14'
    },
    {
      title: 'UX Design Trends for 2025',
      category: 'DESIGN',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      slug: 'ux-trends-2025'
    }
  ];

  return (
    <MainLayout>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-100">
        <div className="h-full bg-black transition-all duration-150" style={{ width: '0%' }} id="reading-progress"></div>
      </div>
      
      {/* Hero */}
      <article className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          {/* Back Button */}
          <button 
            onClick={() => window.history.back()}
            className="mb-12 flex items-center gap-2 text-gray-500 hover:text-black transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="text-sm font-medium">Back</span>
          </button>

          {/* Category & Meta */}
          <div className="flex items-center flex-wrap gap-4 mb-8 text-sm">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{article.date}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{article.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-12 max-w-4xl">
            {article.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 mb-16">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-base">{article.author.name}</p>
              <p className="text-sm text-gray-500">{article.author.role}</p>
            </div>
          </div>
        </div>

        {/* Featured Image - Full Width */}
        <div className="relative w-full aspect-[21/9] mb-16 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none article-content
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:leading-tight
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-gray-900
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
              prose-ul:my-8 prose-ul:space-y-3
              prose-ol:my-8 prose-ol:space-y-3
              prose-li:text-gray-700 prose-li:leading-relaxed prose-li:marker:text-gray-400
              prose-strong:text-black prose-strong:font-semibold
              prose-a:text-black prose-a:underline prose-a:decoration-gray-300 hover:prose-a:decoration-black
              prose-blockquote:border-l-4 prose-blockquote:border-gray-900 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share */}
          <div className="mt-20 pt-12 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-900 mb-6">
              Share this article
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="border border-gray-300 hover:border-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                Twitter
              </button>
              <button className="border border-gray-300 hover:border-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                LinkedIn
              </button>
              <button className="border border-gray-300 hover:border-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                Facebook
              </button>
              <button className="border border-gray-300 hover:border-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((related, index) => (
              <a 
                key={index}
                href={`/blog/${related.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                  <img 
                    src={related.image} 
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {related.category}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-gray-600 transition-colors">
                  {related.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

    </MainLayout>
  );
}
