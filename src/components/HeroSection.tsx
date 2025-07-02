
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="bg-navy min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/e2606a37-61bc-453e-8b84-4321062e427f.png" 
                alt="Techlyn Solutions" 
                className="h-12 w-auto"
              />
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Empowering Your Business with{' '}
                <span className="text-red">Intelligent Automation</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We create intelligent tools that automate, optimize, and innovate your business.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-red hover:bg-red/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red/25"
              >
                Let's Talk
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                View Our Work
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Intro Video
              </Button>
            </div>

            {/* Team */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">🔹 3 brains behind the magic:</h3>
              <div className="space-y-3">
                <div className="text-blue-100">
                  <span className="font-semibold text-white">Ahmad Ali</span> - Artificial Intelligence & Machine Learning Engineer
                </div>
                <div className="text-blue-100">
                  <span className="font-semibold text-white">Mujtabah</span> - AI powered sales automations executive
                </div>
                <div className="text-blue-100">
                  <span className="font-semibold text-white">Talha Shabbir</span> - Chief Business Automation and AI Solutions specialist
                </div>
              </div>
              <p className="text-red font-semibold mt-4 text-lg">
                We don't just follow the future — we build it.
              </p>
            </div>

            {/* Core Values */}
            <div className="flex flex-wrap gap-4">
              {['Innovation', 'Intelligence', 'Simplicity', 'Results'].map((value) => (
                <span 
                  key={value}
                  className="px-4 py-2 bg-white/10 text-white rounded-full font-medium border border-white/20"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="animate-fade-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">🎥 Our Story in 60 Seconds</h2>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/FTobKLiDl0Y"
                  title="Techlyn Solutions Introduction"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-blue-100 mt-4 text-center">
                Discover how we're revolutionizing business automation with AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
