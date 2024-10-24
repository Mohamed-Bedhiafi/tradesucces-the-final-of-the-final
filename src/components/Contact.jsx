import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './styles.css';

const Contact = () => {
  const { t } = useTranslation();

  const handleLinkClick = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <section 
      id="contact"
      className="section contact-section" 
      aria-label="newsletter"
    >
      <div className="container">
        <div className="newsletter-content">
          <h2 className="h2 section-title" dangerouslySetInnerHTML={{ __html: t('contact.contactUsDescription') }}></h2>

          <div className="button-container">
            <Link 
              to="/formulaire" 
              className="contact-link" 
              onClick={handleLinkClick}
            >
              {t('contact.getInContact')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
