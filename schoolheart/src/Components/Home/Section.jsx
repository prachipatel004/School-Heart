import React from 'react';
import SectionCard from '../ReusableSection';
import kidImage from '../../assets/Images/thumbconceptimage.svg';
import foodImage from '../../assets/Images/videocardimage.svg'; 

const Section = () => {
  return (
    <section className='card_section'>
      <div className='container'>
    <div className="homepage">
      <SectionCard
        image={kidImage}
        title="Watch our Courses"
        description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        linkText="Learn More"
        isImageLeft={false}
      />

      <SectionCard
        image={foodImage}
        title="Every Client Matters"
        description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        linkText="Learn More"
        isImageLeft={true}
      />
    </div>
    </div>
    </section>
  );
};

export default Section;
