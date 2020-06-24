import React, {useRef} from 'react';
import './progress.css';



function ProgressBar() {
    const pBar = useRef();
    let i = 0;
     const start = () => {
        if(i===0){
            i = 1;
            let width = 1;
            let timerId = setInterval(progress, 10);
            function progress() {
                if(width>=100){
                    clearInterval(timerId);
                    i=0;
                }else{
                    width++;
                    pBar.current.style.width = width + "%";
                }
            }
        }
     };

     const clear = () => {
        pBar.current.style.width = 0 + "%";
     };
     
    return (
        <React.Fragment>
            <div className="progress">
                <div className="bar" ref={pBar} />
            </div>
            <br />
            <button className="prog-button" onClick={()=>start()}>Start</button>{"\t"}
            <button className="prog-button" onClick={()=>clear()}>Clear</button>
        </React.Fragment>
    )
}

export default ProgressBar;