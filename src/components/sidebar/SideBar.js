import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';

function SideBar() {
    return (
        <React.Fragment>
            <div className="sidebar">
                <Link to="/"><i className="fa fa-fw fa-home"></i> Home</Link>
                <Link to="/spin"><i className="fa fa-fw fa-wrench"></i> Spinner</Link>
                <Link to="/progress"><i className="fa fa-fw fa-user"></i> Progress </Link>
                <Link to="/scrollprogress"><i className="fa fa-fw fa-envelope"></i> Scroll </Link>
            </div>

            <div className="main">
                <h2>Side Nav</h2>
                <p>Say ferrars demands besides her address.</p>
                <p>Say ferrars demands besides her address.</p>
                <p>Say ferrars demands besides her address</p>
            </div>
        </React.Fragment>
    )
}

export default SideBar;
