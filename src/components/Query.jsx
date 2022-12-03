import React from "react";
import Card from "./Card";

function Query(props) {
    
    return (
        <div className="query">
            <h1>
                {props.title}
            </h1>
            <div className="queryContent">
                {Object.entries(props.data).map(([key, value]) =>
                    <Card
                        key={key}
                        value={value} 
                        code={key} 
                        style={{background: key===props.selected ? "#f5ba13" : "#fff"}}
                        onSelect={props.onSelect}
                    />
                )}
            </div>
        </div>
    );
}

export default Query;
