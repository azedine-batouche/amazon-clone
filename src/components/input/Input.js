import React from 'react';
import './Input.css';
import { BsExclamationCircle } from "react-icons/bs";

function Input({ label, type, value, autoFocus = false, onChange, autoComplete = false, error =null, onBlur }) {
    let displayError = error ? <span className='input__errors'> <BsExclamationCircle className="input__errorsIcon"/> { error}</span> : <span className='input__errors'></span>
    return (
        <div className="inputGroup">
            <h5 className="input__label">{label}</h5>
            <input className="input" type={type} autoFocus={autoFocus} value={value} onChange={onChange} autoComplete={autoComplete} onBlur={onBlur }/>
            {displayError}
        </div>
    )
}

export default Input
