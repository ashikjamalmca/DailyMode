'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const gridSize = 40;
    const cols = Math.ceil(window.innerWidth / gridSize);
    const rows = Math.ceil(window.innerHeight / gridSize);

    // Create grid cells
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.style.width = `${gridSize}px`;
      cell.style.height = `${gridSize}px`;
      grid.appendChild(cell);
    }

    // Animate random cells
    const animateRandomCell = () => {
      const cells = grid.querySelectorAll('.grid-cell');
      const randomIndex = Math.floor(Math.random() * cells.length);
      const cell = cells[randomIndex];
      
      cell.style.backgroundColor = '#d1fa3c';
      cell.style.opacity = '0.6';
      
      setTimeout(() => {
        cell.style.opacity = '0';
        setTimeout(() => {
          cell.style.backgroundColor = 'transparent';
        }, 500);
      }, 800);
    };

    const interval = setInterval(animateRandomCell, 200);

    return () => {
      clearInterval(interval);
      grid.innerHTML = '';
    };
  }, []);

  const toggleContact = () => {
    window.dispatchEvent(new CustomEvent('toggleContact', { detail: true }));
  };

  return (
    <section className="md:min-h-screen minWH700:!h-[670px] minWH700:!min-h-full pt-32 flex flex-col items-center relative overflow-hidden" id="platforms">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Animated Grid Cells */}
      <div ref={gridRef} className="absolute inset-0 flex flex-wrap pointer-events-none" style={{ gap: 0 }}></div>
      
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative flex flex-col items-center md:min-h-[calc(100vh-8rem)]">
      <div className="md:block hidden absolute top-1/3 minWH700:!top-[13%] left-[4%] xl:left-0 w-40 xs:w-48 h-56 xs:h-64 overflow-hidden rounded-lg shadow-xl parallax-img z-0 opacity-0 hero-img animate-float">
        <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" alt="Team" />
      </div>

      <div className="hidden absolute bottom-[15%] minWH700:!bottom-[60%] right-0 md:flex flex-col items-end gap-4 z-10 opacity-0 hero-img max-w-xs animate-float-slow">
        <div className="w-40 xl:w-48 h-40 xl:h-48 md:w-56 md:h-56 parallax-img relative">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition duration-500 hover:scale-105" alt="Abstract 3D Shape" />
          <div className="absolute -inset-4 bg-gray-200/50 rounded-full blur-xl -z-10"></div>
        </div>
      </div>

      <div className="z-20 text-center mt-10 pb-6 md:mt-20 mix-blend-multiply">
        <div className="overflow-hidden">
          <h1 className="hero-title text-[14vw] md:text-[12vw] xl:text-[175px] leading-[0.9] font-extrabold tracking-tighter uppercase text-black">FOR THE</h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-title text-[14vw] md:text-[12vw] xl:text-[175px] leading-[0.9] font-extrabold tracking-tighter uppercase text-black">FUTURE</h1>
        </div>
        <div className="mt-8 opacity-0 hero-btn">
          <button onClick={toggleContact} className="border border-gray-300 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 group mx-auto bg-white/50 backdrop-blur-sm">
            Challenge Us <span className="group-hover:rotate-90 transition-transform duration-300">↓</span>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
