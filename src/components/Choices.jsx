import React, { useState } from "react";
import Card from "./Card";
import ProgressBar from "./ProgressBar";

function Choices(props) {
    const [answer, setAnswer] = useState('')
    const [enableSelection, setEnableSelection] = useState(true)
    
    function selectAnswer(code) {
        if(enableSelection){
            setAnswer(code)
        }
        console.log(props.correctAnswer)
    }

    function timerEnd() {
        setEnableSelection(false)
        
        setTimeout(() => {
            props.counter(answer === props.correctAnswer)
        }, 2000);
    }

    function getColor(item){
        if(enableSelection){
            return item===answer ? "#f5ba13" : "#fff"
        }
        if(item === props.correctAnswer){
            return  "#009E60"
        }
        if(item === answer){
            return  "#E34234"
        }
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
                        style={{background: getColor(item)}}
                    />
                )}
            </div>
        </div>
    );
}

export default Choices;
