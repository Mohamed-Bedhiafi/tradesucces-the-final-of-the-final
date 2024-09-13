import React from 'react';
import './styles.css';
import hero from '../images/hero.png';
import { FaYoutube, FaTwitter, FaPlay, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">

        <div className="hero-content">

          <h1 className="h1 hero-title" dangerouslySetInnerHTML={{ __html: t('hero.heroTitle') }}></h1>

          <p className="hero-text"    dangerouslySetInnerHTML={{ __html: t('hero.heroText')}}>
       
          </p>

          <div className="wrapper">
            <a href="/formulaire" className="btn btn-primary has-before has-after">
              {t('hero.howItWorks')}
            </a>
            <a href="#testimonial" className="hero-btn" aria-label="">
              <FaPlay aria-hidden="true" />
            <span className="span">{t('hero.behindTheScenes')}</span>
            </a>
          </div>

          <ul className="social-list">
            <li>
              <a
                href="https://www.linkedin.com/company/trade-success/"
                className="social-link"
                style={{ '--color': 'hsl(241, 77%, 63%)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span className="span">Linkedin</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@TradeSuccess-z1b/featured"
                className="social-link"
                style={{ '--color': 'hsl(0, 100%, 50%)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
                <span className="span">{t('hero.socialMedia.youtube')}</span>
              </a>
            </li>

            <li>
              <a href="#" className="social-link" style={{ '--color': 'hsl(203, 89%, 53%)' }}>
                <FaTwitter />
                <span className="span">{t('hero.socialMedia.twitter')}</span>
              </a>
            </li>

          </ul>

        </div>

        <figure className="hero-banner">
          <img src={hero} width="794" alt="hero banner" style={{ marginTop: '-80px' }}/>
        </figure>

      </div>
    </section>
  );
};

export default Hero;
