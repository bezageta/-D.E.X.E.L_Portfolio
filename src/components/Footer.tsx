const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <footer className="bg-[#0f172a] text-white pt-10 pb-4 rounded-t-[2rem] mt-8">
      <div className="container-premium">
        {/* Main Call to Action */}
        <div className="mb-8 text-center">
          <h2 className="text-[12vw] font-bold font-display leading-none tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 opacity-90">
            Let's Create
          </h2>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-magnetic bg-white text-black hover:bg-gray-100"
          >
            Start a Project
          </button>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-gray-800 pt-8">
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold font-display text-lg">
                D
              </div>
              <span className="font-display font-bold text-2xl">Dexel</span>
            </div>
            <p className="text-gray-400 max-w-sm font-light leading-relaxed">
              Premium digital agency crafting experiences that merge art, technology, and strategy.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-lg">Sitemap</h4>
            <ul className="space-y-4 text-gray-400">
              {['Home', 'About', 'Services', 'Work', 'Journal'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-lg">Socials</h4>
            <ul className="space-y-4 text-gray-400">
              {['LinkedIn', 'Twitter', 'Instagram', 'Dribbble'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <div className="flex gap-2 border-b border-gray-700 pb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none focus:ring-0 w-full placeholder-gray-600 text-white"
              />
              <button className="text-gray-400 hover:text-white uppercase text-sm font-bold tracking-wider">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-8 border-t border-gray-800 text-sm text-gray-500 font-mono-tech">
          <div>© 2025 Dexel Technology PLC</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
