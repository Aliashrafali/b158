import React, { useState } from "react";
import Data from './Data';

const Print = () =>{
    const [data] = useState(Data);
    return(
        <>
            {
                data.map((elem) =>{
                    return(
                        <h1>{elem.id} {elem.name} {elem.age} {elem.course}  ,
                            {elem.status === 0 ? `Active` : `In-active`}
                        </h1>
                    )
                })
            }
        </>
    )
}

export default Print