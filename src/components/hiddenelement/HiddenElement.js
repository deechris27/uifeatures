import React from 'react';
import './hiddenelement.css';

function HiddenElement() {
    return (
        <React.Fragment>
            <div class="trigger"><b>Place the cursor on me.</b></div>
            <div class="hidden">You get to see me when you hover over the text above.</div>
        </React.Fragment>
    )
}

export default HiddenElement
