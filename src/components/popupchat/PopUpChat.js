import React, { useRef, useState, useEffect } from 'react';
import './popupchat.css';

function PopUpChat() {

    const [display, setDisplay] = useState(true);


    // useEffect(() => {
    //     dragElement();
    // }, [])

    const myForm = useRef();

    const draggy = useRef();

    // function dragElement() {

    //     console.log("Hello.............")

    //     let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    //     let trigger = draggy.current;

    //     trigger.onmousedown = dragMouseDown;


    //     function dragMouseDown(e) {
    //         e = e || window.event;
    //         e.preventDefault();
    //         pos3 = e.clientX;
    //         pos4 = e.clientY;
    //         document.onmouseup = closeDrag;
    //         document.onmousemove = elementDrag;
    //     }

    //     function elementDrag(e) {
    //         e = e || window.event;
    //         e.preventDefault();
    //         pos1 = pos3 - e.clientX;
    //         pos2 = pos4 - e.clientY;
    //         pos3 = e.clientX;
    //         pos4 = e.clientY;
    //         console.log("coordinates...", pos1, pos2, pos3, pos4);
    //         trigger.style.top = (trigger.offsetTop - pos2) + "px";
    //         trigger.style.left = (trigger.offsetLeft - pos1) + "px";
    //     }

    //     function closeDrag() {
    //         document.onmouseup = null;
    //         document.onmousemove = null;
    //     }
    // }

    const handleClick = () => {
        setDisplay(!display);
        myForm.current.style.display = display ? "block" : "none"
    };

    return (
        <React.Fragment>

                <button className="open-button" onClick={handleClick} draggable ref={draggy}>Chat with Deepak</button>
                <h2>Mytidbit Chat</h2>

                <div className="chat-popup" ref={myForm}>
                    <form className="form-container">
                        <h1>Chat with Deepak</h1>

                        <label><b>Message</b></label>
                        <textarea placeholder="Type something....." required />

                        <button type="button" className="btn">Send</button>
                        <button type="button" className="btn cancel" onClick={handleClick}>Close</button>
                    </form>
                </div>
        </React.Fragment>
    )
}

export default PopUpChat
