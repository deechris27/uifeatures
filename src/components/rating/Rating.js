import React, {useState} from 'react';
import './rating.css';

function Rating() {

  const [state, setState] = useState({first:false, second:false, third:false, fourth:false, fifth:false});
 
    const rate = (name) => {
       setState({...state, [name]: !state[name]})
    };

    return (
        <div className="rating">
            <span className={`fa fa-star ${state.first ? "checked" : ""}`} onClick={()=>rate('first')}></span>
            <span className={`fa fa-star ${state.second ? "checked" : ""}`} onClick={()=>rate('second')}></span>
            <span className={`fa fa-star ${state.third ? "checked" : ""}`} onClick={()=>rate('third')}></span>
            <span className={`fa fa-star ${state.fourth ? "checked" : ""}`} onClick={()=>rate('fourth')}></span>
            <span className={`fa fa-star ${state.fifth ? "checked" : ""}`} onClick={()=>rate('fifth')}></span>
        </div>
    )
}

export default Rating;
