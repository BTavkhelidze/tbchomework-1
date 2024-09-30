import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header className='header_container_wrapper'>
      {/* <p>Tbc</p> */}
      <div className='header_container'>
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
              <Link to='/projects'>About</Link>
            </li>
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
