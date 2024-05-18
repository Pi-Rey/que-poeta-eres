//import Landing from "./Landing"

import { useState } from "react";
import Questions from "./Questions";
import data from "../services/questions.json"

function Main() {
//Variables de estado
    const [question, setQuestion] = useState(data[0].question);
    const [answers, setAnswers] = useState(data[0].answerOptions)
    const [answerSum, setAnswerSum] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [classHidden, setClassHidden] = useState("");
    const [selectedValue, setSelectedValue] = useState(null);

//Funciones
    const addPoints = () => {
        setAnswerSum(answerSum + selectedValue);
    }

    const renderNextQuestion = () =>{
        //esta parte la hice con ayuda de chatGPT que me recordó que necesitaba guardar el index en una variable de estado
        if (currentIndex < data.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setQuestion(data[nextIndex].question);
            setAnswers(data[nextIndex].answerOptions);
          } else {
            setClassHidden("hidden")
            console.log("Cuestionario completado");
          }
    }

  return (
    <>
      {/*<Landing/>*/}
      <Questions classHidden={classHidden} question={question} answers={answers} addPoints={addPoints} renderNextQuestion={renderNextQuestion} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
    </>
  );
}

export default Main;
