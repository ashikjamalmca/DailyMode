'use client';

export default function Locations() {
  const locations = [
    {
      city: "Roosendaal",
      label: "HQ",
      address: "Aanwas 35",
      postal: "4704 SC",
      phone: "+31 85 021 11 21",
      email: "roosendaal@dailymode.nl",
      hours: "Mon-Fri: 9:00 - 18:00",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      mapUrl: "https://maps.google.com"
    },
    {
      city: "Den Haag",
      label: "HUB",
      address: "Binckhorstlaan 36",
      postal: "2516 BE",
      phone: "+31 85 021 11 21",
      email: "denhaag@dailymode.nl",
      hours: "Mon-Fri: 9:00 - 18:00",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      mapUrl: "https://maps.google.com"
    }
  ];

  return (
    <section className="py-[80px] bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-daily-yellow/10 text-black font-semibold uppercase text-xs tracking-widest px-4 py-2 rounded-full border border-daily-yellow/20">
              <span className="w-2 h-2 bg-daily-yellow rounded-full"></span> Our Locations
            </div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-6">
            WHERE TO<br />FIND US
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us at one of our offices or schedule a video call
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* City Name Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl md:text-5xl font-black text-white">{location.city}</h3>
                    <span className="bg-daily-yellow text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                      {location.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-daily-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{location.address}</p>
                      <p className="text-gray-600">{location.postal}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-daily-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <a href={`tel:${location.phone}`} className="font-semibold text-gray-900 hover:text-daily-yellow transition-colors">
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-daily-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <a href={`mailto:${location.email}`} className="font-semibold text-gray-900 hover:text-daily-yellow transition-colors">
                        {location.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-daily-yellow rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🕐</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{location.hours}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full bg-black text-white py-4 rounded-full font-bold text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group/btn"
                >
                  View on Map
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white rounded-3xl p-6 xs:p-12 text-center">
          <h3 className="text-4xl font-bold mb-4">Can't Visit?</h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            No problem! We're happy to meet you virtually. Schedule a video call with our team.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('toggleContact', { detail: true }))}
            className="bg-daily-yellow text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center gap-3"
          >
            Schedule a Call
            <span>📅</span>
          </button>
        </div>
      </div>
    </section>
  );
}
