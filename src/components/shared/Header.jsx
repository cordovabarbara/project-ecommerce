import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {

  const [visibleMenu, setVisibleMenu] = useState(true)

  useEffect(() => {
    function handleMenu() {
      if (window.innerWidth <= 768) {
        setVisibleMenu(false);
      } else {
        setVisibleMenu(true);
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
  

    return (
      <header className='header__box'>
          <h1 className='header__title'><Link className='navbar__title' to='/'>E-commerce</Link></h1>
            <button className='btn__menu' onClick={toggleMenuVisible}>
              <i class='bx bx-menu'></i></button>
              {visibleMenu && (
                <nav className='navbar'>
                  <ul className={`list__box ${visibleMenu ? 'show' : ''}`}>
                      <li className='list__item'><Link className='navbar__a'  to='/login'>Login</Link></li>
                      <li className='list__item'><Link className='navbar__a' to='/register'>Register</Link></li>
                      <li className='list__item'><Link className='navbar__a' to='/purchase'>Purchase</Link></li>
                      <li className='list__item'><Link className='navbar__a' to='/cart'>Cart</Link></li>
                  </ul>
          </nav>
          )}
      </header>
    )
  }

export default Header