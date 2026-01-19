import MainLayout from '@/components/layout/MainLayout';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesList from '@/components/sections/services/ServicesList';
import ProcessDetail from '@/components/sections/services/ProcessDetail';
import Pricing from '@/components/sections/services/Pricing';
import FAQ from '@/components/sections/services/FAQ';

export default function ServicesPage() {
  return (
    <MainLayout darkNav={true}>
      <ServicesHero />
      <ServicesList />
      <ProcessDetail />
      <Pricing />
      <FAQ />
    </MainLayout>
  );
}
