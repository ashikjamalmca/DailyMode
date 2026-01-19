'use client';

export default function Footer() {
  const toggleContact = () => {
    window.dispatchEvent(new CustomEvent('toggleContact', { detail: true }));
  };

  return (
    <footer className="bg-black text-white pt-24 pb-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-5xl xl:text-7xl font-bold tracking-tight mb-8">
            We're ready to make impact<br />
            <span className="text-gray-500">for your brand.</span>
          </h2>
          <div className="flex items-center flex-wrap sm:!flex-nowrap gap-4">
            <h3 className="text-3xl font-bold">Code Promise<span className="text-daily-yellow">*</span></h3>
            <button onClick={toggleContact} className="border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              START MY JOURNEY
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-400">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-2">Pages</h4>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/services" className="hover:text-white transition">Services</a>
            <a href="/work" className="hover:text-white transition">Work</a>
            <a href="/blog" className="hover:text-white transition">Blog</a>
            <a href="/careers" className="hover:text-white transition">Careers</a>
            <a href="/pricing" className="hover:text-white transition">Pricing</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-2">Contact</h4>
            <button onClick={toggleContact} className="hover:text-white transition text-left">Get In Touch</button>
            <a href="mailto:hello@code promise.nl" className="hover:text-white transition">hello@code promise.nl</a>
            <a href="tel:+31850211121" className="hover:text-white transition">+31 85 021 11 21</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-2">Locations</h4>
            <p>Roosendaal (HQ)</p>
            <p>Aanwas 35, 4704 SC</p>
            <br />
            <p>Den Haag (HUB)</p>
            <p>Binckhorstlaan 36</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <div className="flex gap-4">
          <span>© 2025 Code Promise — All rights reserved</span>
        </div>
        <div className="flex gap-4">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Settings</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-500">❤</span> Founded on good vibes
        </div>
      </div>
      </div>
    </footer>
  );
}
