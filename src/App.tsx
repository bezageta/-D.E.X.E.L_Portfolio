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
import ProjectDetail from './pages/ProjectDetail';
import InsightDetail from './pages/InsightDetail';

function App() {
  const [view, setView] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(null);

  const navigateTo = (page: string, id?: string) => {
    if (page === 'home' && id) {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
    setView(page);
    if (page === 'project' && id) {
      setSelectedProjectId(id);
    } else if (page === 'insight' && id) {
      setSelectedInsightId(id);
    }
  };

  // Project data - same as in Projects component
  const projectsData = [
    {
      id: 'fintech-revolution',
      title: 'FinTech Revolution',
      category: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=2000&auto=format&fit=crop',
      year: '2024',
      description: 'A cutting-edge mobile banking application that revolutionizes how users manage their finances with AI-powered insights and seamless transactions.',
      challenge: 'Traditional banking apps suffer from complex interfaces and lack personalized financial guidance. Users struggle to understand their spending patterns and make informed financial decisions.',
      solution: 'We developed an intuitive mobile application with AI-driven analytics that provides real-time spending insights, personalized savings recommendations, and one-tap transactions. The app uses machine learning to predict spending patterns and alert users to potential budget overruns.',
      technologies: ['React Native', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS', 'Stripe API'],
      features: [
        'AI-powered spending analysis and predictions',
        'Instant peer-to-peer money transfers',
        'Automated savings based on spending habits',
        'Real-time fraud detection and alerts',
        'Biometric authentication for secure access',
        'Multi-currency support with live exchange rates'
      ],
      results: ['500K+ Active Users', '4.8★ App Store Rating', '40% Increase in Savings']
    },
    {
      id: 'ecosmart-city',
      title: 'EcoSmart City',
      category: 'IoT Platform',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&auto=format&fit=crop',
      year: '2023',
      description: 'An intelligent IoT platform that transforms urban infrastructure into a connected ecosystem, optimizing energy consumption and improving quality of life.',
      challenge: 'Cities face increasing pressure to reduce carbon emissions while managing growing populations. Traditional infrastructure lacks real-time monitoring and adaptive capabilities to optimize resource usage.',
      solution: 'We built a comprehensive IoT platform that connects smart sensors across the city to monitor and control lighting, traffic, waste management, and energy systems. The platform uses predictive analytics to optimize resource allocation and reduce waste.',
      technologies: ['Python', 'IoT Core', 'PostgreSQL', 'React', 'Docker', 'Kubernetes', 'MQTT'],
      features: [
        'Smart street lighting with motion sensors',
        'Real-time traffic flow optimization',
        'Intelligent waste collection routing',
        'Energy consumption monitoring and analytics',
        'Environmental quality tracking (air, noise)',
        'Centralized dashboard for city management'
      ],
      results: ['35% Energy Reduction', '50K+ IoT Devices', '25% Cost Savings']
    },
    {
      id: 'healthconnect',
      title: 'HealthConnect',
      category: 'Web Portal',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=2000&auto=format&fit=crop',
      year: '2024',
      description: 'A comprehensive healthcare platform connecting patients, doctors, and medical facilities for seamless care coordination and telemedicine services.',
      challenge: 'Healthcare systems struggle with fragmented patient data, scheduling inefficiencies, and limited access to specialists. Patients often face long wait times and difficulty accessing their medical records.',
      solution: 'We created an integrated web portal that centralizes patient records, enables video consultations, automates appointment scheduling, and facilitates secure communication between healthcare providers. The platform ensures HIPAA compliance while providing a user-friendly experience.',
      technologies: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'WebRTC', 'Redis', 'AWS'],
      features: [
        'Secure video consultations with HD quality',
        'Electronic health records with blockchain security',
        'AI-assisted symptom checker and triage',
        'Automated appointment scheduling and reminders',
        'Prescription management and pharmacy integration',
        'Real-time health monitoring device integration'
      ],
      results: ['100K+ Consultations', '98% Patient Satisfaction', '60% Faster Appointments']
    }
  ];

  const selectedProject = selectedProjectId
    ? projectsData.find(p => p.id === selectedProjectId)
    : null;

  const insightsData = [
    {
      id: 'telebirr-api-integration',
      title: 'Mastering Telebirr API Integration for Modern Apps',
      category: 'Fintech',
      date: 'Dec 18, 2024',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=2000&auto=format&fit=crop',
      author: 'Amanuel Tadesse',
      readTime: '8 min read',
      tags: ['Fintech', 'Telebirr', 'API', 'E-commerce'],
      content: `Integrating Telebirr into modern web and mobile applications is a must for any business operating in Ethiopia. The process involves multiple technical layers, from securing credentials and implementing the RSA encryption for request signing to handling asynchronous notifications via the notify URL.\n\nAt Dexel, we've refined our integration pipeline to handle complex scenarios like partial refunds, transaction status polling, and secure storage of sensitive keys. The key to a smooth user experience lies in the optimistic UI updates while waiting for the background notification from the Ethio Telecom servers.\n\nAs the ecosystem matures, we're seeing more standardized SDKs being developed by the community, further reducing the entry barrier for developers looking to monetize their digital products.`
    },
    {
      id: 'gebeta-maps-logistics',
      title: 'Gebeta Maps: Solving Local Logistics with Custom GIS',
      category: 'Software',
      date: 'Dec 12, 2024',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=2000&auto=format&fit=crop',
      author: 'Selamawit Bekele',
      readTime: '6 min read',
      tags: ['GIS', 'Logistics', 'Gebeta', 'AddisTech'],
      content: `Global mapping solutions often fall short in catching the nuances of Addis Ababa's street network and specific landmarks. Gebeta Maps has stepped in to fill this gap, providing a robust API for geocoding, routing, and distance matrix calculation tailored for the local context.\n\nFor developers building delivery apps or transport management systems, Gebeta's precise location data means better ETAs and more efficient route planning. The technical challenge often involves dealing with irregular addresses and ensuring high availability during peak internet traffic hours.\n\nBy leveraging localized data, tech companies can significantly reduce their operating costs and provide a more reliable service to the end users who rely on accurate mapping for their daily movements.`
    },
    {
      id: 'fayda-digital-id-ecosystem',
      title: 'The Fayda Digital ID: Building Ethiopia’s Trusted API Layer',
      category: 'GovTech',
      date: 'Dec 05, 2024',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=2000&auto=format&fit=crop',
      author: 'Elias Habte',
      readTime: '10 min read',
      tags: ['DigitalID', 'Security', 'Fayda', 'Infrastructure'],
      content: `The Fayda Digital ID system is more than just an identification card; it's a foundational digital infrastructure that enables trust across the internet. For software developers, the upcoming API ecosystem will allow for seamless KYC (Know Your Customer) processes, reducing friction in banking, telecom, and government services.\n\nThe system uses advanced biometrics and secure enclaves to protect user data, while providing a standardized interface for third-party applications to verify identities. This 'Trust Layer' is essential for the growth of the digital economy, enabling remote account opening and secure digital signatures.\n\nAs the rollout continues, integrating Fayda will become a standard requirement for high-security applications in Ethiopia, necessitating a deep understanding of OIDC (OpenID Connect) and secure API consumption.`
    },
    {
      id: 'ethiopian-software-development-ecosystem',
      title: 'Building Ethiopia\'s Software Development Ecosystem',
      category: 'Software',
      date: 'Nov 28, 2024',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=2000&auto=format&fit=crop',
      author: 'Tewodros Asrat',
      readTime: '7 min read',
      tags: ['Software', 'Ecosystem', 'Ethiopia', 'Development'],
      content: `Ethiopia's software development landscape is rapidly evolving, with local tech companies leading the charge in creating solutions tailored to the Ethiopian market. From mobile applications that support local languages to enterprise software that integrates with Ethiopian banking systems, the ecosystem is maturing at an impressive pace.\n\nThe growth is driven by a combination of factors: increasing internet penetration, a growing pool of skilled developers, and a government push towards digital transformation. Local startups are now competing with international players by offering solutions that understand the unique needs of Ethiopian businesses and consumers.\n\nKey challenges remain, including infrastructure limitations, access to capital, and talent retention. However, with initiatives like tech hubs, coding bootcamps, and government support programs, Ethiopia is positioning itself as a key player in Africa's digital economy.`
    },
    {
      id: 'ethiopian-open-source-growth',
      title: 'The Rise of Open Source: Ethiopia’s GitHub Community',
      category: 'Community',
      date: 'Nov 20, 2024',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000&auto=format&fit=crop',
      author: 'Hanna Mekonnen',
      readTime: '5 min read',
      tags: ['OpenSource', 'GitHub', 'Community', 'Education'],
      content: `The Ethiopian developer community is increasingly turning to open source to learn, collaborate, and build local solutions. Projects ranging from Amharic NLP libraries to local payment SDKs are gaining traction on GitHub, fosterign a culture of knowledge sharing.\n\nThis growth is fueled by university clubs, evening tech meetups, and a desire to contribute to the global tech ecosystem. Open source allows local developers to showcase their skills to potential international clients while solving problems that are unique to the Ethiopian context.\n\nEncouraging more contributions to open source is essential for the maturity of the ecosystem, as it provides a risk-free environment for juniors to learn and for seniors to influence the technical direction of the country's digital future.`
    },
    {
      id: 'erp-local-customization',
      title: 'Customizing ERP Systems for the Ethiopian Business Landscape',
      category: 'Enterprise',
      date: 'Nov 10, 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000&auto=format&fit=crop',
      author: 'Mulugeta Zewde',
      readTime: '9 min read',
      tags: ['ERP', 'Odoo', 'BusinessProcess', 'Customization'],
      content: `Standard ERP solutions like Odoo or SAP often need significant customization to align with Ethiopian tax laws, labor regulations, and local business practices. This involves developing custom modules for VAT reporting, payroll with local pension schemes, and integration with local banks.\n\nThe technical process requires a deep understanding of the business domain as well as the underlying framework of the ERP. Maintaining a clean upgrade path while implementing these customizations is a common engineering challenge. Cloud-hosted ERPs are also becoming popular, offering local businesses the benefits of modernization without the need for on-premise infrastructure.\n\nSuccessful implementation leads to improved efficiency, better data-driven decision-making, and enhanced compliance for Ethiopian enterprises looking to scale in a competitive market.`
    }
  ];

  const selectedInsight = selectedInsightId
    ? insightsData.find(i => i.id === selectedInsightId)
    : null;

  return (
    <div className="min-h-screen">
      {view === 'home' ? (
        <>
          <Header onNavigate={navigateTo} />
          <main>
            <Hero />
            <About onNavigate={navigateTo} />
            <Services />
            <Projects onNavigate={navigateTo} />
            <Insights onNavigate={navigateTo} />
          </main>
          <Footer onNavigate={navigateTo} />
        </>
      ) : view === 'contact' ? (
        <Contact onBack={() => navigateTo('home')} />
      ) : view === 'project' && selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={(section) => section ? navigateTo('home', section) : navigateTo('home')} />
      ) : view === 'insight' && selectedInsight ? (
        <InsightDetail insight={selectedInsight} onBack={(section) => section ? navigateTo('home', section) : navigateTo('home')} />
      ) : (
        <Team onBack={() => navigateTo('home')} />
      )}
    </div>
  );
}

export default App;
