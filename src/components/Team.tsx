const Team = ({ onBack }: { onBack: () => void }) => {
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Chief Executive Officer',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
        },
        {
            name: 'Michael Chen',
            role: 'Chief Technology Officer',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop'
        },
        {
            name: 'Emily Davis',
            role: 'Head of Design',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop'
        },
        {
            name: 'James Wilson',
            role: 'Lead Developer',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop'
        },
        {
            name: 'Sofia Rodriguez',
            role: 'Product Manager',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop'
        },
        {
            name: 'David Kim',
            role: 'Marketing Director',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-8 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold font-display text-lg">
                        D
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight">Dexel</span>
                </div>
                <button
                    onClick={onBack}
                    className="text-sm font-medium hover:text-blue-600 transition-colors"
                >
                    &larr; Back to Home
                </button>
            </nav>

            <div className="pt-32 pb-20 container-premium">
                <div className="text-center mb-16">
                    <h1 className="section-title mb-4">Our Team</h1>
                    <p className="text-2xl text-gray-500 font-light">
                        Meet the experts behind our success
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12 w-fit mx-auto justify-items-center">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="group relative w-full max-w-[280px] aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
                            {/* Image: Grayscale by default, color on hover */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                            />

                            {/* Overlay: Hidden by default, visible on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-bold font-display translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-gray-300 font-mono-tech text-xs tracking-wider mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
