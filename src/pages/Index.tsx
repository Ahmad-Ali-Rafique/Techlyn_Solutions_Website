
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
};

export default Index;
