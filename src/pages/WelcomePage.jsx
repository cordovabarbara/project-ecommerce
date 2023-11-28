import '../pages/styles/welcomepage.css'
import { Link } from "react-router-dom";
const WelcomePage = () => {
  return (
    <div className="welcome__page">
        <h2>Bienvenido de vuelta !</h2>
            <h3>
            Disfruta de nuestros descuentos y de todas las novedades que tenemos para
            ti
            </h3>
            <Link to="/">
            <button className='welcome__btn'> Empezar a Comprar</button>
            </Link>
            
    </div>
  );
};

export default WelcomePage;
