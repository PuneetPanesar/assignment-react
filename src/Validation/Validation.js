import React from 'react';
const Validation=(props)=>{
    let msg;
    if(props.l<=5)
        msg="string is too short";
    else
        msg="string is too long";
    return(
        <div>
       <p>{msg}</p>
    <p>length is......{props.l}</p>
        <p>{props.msg}</p>
        </div>
    )
}
export default Validation;