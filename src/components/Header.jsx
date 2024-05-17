import "../styles/Header.scss"
import Button1 from "./Button1"
function Header() {
  return (
    <header className="header">
  <p className="header__title">¿Qué poema de una mujer hispanohablante te representa hoy? </p>
  <Button1 classScss="header__link" link="index.html" text="Empieza de nuevo"/>
</header>

  )
}

export default Header