import "../styles/Questions.scss";
import PropTypes from "prop-types";

function Questions({ question, answers, addPoints, renderNextQuestion }) {
  const handleChange = (ev) => {
    const points = takePoints(ev.target.id);
    addPoints(points)
  };

  
  //coger los puntos de la respuesta seleccionada
  /* if id === answer1 
  points = 2 */
  function takePoints(chosenCase) {
    let points;
    switch (chosenCase) {
      case "answer1":
        points = 2;
        break;
      case "answer2":
        points = 4;
        break;
      case "answer3":
        points = 6;
        break;
      case "answer4":
        points = 8;
        break;
      case "answer5":
        points = 10;
        break;
    }
    return points;
  }


  //pasar a la siguiente pregunta
  const handleClick = () => {
    renderNextQuestion();
  }


  return (
    <fieldset className="fieldset">
      <form
        className="fieldset__form"
        action=""
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
        onChange={handleChange}
      >
        <h3 className="fieldset__form--question">{question}</h3>

        <div>
          <label htmlFor="answer1">
            <input id="answer1" type="radio" value="answer1" name="answers" />
            {answers.ans1}
          </label>
        </div>
        <div>
          <label htmlFor="answer2">
            <input id="answer2" type="radio" value="answer2" name="answers" />
            {answers.ans2}
          </label>
        </div>
        <div>
          <label htmlFor="answer3">
            <input id="answer3" type="radio" value="answer3" name="answers" />
            {answers.ans3}
          </label>
        </div>
        <div>
          <label htmlFor="answer4">
            <input
              id="answer4"
              type="radio"
              value={answers.ans4}
              name="answers"
            />
            {answers.ans4}
          </label>
        </div>

        <div>
          <label htmlFor="answer5">
            <input
              id="answer5"
              type="radio"
              value={answers.ans5}
              name="answers"
            />
            {answers.ans5}
          </label>
        </div>

        <input
          className="fieldset__form--submit"
          type="submit"
          name="btn"
          id="btn"
          value="Siguiente"
          onClick={handleClick}
        />
      </form>
    </fieldset>
  );
}

Questions.propTypes = {
  question: PropTypes.string,
  answers: PropTypes.object,
  addPoints: PropTypes.func,
  renderNextQuestion: PropTypes.func
};
export default Questions;
