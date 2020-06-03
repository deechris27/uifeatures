import React, {useState} from 'react';
import {countries} from './countries';
import './autocomplete.css';

function AutoComplete() {

    const [state, setState] = useState({inputVal:"", suggestions:[], selectedCountry: "", prompty: false})

    const handleKeyDown = (e)=>{
        e.persist();
        let filteredCountries = countries.filter(item => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
        setState(prevState=>({
            ...prevState,
            inputVal: e.target.value,
            suggestions: filteredCountries
        }))
    };

    const handleCountrySelect = (country) => {
         setState(prevState=>({
             ...prevState,
             inputVal: country,
             prompty: false,
             suggestions: []
         }))
    };

    const handleOnChange = (e) =>{
        handleKeyDown(e);
        let formattedCountries;

        //not working
        if(state.suggestions.includes(e.target.value)){
            formattedCountries = state.suggestions.forEach(item=>{
                item.replace(state.inputVal, <strong>{state.inputVal}</strong>)
            })

            console.log(formattedCountries);
            setState(prevState=>({
                ...prevState,
                suggestions: formattedCountries
            }))
        }
    };

    const handleSubmit = () => {
        state.inputVal ? window.location.replace("http://www.tidbit.c.la/") :  setState(prevState=>({
            ...prevState,
            prompty: true
        }))
    };

    let formattedCountries;
    let suggestedList = state.suggestions && 
            <div className="autocomplete-items">
                {state.suggestions.map(country=>{
                   return <div key={country} onClick={()=>handleCountrySelect(country)} className="autocomplete-items-item">{country}</div>
                })}
            </div>;

    return (
        <div >
            <h3 style={{textAlign:'center'}}>Mytidbit Autocomplete - Search for a country and select from suggestions</h3>
            <p style={{color:'red', position:'relative', left:'50px'}}>{state.prompty ? "Select a country and then submit" : ""}</p>
            <form autoComplete="off" action="">
                <div className="autocomplete">
                    <input
                     type="text"
                     className="inputt-text"
                     placeholder="Country name...."
                     onKeyDown={handleKeyDown}
                     onChange={handleOnChange}
                     value={state.inputVal} />
                </div><br />
                {state.inputVal && suggestedList}
                <input type="submit" className="summit2" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default AutoComplete
