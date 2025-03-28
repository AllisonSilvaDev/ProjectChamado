import React from "react";
import './option.css'

export default function Option({ texto }){
    return(
        <>
            <div className="option">

                <a href="">{texto}</a>
                
            </div>
        </>
    )
}