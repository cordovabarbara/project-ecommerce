import { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carrusel from "./carrusel";
import '../pages/styles/carrusel.css';

const Carrusel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 2500); // ajustar la velocidad de cambio automático

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="carrusel-container"> {/* Aplica la clase del contenedor */}
      <Slider {...settings} ref={sliderRef}>
        <div className="carrusel-slide">
          <img src={carrusel.envios} alt="Imagen de envíos" />
        </div>
        <div className="carrusel-slide">
          <img src={carrusel.oferta} alt="Black friday" />
        </div>
        <div className="carrusel-slide">
          <img src={carrusel.nuevo} alt="Nuevo" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;
