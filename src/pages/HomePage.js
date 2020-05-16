import React from 'react';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Hello Home Page</h1>
            <Link to="/spin">Spinner/Loader</Link><br />
            <Link to="/progress">Progress Bar</Link><br />
        </div>
    )
}

export default HomePage
