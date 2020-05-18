import React from 'react';
import './tooltip.css';

function Tooltip() {
    return (
        <React.Fragment>
        <div className="tooltip">Place cursor on me
            <span className="tooltiptext">Hellooooo....</span>
        </div>
        </React.Fragment>
    )
}

export default Tooltip;
