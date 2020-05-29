import React, { useRef, useEffect } from 'react';
import './dragdrop.css';

function DragDrop() {

    const draggy = useRef();

    useEffect(()=>{
        dragElement();
    },[])
    
    function dragElement() {
        
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        let trigger = draggy.current;
        
        trigger.onmousedown = dragMouseDown;
    

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDrag;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            console.log("coordinates...", pos1, pos2, pos3, pos4);
            trigger.style.top = (trigger.offsetTop - pos2) + "px";
            trigger.style.left = (trigger.offsetLeft - pos1) + "px";
        }

        function closeDrag() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    return (
        <React.Fragment>
            <div className="container4" draggable ref={draggy}>
                <div className="inner-content2">You can drag this anywhere</div>
                <p>Hello Dee....</p>
            </div>
        </React.Fragment>
    )
}

export default DragDrop;
