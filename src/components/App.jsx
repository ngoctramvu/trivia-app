import React, { useState } from "react";
import Header from "./Header";
import QueryPanel from "./QueryPanel";
import Questions from "./Questions";
import { GAME_STATUS } from '../constants';

function App() {
  const [status, setStatus] = useState(GAME_STATUS.NEW);

  function startGame(params) {
    console.log(params)
    setStatus(GAME_STATUS.PLAYING)
  }

  if(status===GAME_STATUS.PLAYING){
    return (
      <div>
        <Header />
        <Questions
          setStatus={setStatus}/>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <QueryPanel
        startGame={startGame}/>
    </div>
  );
}

export default App;
