import React from 'react';
import "./styles.css"
import footerlogo from '../images/logo (5).png'
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top section">
            <div className="footer-brand">
              <div className="footer-brand-header">
                <img src={footerlogo} alt="TradeSuccess Logo" className="footer-logo" /> 
              </div>
              <p className="footer-text">
                {t('footer.footerDescription')}
              </p>

              <ul className="social-list">
                <li>
                  <a href="https://www.youtube.com/@TradeSuccess-z1b/featured" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/trade-success/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li><p className="footer-list-title">{t('footer.usefulLinks')}</p></li>
              <li><a href="#feature" className="footer-link">{t('footer.aboutUs')}</a></li>
           
                <strong><a className="footer-link" target="_blank" rel="noopener noreferrer">{t('footer.partners')}</a></strong>
            
              <li className="sub-link">
                <a href="https://spondei.com/" className="footer-link" target="_blank" rel="noopener noreferrer">● Spondei</a>
              </li>
              <li className="sub-link"><a href="https://savvyprojects.be/" className="footer-link" target="_blank" rel="noopener noreferrer">● Saavy</a></li>
              <li><a href="#testimonial" className="footer-link">{t('footer.successStories')}</a></li>
              <li><a href="#contact" className="footer-link">{t('footer.contactUs')}</a></li>
            </ul>

            <ul className="footer-list">
              <li><p className="footer-list-title">{t('footer.ourServices')}</p></li>
              <li><a href="#service" className="footer-link">{t('footer.businessCreation')}</a></li>
              <li><a href="#service" className="footer-link">{t('footer.legalStatus')}</a></li>
              <li><a href="#service" className="footer-link">{t('footer.financialPlan')}</a></li>
              <li><a href="#service" className="footer-link">{t('footer.sitewebCreation')}</a></li>
              <li><a href="#service" className="footer-link">{t('footer.allInOneCRM')}</a></li>
              <li><a href="#service" className="footer-link">{t('footer.digitalMarketing')}</a></li>
              <li><a href="#service" className="footer-link">{t('footer.seoSea')}</a></li>
              <li><a href="#service" className="footer-link">{t('footer.googleAds')}</a></li>
              <li><a href="#service" className="footer-link">{t('footer.digitalBranding')}</a></li>
            </ul>

            <ul className="footer-list contact-info">
              <li><p className="footer-list-title">{t('footer.contact')}</p></li>
              <li><FaMapMarkerAlt className="contact-icon" />Chaussée de Charleroi 40, 6150 Anderlues, Belgique</li>
              <li><FaEnvelope className="contact-icon" />contact@trade-success.org</li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; 2024 TradeSuccess. {t('footer.termsAndConditions')}</p>
            <ul className="footer-bottom-list">
              <li><a href="#" className="footer-bottom-link">{t('footer.termsAndConditions')}</a></li>
              <li><a href="#" className="footer-bottom-link">{t('footer.privacyPolicy')}</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
