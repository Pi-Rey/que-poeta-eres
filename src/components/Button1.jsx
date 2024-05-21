import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button1({ classScss, link, text }) {
  //Quizás luego quitar el ev.preventDefault()
  const handleClickButton = (ev) => {
    //ev.preventDefault();
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
};
export default Button1;
