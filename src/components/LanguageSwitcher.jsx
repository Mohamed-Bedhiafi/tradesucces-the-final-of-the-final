import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import './styles.css';
import frflag from '../images/frenchflag.jpg';
import enflag from '../images/englishflag.jpg';

const LanguageSwitcher = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [showOptions, setShowOptions] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    onLanguageChange(lng);
    setShowOptions(false);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => setShowOptions(!showOptions)} className="language-button">
        <FaGlobe className="globe-icon" />
      </button>
      {showOptions && (
        <div className="language-options">
          <button className="language-option" onClick={() => changeLanguage('en')}>
            <img src={enflag} alt="UK Flag" className="flag-icon" /> English
          </button>
          <button className="language-option" onClick={() => changeLanguage('fr')}>
            <img src={frflag} alt="French Flag" className="flag-icon" /> French
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
