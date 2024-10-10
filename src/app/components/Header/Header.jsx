// 'use client';
import './Header.css';
import Link from 'next/link';
const Header = () => {
  return (
    <header className='header_container_wrapper'>
      {/* <p>Tbc</p> */}
      <div className='header_container'>
        {/* navigation from layout.jsx */}
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>

            <li>
              <Link href='/blog'>Blogs</Link>
            </li>
          </ul>
        </nav>

        <div>
          <div className='profile_wrapper'>
            <Link href='/profile'>
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
