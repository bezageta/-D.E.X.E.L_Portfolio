interface ProjectDetailProps {
    project: {
        id: string;
        title: string;
        category: string;
        year: string;
        image: string;
        description: string;
        challenge: string;
        solution: string;
        technologies: string[];
        features: string[];
        results: string[];
    };
    onBack: (section?: string) => void;
}

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header with Back Button */}
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav className="pointer-events-auto bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 py-3 px-6 rounded-full">
                    <button
                        onClick={() => onBack('projects')}
                        className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="font-medium">back to projects</span>
                    </button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container-premium">
                    <div className="flex items-center gap-4 text-gray-400 font-mono-tech text-sm mb-6">
                        <span>{project.year}</span>
                        <span className="w-12 h-[1px] bg-gray-300" />
                        <span>{project.category}</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold font-display text-gray-900 mb-8 leading-tight">
                        {project.title}
                    </h1>

                    <p className="text-2xl text-gray-600 font-light max-w-3xl">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* Main Image */}
            <section className="py-12">
                <div className="container-premium">
                    <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[16/9]">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-20 bg-gray-50">
                <div className="container-premium">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">
                                The Challenge
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {project.challenge}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">
                                Our Solution
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {project.solution}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20">
                <div className="container-premium">
                    <h2 className="text-4xl font-bold font-display text-gray-900 mb-12">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-6 py-3 bg-gray-100 rounded-full text-gray-900 font-medium hover:bg-gray-200 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-gray-50">
                <div className="container-premium">
                    <h2 className="text-4xl font-bold font-display text-gray-900 mb-12">
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {project.features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white font-bold font-display text-lg mb-4">
                                    {index + 1}
                                </div>
                                <p className="text-lg text-gray-700">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-20">
                <div className="container-premium">
                    <h2 className="text-4xl font-bold font-display text-gray-900 mb-12">
                        Results & Impact
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {project.results.map((result, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold font-display text-black mb-4">
                                    {result.split(' ')[0]}
                                </div>
                                <p className="text-xl text-gray-600">
                                    {result.split(' ').slice(1).join(' ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-black text-white">
                <div className="container-premium text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                        Ready to start your project?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's create something amazing together
                    </p>
                    <button
                        onClick={() => onBack()}
                        className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                    >
                        <span>Back to Home</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
