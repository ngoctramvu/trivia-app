import React, { useState } from "react";
import Choices from "./Choices";
import { GAME_STATUS } from "../constants";
import useRequest from "../api/useRequest";

function Questions(props) {
  const [index, setIndex] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const questions = useRequest(props.params)
  
  function counter(isCorrect) {
    if(isCorrect){
      setNumCorrect(numCorrect + 1);
    }
    if(index + 1 >= questions.length){
      props.setScore({'correct': numCorrect, 'total': questions.length})
      props.setStatus(GAME_STATUS.END)
    }
    setIndex(index + 1)
  }

  if(index < questions.length){
    var choices = questions[index]['incorrectAnswers'].concat(questions[index]['correctAnswer'])
    choices.sort(() => Math.random() - 0.5)

    return (
      <div className="questions">
        <h1>
          Question {index + 1} / {questions.length} | Score {numCorrect}
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
  
  return (
    <div className="questions">
      <h1>
        Loading ...
      </h1>
    </div>
  )
}

export default Questions;
