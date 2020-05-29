import React, {useRef, useState} from 'react';
import './popupchat.css';

function PopUpChat() {

    const [display, setDisplay] = useState(false);
    const myForm = useRef();

    const handleClick = () => {
        myForm.current.style.display = display ? "block" : "none"
    };

     return (
        <div>
            <h2>Mytidbit Chat</h2>

            <button className="open-button" onClick={handleClick}>Chat</button>

            <div className="chat-popup" ref={myForm}>
                <form className="form-container">
                    <h1>Chat</h1>

                    <label><b>Message</b></label>
                    <textarea placeholder="Type something....." required />

                    <button type="submit" className="btn">Send</button>
                    <button type="button" className="btn cancel" onClick={handleClick}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default PopUpChat
