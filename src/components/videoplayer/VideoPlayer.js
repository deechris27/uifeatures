import React, {useRef} from 'react';
import './videoplayer.css';


function VideoPlayer() {

    const video = useRef();
    const button = useRef();

    const toggle = () => {
        if(video.current.paused){
            video.current.play();
            button.current.innerHTML = "Pause";
        }else{
            video.current.pause();
            button.current.innerHTML = "Play";
        }
    };

    return (
        <React.Fragment>
             <video autoPlay muted controls loop ref={video} className="player" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4"/>
                <div className="content2">
                    <h1>Mytidbit</h1>
                    <button className="butn" ref={button} onClick={toggle}>Pause</button>
                </div>
        </React.Fragment>
    )
}

export default VideoPlayer;
