import { Link } from "react-router-dom";
import "../styles/header.css";
import mundo from "/public/mundopc.png";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 768);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header__box">
      <div className="header__logo">
        <Link to="/">
          <img className="img__logo" src={mundo} alt="Home" />
        </Link>
      </div>
      <nav className="navbar">
      <li title="Carrito">
        <Link to="/cart">
        <i className='bx bxs-cart bx-menu '></i>
        </Link>
        </li>
        <li onClick={handleMenu}>
          <i className="bx bx-menu hamburguer"></i>
        </li>
        <ul className={`navbar__ul ${!menuOpen ? "open" : ""}`}>
          <li title="Registrarse">
            <Link to="/register">
              <i className="bx bxs-user-plus"></i>
            </Link>
          </li>
          <li title="Ingresar">
            <Link to="/login">
              <i className="bx bxs-user-circle"></i>
            </Link>
          </li>
          <li title="Compras">
            <Link to="/purchase">
              <i className="bx bxs-shopping-bags"></i>
            </Link>
          </li>
          <li title="Home">
            <Link to="/">
              <i className="bx bxs-home"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
