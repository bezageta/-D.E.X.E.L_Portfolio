import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Insights from './components/Insights';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Team from './components/Team';

function App() {
  const [view, setView] = useState('home');

  const navigateTo = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setView(page);
  };

  return (
    <div className="min-h-screen">
      {view === 'home' ? (
        <>
          <Header onNavigate={navigateTo} />
          <main>
            <Hero />
            <About onNavigate={navigateTo} />
            <Services />
            <Projects />
            <Insights />
          </main>
          <Footer onNavigate={navigateTo} />
        </>
      ) : view === 'contact' ? (
        <Contact onBack={() => navigateTo('home')} />
      ) : (
        <Team onBack={() => navigateTo('home')} />
      )}
    </div>
  );
}

export default App;
