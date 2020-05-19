import React, {useRef} from 'react';
import './promptmodal.css';

function PromptModal() {

    const modal = useRef();

    const show = () => {
       modal.current.style.display = 'block';
    };

    const hide = () => {
        modal.current.style.display = 'none';
    };

    return (
        <React.Fragment>
            <button onClick={show} style={{position: 'relative', left: '25%', top: '300px'}}>Show Modal</button>

            <div ref={modal} className="modal">
                <span onClick={hide} className="close" title="Close Modal">×</span>
                <form className="modal-content" action="">
                    <div className="container1">
                        <h1>Mytidbit</h1>
                        <p>Are you sure you want to do something?</p>

                        <div className="clearfix">
                            <button type="button" onClick={hide} className="cancelbtn">No</button>
                            <button type="button" onClick={hide} className="deletebtn">Yes</button>
                        </div>
                    </div>
                </form>
            </div>

        </React.Fragment>
    )
}

export default PromptModal;
