import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {

  const [visibleMenu, setVisibleMenu] = useState(false);

  useEffect(() => {
    function handleMenu() {
      if (window.innerWidth <= 768) {
        setVisibleMenu(false);
      } else {
        setVisibleMenu(false);
      }
    }

    handleMenu();
    window.addEventListener('resize', handleMenu);

    return () => {
      window.removeEventListener('resize', handleMenu);
    };
  }, []);

  const toggleMenuVisible = () => {
    setVisibleMenu(!visibleMenu);
  };

  const handleLinkClick = () => {
    toggleMenuVisible();
  };

    return (
      <header className='header__box'>
          <h1 className='header__title'><Link className='navbar__title' to='/'>E-commerce</Link></h1>
            <button className='btn__menu' onClick={toggleMenuVisible}>
              <i className='bx bx-menu'></i></button>
              {visibleMenu && (
                <nav className='navbar'>
                  <ul className={`list__box ${visibleMenu ? 'show' : ''}`}>
                      <li onClick={handleLinkClick}><Link className='navbar__a'  to='/login'>Login</Link></li>
                      <li onClick={handleLinkClick}><Link className='navbar__a' to='/register'>Register</Link></li>
                      <li onClick={handleLinkClick}><Link className='navbar__a' to='/purchase'>Purchase</Link></li>
                      <li onClick={handleLinkClick}><Link className='navbar__a' to='/cart'>Cart</Link></li>
                  </ul>
          </nav>
          )}
      </header>
    )
  }

export default Header