import React from 'react';
const CharComp=(props)=>{
    return(
    <div onClick={props.val} className="putti">
        <p >{props.ch}</p>
        </div>
    )
}
export default CharComp;