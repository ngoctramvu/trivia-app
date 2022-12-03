import React, { useState } from "react";
import Choices from "./Choices";
import { GAME_STATUS } from "../constants";
import useRequest from "../api/useRequest";

function Questions(props) {
  const [index, setIndex] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const questions = useRequest(props.params)

  if(questions === null){
    return (
      <div className="questions">
        <h1>
          Loading Questions ...
        </h1>
      </div>
    )
  }
  
  function counter(isCorrect) {
    if(isCorrect){
      setNumCorrect(numCorrect + 1);
    }
    setIndex(index + 1)
  }

  if(index < questions.length){
    var choices = questions[index]['incorrectAnswers'].concat(questions[index]['correctAnswer'])
    choices.sort(() => Math.random() - 0.5)

    return (
      <div className="questions">
        <h1>
          Question {index} / {questions.length}
        </h1>
        <h1>
          You got {numCorrect} correct
        </h1>
        <Choices
          key={questions[index]['id']}
          question={questions[index]["question"]}
          correctAnswer={questions[index]['correctAnswer']}
          choices={choices}
          counter={counter}
        />
      </div>
    );
  }

  function setNewGame() {
    props.setStatus(GAME_STATUS.NEW)
  }

  return (
    <div className="questions">
      <h1>
        You got {numCorrect} out of {questions.length}
      </h1>        
      <div className="buttonFrame">
        <button onClick={setNewGame}><h1>New Game</h1></button>
      </div>
    </div>
  )


}

export default Questions;
