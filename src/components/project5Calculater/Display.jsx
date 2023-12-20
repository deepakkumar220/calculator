import React from 'react';
import "./Display.css";

function Display({displayValue}) {
    return (
        <>
            <input type="text" className='display' value={displayValue} readOnly />
        </>
    )
}

export default Display
