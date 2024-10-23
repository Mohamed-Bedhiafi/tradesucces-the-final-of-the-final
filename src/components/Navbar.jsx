import React, { useEffect } from 'react';
import './styles.css';
import { FaBars } from 'react-icons/fa';
import logo from '../images/logo (4).png'; 
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

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
    }

    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");

    const toggleNavbar = () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    }

    addEventOnElem(navTogglers, "click", toggleNavbar);

    const closeNavbar = () => {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
    }

    addEventOnElem(navbarLinks, "click", closeNavbar);

    const header = document.querySelector("[data-header]");

    const headerActive = () => {
      if (window.scrollY > 80) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }

    window.addEventListener("scroll", headerActive);

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener("scroll", headerActive);
      navTogglers.forEach(toggler => toggler.removeEventListener("click", toggleNavbar));
      navbarLinks.forEach(link => link.removeEventListener("click", closeNavbar));
    };
  }, []);

  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} alt="Logo" className="logo-image" /> 
        </a>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link>{t('nav.home')}</a>
            </li>
            <li className="navbar-item">
              <a href="#feature" className="navbar-link" data-nav-link>{t('nav.about')}</a>
            </li>
            <li className="navbar-item">
              <a href="#service" className="navbar-link" data-nav-link>{t('nav.services')}</a>
            </li>
            <li className="navbar-item">
              <a href="#testimonial" className="navbar-link" data-nav-link>{t('nav.successStories')}</a>
            </li>
            <li className="navbar-item">
              <a href="#team" className="navbar-link" data-nav-link>{t('nav.team')}</a>
            </li>
          </ul>
        </nav>

        <div className="nav-links">
          <a href="/formulaire" className="nav-link" style={{ fontSize: '2rem', color: 'white'  }}>{t('nav.contact')}</a> 
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
