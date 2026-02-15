import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Healthcare from './components/Healthcare';
import Network from './components/Network';
import VideoBackground from './components/VideoBackground';
import NanotechBackground from './components/NanotechBackground';
import homeBgMobile from './assets/Background.jpg';
import bgImageDesktop from './assets/bg.png';
import healthcareBg from './assets/04-scope.jpg'; // Using the standard high-res image for scope background fallback
import networkBg from './assets/image.jpg';
import './styles/global.css';
import contactBg from './assets/edd.png';
import aboutBg from './assets/04.jpg';
import ContactForm from './components/Contact';
import Mission from './components/Mission';
import Values from './components/Values';
import Advesory from './components/Advesory';
import BottomNav from './components/BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getAppStyle = () => {
    if (activeTab === 'HOME') {
      return {
        backgroundImage: `url(${isMobile ? homeBgMobile : bgImageDesktop})`,
        backgroundColor: isMobile ? '#000000' : '#c0c4c4'
      };
    } else if (activeTab === 'ABOUT US') {
      return {
        backgroundImage: `url(${aboutBg})`,
        backgroundColor: '#10052d'
      };
    } else if (activeTab === 'SCOPE') {
      return {
        backgroundImage: `url(${healthcareBg})`,
        backgroundColor: '#000000'
      };
    } else if (activeTab === 'TEAM') {
      return {
        backgroundImage: `url(${networkBg})`,
        backgroundColor: '#050510'
      };
    } else if (activeTab === 'CONTACT US') {
      return {
        backgroundImage: `url(${contactBg})`,
        backgroundColor: '#050510'
      };
    }
    else if (activeTab === 'ADVISORY BOARD') {
      return {
        backgroundImage: `url(${networkBg})`,
        backgroundColor: '#050510'
      };
    }
    return {};
  };
  return (
    <div className="app-main" style={{
      ...getAppStyle(),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'all 0.8s ease'
    }}>
      {activeTab === 'HOME' && !isMobile && <VideoBackground />}
      <NanotechBackground />
      <Header activeTab={activeTab} />
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main style={{ height: '100%', width: '100%' }}>
        {activeTab === 'HOME' && <Hero />}

        {activeTab === 'ABOUT US' && (
          <div className="page-wrapper" style={{
            height: '100vh',
            width: '100%',
            overflowY: 'auto',
            scrollSnapType: 'y mandatory',
            scrollBehavior: 'smooth'
          }}>
            <section className="page-section" style={{
              scrollSnapAlign: 'start',
              height: '100vh',
              width: '100%',
              display: 'block'
            }}>
              <About />
            </section>

            <section className="page-section" style={{
              scrollSnapAlign: 'start',
              height: '100vh',
              width: '100%',
              display: 'block'
            }}>
              <Mission />
            </section>

            <section className="page-section" style={{
              scrollSnapAlign: 'start',
              height: '100vh',
              width: '100%',
              display: 'block'
            }}>
              <Values />
            </section>
          </div>
        )}

        {activeTab === 'SCOPE' && <Healthcare />}
        {activeTab === 'TEAM' && <Network />}
        {activeTab === 'CONTACT US' && <ContactForm />}
        {activeTab === 'ADVISORY BOARD' && <Advesory />}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
