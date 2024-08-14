import React from 'react';
import "./styles.css"
import footerlogo from '../images/logo.png'
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
           <a
            href="https://www.youtube.com/@TradeSuccess-z1b/featured"
            className="social-link"
             target="_blank"
            rel="noopener noreferrer"
            >
            <FaYoutube />
              </a>
            </li>

              <li>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
              </li>
              <li>
              <a
                 href="https://www.linkedin.com/company/trade-success/"
                className="social-link"
                target="_blank"
               rel="noopener noreferrer"
                >
                <FaLinkedin />
                </a>
              </li>

            </ul>

          </div>

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">{t('footer.usefulLinks')}</p>
            </li>

            <li>
              <a href="#" className="footer-link">{t('footer.contactUs')}</a>
            </li>

            <li>
              <a href="#" className="footer-link">{t('footer.howItWorks')}</a>
            </li>

            <li>
              <a href="#" className="footer-link">{t('footer.create')}</a>
            </li>

            <li>
              <a href="#" className="footer-link">{t('footer.explore')}</a>
            </li>

            <li>
              <a href="#" className="footer-link">{t('footer.termsAndServices')}</a>
            </li>

          </ul>

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">{t('footer.community')}</p>
            </li>

            <li>
              <a href="#" className="footer-link">{t('footer.helpCenter')}</a>
            </li>

            <li>
              <a href="#" className="footer-link">{t('footer.partners')}</a>
            </li>

            <li>
              <a href="#" className="footer-link">{t('footer.suggestions')}</a>
            </li>

            <li>
              <a href="#" className="footer-link">{t('footer.blog')}</a>
            </li>

            <li>
              <a href="#" className="footer-link">{t('footer.newsletters')}</a>
            </li>

          </ul>

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">{t('footer.instagramPost')}</p>
            </li>

          

              <li>contact@TradeSuccess.org</li>

            

          </ul>

        </div>

        <div className="footer-bottom">

          <p className="copyright">
            &copy; 2024 TradeSuccess. {t('footer.termsAndConditions')}
          </p>

          <ul className="footer-bottom-list">

            <li>
              <a href="#" className="footer-bottom-link">{t('footer.termsAndConditions')}</a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">{t('footer.privacyPolicy')}</a>
            </li>

          </ul>

        </div>

      </div>
    </footer>
    </>
  );
};

export default Footer;
