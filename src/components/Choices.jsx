import React, { useState } from "react";
import Card from "./Card";
import ProgressBar from "./ProgressBar";

function Choices(props) {
    const [answer, setAnswer] = useState('')
    const [mainColor, setMainColor] = useState('#f5ba13')
    const [secondColor, setSecondColor] = useState('#fff')

    function selectAnswer(code) {
        setAnswer(code)
    }

    function timerEnd() {
        if(answer === props.correctAnswer){
            setMainColor("#75975e")
        } else {
            setMainColor("#E34234")
        }
        console.log(answer)
        setTimeout(() => {
            props.counter(answer === props.correctAnswer)
        }, 2000);
    }

    return (
        <div className="choices">
            <ProgressBar
                timerEnd={timerEnd}
            />
            <h1>
                {props.question}
            </h1>
            <div className="queryContent">
                {props.choices.map((item) =>
                    <Card 
                        key={item} 
                        code={item} 
                        value={item} 
                        onSelect={selectAnswer}
                        style={{background: item===answer ? mainColor : secondColor}}
                    />
                )}
            </div>
        </div>
    );
}

export default Choices;
