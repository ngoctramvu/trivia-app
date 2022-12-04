import React, { useState, useEffect } from "react";

// let interval;

function ProgressBar(props) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(progress + 0.2 <= 100){
                setProgress(progress => progress + 0.2);
            } else {
                clearInterval(interval)
                props.timerEnd()
            }
        }, 10);
        return () => clearInterval(interval);
    }, [progress]);


    return (
        <div className="barContainer">
            <div className="bar" style={{width: `${progress}%`}}>
            </div>
        </div>
    );
}

export default ProgressBar;
