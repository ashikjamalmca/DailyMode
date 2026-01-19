// Blog articles data
// In production, this would come from a CMS or API

export const articles = {
  'ai-web-development': {
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

      <h2>Conclusion</h2>
      <p>The future of web development is collaborative—humans and AI working together to build better, faster, and more intelligent web experiences.</p>
    `
  },
  'scalable-ecommerce': {
    title: 'Building Scalable E-commerce Platforms',
    category: 'E-COMMERCE',
    excerpt: 'Best practices for creating online stores that can handle growth and scale efficiently.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    author: {
      name: 'David Park',
      role: 'Lead Developer',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    date: 'November 25, 2024',
    readTime: '7 min read',
    content: `
      <p>Building an e-commerce platform that scales isn't just about handling more traffic—it's about creating a foundation that can grow with your business.</p>

      <h2>Architecture Matters</h2>
      <p>The right architecture from day one can save you months of refactoring later. We recommend a microservices approach for medium to large e-commerce platforms.</p>

      <h2>Performance Optimization</h2>
      <p>Every millisecond counts in e-commerce. A 1-second delay can reduce conversions by 7%. Here's how to keep your store fast:</p>
      
      <ul>
        <li>Implement CDN for static assets</li>
        <li>Use lazy loading for images</li>
        <li>Optimize database queries</li>
        <li>Implement caching strategies</li>
      </ul>

      <h2>Payment Integration</h2>
      <p>Security and reliability are paramount when handling payments. We recommend using established payment gateways like Stripe or Mollie.</p>

      <h2>Conclusion</h2>
      <p>Scalability isn't an afterthought—it's a fundamental part of your e-commerce strategy from day one.</p>
    `
  },
  'nextjs-14': {
    title: 'Next.js 14: What You Need to Know',
    category: 'DEVELOPMENT',
    excerpt: 'Exploring the latest features and improvements in Next.js 14 and how to leverage them.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    author: {
      name: 'Marcus Johnson',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    date: 'November 20, 2024',
    readTime: '6 min read',
    content: `
      <p>Next.js 14 brings significant improvements to performance, developer experience, and the overall framework capabilities.</p>

      <h2>Server Actions</h2>
      <p>Server Actions are now stable, allowing you to write server-side code directly in your components without creating API routes.</p>

      <h2>Partial Prerendering</h2>
      <p>This experimental feature combines the best of static and dynamic rendering, giving you instant page loads with dynamic content.</p>

      <h2>Improved Caching</h2>
      <p>The new caching system is more predictable and gives you finer control over what gets cached and when.</p>

      <h2>Turbopack</h2>
      <p>The Rust-based bundler is getting closer to stable, promising 700x faster updates than Webpack.</p>

      <h2>Conclusion</h2>
      <p>Next.js 14 solidifies its position as the go-to framework for React applications, with improvements that benefit both developers and end users.</p>
    `
  },
  'ux-trends-2025': {
    title: 'UX Design Trends for 2025',
    category: 'DESIGN',
    excerpt: 'The design trends that will shape digital experiences in the coming year.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    author: {
      name: 'Marcus Johnson',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    date: 'November 15, 2024',
    readTime: '4 min read',
    content: `
      <p>As we head into 2025, several UX design trends are emerging that will define how we create digital experiences.</p>

      <h2>1. AI-Powered Personalization</h2>
      <p>Interfaces that adapt in real-time based on user behavior and preferences will become the norm, not the exception.</p>

      <h2>2. Minimalist Maximalism</h2>
      <p>Clean interfaces with bold, impactful moments. Think minimal layouts with strategic use of vibrant colors and animations.</p>

      <h2>3. Voice and Gesture Interfaces</h2>
      <p>As devices become more sophisticated, traditional click-and-tap interfaces will be supplemented with voice and gesture controls.</p>

      <h2>4. Sustainable Design</h2>
      <p>Designing for performance isn't just about speed—it's about reducing energy consumption and environmental impact.</p>

      <h2>5. Inclusive Design</h2>
      <p>Accessibility is no longer optional. Designing for everyone from the start is becoming standard practice.</p>

      <h2>Conclusion</h2>
      <p>The future of UX is about creating experiences that are not just beautiful, but intelligent, inclusive, and sustainable.</p>
    `
  }
};

export const getArticle = (slug) => {
  return articles[slug] || articles['ai-web-development'];
};

export const getAllArticles = () => {
  return Object.keys(articles).map(slug => ({
    slug,
    ...articles[slug]
  }));
};
