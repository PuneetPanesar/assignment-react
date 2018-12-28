import React from 'react';
import classes from './CharComp.css';
const CharComp=(props)=>{
    return(
    <div onClick={props.val} className={classes.putti} >
        <p className={classes.pink}>{props.ch}</p>
        </div>
    )
}
export default CharComp;