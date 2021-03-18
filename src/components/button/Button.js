import React from 'react';
import "./Button.css";

function Button({ content , click}) {
    return (
        <button className="button" onClick={click}>
            {content}
        </button>
    )
}

export default Button
