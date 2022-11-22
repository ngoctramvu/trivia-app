import React, { useState } from "react";
import Card from "./Card";

function Choices(props) {
    const [answer, setAnswer] = React.useState("")
    const [color, setColor] = React.useState("")

    function selectAnswer(code) {
        setAnswer(code)
        if(code === props.correctAnswer){
            console.log(true)
        }
    }

    return (
        <div className="choices">
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
                        style={{background: {color}}}
                    />
                )}
            </div>
        </div>
    );
}

export default Choices;
