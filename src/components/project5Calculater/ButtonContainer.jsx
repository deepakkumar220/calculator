import React from "react";
import "./ButtonContainer.css";

function ButtonContainer({onButtonClick}) {
    const buttonNames = [
        "C",
        "1",
        "2",
        "+",
        "3",
        "4",
        " -",
        "5",
        "6",
        "*",
        "7",
        "8",
        "/",
        "=",
        "9",
        "0",
        ".",
    ];
    return (
        <>
        <div className="buttons-container">
            {buttonNames.map((buttonName) => (
            <button onClick={() => onButtonClick(buttonName)} key={buttonName} className="button">{buttonName}</button>
            ))}
        </div>
        </>
    );
}

export default ButtonContainer;
