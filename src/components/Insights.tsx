const Insights = () => {
  const insights = [
    {
      title: 'The Future of AI in Enterprise Software',
      category: 'Technology',
      date: 'Dec 10, 2024',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Sustainable Cloud Computing Practices',
      category: 'Infrastructure',
      date: 'Dec 05, 2024',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Designing for Digital Accessibility',
      category: 'Design',
      date: 'Nov 28, 2024',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="insights" className="py-32 bg-white">
      <div className="container-premium">
        <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-8">
          <div>
            <h2 className="section-title mb-4">Insights</h2>
            <p className="text-2xl text-black font-light">Stay updated with the latest trends and insights in software development</p>
          </div>
          <button
            onClick={() => alert('Journal feature coming soon!')}
            className="text-lg font-medium hover:text-blue-600 transition-colors"
          >
            Read Journal
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-900">
                  {insight.category}
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm text-gray-400 font-mono-tech">{insight.date}</div>
                <h3 className="text-2xl font-bold font-display leading-tight group-hover:text-blue-600 transition-colors">
                  {insight.title}
                </h3>
                <div className="h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-12" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
