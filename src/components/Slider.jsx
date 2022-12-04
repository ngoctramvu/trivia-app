import React from "react";

function Slider(props) {
    const [sliderVal, setSliderVal] = React.useState(5);

    function handleSliderChange(event) {
        setSliderVal(event.target.value)
        props.setNumQuestions(sliderVal)
    }

    return (
        <div className="sliderContainer">
            <input 
                type="range" 
                min="1" 
                max="20" 
                step="1" 
                value={sliderVal} 
                id="questionRange" 
                onChange={handleSliderChange} 
                onClick={handleSliderChange}
            />
        </div>
    )
}

export default Slider