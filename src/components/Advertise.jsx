import React from 'react';
import { useTranslation } from 'react-i18next';
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import './styles.css';

const Advertise = () => {
  const { t } = useTranslation();

  const brands = [
    { iconSrc: icon1, service: t('values.strongCollaboration') },
    { iconSrc: icon2, service: t('values.effectiveCommunication') },
    { iconSrc: icon3, service: t('values.innovativeThinking') },
  ];

  return (
    <div className="advertise-container my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center justify-between xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden">
      {brands?.map((val, i) => (
        <div key={i} className="advertise-item flex items-center space-x-4 transition-all duration-300 cursor-pointer hover:scale-105 p-4">
          <img src={val.iconSrc} alt={`brands/icon${i}`} className='w-20 h-20 object-contain xl:w-16 xl:h-16 lg:w-14 lg:h-14 drop-shadow-md' />
          <span className="font-bold text-black">{val.service}</span>
        </div>
      ))}
    </div>
  );
}

export default Advertise;
