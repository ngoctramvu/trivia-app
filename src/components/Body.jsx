import React, { useState } from "react";
import QueryPanel from "./QueryPanel";
import Questions from "./Questions";
import { GAME_STATUS } from '../constants';
import Result from "./Result";

function Body() {
    const [status, setStatus] = useState(GAME_STATUS.NEW);
    const [params, setParams] = useState([]);
    const [score, setScore] = useState({'correct': 0, 'total': 0})
  
    function startGame(params) {
      console.log(params)
      setParams(params)
      setStatus(GAME_STATUS.PLAYING)
    }

    if(status===GAME_STATUS.NEW){
        return (
            <QueryPanel startGame={startGame}/>
        );
    }
    else if(status===GAME_STATUS.PLAYING){
        return (
            <Questions
                params={params}
                status={status}
                setStatus={setStatus}
                setScore={setScore}
            />
        )
    }
    return (
        <Result
            score={score}
            setStatus={setStatus}
        />
    )

}

export default Body;
