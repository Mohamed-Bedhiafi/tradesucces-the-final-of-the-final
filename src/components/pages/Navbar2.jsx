import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo.png';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Navbar = ({ onLanguageChange }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.spondei.com/assets/js/embedCode.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const addEventOnElem = (elem, type, callback) => {
      if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
          elem[i].addEventListener(type, callback);
        }
      } else {
        elem.addEventListener(type, callback);
      }
    };

    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    addEventOnElem(navTogglers, "click", toggleNavbar);

    const closeNavbar = () => {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    };

    addEventOnElem(navbarLinks, "click", closeNavbar);

    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    const headerActive = () => {
      if (window.scrollY > 80) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", headerActive);

    return () => {
      window.removeEventListener("scroll", headerActive);
      navTogglers.forEach(toggler => toggler.removeEventListener("click", toggleNavbar));
      navbarLinks.forEach(link => link.removeEventListener("click", closeNavbar));
    };
  }, []);

  return (
    <header className="header" data-header>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/#home" className="navbar-link" data-nav-link>{t('nav.home')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/#feature" className="navbar-link" data-nav-link>{t('nav.about')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/#service" className="navbar-link" data-nav-link>{t('nav.services')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/#testimonial" className="navbar-link" data-nav-link>{t('nav.successStories')}</Link>
            </li>
            <li className="navbar-item">
              <Link to="/#team" className="navbar-link" data-nav-link>{t('nav.team')}</Link>
            </li>
          </ul>
        </nav>

        <div className="nav-links">
          <Link to="/#contact" className="nav-link" style={{ fontSize: '2rem', color: 'black' }}>{t('nav.contact')}</Link>
        </div>

        <LanguageSwitcher onLanguageChange={onLanguageChange} />

        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <FaBars aria-hidden="true" />
        </button>

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Navbar;
