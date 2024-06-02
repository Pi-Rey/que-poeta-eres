// Fichero src/components/App.jsx
import "../styles/Reset.scss";

import "../styles/App.scss";
import getPoems from "../services/api";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./About";
import Zozobra from "./Zozobra";
import Result from "./Result";


function App() {
    const [answerSum, setAnswerSum] = useState(0)
    const [poemsList, setPoemsList] = useState([]);


    useEffect(() => {
        const poems = getPoems();
        setPoemsList(poems);
        console.log(poems);
      }, []);
  return (
    <>
      <Header setAnswerSum={setAnswerSum} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/test" element={<Main answerSum={answerSum} setAnswerSum={setAnswerSum}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/zozobra" element={ <Zozobra/> }/>
        <Route path="/result" element={<Result answerSum={answerSum} poemsList={poemsList}/>}/> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;
