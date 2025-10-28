import React from "react";
import '../assets/css/First.css';
import styled from "styled-components";

const Heading = styled.h1`
    color: blue;
    background-color: red;
    text-align: center;
    font-size: 40px;
`;

const External = () =>{
    return(
        <>
            <Heading>Hello External CSS</Heading>
        </>
    )
}

export default External