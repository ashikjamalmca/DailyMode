export default function FeaturedPost() {
  const featured = {
    title: "The Future of AI in Web Development",
    excerpt: "How artificial intelligence is transforming the way we build digital products, and what it means for developers and businesses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "AI & Technology",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    author: {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="bg-black text-white rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <img 
                src={featured.image} 
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-daily-yellow text-black px-4 py-2 rounded-full text-sm font-bold">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-daily-yellow text-sm font-bold uppercase tracking-wide mb-4">
                {featured.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {featured.title}
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {featured.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={featured.author.image} 
                    alt={featured.author.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-bold">{featured.author.name}</div>
                    <div className="text-sm text-gray-400">{featured.author.role}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  {featured.date} · {featured.readTime}
                </div>
              </div>
              
              <button className="mt-8 bg-daily-yellow text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-2 group w-fit">
                Read Article
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
