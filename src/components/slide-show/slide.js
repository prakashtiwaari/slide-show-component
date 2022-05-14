import React from 'react';
import '../styles/slide-show.css';

function Slide(props) {
    return (
        <div className='slide'>
            <h1>{props.slideName}</h1>
        </div>
    );
}

export default Slide;