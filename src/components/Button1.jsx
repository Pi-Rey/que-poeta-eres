import PropTypes from "prop-types";

function Button1({classScss, link, text}) {
    //Quizás luego quitar el ev.preventDefault()
    const handleClickButton = (ev) =>{
            ev.preventDefault();
          
    }
      return (
    <a onClick={handleClickButton} className={classScss} href={link}>
    <span>{text}</span>
  </a>
  )
}

Button1.propTypes = {
    classScss: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string
}
export default Button1