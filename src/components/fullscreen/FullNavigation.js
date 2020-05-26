import React, { useRef } from 'react';
import './fullnavigation.css';
import { Link } from 'react-router-dom';

function FullNavigation() {

    const content = useRef();

    const displayNav = () => {
        content.current.style.width = "100%";
    }

    const closeNav = () => {
        content.current.style.width = "0%";
    }

    return (
        <React.Fragment>
            <div ref={content} className="overlay1">
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                <div className="overlay-content">
                    <Link to="/"><i className="fa fa-fw fa-home"></i> Home</Link>
                    <Link to="/spin"><i className="fa fa-fw fa-wrench"></i> Spinner</Link>
                    <Link to="/progress"><i className="fa fa-fw fa-user"></i> Progress </Link>
                    <Link to="/scrollprogress"><i className="fa fa-fw fa-envelope"></i> Scroll </Link>
                </div>
            </div>

            <h2>Fullscreen Transparent Navigation</h2>
            <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => displayNav()}>&#128682; Open the door!</span>
        </React.Fragment>
    )
}

export default FullNavigation;
