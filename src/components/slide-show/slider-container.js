import React, {useState} from 'react';
import Slide from "./slide";

const SliderContainer = ({firstSlideName, secondSlideName, thirdSlideName}) => {
    const colors = ["#F39088", "#00C49F", "#FFBB28"];


    return (
        <div className='slideshow-slider'>
            <Slide slideName={firstSlideName} backgroundColor={colors[0]}/>
            <Slide slideName={secondSlideName} backgroundColor={colors[1]}/>
            <Slide slideName={thirdSlideName} backgroundColor={colors[2]}/>
        </div>
    );
}

export default SliderContainer;