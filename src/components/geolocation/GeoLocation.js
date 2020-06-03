import React, { useState } from 'react'

function GeoLocation() {

    const [state, setState] = useState({ latitude: "", longitude: "", supported: true });

    const setPosition = (position) => {
        setState(prevState => ({
            ...prevState,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }))
    };

    const handleClick = () => {
        //navigator.geolocation.getCurrentPosition(); // to get current position, watch position tracks
        navigator.geolocation ? navigator.geolocation.watchPosition(setPosition) : setState(prevState => ({
            ...prevState,
            supported: false
        }));
    };

    return (
        <React.Fragment>
            <h2>Mytidbit location finder...</h2>
            <p style={{ color: "red" }}>{!state.supported ? "Location feature not supported in your browser" : ""}</p>
            <div style={{ position: "relative", left: '40%', top: "250px" }}>
                <label>Latitude:&nbsp;&nbsp;&nbsp;
                   <input type="number" value={state.latitude} readOnly /><br />
                </label><br />
                <label>Longitude:&nbsp;
                    <input type="number" value={state.longitude} readOnly /><br />
                </label>
                <button onClick={handleClick} style={{ backgroundColor: "black", color: "white", width:"250px" }}>Get Current Location Coordinates</button>
            </div>
        </React.Fragment>
    )
}

export default GeoLocation
