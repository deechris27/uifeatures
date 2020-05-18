import React, { useRef } from 'react'

function Typewriter() {

    const paragraph = useRef();

    let i = 0;
    const start = () => {

        let text = 'Hello Dee, wassup...whats going on today......';

        if (i < text.length) {
            paragraph.current.innerHTML += text.charAt(i);
            ++i;
            setTimeout(start, 100)
        }
    };

    return (
        <div style={{ position: 'relative', left: '25%', top: '300px' }}>
            <button onClick={start}>Click to see the text type on....</button>
            <p ref={paragraph}></p>
        </div>
    )
}

export default Typewriter
