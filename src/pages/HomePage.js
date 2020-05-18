import React from 'react';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Hello Home Page</h1>
            <Link to="/spin">Spinner/Loader</Link><br />
            <Link to="/progress">Progress Bar</Link><br />
            <Link to="/scrollprogress">Scroll Progress Bar</Link><br />
            <Link to="/sidenav">Side NavBar</Link><br />
            <Link to="/topnav">Top NavBar</Link><br />
            <Link to="/fullnav">Full Screen Navigation</Link><br />
            <Link to="/skillprogress">Skill Progress</Link><br />
            <Link to="/modal">Modal</Link><br />
            <Link to="/promptmodal">Prompt Modal</Link><br />
            <Link to="/video">Video Player</Link><br />
            <Link to="/timeline">Posts/Comments Time Line</Link><br />
            <Link to="/range">Range Slider</Link><br />
        </div>
    )
}

export default HomePage
