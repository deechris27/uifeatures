import React, {useState} from 'react';
import './listfilter.css';

function ListFilter() {

    const [searchVal, setSearchVal] = useState("");

    const names = [
        "Deepak",
        "Mytidbit",
        "Deepika",
        "Mytid",
        "Suga",
        "Hello",
        "World",
        "Chris",
        "Bestie",
        "Sugar",
    ];

    const filteredNames = names.filter(val => {
        return val.toLowerCase().includes(searchVal.toLowerCase())
    });

    const handleKeyUp = (event) => {
         setSearchVal(event.target.value)
    };

    return (
        <div>
            <input type="text" className="list-filter-input" onKeyUp={handleKeyUp} placeholder="Search names...." />
             <span style={{position:"absolute", left: "0", marginLeft:"30px", marginTop:"0.80%"}}><i className="fa fa-fw fa-search"></i></span>
                <ul className="list-filter-ul">
                    {filteredNames.map(name=>(
                        <li key={name}><a href="#">{name}</a></li>
                    ))}
                </ul>
        </div>
    )
}

export default ListFilter;
