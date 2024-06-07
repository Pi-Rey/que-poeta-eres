import PropTypes from "prop-types";
import { useState } from "react";

function Result({ answerSum, poemsList }) {

    const [keyword, setKeyword] = useState('desamor');

//TODO: poner la misma keyword a cada uno de los poemas (5 tipos de keyword en total)
//TODO: meter los poemas como objetos en un array de objetos, no como propiedades de un objeto (mirar primera poeta)
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
  const poetMessage = assignigPoet();

  console.log(poemsList);

  const findPoem = (arr) => {
    return arr.find((item)=>item.keyword=== keyword)
  };
  const html = poemsList.map((item, i) => {
    return (
      <article key={i} className="poem">
        <h3> Nombre de la autora: {item.author}</h3>
        <p> Poemas: {findPoem(item.poems).text}</p>
      </article>
    );
  });
  //TODO: continuar con este condicional

  //FIXME: tengo que hacer algo como con las preguntas, dvs, tener una variable de estado para la autora, el título, y el poema, en vez de usar el useEffect para traerlo, porque eso no me permite tener flexibilidad a la hora de elegir qué pintar en la pantalla.
  return (
    <section>
      {answerSum}
      {poetMessage}
      {html}
    </section>
  );
}

Result.propTypes = {
  answerSum: PropTypes.number,
  poemsList: PropTypes.array,
};

export default Result;
