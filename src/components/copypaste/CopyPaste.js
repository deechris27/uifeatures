import React, { useRef } from 'react'

function CopyPaste() {
    const toCopy = useRef();

    const copyFunction = () => {
        toCopy.current.select();
        document.execCommand("copy");
    };

    return (
        <div style={{ position: "relative", left: "45%", top: "250px" }}>
            <h3>Type something then copy and paste in the text area</h3>

            <input type="text" placeholder="Type something here..." ref={toCopy} style={{marginBottom:"10px"}}/><br />
            <textarea /><br />
            <button onClick={copyFunction} style={{width:"200px"}}>Copy</button>

        </div>
    )
}

export default CopyPaste
