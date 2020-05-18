import React from 'react';
import './website.css';

function Website() {
    return (
        <React.Fragment>
            <div className="header">
                <h1>MyTidbit</h1>
                <p>A website template.</p>
            </div>

            <div className="navbar">
                <a href="#1">Link</a>
                <a href="#2">Link</a>
                <a href="#3">Link</a>
                <a href="#4" className="right">Link</a>
            </div>

            <div className="row">
                <div className="side">
                    <h2>About Me</h2>
                    <h5>Photo of me:</h5>
                    <div className="fakeimg" style={{ height: '200px' }}>Image</div>
                    <p>blah blha blha blha blha blah blah blah..</p>
                    <h3>More Text</h3>
                    <p>Blah blah blah blah blah....</p>
                    <div className="fakeimg" style={{ height: '60px' }}>Image</div><br />
                    <div className="fakeimg" style={{ height: '60px' }}>Image</div><br />
                    <div className="fakeimg" style={{ height: '60px' }}>Image</div>
                </div>
                <div className="main">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="fakeimg" style={{ height: '200px' }}>Image</div>
                    <p>Some text..</p>
                    <p>blah blha blha blha blha blah blah blah.</p>
                    <br />
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div className="fakeimg" style={{ height: '200px' }}>Image</div>
                    <p>Some text..</p>
                    <p>blah blha blha blha blha blah blah blah.</p>
                </div>
            </div>

            <div className="footer">
                <h2>Footer</h2>
            </div>
        </React.Fragment>
    )
}

export default Website
