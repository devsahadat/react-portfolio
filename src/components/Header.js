import React from 'react';

// images 
import Logo from '../assets/logo1.png';

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <button className="btn btn-sm">
            <a href="https://www.linkedin.com/in/devsahadat/" target='_blank'>Hire me Now</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
