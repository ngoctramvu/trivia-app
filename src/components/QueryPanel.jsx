import React, { useState } from "react";
import { DIFFICULTIES, CATEGORIES, REGIONS } from "../constants";
import Query from "./Query";

function QueryPanel(props) {
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [region, setRegion] = useState("");

    function startGame() {
        props.startGame([difficulty, category, region])
    }

    return (
        <div className="queryPanel">
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
