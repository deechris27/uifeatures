import React from 'react';
import './layout.css';

function Layout() {
    return (
        <React.Fragment>
            <div className="header">
                <h2>My Tidbit</h2>
            </div>

            <div className="row">
                <div className="leftcolumn">
                    <div className="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, May, 19, 2020</h5>
                        <div className="fakeimg" style={{height:'200px'}}>Image</div>
                        <p>Some text..</p>
                    </div>
                    <div className="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, May, 19, 2020</h5>
                        <div className="fakeimg" style={{height:'200px'}}>Image</div>
                        <p>Some text..</p>
                    </div>
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <h2>About Me</h2>
                        <div className="fakeimg" style={{height:'200px'}}>Image</div>
                        <p>Some text.....</p>
                    </div>
                    <div className="card">
                        <h3>Popular Post</h3>
                        <div className="fakeimg">Image</div><br />
                        <div className="fakeimg">Image</div><br />
                        <div className="fakeimg">Image</div>
                    </div>
                    <div className="card">
                        <h3>Follow Me</h3>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h2>Footer</h2>
            </div>
        </React.Fragment>
    )
}

export default Layout
