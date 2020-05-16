import React, {useRef, useEffect} from 'react';
import './spin.css';

function Spin() {
    const loaderStyle = useRef();
    const contentStyle = useRef();

    const timeOutCall = () => {
        const timerId = setTimeout(displayContent, 3000);
        return function () {
            clearTimeout(timerId);
        }
    };

    useEffect(() => {
        timeOutCall();
    });

    const displayContent = () => {
        loaderStyle.current.style.display = 'none';
        contentStyle.current.style.display = 'block';
    };

    return (
        <React.Fragment>
            <div className="loader" ref={loaderStyle} />

            <div style={{ display: 'none' }} className="content" ref={contentStyle}>
                <h2>Hello Deeeee!!!!!!!</h2>
                <p>Refresh.....What comes around goes around.........</p>
            </div>
        </React.Fragment>
    );
}

export default Spin;
