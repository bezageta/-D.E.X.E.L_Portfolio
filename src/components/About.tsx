const About = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const stats = [
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Global Partners', value: '50+' },
    { label: 'Team Members', value: '20+' },
  ];

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Typography & Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-black font-mono-tech text-sm tracking-wider uppercase">Who We Are</span>
              <h2 className="display-text text-5xl md:text-7xl leading-[0.9]">
                We build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                  digital excellence.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg md:text-xl font-light text-gray-600 leading-relaxed max-w-xl">
              <p>
                <strong className="text-gray-900 font-medium, alignment=center">Innovation, Excellence, and Digital Transformation </strong>
              </p>
              <p>
                Dexel is a leading software development company specializing in innovative digital solutions. We transform ideas into reality through
                <strong className="text-gray-900 font-medium">cutting-edge technology </strong> and
                <strong className="text-gray-900 font-medium"> expert development practices.</strong>.
              </p>
              <p>
                Our team of experienced developers and designers work together to deliver high-quality software solutions that meet the unique needs of our clients across various industries
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-100 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold font-display text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-mono-tech uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('team')}
              className="group flex items-center gap-4 text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              <span>Meet the Team</span>
              <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Right Column: Visuals */}
          <div className="relative lg:h-[800px] flex items-center justify-center">
            {/* Main Image */}
            <div className="relative z-10 w-full aspect-[4/5] md:aspect-auto md:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                alt="Team Collaboration"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💡</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Innovation First</h4>
                    <p className="text-sm text-white/80 leading-relaxed">
                      We don't just follow trends; we define them through rigorous research and bold experimentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-slow" style={{ animationDelay: '-3s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
