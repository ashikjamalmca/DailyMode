'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default function Animations() {
  useEffect(() => {
    // Register plugins immediately
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Smooth scroll for nav links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: targetId, offsetY: 80 },
            ease: "power3.inOut"
          });
        });
      });

      // Hero Animations
      const tl = gsap.timeline({
        onStart: () => {
          // Mark as ready to prevent CSS hiding
          document.body.classList.add('gsap-ready');
        }
      });
      
      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      }).to(".hero-img", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2
      }, "-=0.5").to(".hero-btn, .hero-text", {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, "-=0.5");

      // Text Reveal on Scroll
      gsap.from(".text-reveal-trigger", {
        scrollTrigger: {
          trigger: ".text-reveal-trigger",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Logo Strip Stagger
      gsap.from(".logo-strip h3", {
        scrollTrigger: {
          trigger: ".logo-strip",
          start: "top 85%"
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
      });

      // Marquee Animation
      gsap.to(".marquee-inner", {
        xPercent: -50,
        repeat: -1,
        duration: 10,
        ease: "linear"
      });

      // Services Left Side Animation
      gsap.from(".service-badge-anim", {
        scrollTrigger: {
          trigger: ".service-badge-anim",
          start: "top 85%"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(".service-title-anim", {
        scrollTrigger: {
          trigger: ".service-title-anim",
          start: "top 85%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
      });

      gsap.from(".service-btn-anim", {
        scrollTrigger: {
          trigger: ".service-btn-anim",
          start: "top 85%"
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out"
      });

      // Services Items Animation
      gsap.from(".service-anim-item", {
        scrollTrigger: {
          trigger: ".service-anim-item",
          start: "top 85%"
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // Work Title Animation
      gsap.from(".work-title-anim", {
        scrollTrigger: {
          trigger: ".work-title-anim",
          start: "top 85%"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Work Button Animation
      gsap.from(".work-btn-anim", {
        scrollTrigger: {
          trigger: ".work-btn-anim",
          start: "top 85%"
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Work Items Parallax
      gsap.utils.toArray('.work-item-trigger').forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%"
          },
          y: 100,
          opacity: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out"
        });
      });

      // Culture Images Scatter
      gsap.utils.toArray('.culture-img').forEach((img) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            scrub: 1
          },
          y: 100,
          rotation: Math.random() * 10 - 5,
          opacity: 0
        });
      });

      // Sticky Navbar
      const handleScroll = () => {
        const nav = document.getElementById('navbar');
        if (nav) {
          if (window.scrollY > 50) {
            nav.classList.add('shadow-sm');
            nav.classList.replace('bg-white/80', 'bg-white/95');
          } else {
            nav.classList.remove('shadow-sm');
            nav.classList.replace('bg-white/95', 'bg-white/80');
          }
        }
      };
      window.addEventListener('scroll', handleScroll);

      // Rotation for Sticker
      const spinElements = document.querySelectorAll(".animate-spin-slow");
      if (spinElements.length > 0) {
        gsap.to(spinElements, {
          rotation: 360,
          repeat: -1,
          duration: 10,
          ease: "linear"
        });
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}
