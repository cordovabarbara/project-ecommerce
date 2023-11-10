
import { Link } from 'react-router-dom'
import '../styles/header.css';
import mundo from '/public/mundopc.png'
import { useState } from 'react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
      <header className='header__box'>
          <div className='header__logo'>
            <Link to='/'><img className='img__logo' src={mundo} alt="Home"/></Link></div>
            <nav className='navbar'>
            <li onClick={handleMenu}>
                <i className='bx bx-menu'></i>
                </li>
              <ul className={`navbar__ul ${menuOpen ? 'open' : ''}`}>
                <li title= "Registrarse">
                <i className='bx bxs-user-plus'></i>
                </li>
                <li title= "Ingresar">
                <i className='bx bxs-user-circle'></i>
                </li>
                <li title= "Compras">
                <i className='bx bxs-shopping-bags'></i>
                </li>
                <li title="Home">
                <i className='bx bxs-home'></i>
                </li>
              </ul>
            </nav>
            
      </header>
    )
  }

export default Header