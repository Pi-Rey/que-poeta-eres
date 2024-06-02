import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//para ejecutar funciones al hacer click y ademas navegar es mejor usar el componente navigate para hacer varias cosas después del handleclick
function Button1({ classScss, link, text, reset }) {
  //Quizás luego quitar el ev.preventDefault()
  const handleClickButton = () => {
    //ev.preventDefault();
    reset()
    console.log("pasa algo?");
  };
  return (
    <Link to={link} onClick={handleClickButton} className={classScss}>
      <span>{text}</span>
    </Link>
  );
}

Button1.propTypes = {
  classScss: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
  reset: PropTypes.func
};
export default Button1;
