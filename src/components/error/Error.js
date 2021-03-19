import React from 'react';
import "./Error.css";
import { FiAlertTriangle } from "react-icons/fi";

function Error({title="Une probleme est survenu", message}) {
    return (
        <div className="error__ctn">
            <div className="error__iconCtn">
            <FiAlertTriangle  className="error__icon"/>
            </div>
            <h6 className="error__title">{title}</h6>
            <p className="error__message">{ message }</p>
        </div>
    )
}

export default Error
