import "../styles/Header.scss"
import PropTypes from "prop-types";
import Button1 from "./Button1"
function Header({setAnswerSum}) {
    const reset = () =>{
        setAnswerSum(0);
    }
  return (
    <header className="header">
  <p className="header__title">¿Qué versos de una poeta hispanohablante te representan hoy? </p>
  <Button1 classScss="header__link" link="/" text="Empieza de nuevo" reset={reset}/>
</header>

  )
}

Header.propTypes = {
    setAnswerSum: PropTypes.func
}
export default Header