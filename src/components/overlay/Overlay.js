import React, { useRef, useEffect } from 'react';
import './overlay.css';

function Overlay() {

    const over = useRef();

    // useEffect(() => {
    //     window.addEventListener('click', () => {
    //         over.current.style.display = "none";
    //     })
    // });

    const show = () => {
        over.current.style.display = "block";
    };

    const hide = () => {
        over.current.style.display = "none";
    }

    return (
        <div>
            <div className="overlay" ref={over} onClick={hide}>
               <div className="text">Hello Dee..</div>
            </div>
            <button onClick={show} style={{position:'relative', left:'25%', top:'300px'}}>Turn on overlay effect</button>
        </div>
    )
}

export default Overlay
