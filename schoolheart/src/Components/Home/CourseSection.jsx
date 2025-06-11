import React from 'react';
import CourseCard from '../Coursecard';
import image1 from '../../assets/Images/card1image.svg';
import image2 from '../../assets/Images/card2image.svg';
import image3 from '../../assets/Images/card3image.svg';
import image4 from '../../assets/Images/card4image.svg';

const CourseSection = () => {
  const courses = [
    {
      image: image1,
      tag: 'Sale',
      category: 'Books Library',
      title: 'Our Experts Teacher',
      description: 'We focus on ergonomics and meeting you...',
      sales: 15,
      originalPrice: 16.48,
      discountedPrice: 6.48,
      rating: 4.9
    },
    {
      image: image2,
      tag: 'Sale',
      category: 'Training Courses',
      title: 'Watch our Courses',
      description: 'We focus on ergonomics and meeting you...',
      sales: 15,
      originalPrice: 16.48,
      discountedPrice: 6.48,
      rating: 4.9
    },
    {
      image: image3,
      tag: 'Sale',
      category: 'Expert Instruction',
      title: 'Watch our Courses',
      description: 'We focus on ergonomics and meeting you...',
      sales: 15,
      originalPrice: 16.48,
      discountedPrice: 6.48,
      rating: 4.9
    },
    {
      image: image4,
      tag: 'Sale',
      category: 'Training Courses',
      title: 'Get Quality Education',
      description: 'We focus on ergonomics and meeting you...',
      sales: 15,
      originalPrice: 16.48,
      discountedPrice: 6.48,
      rating: 4.0
    }
  ];

  return (
    <section className='course_section'>
        <div className='container'>
    <div className="course-section">
        <h6>Courses</h6>
      <h2>Get Quality Education</h2>
      <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
    </div>
    </section>
  );
};

export default CourseSection;
