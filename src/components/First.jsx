import React from "react";
import Flower from '../assets/image/flower.jpg';

var n = 'Hello Inline CSS';

const cssStyle = {
    color:'red',
    backgroundColor:'green',
    textAlign:'center'
}

const First = () =>{
    return(
        <>
            <h1 style={cssStyle} >{n}</h1>
        </>
    )
}

export default First