interface InsightDetailProps {
    insight: {
        id: string;
        title: string;
        category: string;
        date: string;
        image: string;
        content: string;
        author: string;
        readTime: string;
        tags: string[];
    };
    onBack: (section?: string) => void;
}

const InsightDetail = ({ insight, onBack }: InsightDetailProps) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header with Back Button */}
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav className="pointer-events-auto bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 py-3 px-6 rounded-full">
                    <button
                        onClick={() => onBack('insights')}
                        className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="font-medium">back to insights</span>
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="container-premium max-w-4xl">
                    <div className="flex items-center gap-4 text-gray-400 font-mono-tech text-sm mb-6 uppercase tracking-widest">
                        <span>{insight.category}</span>
                        <span className="w-8 h-[1px] bg-gray-300" />
                        <span>{insight.date}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-8 leading-tight">
                        {insight.title}
                    </h1>

                    <div className="flex items-center gap-6 text-gray-600 font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
                                {insight.author[0]}
                            </div>
                            <span>{insight.author}</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        <span>{insight.readTime}</span>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="pb-16">
                <div className="container-premium max-w-5xl">
                    <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[16/9]">
                        <img
                            src={insight.image}
                            alt={insight.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
                <div className="container-premium max-w-3xl">
                    <div className="prose prose-xl prose-slate mx-auto">
                        {insight.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="text-xl text-gray-700 leading-relaxed mb-8">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
                        {insight.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50 mt-20">
                <div className="container-premium text-center">
                    <h2 className="text-3xl font-bold font-display text-gray-800 mb-6">
                        Shared your thoughts on this?
                    </h2>
                    <button
                        onClick={() => onBack()}
                        className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2 shadow-xl"
                    >
                        <span>go to home</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default InsightDetail;
