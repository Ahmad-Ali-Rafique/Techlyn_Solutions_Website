import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, Mail, LayoutDashboard, Calendar, BarChart3, ArrowRight, Sparkles } from 'lucide-react';

const suites = [
  { id: 'ai-communication', name: 'AI Communication Suite', available: true },
  { id: 'marketing', name: 'Marketing Suite', available: false },
  { id: 'automation', name: 'Automation Suite', available: false },
  { id: 'vision', name: 'Vision Suite', available: false },
];

const features = [
  {
    icon: Phone,
    title: 'AI Voice Assistant',
    description: 'Intelligent voice calls that understand context and respond naturally to customer inquiries 24/7.',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp AI Agent',
    description: 'Automated WhatsApp interactions that engage customers with human-like conversations.',
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'Smart email responses and workflows that handle inquiries efficiently and professionally.',
  },
  {
    icon: LayoutDashboard,
    title: 'Unified Dashboard',
    description: 'Centralized control center to monitor all communication channels in real-time.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduler',
    description: 'AI-powered scheduling that optimizes appointments and manages calendars automatically.',
  },
  {
    icon: BarChart3,
    title: 'AI Insights',
    description: 'Advanced analytics and actionable insights to improve communication effectiveness.',
  },
];

export const TechlynSuitesSection = () => {
  const [activeSuite, setActiveSuite] = useState('ai-communication');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="suites" className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#0b3c74] to-[#e60000] bg-clip-text text-transparent flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#e60000]" />
                Techlyn Suites
              </h3>
              <nav className="space-y-3">
                {suites.map((suite) => (
                  <button
                    key={suite.id}
                    onClick={() => suite.available && setActiveSuite(suite.id)}
                    disabled={!suite.available}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                      ${
                        activeSuite === suite.id
                          ? 'bg-gradient-to-r from-[#0b3c74] to-[#e60000] text-white shadow-md'
                          : suite.available
                          ? 'bg-muted/50 hover:bg-muted text-foreground'
                          : 'bg-muted/20 text-muted-foreground cursor-not-allowed'
                      }
                    `}
                  >
                    <div className="font-medium text-sm">{suite.name}</div>
                    {!suite.available && (
                      <div className="text-xs mt-1 opacity-60">Coming Soon</div>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeSuite === 'ai-communication' && (
              <div className="space-y-8 animate-fade-in">
                {/* Hero */}
                <div className="text-center lg:text-left space-y-4 mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#0b3c74] via-[#0b3c74] to-[#e60000] bg-clip-text text-transparent leading-tight">
                    The Future of Business Communication — Powered by AI
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl">
                    Techlyn's AI Communication Suite transforms how your business connects — from calls to chats to emails, unified intelligently in one ecosystem.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <Card
                      key={feature.title}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0b3c74] to-[#e60000] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center pt-8">
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-[#0b3c74] to-[#e60000] hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg px-8 py-6 group"
                  >
                    Discover how AI can transform your business communication
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};
