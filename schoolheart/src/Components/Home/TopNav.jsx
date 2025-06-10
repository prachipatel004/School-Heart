import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../Button';
import { FiMenu, FiX } from 'react-icons/fi';

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero_wrapper_section">
      <div className="container">
        <div className="nav_main">
          <div className="nav_logo">
            <h3>Brandname</h3>
          </div>

          
          <div className={`nav_content ${menuOpen ? 'open' : ''}`}>
            <div className="nav_list">
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>

            <div className="nav_btn">
              <CustomButton padding="15px 25px">Login</CustomButton>
              <CustomButton padding="15px 25px">JOIN US</CustomButton>
            </div>
          </div>

          {/* Hamburger / Close Icon */}
          <div className="menu_icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        <div className='nav_home'>
          <h5>Join Us</h5>
          <h1>HIGH QUALITY COURSES</h1>
          <h4>Our goal is to make online education work for everyone</h4>
          <CustomButton padding="15px 40px">Join Us</CustomButton>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
