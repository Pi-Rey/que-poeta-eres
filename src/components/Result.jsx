import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Result({ answerSum, poemsList }) {
  const [keyword, setKeyword] = useState("");

  //FIXME: revisar las keywords, que ahora son 'soledad', 'libertad', "mujer", "futuro", "amor"

  const assigningKeyword = () => {
    if (answerSum < 11) {
      return "amor";
    } else if (answerSum >= 11 && answerSum < 21) {
      return "libertad";
    } else if (answerSum >= 21 && answerSum < 31) {
      return "mujer";
    } else if (answerSum >= 31 && answerSum < 41) {
      return "futuro";
    } else if (answerSum >= 41 && answerSum < 51) {
      return "soledad";
    }
  };
  useEffect(() => {
    setKeyword(assigningKeyword());
  }, [answerSum]);

  console.log(poemsList);

  //función para asignar una poeta random:
  function getRandomInt() {
    return Math.floor(Math.random() * 4);
  }
  const index = getRandomInt();
  console.log(index);

const authorObject = poemsList[index];
console.log(authorObject);
  console.log(typeof authorObject);

  //función para encontrar el poema con la keyword que yo quiero
  const findPoem = (obj) => {
    return obj.find((item) => item.keyword === keyword);
  };
  const poem = findPoem(authorObject.poems);
  console.log(poem);

  //TODO: preguntar por qué funciona con uno y no con el otro
  //hacer la maquetación
  return (
    <section>
        <h4>Te ha tocado un poema de: </h4>
      {answerSum} {keyword}
      <h3>{authorObject.author}</h3>
      <p>{poem ? poem.text : "No se encontró un poema con la palabra clave deseada."}</p>
    </section>
  );
}

Result.propTypes = {
  answerSum: PropTypes.number,
  poemsList: PropTypes.array,
};

export default Result;
