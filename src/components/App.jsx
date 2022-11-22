import React, { useState } from "react";
import Header from "./Header";
import QueryPanel from "./QueryPanel";
import Questions from "./Questions";

function App() {
  const [status, setStatus] = useState("");

  function startGame(params) {
    console.log(params)
    setStatus("playing")
  }

  if(status==="playing"){
    return (
      <div>
        <Header />
        <Questions/>
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
