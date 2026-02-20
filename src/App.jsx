import { useState, useEffect, useRef } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Hero from './components/sections/Hero';
import HeroMobile from './components/sections/HeroMobile';
import About from './components/sections/About';
import AboutMobile from './components/sections/AboutMobile';
import Healthcare from './components/sections/Healthcare';
import HealthcareMobile from './components/sections/HealthcareMobile';
import Network from './components/sections/Network';
import NetworkMobile from './components/sections/NetworkMobile';
import AdvisoryMobile from './components/sections/AdvisoryMobile';
import ContactMobile from './components/sections/ContactMobile';
import VideoBackground from './components/backgrounds/VideoBackground';
import NanotechBackground from './components/backgrounds/NanotechBackground';
import homeBgMobile from './assets/Background.jpg';
import bgImageDesktop from './assets/bg.png';
import healthcareBg from './assets/04-scope.jpg';
import networkBg from './assets/image.jpg';
import AboutParticles from './components/backgrounds/AboutParticles';
import Lenis from 'lenis';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/global.css';
import './styles/noscroll.css';
import contactBg from './assets/edd.png';
import aboutBg from './assets/04.jpg';
import ContactForm from './components/sections/Contact';
import Mission from './components/sections/Mission';
import Values from './components/sections/Values';
import Advisory from './components/sections/Advisory';
import BottomNav from './components/layout/BottomNav';
import BackgroundChanger from './components/layout/BackgroundChanger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeTab, setActiveTab] = useState('HOME');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (activeTab === 'ABOUT US' && scrollRef.current) {
      const lenis = new Lenis({
        wrapper: scrollRef.current,
        content: scrollRef.current.firstElementChild,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      const sections = gsap.utils.toArray('.page-section', scrollRef.current);

      ScrollTrigger.create({
        trigger: scrollRef.current.firstElementChild,
        scroller: scrollRef.current,
        start: 'top top',
        end: 'bottom bottom',
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.2, max: 0.8 },
          delay: 0.1,
          ease: 'power1.inOut'
        }
      });

      ScrollTrigger.create({
        trigger: sections[1],
        scroller: scrollRef.current,
        start: 'top 60%',
        onEnter: () => gsap.to('.logo-container', { opacity: 0, duration: 0.5, pointerEvents: 'none' }),
        onLeaveBack: () => gsap.to('.logo-container', { opacity: 1, duration: 0.5, pointerEvents: 'auto' })
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        ScrollTrigger.getAll().forEach(t => t.kill());
        gsap.set('.logo-container', { opacity: 1, pointerEvents: 'auto' });
      };
    }
  }, [activeTab]);

  const getAppStyle = () => {

    if (activeTab === 'HOME') {
      return {
        backgroundImage: isMobile ? 'none' : `url(${bgImageDesktop})`,
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

  const { backgroundImage, backgroundColor } = getAppStyle() || {};

  return (
    <div className="app-main" style={{
      height: '100%',
      width: '100%',
      overflowX: 'hidden',
      overflowY: isMobile ? 'auto' : 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
    }}>
      <BackgroundChanger bgImage={backgroundImage} bgColor={backgroundColor} />
      {activeTab === 'HOME' && <VideoBackground />}
      <Header activeTab={activeTab} />
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main style={{ minHeight: '100%', width: '100%' }}>
        {activeTab === 'HOME' && (isMobile ? <HeroMobile /> : <Hero />)}

        {activeTab === 'ABOUT US' && (
          isMobile ? (
            <AboutMobile />
          ) : (
            <>
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                background: 'radial-gradient(ellipse at 25% 30%, #0c1a4a 0%, #071035 30%, #040a25 60%, #020618 100%)'
              }}>
                <AboutParticles />
              </div>
              <div className="page-wrapper" ref={scrollRef} style={{
                height: '100vh',
                width: '100%',
                overflowY: 'auto',
                position: 'relative',
                zIndex: 1
              }}>
                <div>
                  <section className="page-section" style={{
                    height: '100vh',
                    width: '100%',
                    display: 'block'
                  }}>
                    <About />
                  </section>

                  <section className="page-section" style={{
                    height: '100vh',
                    width: '100%',
                    display: 'block'
                  }}>
                    <Mission />
                  </section>

                  <section className="page-section" style={{
                    height: '100vh',
                    width: '100%',
                    display: 'block'
                  }}>
                    <Values />
                  </section>
                </div>
              </div>
            </>
          )
        )}

        {activeTab === 'SCOPE' && (isMobile ? <HealthcareMobile /> : <Healthcare />)}
        {activeTab === 'TEAM' && (isMobile ? <NetworkMobile /> : <Network />)}
        {activeTab === 'CONTACT US' && (isMobile ? <ContactMobile /> : <ContactForm />)}
        {activeTab === 'ADVISORY BOARD' && (isMobile ? <AdvisoryMobile /> : <Advisory />)}
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
