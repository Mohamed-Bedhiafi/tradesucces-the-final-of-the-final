import React, { useEffect } from 'react';
import Navbar from './Navbar2';
import '../styles.css';

const Formulaire = ({ selectedDiv, onLanguageChange }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.spondei.com/assets/js/embedCode.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Navbar onLanguageChange={onLanguageChange} />
      <section className="formulaire-section">
        <iframe
          displaylogo="false"
          displaylanguageupdate="false"
          attr="sp-container-standard"
          id="div1"
          src="https://hassen.spondei.com/s/pGUoajUAEdM="
          className={selectedDiv === 'div1' ? '' : 'hidden'}
          type="inline"
        ></iframe>
        <iframe
          displaylogo="false"
          displaylanguageupdate="false"
          attr="sp-container-standard"
          id="div2"
          src="https://hassen.spondei.com/s/JAcmEMze974="
          className={selectedDiv === 'div2' ? '' : 'hidden'}
          type="inline"
        ></iframe>
      </section>
    </div>
  );
};

export default Formulaire;
