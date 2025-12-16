const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-tr from-teal-100 to-emerald-100 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3 animate-float-slow" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600 font-mono-tech">Available for new projects</span>
            </div>

            <h1 className="display-text leading-tight">
              Transforming  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500">
                Ideas Into Digital
              </span>
              <br />
              Reality
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed font-light">
              We specialize in
              <span className="font-semibold text-gray-900"> cutting-edge software development</span>,
              <span className="font-semibold text-gray-900"> , talent outsourcing</span>, and
              <span className="font-semibold text-gray-900"> comprehensive maintenance </span>
              support. Partner with Dexel for innovative solutions that drive your business forward.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#about')}
                className="btn-magnetic group"
              >
                <span>Start Your Journey</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-4 rounded-full border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all font-medium text-gray-900 flex items-center gap-3"
              >
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                View Our Work
              </button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                alt="Digital Innovation"
                className="w-full h-full object-cover"
              />

              {/* Floating Cards */}
              <div className="absolute top-8 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Fast Performance</div>
                    <div className="text-xs text-gray-500">Optimized for speed</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-12 -right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 animate-float-slow" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Verified Quality</div>
                    <div className="text-xs text-gray-500">ISO 9001 Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-24 pt-12 border-t border-gray-200/60">
          <p className="text-center text-sm font-medium text-gray-400 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple SVG placeholders for logos */}
            {['Google', 'Microsoft', 'Spotify', 'Airbnb', 'Uber'].map((brand) => (
              <span key={brand} className="text-xl font-bold font-display text-gray-800">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
