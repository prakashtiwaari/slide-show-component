import React from 'react';
import '../styles/slide-show.css';

function Slide(props) {
    const {backgroundColor} = props;

    return (
        <div className='slide' style={{backgroundColor}}>
            <h3>{props.slideName}</h3>
        </div>
    );
}

export default Slide;