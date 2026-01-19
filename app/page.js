import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Marquee from '@/components/sections/Marquee';
import Work from '@/components/sections/Work';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Tech from '@/components/sections/Tech';
import Testimonials from '@/components/sections/Testimonials';
import Culture from '@/components/sections/Culture';
import CTA from '@/components/sections/CTA';
import ProjectOverlay from '@/components/overlays/ProjectOverlay';
import Animations from '@/components/ui/Animations';

export default function Home() {
  return (
    <MainLayout>
      <Animations />
      <Hero />
      <About />
      <Marquee />
      <Work />
      <Services />
      <Process />
      <Tech />
      <Testimonials />
      <Culture />
      <CTA />
      <ProjectOverlay />
    </MainLayout>
  );
}
