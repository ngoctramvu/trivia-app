import React, { useState } from "react";
import { DIFFICULTIES, CATEGORIES, REGIONS } from "../constants";
import Query from "./Query";
import Slider from "./Slider";

function QueryPanel(props) {
    const [numQuestions, setNumQuestions] = useState('5');
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [region, setRegion] = useState("");

    function startGame() {
        props.startGame([numQuestions, difficulty, category, region])
    }

    return (
        <div className="queryPanel">
            <div className="query">
                <h1>
                    Number of Questions: {numQuestions}
                </h1>
                <Slider setNumQuestions={setNumQuestions}/>
            </div>
            <Query
                title="Difficulty"
                data={DIFFICULTIES}
                selected={difficulty}
                onSelect={setDifficulty}
            />
            <Query
                title="Category"
                data={CATEGORIES}
                selected={category}
                onSelect={setCategory}
            />
            <Query
                title="Region"
                data={REGIONS}
                selected={region}
                onSelect={setRegion}
            />
            <div className="buttonFrame">
                <button onClick={startGame}><h1>Start Game</h1></button>
            </div>
        </div>
    );
}

export default QueryPanel;
