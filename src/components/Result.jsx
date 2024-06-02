import PropTypes from "prop-types";

function Result({ answerSum, poemsList}) {
    console.log(typeof answerSum);

  //TODO: por qué me lo convierte a objeto cuando es un número???

  //   const answerInt = parseInt(answerSum);
  // const sumaSUM = answerSum + 100;
  // const sumaINT = answerInt + 100;

  //   console.log(answerInt);
  //   console.log(typeof answerInt);

  const assignigPoet = () => {
    if (answerSum < 11) {
      return "entre 0 y 10";
    } else if (answerSum >= 11 && answerSum < 21) {
      return "entre 11 y 20";
    } else if (answerSum >= 21 && answerSum < 31) {
      return "entre 21 y 30";
    } else if (answerSum >= 31 && answerSum < 41) {
      return "entre 31 y 40";
    } else if (answerSum >= 41 && answerSum < 51) {
      return "entre 41 y 50";
    }
  };
  const poetMessage = assignigPoet()

  //TODO: continuar con este condicional
  return (
    <section>
      <p>{answerSum}</p>
      <p>{poetMessage}</p>
      <p>{poemsList[0].poem1text}</p>
    </section>
  );
}

Result.propTypes = {
  answerSum: PropTypes.number,
  poemsList: PropTypes.array
};

export default Result;
