import React from 'react';
import phoneIcon from '../../assets/Images/callicon.svg';
import locationIcon from '../../assets/Images/locationicon.svg';
import mailIcon from '../../assets/Images/mailicon.svg';
import facebookIcon from '../../assets/Images/fbicon.svg';
import instagramIcon from '../../assets/Images/instaicon.svg';
import twitterIcon from '../../assets/Images/twittericon.svg';


const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className='footer_bg'>
                    <div className="footer-columns">
                        <div className="footer-column">
                            <h5>Company Info</h5>
                            <ul>
                                <li>About Us</li>
                                <li>Carrier</li>
                                <li>We are hiring</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h5>Legal</h5>
                            <ul>
                                <li>About Us</li>
                                <li>Carrier</li>
                                <li>We are hiring</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h5>Features</h5>
                            <ul>
                                <li>Business Marketing</li>
                                <li>User Analytic</li>
                                <li>Live Chat</li>
                                <li>Unlimited Support</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h5>Resources</h5>
                            <ul>
                                <li>IOS & Android</li>
                                <li>Watch a Demo</li>
                                <li>Customers</li>
                                <li>API</li>
                            </ul>
                        </div>

                        <div className="footer-column contact">
                            <h5>Get In Touch</h5>
                            <ul>
                                <li><img src={phoneIcon} alt="phone" /> (480) 555-0103</li>
                                <li><img src={locationIcon} alt="location" /> 4517 Washington Ave. Manchester, Kentucky 39495</li>
                                <li><img src={mailIcon} alt="email" /> debra.holt@example.com</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <div className='container'>
                    <div className='footer_flex'>
                        <p>Made With Love By Figmaland All Right Reserved</p>
                        <div className="social-icons">
                            <img src={facebookIcon} alt="Facebook" />
                            <img src={instagramIcon} alt="Instagram" />
                            <img src={twitterIcon} alt="Twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
