const Footer = ({ onNavigate }: { onNavigate: (page: string, section?: string) => void }) => {
  return (
    <footer className="bg-[#0f172a] text-white pt-14 pb-6 rounded-t-[3rem] mt-16 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container-premium">
        {/* Main Call to Action */}
        <div className="mb-16 text-center">
          <h2 className="text-[7.5vw] font-bold font-display leading-none tracking-tighter mb-9 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 opacity-90">
            Let's Create
          </h2>
          <button
            onClick={() => onNavigate('contact')}
            className="group relative px-9 py-4 bg-white text-black rounded-full text-lg font-bold overflow-hidden transition-all hover:pr-14 hover:shadow-2xl hover:shadow-white/20"
          >
            <span className="relative z-10">Start a Project</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-9 lg:gap-16 border-t border-gray-800/50 pt-12">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/logo.jpeg"
                alt="Dexel Logo"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <span className="font-display font-bold text-3xl tracking-tight">Dexel</span>
            </div>
            <p className="text-gray-400 max-w-sm font-light leading-relaxed text-base">
              Premium digital agency in Addis Ababa crafting experiences that merge art, technology, and strategy.
            </p>
            <div className="space-y-3 pt-3">
              <div className="flex items-start gap-4 text-gray-400 group cursor-pointer hover:text-white transition-colors">
                <svg className="w-6 h-6 mt-1 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-bold text-white uppercase tracking-wider text-xs mb-1">Our Location</p>
                  <p className="font-light">Addis Ababa, Ethiopia</p>
                  <p className="font-light text-blue-400">Bole, Friendship Bldg 4F</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-colors">
                <svg className="w-6 h-6 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="font-light">+251 911 234 567</p>
              </div>
              <div className="flex items-center gap-4 text-gray-400 group cursor-pointer hover:text-white transition-colors">
                <svg className="w-6 h-6 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-light text-blue-400">info@dexel.com</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-lg tracking-tight">Sitemap</h4>
            <ul className="space-y-3 text-gray-400 text-base">
              {['Home', 'About', 'Services', 'Work', 'Journal'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-white transition-all group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-lg tracking-tight">Socials</h4>
            <ul className="space-y-3 text-gray-400 text-base">
              {['LinkedIn', 'Twitter', 'Instagram', 'Telegram'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-white transition-all group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-5">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden aspect-[16/8] shadow-xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=4000&auto=format&fit=crop"
                  alt="Dexel Location"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                  <p className="text-xs font-mono-tech text-blue-400 tracking-[0.2em] uppercase">Addis HQ</p>
                  <p className="text-[10px] text-gray-400 font-mono-tech mt-1 tracking-widest">9.0347° N, 38.7618° E</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-14 pt-6 border-t border-gray-800/50 text-sm text-gray-500 font-mono-tech uppercase tracking-widest">
          <div>© 2025 Dexel Technology PLC. All Rights Reserved.</div>
          <div className="flex gap-12 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
