import React from "react";
import { Card, Row, Col, Button } from "antd";
import hearticon from '../../assets/Images/hearticon.svg'
import checkIcon from '../../assets/Images/greencircle.svg'
import closeIcon from '../../assets/Images/graycircle.svg'
const features = [
    { name: "Unlimited product updates", available: true },
    { name: "Unlimited product updates", available: true },
    { name: "Unlimited product updates", available: true },
    { name: "1GB Cloud storage", available: false },
    { name: "Email and community support", available: false },
];

const PricingCard = ({ isNew }) => (
    <div className="pricing-card-wrapper">
        <div className="new-badge">New</div>

        <Card className="pricing-card">
            <div className="icon-circle">
                <img src={hearticon} alt="hearticon" />
            </div>

            <div className="free-text">FREE</div>

            <div className="price">
              <h2>19$</h2>
             <h6>Per Month</h6>
            </div>

            <div className="description">
                Slate helps you see how many more days you need...
            </div>

            <Button className="try-btn">Try for free</Button>

            <div className="features">
                {features.map((item, index) => (
                    <div key={index} className="feature-item">
                        {item.available && (
                            <img src={checkIcon} alt="check" className="feature-icon" />
                        )}
                        {!item.available && (
                            <img src={closeIcon} alt="close" className="feature-icon" />
                        )}
                        <span>{item.name}</span>
                    </div>
                ))}

            </div>
        </Card>
    </div>
);

const PricingSection = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <div className="heading">
                    <h6 className="practice-advice">Practice Advice</h6>
                    <h2>Most Popular Courses</h2>
                    <p className="subtitle">
                        Problems trying to resolve the conflict between the two major realms
                        of Classical physics: Newtonian mechanics.
                    </p>
                </div>

                <Row gutter={[16, 16]} justify="center">
                    <Col xs={24} sm={24} md={8}>
                        <PricingCard />
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <PricingCard isNew />
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <PricingCard />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default PricingSection;
