import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <header className='header__box'>
          <h1 className='header__title'><Link to='/'>E-commerce</Link></h1>
          <nav className='navbar'>
              <ul>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/register'>Register</Link></li>
                  <li><Link to='/'>Purchace</Link></li>
                  <li><Link to='/cart'>Cart</Link></li>
              </ul>
          </nav>
      </header>
    )
  }

export default Header