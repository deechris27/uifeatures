import React from 'react';
import './skillprogress.css';

function SkillProgress() {
    return (
        <React.Fragment>
            <p>JavaScript</p>
            <div className="container">
                <div className="skills html">90%</div>
            </div>

            <p>NodeJS</p>
            <div className="container">
                <div className="skills css">80%</div>
            </div>

            <p>ReactJs</p>
            <div className="container">
                <div className="skills js">75%</div>
            </div>

            <p>AWS</p>
            <div className="container">
                <div className="skills php">60%</div>
            </div>
        </React.Fragment>
    )
}

export default SkillProgress
