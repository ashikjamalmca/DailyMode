import MainLayout from '@/components/layout/MainLayout';
import AboutHero from '@/components/sections/about/AboutHero';
import OurStory from '@/components/sections/about/OurStory';
import Team from '@/components/sections/about/Team';
import Values from '@/components/sections/about/Values';
import Locations from '@/components/sections/about/Locations';

export default function AboutPage() {
  return (
    <MainLayout darkNav={true}>
      <AboutHero />
      <OurStory />
      <Values />
      <Team />
      <Locations />
    </MainLayout>
  );
}
