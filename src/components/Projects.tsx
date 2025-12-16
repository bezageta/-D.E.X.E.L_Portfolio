const Projects = () => {
  const projects = [
    {
      title: 'FinTech Revolution',
      category: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
      year: '2024'
    },
    {
      title: 'EcoSmart City',
      category: 'IoT Platform',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
      year: '2023'
    },
    {
      title: 'HealthConnect',
      category: 'Web Portal',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
      year: '2024'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="container-premium">
        <div className="mb-20">
          <h2 className="section-title">
            Crafting digital  masterpieces.
          </h2>
          <span className="text-black font-mono-tech text-xl tracking-wider mt-6 block">Explore our portfolio of successful projects and innovative solutions</span>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full md:w-3/5 group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-[16/10]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex items-center gap-4 text-gray-400 font-mono-tech text-sm">
                  <span>0{index + 1}</span>
                  <span className="w-12 h-[1px] bg-gray-300" />
                  <span>{project.year}</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold font-display text-gray-900 leading-tight">
                  {project.title}
                </h3>

                <p className="text-xl text-gray-500 font-light">
                  {project.category}
                </p>

                <button className="flex items-center gap-3 text-lg font-medium group/btn">
                  <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover/btn:bg-black group-hover/btn:border-black group-hover/btn:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span>View Case Study</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
