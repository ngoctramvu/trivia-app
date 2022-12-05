import React from "react";
import { GAME_STATUS } from '../constants';

function Result(props) {

    function setNewGame(){
        props.setStatus(GAME_STATUS.NEW)
    }

    return (
        <div className="result">
            <h1>
                You got {props.score['correct']} out of {props.score['total']}
            </h1>        
            <div className="buttonFrame">
                <button onClick={setNewGame}><h1>New Game</h1></button>
            </div>
        </div>
    )
}

export default Result;
