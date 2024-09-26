import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className='header_container_wrapper'>
      {/* <p>Tbc</p> */}
      <div className='header_container'>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>

        <div>
          <p>Sign In</p>

          <p>Sign Up</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
