import React, {useState} from 'react';

function Country(props){
    const handleOnClick =() => {
        props.removeCountry(props.index)

    }

    const handleLineThru =() => {
        props.lineThruCountry(props.index)
    }
    return (
        <div>
  {/* <h4 style={{display:"inline-block", 
    textDecoration:props.country.isVisited ? "line-through" :""}}>
        {props.country.capital} in {props.country.name}  
        </h4> */}
    <h4 style={{display:"inline-block", 
    textDecoration:props.country.isVisited ? "line-through" :""}}>
        {props.country.name}  
        </h4>
    <button class="button-m" onClick={handleOnClick}>Remove</button>
    <button class="visitButton" onClick={handleLineThru}>Visited</button>
    </div>
    )
}

export default Country