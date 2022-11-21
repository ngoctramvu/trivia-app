import React, { useState } from "react";
import Header from "./Header";
import QueryPanel from "./QueryPanel";

function App() {
  const [status, setStatus] = useState("");
  
  function startGame() {

  }

  return (
    <div>
      <Header />
      <QueryPanel startGame={startGame}/>
    </div>
  );
}

export default App;
