import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaRocket, FaUsers, FaSlideshare, FaSeedling } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section feature" id="feature" aria-label="feature">
      <div className="container">
      <h2 className="h2 section-title" dangerouslySetInnerHTML={{ __html: t('aboutUs.expertsInGuiding') }}></h2>
        
        <Fade direction="bottom" duration={1500} easing="ease-out">
          <div className="feature-content">
            <ul className="feature-list">
              <li>
                <div className="feature-card">
                  <div className="card-icon" style={{ '--color': '174, 77%, 50%' }}>
                    <FaRocket aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="h3 card-title">{t('aboutUs.qualifiedTeam')}</h3>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html:t('aboutUs.qualifiedTeamText')}}></p>
                  </div>
                </div>
              </li>
              <li>
                <div className="feature-card">
                  <div className="card-icon" style={{ '--color': '241, 77%, 63%' }}>
                    <FaUsers aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="h3 card-title">{t('aboutUs.strongPartnerships')}</h3>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html:t('aboutUs.strongPartnershipsText')}}></p>
                  </div>
                </div>
              </li>
              <li>
                <div className="feature-card">
                  <div className="card-icon" style={{ '--color': '343, 98%, 60%' }}>
                    <FaSlideshare aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="h3 card-title">{t('aboutUs.referencePartner')}</h3>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html:t('aboutUs.referencePartnerText')}}></p>
                  </div>
                </div>
              </li>
              <li>
                <div className="feature-card">
                  <div className="card-icon" style={{ '--color': '174, 77%, 20%' }}>
                    <FaSeedling aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="h3 card-title">{t('aboutUs.prosper')}</h3>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html:t('aboutUs.prosperText')}}></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
