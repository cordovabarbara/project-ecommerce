import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
    return (
      <header className='header__box'>
          <h1 className='header__title'><Link to='/'>E-commerce</Link></h1>
          <nav className='navbar'>
              <ul className='list__box'>
                  <li className='list__item1'><Link to='/login'>Login</Link></li>
                  <li className='list__item2'><Link to='/register'>Register</Link></li>
                  <li className='list__item3'><Link to='/'>Purchace</Link></li>
                  <li className='list__item4'><Link to='/cart'>Cart</Link></li>
              </ul>
          </nav>
      </header>
    )
  }

export default Header