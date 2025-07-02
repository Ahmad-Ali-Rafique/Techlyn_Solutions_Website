
const teamMembers = [
  {
    name: 'Ahmad Ali',
    role: 'Artificial Intelligence & Machine Learning Engineer',
    description: 'Leading AI innovation with cutting-edge machine learning solutions and intelligent system architecture.',
    avatar: 'AA'
  },
  {
    name: 'Mujtabah',
    role: 'AI Powered Sales Automations Executive',
    description: 'Specializing in automated sales processes and AI-driven customer engagement strategies.',
    avatar: 'MJ'
  },
  {
    name: 'Talha Shabbir',
    role: 'Chief Business Automation and AI Solutions Specialist',
    description: 'Transforming businesses through comprehensive automation solutions and strategic AI implementation.',
    avatar: 'TS'
  }
];

export const TeamSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            🔹 3 Brains Behind the <span className="text-red">Magic</span>
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
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:bg-red transition-colors duration-300">
                  {member.avatar}
                </div>
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
