import "../styles/Landing.scss";
import Button1 from "./Button1";

function Landing() {
  return (
    <section className="landing">
      <h1 className="landing__title">Consulta tu poema de hoy</h1>
      <h2 className="landing__subtitle">Edición: mujeres poetas en español</h2>

      <Button1 classScss="landing__boton" link="/test" text="comenzar"/>
    </section>
  );
}

export default Landing;
