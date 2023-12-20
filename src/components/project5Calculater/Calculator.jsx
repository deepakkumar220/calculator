import React, { useState } from 'react';
import "./Calculator.css";
import Display from './Display';
import ButtonContainer from './ButtonContainer';

function Calculator() {
    let [calVal, setCalVal] = useState("");

    const onButtonClick = (buttonText) =>{
        if(buttonText === "C"){
            setCalVal("");
        }else if (buttonText === '='){
            const result = eval(calVal);
            setCalVal(result);
        }else{
            const newDisplayValue = calVal + buttonText;
            setCalVal(newDisplayValue);
        }
    }

    return (
        <div className='calculator'>
            <Display displayValue={calVal} />
            <ButtonContainer onButtonClick={onButtonClick} />
        </div>
    )
}

export default Calculator;
