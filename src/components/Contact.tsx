

const Contact = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Bar Placeholder (or simplified header) */}
            <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-8 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="flex items-center gap-3 cursor-pointer" onClick={onBack}>
                    <img
                        src="/src/assets/logo.jpeg"
                        alt="Dexel Logo"
                        className="w-16 h-16 rounded-lg object-cover"
                    />
                </div>
                <button
                    onClick={onBack}
                    className="text-sm font-medium hover:text-blue-600 transition-colors"
                >
                    &larr; Back to Home
                </button>
            </nav>

            <div className="pt-32 pb-20 container-premium">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-2xl text-gray-500 font-light">
                            Ready to start your next project? Get in touch with us today.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-12 gap-12">
                        {/* Form Section */}
                        <div className="md:col-span-8 bg-gray-50 p-8 rounded-[2rem]">
                            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-black transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Email</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-black transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Project Inquiry"
                                        className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-black transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Message</label>
                                    <textarea
                                        rows={6}
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-black transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Info Section */}
                        <div className="md:col-span-4 space-y-12">
                            <div>
                                <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </span>
                                    Location
                                </h4>
                                <p className="text-gray-600 ml-10">
                                    Addis Ababa, Ethiopia<br />
                                    Bole, Friendship Bldg 4F
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </span>
                                    Phone
                                </h4>
                                <p className="text-gray-600 ml-10">
                                    +251 911 234 567
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </span>
                                    Email
                                </h4>
                                <p className="text-gray-600 ml-10">
                                    hello@dexel.com
                                </p>
                            </div>

                            <div className="pt-8 border-t border-gray-200">
                                <h4 className="font-bold text-lg mb-4">Business Hours</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="font-medium text-black">9:00 AM - 6:00 PM</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="font-medium text-black">9:00 AM - 1:00 PM</span>
                                    </li>
                                    <li className="flex justify-between text-gray-400">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
