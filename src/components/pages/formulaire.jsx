import React, { useEffect } from 'react';
import Navbar from './Navbar2';
import '../styles.css';

const Formulaire = ({ selectedDiv, onLanguageChange }) => {
  // Function to get the selected language from URL or localStorage
  const getSelectedLanguage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || localStorage.getItem('selectedLanguage') || 'en';
  };

  const setSelectedLanguage = (lang) => {
    // Update localStorage and URL with the new language
    localStorage.setItem('selectedLanguage', lang);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('lang', lang);
    window.history.replaceState(null, '', `?${urlParams.toString()}`);

    // Reload the page to reflect the new language
    window.location.reload();
  };

  useEffect(() => {
    // Detect language on initial load
    const language = getSelectedLanguage();

    // Call the onLanguageChange callback (if needed) to update other components
    onLanguageChange(language);

    const script = document.createElement('script');
    script.src = 'https://app.spondei.com/assets/js/embedCode.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const language = getSelectedLanguage();

  const getIframeUrl = (divId) => {
    const baseUrl =
      divId === 'div1'
        ? 'https://hassen.spondei.com/s/pGUoajUAEdM='
        : 'https://hassen.spondei.com/s/JAcmEMze974=';
    const languageQuery = language === 'fr' ? '?lang=fr' : '?lang=en';
    return `${baseUrl}${languageQuery}`;
  };

  return (
    <div>
      <Navbar
        onLanguageChange={(lang) => {
          setSelectedLanguage(lang); // Update language and reload
        }}
      />
      <section className="formulaire-section">
        <iframe
          key={`${selectedDiv}-${language}`}
          displaylogo="false"
          displaylanguageupdate="false"
          attr="sp-container-standard"
          id="div1"
          src={getIframeUrl('div1')}
          className={selectedDiv === 'div1' ? '' : 'hidden'}
          type="inline"
        ></iframe>
        <iframe
          key={`${selectedDiv}-${language}-2`}
          displaylogo="false"
          displaylanguageupdate="false"
          attr="sp-container-standard"
          id="div2"
          src={getIframeUrl('div2')}
          className={selectedDiv === 'div2' ? '' : 'hidden'}
          type="inline"
        ></iframe>
      </section>
    </div>
  );
};

export default Formulaire;
