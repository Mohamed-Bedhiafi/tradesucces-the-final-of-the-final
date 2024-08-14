import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar, Hero, Footer, Services, SuccessStories, Contact, Team, Advertise, About } from './components';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import KGoessensTestimonial from './components/pages/k-Goessens';
import TaxiDriverTestimonial from './components/pages/taxidriver';
import Formulaire from './components/pages/formulaire';
import TeamPage from './components/pages/TeamPage';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();
  const [showButton, setShowButton] = useState(false);
  const [selectedDiv, setSelectedDiv] = useState(() => localStorage.getItem('selectedDiv') || 'div1');
  const [language, setLanguage] = useState(i18n.language || 'en');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedDiv', selectedDiv);
  }, [selectedDiv]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    setSelectedDiv(lng === 'en' ? 'div1' : 'div2');
  };

  const handleButtonClick = () => {
    navigate('/formulaire');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar onLanguageChange={handleLanguageChange} />
            <Hero />
            <About />
            <Services />
            <SuccessStories />
            <Advertise />
            <Team />
            <Contact />
          </>
        } />
        <Route path="/k-goessens-testimonial" element={<KGoessensTestimonial />} />
        <Route path="/taxi-driver-testimonial" element={<TaxiDriverTestimonial />} />
        <Route path="/formulaire" element={<Formulaire selectedDiv={selectedDiv} setSelectedDiv={setSelectedDiv} onLanguageChange={handleLanguageChange} />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Footer />

      {showButton && (
        <button
          onClick={handleButtonClick}
          className="back-top-btn has-after active"
          aria-label="tell us your needs"
          data-back-top-btn
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '30px', // Make it a pill shape
            padding: '12px 24px', // Increase padding for shape
            fontSize: '16px',
            fontWeight: 'bold', // Make text bold
            cursor: 'pointer',
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow for depth
          }}
        >
          {t('button.title')}
        </button>
      )}
    </I18nextProvider>
  );
};

export default App;
