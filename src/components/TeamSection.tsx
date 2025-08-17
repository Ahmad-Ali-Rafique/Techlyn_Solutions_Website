
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const teamMembers = [
    {
    name: 'Mujtabah',
    role: 'AI Powered Sales Automations Executive',
    description: 'Specializing in automated sales processes and AI-driven customer engagement strategies.',
    avatar: 'MJ',
    image: '/lovable-uploads/8b02f472-7cd4-4a0d-8873-5b62a048fc19.png'
  },
  {
    name: 'Ahmad Ali',
    role: 'Artificial Intelligence & Machine Learning Engineer',
    description: 'Leading AI innovation with cutting-edge machine learning solutions and intelligent system architecture.',
    avatar: 'AA',
    image: '/lovable-uploads/6cc31695-0e53-4c8a-b407-9a2135f10d41.png',
    linkedin: 'linkedin.com/in/ahmad-ali-rafique/' // 🔗 Add LinkedIn URL

  },
  {
    name: 'Talha Shabbir',
    role: 'Chief Business Automation and AI Solutions Specialist',
    description: 'Transforming businesses through comprehensive automation solutions and strategic AI implementation.',
    avatar: 'TS',
    image: '/lovable-uploads/2b16a4cd-3a4b-4187-96ea-12970dce7f15.png'
  }
];

export const TeamSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            3 Brains Behind the <span className="text-red">Magic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We don't just follow the future — we build it.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Professional Photo */}
              <div className="flex justify-center mb-6">
                <Avatar className="w-32 h-32 group-hover:scale-105 transition-transform duration-300">
                  <AvatarImage 
                    src={member.image} 
                    alt={member.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="w-32 h-32 bg-navy text-white text-3xl font-bold group-hover:bg-red transition-colors duration-300">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-dark-gray mb-2 group-hover:text-navy transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-red font-semibold mb-4 text-lg">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="mt-6 h-1 bg-gradient-to-r from-navy to-red rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Company Philosophy */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-navy rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-xl text-blue-100 leading-relaxed">
              "We don't just follow the future — we build it."
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {['Innovation', 'Intelligence', 'Simplicity', 'Results'].map((value) => (
                <span 
                  key={value}
                  className="px-6 py-3 bg-white/10 text-white rounded-full font-medium border border-white/20 hover:bg-red hover:border-red transition-all duration-300"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<div className="team-card">
  <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 mx-auto" />
  <h3 className="text-lg font-semibold mt-3">{member.name}</h3>
  <p className="text-red-600 font-medium">{member.role}</p>
  <p className="text-gray-600 text-sm mt-2">{member.description}</p>
  
  {/* LinkedIn Button */}
  <a 
    href={member.linkedin} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-3 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 
        0 16 .513 16 1.146v13.708c0 .633-.526 
        1.146-1.175 1.146H1.175C.526 16 0 
        15.487 0 14.854V1.146zm4.943 
        12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 
        0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 
        0-1.358.54-1.358 1.248 0 .694.52 1.248 
        1.327 1.248h.015zM13.458 
        13.394v-4.065c0-2.176-1.158-3.186-2.701-3.186-1.243 
        0-1.8.682-2.116 1.16V6.169H6.24c.03.682 
        0 7.225 0 7.225h2.401v-4.036c0-.216.015-.432.08-.586.175-.431.573-.878 
        1.243-.878.878 0 1.23.662 1.23 
        1.634v3.866h2.264z"/>
    </svg>
    LinkedIn
  </a>
</div>

