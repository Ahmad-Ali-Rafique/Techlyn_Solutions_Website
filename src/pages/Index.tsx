
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { TeamSection } from '@/components/TeamSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TechlynSuitesSection } from '@/components/TechlynSuitesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ContactSection } from '@/components/ContactSection';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <TechlynSuitesSection />
      <PortfolioSection />
      <TechStackSection />
      <ContactSection />
      <ChatBot />
    </div>
  );
};

export default Index;
