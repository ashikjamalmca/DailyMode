export default function OurStory() {
  return (
    <section className="py-[80px] bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-daily-yellow mb-8"></div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2020, Code Promise started with a simple mission: to bridge the gap between cutting-edge technology and real business impact. We saw too many companies struggling with digital transformation, not because of lack of ambition, but because of lack of the right partner.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Growth</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                What began as a small team of three has grown into a powerhouse of 15+ specialists. We've delivered 50+ projects across industries, from startups to established enterprises. Each project taught us something new, making us better partners for the next challenge.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Today & Tomorrow</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're not just building websites and apps. We're architecting digital ecosystems, implementing AI solutions, and creating platforms that scale. But we're just getting started. The future of digital is being written now, and we're here to write it with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
