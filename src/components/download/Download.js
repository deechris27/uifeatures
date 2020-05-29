import React from 'react'

function Download() {
    return (
        <div style={{position:"absolute", left:'30%', top:'220px'}}>
            <h1>Click on the image to download</h1>
            <a href="" download="fire.jpg" style={{marginLeft:"60px"}}>
                <img src="https://www.gstatic.com/webp/gallery/5.sm.jpg" alt="mytidbit" />
            </a>
        </div>
    )
}

export default Download
