import React from "react";
import {Rate, Card } from "antd";
import people1image from '../../assets/Images/people1image.svg';
import people2image from '../../assets/Images/people2image.svg'

const TestimonialCard = ({ image, feedback, name, designation, rating }) => {
    return (
        <Card className="testimonial-card" bordered={false}>
            <div className="testimonial-image-wrapper">
                <img src={image} alt={name} className="testimonial-image" />
            </div>
            <p className="testimonial-text">{feedback}</p>
            <Rate disabled defaultValue={rating} />
            <h3 className="testimonial-name">{name}</h3>
            <p className="testimonial-designation">{designation}</p>
        </Card>
    );
};

const TestimonialSection = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonial_main">
                    <h6 className="subtitle_testimonial">Testimonials</h6>
                    <h2 className="main-title">Our Popular Courses</h2>
                    <p className="description_testimonial">
                        Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>

                    <div className="testimonial-container">
                        <TestimonialCard
                            image={people1image}
                            feedback="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
                            name="Regina Miles"
                            designation="Designer"
                            rating={4}
                        />
                        <TestimonialCard
                              image={people2image}
                            feedback="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
                            name="Regina Miles"
                            designation="Designer"
                            rating={5}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
