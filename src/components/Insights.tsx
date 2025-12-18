interface InsightsProps {
  onNavigate: (page: string, insightId?: string) => void;
}

const Insights = ({ onNavigate }: InsightsProps) => {
  const insights = [
    {
      id: 'telebirr-api-integration',
      title: 'Mastering Telebirr API Integration for Modern Apps',
      category: 'Fintech',
      date: 'Dec 18, 2024',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=2000&auto=format&fit=crop'
    },
    {
      id: 'gebeta-maps-logistics',
      title: 'Gebeta Maps: Solving Local Logistics with Custom GIS',
      category: 'Software',
      date: 'Dec 12, 2024',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=2000&auto=format&fit=crop'
    },
    {
      id: 'fayda-digital-id-ecosystem',
      title: 'The Fayda Digital ID: Building Ethiopia\'s Trusted API Layer',
      category: 'GovTech',
      date: 'Dec 05, 2024',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=2000&auto=format&fit=crop'
    },
    {
      id: 'ethiopian-software-development-ecosystem',
      title: 'Building Ethiopia\'s Software Development Ecosystem',
      category: 'Software',
      date: 'Nov 28, 2024',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=2000&auto=format&fit=crop'
    },
    {
      id: 'ethiopian-open-source-growth',
      title: 'The Rise of Open Source: Ethiopia\'s GitHub Community',
      category: 'Community',
      date: 'Nov 20, 2024',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000&auto=format&fit=crop'
    },
    {
      id: 'erp-local-customization',
      title: 'Customizing ERP Systems for the Ethiopian Business Landscape',
      category: 'Enterprise',
      date: 'Nov 10, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="insights" className="py-32 bg-white">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-100 pb-8 gap-6">
          <div>
            <h2 className="section-title mb-4">Insights</h2>
            <p className="text-xl text-black font-light tracking-tight">
              Stay updated with the latest trends and insights in software development
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {insights.map((insight, index) => (
            <article
              key={index}
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => onNavigate('insight', insight.id)}
            >
              <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/3] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-sm">
                    {insight.category}
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex-grow px-2">
                <div className="text-sm text-gray-400 font-mono-tech flex items-center gap-3">
                  <span className="w-8 h-px bg-gray-200" />
                  {insight.date}
                </div>
                <h3 className="text-2xl font-bold font-display leading-tight group-hover:text-blue-600 transition-colors">
                  {insight.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
