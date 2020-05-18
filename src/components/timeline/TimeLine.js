import React from 'react';
import './timeline.css';

function TimeLine() {
    return (
        <React.Fragment>
            <h2 className="container left">Needs Fix</h2>
            <div className="timeline">
                <div className="container left">
                    <div className="content">
                        <h2>2020</h2>
                        <p>Hello world, wassup.....</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2>2019</h2>
                        <p>Hello world, wassup.....</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <h2>2018</h2>
                        <p>Hello world, wassup.....</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2>2015</h2>
                        <p>Hello world, wassup.....</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <h2>2012</h2>
                        <p>Hello world, wassup.....</p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2>2010</h2>
                        <p>Hello world, wassup.....</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TimeLine
