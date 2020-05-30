import React, {useState, useEffect} from 'react';
import './dropdownfilter.css';

function DropDownFilter() {

    const [options, setOptions] = useState(['Mytidbit', 'Deepak', 'Wassup', 'Deeps', 'Maolins', 'Test']);

    const [show, setShow] = useState(false);

    const [deBounce, setDebounce] = useState(true);

    const debounce = (fn,delay) => {
        let timeId;
        return function(...args){
            if(timeId){
                clearTimeout(timeId);
            }
    
            timeId = setTimeout(()=>{
                fn(...args);
            }, delay);
        }
    };

    function throttle(fn, delay){
        let last = 0;
     
        return (...args)=>{
         const now = new Date().getTime();
         if(now-last < delay){
             return;
         }
          
          last = now;
          return fn(...args);
        }
     }

    const filterOptions = (e)=>{
        const optionsCopy = [...options];
        let filteredOptions = optionsCopy.filter(opt=>opt.toLowerCase().includes(e.target.value.toLowerCase()));
        setOptions(filteredOptions);
    };

    const debounceKeyUp = (e) => {
        e.persist();
        filterOptions(e);    
    };

    const throttleKeyUp = (e)=>{
         e.persist();
         filterOptions(e);
    };

    useEffect(()=>{
       debounce(debounceKeyUp, 2000);
       throttle(throttleKeyUp, 2000);
    },[]);

    const displayFilter = () => {
         setShow(!show);
    };

    const toggleFilter = ()=>{
        setDebounce(!deBounce)
    };

    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={toggleFilter}>Change Filter Type</button><br/>
            <button onClick={displayFilter} className="dropbtn">{deBounce ? "DeBounce" : "Throttle"} <i className="arroww downn"></i></button>
            <div className={`dropdown-content ${show ? "show" : "hide"}`}>
                <input type="text" placeholder={deBounce ? "Try Debounce..." : "Try Throttle..."} className="filter-input" onKeyUp={deBounce ? e => {e.persist(); debounceKeyUp(e)} : e => {e.persist(); throttleKeyUp(e)}} />
                <i className="fa fa-fw fa-search" style={{position: 'relative', bottom: '34px', left: '5px'}}></i>
                {options.map((opt, i)=>(
                    <a key={i}>{opt}</a>
                ))}
            </div>
        </div>
    )
}

export default DropDownFilter;
