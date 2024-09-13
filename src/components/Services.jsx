import React, { useState } from 'react';
import service1 from '../images/service-icon-1.svg';
import service2 from '../images/service-icon-2.png';
import service3 from '../images/service-icon-3.png';
import approach from '../images/sevice1.svg';
import qualityservice from '../images/service2.svg';
import management from '../images/sevice3.svg';
import './styles.css';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const [activeCard, setActiveCard] = useState(null); // Start with no card active

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index); // Toggle active state
  };

  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <h2 className="h2 section-title text-center" dangerouslySetInnerHTML={{ __html: t('services.sectionTitle') }}></h2>
    
        <ul className="grid-list">
          <li>
            <div
              className={`service-card ${activeCard === 1 ? 'active' : ''}`}
              onClick={() => handleCardClick(1)} // Toggle on click
              style={{ '--color': '17, 100%, 68%' }}
            >
              <div className="card-icon">
                <img src={service1} width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3 card-title">{t('services.service1Title')}</h3>
            </div>
            <div className={`cardContent ${activeCard === 1 ? 'active' : ''}`} style={{ '--color': '17, 100%, 68%' }}>
              <div className="imageContainer">
                <img src={approach} alt="Customer relationship management" />
              </div>
              <div className="textContainer">
                <div className="cardTitle">{t('services.card1Title')}</div>
                <div className="cardDesc" dangerouslySetInnerHTML={{ __html: t('services.card1Desc') }}></div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`service-card ${activeCard === 2 ? 'active' : ''}`}
              onClick={() => handleCardClick(2)} // Toggle on click
              style={{ '--color': '52, 98%, 50%' }}
            >
              <div className="card-icon">
                <img src={service2} width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3 card-title">{t('services.service2Title')}</h3>
            </div>
            <div className={`cardContent ${activeCard === 2 ? 'active' : ''}`} style={{ '--color': '52, 98%, 50%' }}>
              <div className="imageContainer">
                <img src={qualityservice} alt="Business Development" />
              </div>
              <div className="textContainer">
                <div className="cardTitle">{t('services.card2Title')}</div>
                <div className="cardDesc" dangerouslySetInnerHTML={{ __html: t('services.card2Desc') }}></div>
              </div>
            </div>
          </li>
          <li>
            <div
              className={`service-card ${activeCard === 3 ? 'active' : ''}`}
              onClick={() => handleCardClick(3)} // Toggle on click
              style={{ '--color': '157, 89%, 44%' }}
            >
              <div className="card-icon">
                <img src={service3} width="30" height="30" loading="lazy" alt="service icon" />
              </div>
              <h3 className="h3 card-title">{t('services.service3Title')}</h3>
            </div>
            <div className={`cardContent ${activeCard === 3 ? 'active' : ''}`} style={{ '--color': '157, 89%, 44%' }}>
              <div className="imageContainer">
                <img src={management} alt="Digital marketing" />
              </div>
              <div className="textContainer">
                <div className="cardTitle">{t('services.card3Title')}</div>
                <div className="cardDesc" dangerouslySetInnerHTML={{ __html: t('services.card3Desc') }}></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
