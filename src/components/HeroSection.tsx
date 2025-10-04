
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-navy min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-12">
          {/* Main Headlines */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-down">
              Empowering Your Business
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              with <span className="text-red animate-glow">Intelligent Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              From AI Agents to Smart Systems — we design, build, and deploy automation that works.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 hover:border-red/50 transition-all duration-300 animate-scale-in group" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-red transition-colors duration-300">13+</div>
              <div className="text-white/70 text-lg font-medium">AI Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 hover:border-red/50 transition-all duration-300 animate-scale-in group" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-red transition-colors duration-300">10K+</div>
              <div className="text-white/70 text-lg font-medium">Users Impacted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:scale-105 hover:border-red/50 transition-all duration-300 animate-scale-in group" style={{ animationDelay: '1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-red transition-colors duration-300">Global</div>
              <div className="text-white/70 text-lg font-medium">Clientele</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-bounce-in" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-navy px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-110 rounded-full group"
              onClick={() => scrollToSection('portfolio')}
            >
              <span className="group-hover:mr-2 transition-all duration-300">👁</span> Explore Portfolio →
            </Button>
            <Button 
              size="lg"
              className="bg-red hover:bg-red/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-110 rounded-full animate-glow group"
              onClick={() => scrollToSection('contact')}
            >
              <span className="group-hover:mr-2 transition-all duration-300">📞</span> Contact Us
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-full border border-white/30 hover:border-white/60 hover:scale-105 group"
              onClick={() => {
                const videoSection = document.getElementById('intro-video');
                if (videoSection) {
                  videoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform duration-300" />
              ▶ Watch Intro Video
            </Button>
          </div>
        </div>

        {/* Video Section */}
        <div id="intro-video" className="mt-20 animate-slide-up" style={{ animationDelay: '1.4s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto hover:border-red/40 transition-all duration-500 group">
            <h2 className="text-2xl font-bold text-white mb-6 text-center group-hover:scale-105 transition-transform duration-300">🎥 Our Story in 60 Seconds</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-red/20 group-hover:scale-[1.02] transition-all duration-500">
              <iframe
                src="https://www.youtube.com/embed/FTobKLiDl0Y"
                title="Techlyn Solutions Introduction"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-white/70 mt-4 text-center animate-fade-in-up">
              Discover how we're revolutionizing business automation with AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
