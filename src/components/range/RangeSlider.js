import React, {useRef, useEffect, useState} from 'react';
import './rangeslider.css';

function RangeSlider() {
    const slider = useRef();
    const rangeVal = useRef();

    const [value, setValue] = useState(0);

    useEffect(()=>{
        // rangeVal.current.innerHTML = slider.current.value;
        rangeVal.current.innerHTML = value;

        slider.current.addEventListener('input', function(){
            // rangeVal.current.innerHTML = slider.current.value;
           setValue(slider.current.value);
        }, true)

    });

    return (
        <React.Fragment>
            <div className="slidecontainer">
                <input type="range" min="1" max="100" value={value} className="slider" ref={slider} />
                <h2 style={{textAlign:"center"}}>Value: <span ref={rangeVal}></span></h2>
            </div>
        </React.Fragment>
    )
}

export default RangeSlider;
