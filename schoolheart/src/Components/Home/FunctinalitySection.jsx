import React from 'react';
import { Card } from 'antd';
import functinality1image from '../../assets/Images/functinality1image.svg';
import functinality2image from '../../assets/Images/functionality2image.svg';
import functinality3image from '../../assets/Images/functinality3image.svg';



const Functionality = () => {
    return (
        <section className="functionality_section">
            <div className="container">
                <div className="functionality_main">
                    <Card className="functionality_card">
                        <div className='card_img'>        
                        <img src={functinality1image} alt="Lifetime access" className="card_icon" />
                        </div>

                        <h3 className="card_title">Lifetime access</h3>
                        <div className="card_underline"></div>
                        <p className="card_desc">
                            The gradual accumulation of information about atomic and small-scale behaviour...
                        </p>
                    </Card>

                    <Card className="functionality_card">
                         <div className='card_img'>  
                        <img src={functinality2image} alt="Training Courses" className="card_icon" />
                        </div>
                        <h3 className="card_title">Training Courses</h3>
                        <div className="card_underline"></div>
                        <p className="card_desc">
                            The gradual accumulation of information about atomic and small-scale behaviour...
                        </p>
                    </Card>

                    <Card className="functionality_card active">
                         <div className='card_img'>  
                        <img src={functinality3image} alt="Expert instruction" className="card_icon" />
                        </div>
                        <h3 className="card_title">Expert instruction</h3>
                        <div className="card_underline"></div>
                        <p className="card_desc">
                            The gradual accumulation of information about atomic and small-scale behaviour...
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Functionality;
