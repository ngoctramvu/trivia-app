import React, { useState } from "react";
import { CATEGORIES, DIFFICULTIES, REGIONS } from "../constants";
import Card from "./Card";
import Query from "./Query";

function QueryPanel(props) {
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");
    const [region, setRegion] = useState("");

    return (
        <div className="queryPanel">
            <Query
                title="Difficulty"
                data={DIFFICULTIES}
                selected={difficulty}
                onSelect={setDifficulty}
            />
            {difficulty !== "" ? 
                <Query
                    title="Category"
                    data={CATEGORIES}
                    selected={category}
                    onSelect={setCategory}
                />
                : <div/>
            }
            {category !== "" ? 
                <Query
                    title="Region"
                    data={REGIONS}
                    selected={region}
                    onSelect={setRegion}
                />
                : <div/>
            }
            {region !== "" ?
                <div className="buttonFrame">
                    <button onClick={props.startGame}><h1>Start Game</h1></button>
                    </div>
                : <div/>
            }
        </div>
    );
}

export default QueryPanel;
