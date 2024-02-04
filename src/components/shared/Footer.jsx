import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__content">Munco PC creado por Barbara Cordova</div>
      <div className="footer__icons">
      <a href="https://www.linkedin.com/in/aliendo-barbara/">
              <i className="bx bxl-linkedin-square"></i>
            </a>
      <a href="https://github.com/cordovabarbara">
              <i className="bx bxl-github1 bxl-github"></i>
            </a>
      <a href="mailto:aliendocordova@gmail.com">
              <i className="bx bxl-gmail"></i>
            </a>

           </div>
    </footer>
  );
};



export default Footer;
