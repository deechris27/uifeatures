import React from 'react';
import './topnav.css';
import {Link} from 'react-router-dom';

function TopNav() {
    return (
        <React.Fragment>
            <div className="topnav">
                <Link to="/"><i className="fa fa-fw fa-home active"></i> Home</Link>
                <Link to="/spin"><i className="fa fa-fw fa-wrench"></i> Spinner</Link>
                <Link to="/progress"><i className="fa fa-fw fa-user"></i> Progress </Link>
                <Link to="/scrollprogress"><i className="fa fa-fw fa-envelope"></i> Scroll </Link>
            </div>

            <div style={{paddingLeft: '16px'}}>
                <h2>Top Nav</h2>
                <p>Say ferrars demands besides her address.</p>
                <p>Say ferrars demands besides her address.</p>
                <p>Say ferrars demands besides her address</p>
            </div>
        </React.Fragment>
    )
}

export default TopNav;
