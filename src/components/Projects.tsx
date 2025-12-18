interface ProjectsProps {
  onNavigate: (page: string, projectId: string) => void;
}

const Projects = ({ onNavigate }: ProjectsProps) => {
  const projects = [
    {
      id: 'fintech-revolution',
      title: 'FinTech Revolution',
      category: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=2000&auto=format&fit=crop',
      year: '2024',
      description: 'A cutting-edge mobile banking application that revolutionizes how users manage their finances with AI-powered insights and seamless transactions.',
      challenge: 'Traditional banking apps suffer from complex interfaces and lack personalized financial guidance. Users struggle to understand their spending patterns and make informed financial decisions.',
      solution: 'We developed an intuitive mobile application with AI-driven analytics that provides real-time spending insights, personalized savings recommendations, and one-tap transactions. The app uses machine learning to predict spending patterns and alert users to potential budget overruns.',
      technologies: ['React Native', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS', 'Stripe API'],
      features: [
        'AI-powered spending analysis and predictions',
        'Instant peer-to-peer money transfers',
        'Automated savings based on spending habits',
        'Real-time fraud detection and alerts',
        'Biometric authentication for secure access',
        'Multi-currency support with live exchange rates'
      ],
      results: ['500K+ Active Users', '4.8★ App Store Rating', '40% Increase in Savings']
    },
    {
      id: 'ecosmart-city',
      title: 'EcoSmart City',
      category: 'IoT Platform',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&auto=format&fit=crop',
      year: '2023',
      description: 'An intelligent IoT platform that transforms urban infrastructure into a connected ecosystem, optimizing energy consumption and improving quality of life.',
      challenge: 'Cities face increasing pressure to reduce carbon emissions while managing growing populations. Traditional infrastructure lacks real-time monitoring and adaptive capabilities to optimize resource usage.',
      solution: 'We built a comprehensive IoT platform that connects smart sensors across the city to monitor and control lighting, traffic, waste management, and energy systems. The platform uses predictive analytics to optimize resource allocation and reduce waste.',
      technologies: ['Python', 'IoT Core', 'PostgreSQL', 'React', 'Docker', 'Kubernetes', 'MQTT'],
      features: [
        'Smart street lighting with motion sensors',
        'Real-time traffic flow optimization',
        'Intelligent waste collection routing',
        'Energy consumption monitoring and analytics',
        'Environmental quality tracking (air, noise)',
        'Centralized dashboard for city management'
      ],
      results: ['35% Energy Reduction', '50K+ IoT Devices', '25% Cost Savings']
    },
    {
      id: 'healthconnect',
      title: 'HealthConnect',
      category: 'Web Portal',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=2000&auto=format&fit=crop',
      year: '2024',
      description: 'A comprehensive healthcare platform connecting patients, doctors, and medical facilities for seamless care coordination and telemedicine services.',
      challenge: 'Healthcare systems struggle with fragmented patient data, scheduling inefficiencies, and limited access to specialists. Patients often face long wait times and difficulty accessing their medical records.',
      solution: 'We created an integrated web portal that centralizes patient records, enables video consultations, automates appointment scheduling, and facilitates secure communication between healthcare providers. The platform ensures HIPAA compliance while providing a user-friendly experience.',
      technologies: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'WebRTC', 'Redis', 'AWS'],
      features: [
        'Secure video consultations with HD quality',
        'Electronic health records with blockchain security',
        'AI-assisted symptom checker and triage',
        'Automated appointment scheduling and reminders',
        'Prescription management and pharmacy integration',
        'Real-time health monitoring device integration'
      ],
      results: ['100K+ Consultations', '98% Patient Satisfaction', '60% Faster Appointments']
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
              key={project.id}
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

                <button
                  onClick={() => onNavigate('project', project.id)}
                  className="flex items-center gap-3 text-lg font-medium group/btn"
                >
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
