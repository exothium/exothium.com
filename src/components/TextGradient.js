import React, { useState } from "react";
import './textGradient.css';

function TextGradient() {

    return (
        <div className='textGradientParent'>
            <p>
                <span> A </span>
                <span className='textGradientSpan'> Quest </span>
                <span> to build a </span>
                <span className='textGradientSpan'> Regenerative </span>
                <span> project transforming the ideas of the </span>
                <span className='textGradientSpan'> Community </span>
                <span> into decentralized applications. </span>
            </p>
           {/* <p>
                <span> While you are here take a look at what the </span>
                <span className='textGradientSpan'> Comunity </span>
                <span> is </span>
                <span className='textGradientSpan'> Building </span>
            </p>*/}
        </div>
    );
}

export default TextGradient;