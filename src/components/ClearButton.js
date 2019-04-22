import React from 'react';
import '../assets/ClearButton.css';

export const ClearButton = (props) => (
    <div className="clr-button" onClick={props.handleClear}>
        {props.children}
    </div>
)