import React, { useState } from "react";
import './textGradient.css';

function TextGradient() {

    return (
        <div className='textGradientParent'>
            <span> HEYHEY HEY </span>
            <span className='textGradientSpan'> EXOTHIUM </span>
            <span> HEYHEY HEY </span>
            <span className='textGradientSpan'> EXOTHIUM </span>
            <span className='textGradientSpan'> EXOTHIUM </span>
            <span className='textGradientSpan'> EXOTHIUM </span>
        </div>
    );
}

export default TextGradient;