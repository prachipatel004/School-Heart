import React from 'react';
import learnmorearrowimage from '../../src/assets/Images/learnmorearrowimage.svg'
const SectionCard = ({ 
  image, 
  title, 
  description, 
  linkText, 
  isImageLeft 
}) => {
  return (
    <div className={`section-card ${isImageLeft ? 'reverse' : ''}`}>
      <div className="section-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="section-card__content">
        <div className="underline"></div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#">{linkText} <span><img src={learnmorearrowimage} alt='learnmorearrowimage'/></span></a>
      </div>
    </div>
  );
};

export default SectionCard;
