import React from 'react';
import '../styles/slide-show.css';

function Slide(props) {
    const {backgroundColor} = props;

    return (
        <div className='slide' style={{backgroundColor}}>
            <h1>{props.slideName}</h1>
        </div>
    );
}

export default Slide;