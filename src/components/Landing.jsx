import "../styles/Landing.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="landing">
      <h1 className="landing__title">Consulta tu poema de hoy</h1>
      <h2 className="landing__subtitle">Edición: mujeres poetas en español</h2>
      <Link to="/test" className="landing__boton">
        comenzar
      </Link>
    </section>
  );
}

export default Landing;
