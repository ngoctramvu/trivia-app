import React, { useState } from "react";
import Card from "./Card";

function Choices(props) {
    function selectAnswer(code) {
        props.counter(code === props.correctAnswer)
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
                    />
                )}
            </div>
        </div>
    );
}

export default Choices;
