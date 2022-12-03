import React, { useState, useEffect } from "react";

function ProgressBar(props) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((currentProgress) => {
                if (currentProgress + 0.1 < 100) {
                    return currentProgress + 0.1;
                } else {
                    clearInterval(interval);
                    props.timerEnd();
                    return 100;
                }
            });
        }, 10);
        
    }, []);


    return (
        <div className="barContainer">
            <div className="bar" style={{width: `${progress}%`}}>
            </div>
        </div>
    );
}

export default ProgressBar;
