import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 
import team1 from '../images/amin.jpeg';
import team2 from '../images/image2.png';
import team3 from '../images/image3.png';
import team4 from '../images/Anice.png';
import team5 from '../images/Haykel.jpg';

import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  {
    id: 0,
    name: 'Amin Anouar',
    image: team1,
    linkedin: 'https://www.linkedin.com/in/aminanouar/', 
  },
  {
    id: 1,
    name: 'Nil Lajnef',
    image: team2,
    linkedin: 'https://www.linkedin.com/in/nil-lajnef', // Add LinkedIn URL
  },
  {
    id: 2,
    name: 'Phil',
    image: team3,
    linkedin: 'https://www.linkedin.com/in/phil-emamally-/', 
  },
  {
    id: 3,
    name: 'Anice L.',
    image: team4,
    linkedin: 'https://www.linkedin.com/in/spondei-app-8126b02a7?originalSubdomain=fr ', // Add LinkedIn URL
  },
  {
    id: 4,
    name: 'Haykel Ben Chaabane ',
    image: team5,
    linkedin: 'https://www.linkedin.com/in/lorem-ipsum', // Add LinkedIn URL
  },
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <section className="team" id='team'>
      <div className="container">
        <h2 className="h2 section-title text-center" dangerouslySetInnerHTML={{ __html: t('team.sectionTitle') }}></h2>
        <div className="team-row">
          {teamMembers.map((member) => (
            <div className="member" key={member.id}>
              <Link to="/team" className="team-link">
                <div className="img">
                  <img src={member.image} className="img-fluid" alt={member.name} />
                </div>
                <div className="m_text">
                  <h3>{member.name}</h3>
                  <h5>{t(`teamMembers.${member.id}.position`)}</h5>
                </div>
                <div className="m_menu">
                  <p>{t(`teamMembers.${member.id}.description`)}</p>
                </div>
              </Link>
              <div className="linkedin-icon">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
