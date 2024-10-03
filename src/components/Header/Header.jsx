import './Header.css';

import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header_container_wrapper'>
      {/* <p>Tbc</p> */}
      <div className='header_container'>
        {/* navigation from layout.jsx */}
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/assignment3'>Assignment3</Link>
            </li>
          </ul>
        </nav>

        <div>
          <div className='profile_wrapper'>
            <Link to='/profile'>
              <img
                src='https://www.svgrepo.com/show/43426/profile.svg'
                alt=''
              />
            </Link>
          </div>
          <p>Sign In</p>

          <p>Sign Up</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
