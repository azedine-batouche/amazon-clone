import React from 'react';
import "./Button.css";

function Button({ content , click, type='button', style}) {
    return (
        <button type={type} className="button" onClick={click} style={{width: style +'%'}}>
            {content}
        </button>
    )
}

export default Button
