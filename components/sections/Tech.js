"use client";

import { useEffect, useRef, useState } from "react";

export default function Tech() {
  const orbitRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (orbitRef.current) {
        const scrollY = window.scrollY;
        const newRotation = scrollY * 0.1;
        setRotation(newRotation);
        orbitRef.current.style.transform = `rotate(${newRotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "AI/ML" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "PostgreSQL", category: "Database" },
    { name: "GraphQL", category: "API" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind", category: "Styling" },
    { name: "Kubernetes", category: "DevOps" },
  ];

  return (
    <section className="py-[80px] bg-white relative overflow-hidden" id="tech">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 lg:gap-4 items-center">
          <div className="text-center lg:!text-left mb-20">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-daily-yellow font-bold uppercase text-xs tracking-widest mb-6">
              <span className="w-2 h-2 bg-daily-yellow rounded-full"></span>{" "}
              Technology Stack
            </div>
            <h2 className="text-4xl xs:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              BUILT WITH THE
              <br className="xl:block hidden" />
              BEST TOOLS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build scalable,
              performant, and future-proof solutions.
            </p>
          </div>

          {/* Orbit Animation */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Center Core */}
              <div className="absolute w-32 h-32 bg-black rounded-full flex items-center justify-center z-20">
                <span className="text-daily-yellow font-bold text-2xl">AI</span>
              </div>

              {/* Orbiting Technologies */}
              <div ref={orbitRef} className="absolute inset-0">
                {technologies.map((tech, index) => {
                  const angle = (index / technologies.length) * 360;
                  const radius = 200;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={index}
                      className="absolute tech-orbit-item group"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <div
                        className="w-24 h-24 bg-gray-100 rounded-full flex flex-col items-center justify-center border-2 border-gray-200 hover:border-daily-yellow hover:bg-daily-yellow hover:scale-110  cursor-pointer "
                        style={{
                          transform: `translate(-50%, -50%) rotate(-${rotation}deg)`,
                        }}
                      >
                        <span className="font-bold text-sm group-hover:text-black">
                          {tech.name}
                        </span>
                        <span className="text-xs text-gray-500 group-hover:text-black/80">
                          {tech.category}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
