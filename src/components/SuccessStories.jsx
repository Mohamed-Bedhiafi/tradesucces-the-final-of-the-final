import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles.css';
import taxi from '../images/logo-private-chauffeur-paris.svg';
import kgoesens from '../images/logo-Kevin-Goessens.png';
import { useTranslation } from 'react-i18next';
import video from '../images/video.webp';

const Testimonial = ({ imgSrc, content, name, location, onClick, imgClass }) => {
  const { t } = useTranslation();
  return (
    <div className="testimonial">
      <img src={imgSrc} alt={name} className={`testimonial-img mx-auto ${imgClass}`} />
      <p className="testimonial-content">{content}</p>
      <p className="testimonial-author">{name}, {location}</p>
      <div className="text-center mt-5">
        <button className="see-more-btn" onClick={onClick}>
          <img src={video} alt="video icon" className="inline-block w-12 h-12 mr-2" />
          {t('testimonials.button')}
          <span className="ml-2">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: false,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
  };

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <section
      className="section testimonials relative container mx-auto px-5 md:px-16 flex flex-col gap-5 text-center"
      id="testimonial"
    >
      <div>
        <h2 className="h2 section-title text-center" dangerouslySetInnerHTML={{ __html: t('testimonials.sectionTitle') }}></h2>
      </div>
      <div className="testimonials-grid">
        <Testimonial
          imgSrc={kgoesens}
          content={t('testimonials.kgoessensContent')}
          name={t('testimonials.kgoessensManager')}
          location="K-Goessens Manager"
          onClick={() => handleClick('/k-goessens-testimonial')}
          imgClass="not-rounded"
        />
        <Testimonial
          imgSrc={taxi}
          content={t('testimonials.privateChauffeurContent')}
          name={t('testimonials.privateChauffeurManager')}
          location="Private Chauffeur Paris"
          onClick={() => handleClick('/taxi-driver-testimonial')}
        />
      </div>
    </section>
  );
};

export default Testimonials;
