import React, {useRef, useEffect} from 'react'

function DetectCapsLock() {

    const input = useRef();
    const warning = useRef();

    useEffect(()=>{
       input.current.addEventListener('keyup', (event)=>{
        warning.current.style.display = event.getModifierState("CapsLock") ? "block" : "none";
       })
    },[]);

    return (
        <div style={{position:"relative", left:"35%", top:"250px"}}>
            <h1>Detect if caps lock is on and warn user</h1>
            <input ref={input} placeholder="Type something here..." />
            <p ref={warning} style={{color:"blue", display:"none"}}>Hello Dee...Caps lock is ON.</p>
        </div>
    )
}

export default DetectCapsLock;
