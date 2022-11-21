import React, { useState } from "react";
import Card from "./Card";

function Query(props) {
    
    return (
        <div className="query">
            <h2>
                {props.title}
            </h2>
            <div className="queryContent">
                {Object.entries(props.data).map(([key, value]) =>
                    <Card
                        key={key}
                        value={value} 
                        code={key} 
                        selected={key === props.selected}
                        onSelect={props.onSelect}
                    />
                )}
            </div>
        </div>
    );
}

export default Query;
