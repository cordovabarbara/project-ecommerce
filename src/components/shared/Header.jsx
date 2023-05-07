import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <header>
          <h1><Link to='/'>E-commerce</Link></h1>
          <nav>
              <ul>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/register'>Register</Link></li>
                  <li><Link to='/'>Purchace</Link></li>
                  <li><Link to='/'>Cart</Link></li>
              </ul>
          </nav>
      </header>
    )
  }

export default Header