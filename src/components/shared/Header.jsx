
import { Link } from 'react-router-dom'
import '../styles/header.css';
import mundo from '/public/mundopc.png'


const Header = () => {

    return (
      <header className='header__box'>
          <div className='header__logo'>
            <Link to='/'><img className='img__logo' src={mundo} alt="Home"/></Link></div>
            <nav className='navbar'>
              <ul className='navbar__ul'>
                <il>
                  Registrarse
                </il>
                <il>
                  Login
                </il>
                <il>
                  Carrito
                </il>
              </ul>
            </nav>
            
      </header>
    )
  }

export default Header