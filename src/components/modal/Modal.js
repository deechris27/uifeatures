import React, { useRef, useEffect } from 'react';
import './modal.css';

function Modal() {

    const modal = useRef();
    const button = useRef();
    const close = useRef();

    useEffect(() => {
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.current.style.display = "none";
            }
        });

        close.current.addEventListener('click', function () {
            modal.current.style.display = "none";
        });
    });

    function showModal() {
        modal.current.style.display = "block";
    };

    return (
        <React.Fragment>
            <button ref={button} onClick={showModal} style={{ backgroundColor: 'lightgreen', position: 'relative', left: '50%', top: '250px', marginTop: '20px' }}>Open Modal</button>

            <div ref={modal} className="modal">

                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" ref={close}>&times;</span>
                        <h2>Mytidbit</h2>
                    </div>
                    <div className="modal-body">
                        <p>Hello World</p>
                        <p>Wassup.....</p>
                    </div>
                    <div className="modal-footer">
                        <h3 style={{textAlign:'center'}}>Have a good one!</h3>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Modal
