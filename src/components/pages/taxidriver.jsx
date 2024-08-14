import React, { useEffect } from 'react';
import Navbar from './Navbar2';
import './testimonialStyles.css';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';

const TaxiDriverTestimonial = () => {
  const { t } = useTranslation();
  const content = t('taxidriver.testimonialContent', { returnObjects: true });

  useEffect(() => {
    gsap.fromTo(
      '.animated-number',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1.5,
        duration: 0.5,
        ease: 'power1.inOut',
      }
    );
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-5 md:px-16 testimonial-section">
        <div className="testimonial-flex-container">
        <div className="testimonial-video">
            <iframe
              src="https://www.youtube.com/embed/R-CI537gJj0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="testimonial-card">
            <h1 className="testimonial-header">{t('taxidriver.testimonialTitle')}</h1>
            <h2 className="testimonial-subheader">{t('taxidriver.testimonialSubheader')}</h2>
            {Array.isArray(content) && content.map((content, index) => {
              if (content.paragraph) {
                return <p key={index} className="testimonial-paragraph">{content.paragraph}</p>;
              }
              if (content.resultsTitle) {
                return (
                  <div key={index} className="testimonial-results">
                    <h3 className="testimonial-results-title">{content.resultsTitle}</h3>
                    <ul className="testimonial-results-list">
                      {content.resultsContent.map((result, resultIndex) => {
                        // Split result to apply animation to the number and the text
                        const [number, ...text] = result.split(' ');
                        return (
                          <li key={resultIndex} className="testimonial-result-item">
                            <div className="animated-number-container">
                              {number && <span className="animated-number">{number}</span>}
                            </div>
                            {text.join(' ')}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
              return null;
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TaxiDriverTestimonial;
