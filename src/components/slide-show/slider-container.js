import React, {useState} from 'react';
import Slide from "./slide";

const SliderContainer = ({firstSlideName, secondSlideName, thirdSlideName}) => {
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];

    return (
        <div className='slideshow-slider'
             style={{
                 transform: `translate3d(${-1 * 100}%, 0, 0)`
             }}
        >
            <Slide slideName={firstSlideName} backgroundColor={colors[0]}/>
            <Slide slideName={secondSlideName} backgroundColor={colors[1]}/>
            <Slide slideName={thirdSlideName} backgroundColor={colors[2]}/>
        </div>
    );
}

export default SliderContainer;