const Services = () => {
  const services = [
    {
      title: 'Custom Software',
      description: 'Enterprise-grade solutions tailored to your specific business logic and requirements.',
      icon: '💻',
      className: 'md:col-span-2 md:row-span-2 relative overflow-hidden',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=2000&auto=format&fit=crop',
      dark: true
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud architecture.',
      icon: '☁️',
      className: 'md:col-span-1 md:row-span-1 bg-blue-50',
      dark: false
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform applications.',
      icon: '📱',
      className: 'md:col-span-1 md:row-span-1 bg-purple-50',
      dark: false
    },
    {
      title: 'AI & Machine Learning',
      description: 'Predictive analytics and intelligent automation.',
      icon: '🤖',
      className: 'md:col-span-1 md:row-span-1 bg-white border-2 border-gray-100',
      dark: false
    },
    {
      title: 'UI/UX Design',
      description: 'User-centric interfaces that delight and convert.',
      icon: '🎨',
      className: 'md:col-span-1 md:row-span-1 bg-teal-50',
      dark: false
    },
    {
      title: 'Consulting',
      description: 'Strategic technology advisory to help businesses navigate digital transformation, optimize IT infrastructure.',
      icon: '📊',
      className: 'md:col-span-1 md:row-span-1 bg-orange-50',
      dark: false
    },
  ];

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="section-title">
              Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-500 mt-4 font-light">
              We combine technical expertise with creative problem-solving to deliver exceptional results across the digital spectrum.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bento-card group relative flex flex-col justify-between p-8 ${service.className}`}
            >
              {service.image && (
                <>
                  <img
                    src={service.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gray-900/80 group-hover:bg-gray-900/70 transition-colors" />
                </>
              )}

              <div className="relative z-10 flex justify-between items-start">
                <span className="text-4xl">{service.icon}</span>

              </div>

              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-2 ${service.dark ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${service.dark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
