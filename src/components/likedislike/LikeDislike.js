import React, {useState} from 'react'

function LikeDislike() {

    const [isLiked, setIsLiked] = useState(true);


    const toggle = () => {
        setIsLiked(!isLiked)
    };

    return (
        <div>
            <i onClick={toggle} className={isLiked ? "fa fa-thumbs-up" : "fa fa-thumbs-down"} style={{position:'relative', left:'40%', top:'300px', cursor:'pointer', fontSize:'200px'}}></i>
        </div>
    )
}

export default LikeDislike
