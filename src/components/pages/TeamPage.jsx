import React, { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar2';
import { useTranslation } from 'react-i18next';
import team1 from '../../images/amin.jpeg';
import team2 from '../../images/image2.png';
import team3 from '../../images/image3.png';
import team4 from '../../images/Anice.png';
import team5 from '../../images/Haykel.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './teampage.css';

const teamMembers = [
  {
    id: 'amin',
    image: team1,
    linkedin: 'https://www.linkedin.com/in/aminanouar/',
  },
  {
    id: 'nil',
    image: team2,
    linkedin: 'https://www.linkedin.com/in/nil-lajnef',
  },
  {
    id: 'phil',
    image: team3,
    linkedin: 'https://www.linkedin.com/in/phil',
  },
  {
    id: 'lorem1',
    image: team4,
    linkedin: 'https://www.linkedin.com/in/spondei-app-8126b02a7?originalSubdomain=fr ',
  },
  {
    id: 'lorem2',
    image: team5,
    linkedin: 'https://www.linkedin.com/in/lorem-ipsum',
  },
];

const TeamPage = ({ onLanguageChange }) => {
  const { t } = useTranslation();
  const [typedQuote, setTypedQuote] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const fullQuote = ' we achieve the extraordinary...';
  const intervalRef = useRef(null);

  useEffect(() => {
    const words = fullQuote.split(' ');
    let index = 0;
    let typing = true;

    intervalRef.current = setInterval(() => {
      setTypedQuote((prev) => {
        if (typing) {
          const currentWords = prev.split(' ');
          if (currentWords.length < words.length) {
            return [...currentWords, words[currentWords.length]].join(' ');
          } else {
            typing = false;
            setTimeout(() => {
              setIsFadingOut(true);
              setTimeout(() => {
                setTypedQuote('');
                typing = true;
                setIsFadingOut(false);
              }, 500); // Fade out duration
            }, 3000); // Pause before deleting
            return prev;
          }
        } else {
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            typing = true;
            return '';
          }
        }
      });
    }, 500); // Adjust typing speed for words

    window.scrollTo(0, 0); // Scroll to top of the page

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <Navbar onLanguageChange={onLanguageChange}/>
      <div className="teampage">
        <h2 className="teampage-title">{t('teampage.title')}</h2>
        <h1 className="teampage-quote">
          Together, we achieve the extraordinary.
        </h1>
        <div className="teampage-container">
          {teamMembers.map((member, index) => (
            <div className="teampage-member" key={member.id}>
              <div className={`teampage-member-content ${index % 2 === 0 ? 'bg-lightbluegray' : 'bg-white'}`}>
                <img src={member.image} alt={t(`teampage.members.${member.id}.name`, { defaultValue: 'Member' })} className="teampage-img" />
                <div className="teampage-info">
                <div className="linkedin-icon">
    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
  </div>
                 
                  <h3 className="teampage-member-name">{t(`teampage.members.${member.id}.name`, { defaultValue: 'Lorem Ipsum' })}</h3>
         

                  <h4 className="teampage-member-position">{t(`teampage.members.${member.id}.position`, { defaultValue: 'Position' })}</h4>
                  
                  <p className="teampage-member-bio">{t(`teampage.members.${member.id}.bio`, { defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' })}</p>
                   
                   </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;