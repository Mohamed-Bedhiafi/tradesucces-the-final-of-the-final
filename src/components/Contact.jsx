import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import newsletter from '../images/newsletter-bg.jpg';
import newsletter2 from '../images/contact.png';
import './styles.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="contact"
      className="section newsletter has-bg-image" 
      aria-label="newsletter" 
      style={{ backgroundImage: `url(${newsletter})` }}
    >
      <div className="container">
        <figure className="newsletter-banner">
          <img 
            src={newsletter2} 
            width="355" 
            height="356" 
            loading="lazy" 
            alt="newsletter banner" 
            className="w-100 blend-image" 
          />
        </figure>

        <div className="newsletter-content">
          <h2 className="h2 section-title" dangerouslySetInnerHTML={{ __html: t('contact.contactUsDescription') }}></h2>

          <div className="button-container">
            <Link to="/formulaire" target="_blank" className="contact-link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
