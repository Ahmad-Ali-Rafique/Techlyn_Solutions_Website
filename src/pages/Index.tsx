
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { TeamSection } from '@/components/TeamSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
};

export default Index;


import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Techlyn Solutions</title>
        <meta name="description" content="Welcome to Techlyn Solutions 🚀" />
        <link
          href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css"
          rel="stylesheet"
        />
        {/* Optional: your own overrides for branding */}
        <link href="/your-overrides.css" rel="stylesheet" />
      </Head>

      <main>
        <h1>Welcome to Techlyn Solutions 🚀</h1>
        <p>We provide modern digital solutions to grow your business.</p>

        {/* Chatbot will attach here */}
        <div id="n8n-chat"></div>
      </main>

      {/* Load chatbot script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/index.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore (because n8nChat is global)
          n8nChat.createChat({
            webhookUrl:
              "https://ssadasd.app.n8n.cloud/webhook/0c5ff7c7-2c16-44e0-ab16-cba74437244d/chat",
            target: "#n8n-chat",
            defaultLanguage: "en",
            title: "Techlyn Chat Assistant 🤖",
            subtitle: "Ask us anything about our services!",
            theme: "light", // or "dark"
          });
        }}
      />
    </>
  );
}
