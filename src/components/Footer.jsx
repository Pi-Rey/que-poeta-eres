import { Link } from "react-router-dom";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/about" className="footer__link about">
        about
      </Link>
      <Link to="/zozobra" className="footer__link zozobra">
        @zozobra
      </Link>
    </footer>
  );
}

export default Footer;
