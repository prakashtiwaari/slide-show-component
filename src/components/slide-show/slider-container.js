import React, {useState} from 'react';
import Slide from "./slide";

const SliderContainer = ({firstSlideName, secondSlideName, thirdSlideName}) => {
    const colors = ["#FFBB28", "#00C49F", "#FFBB28"];
    const [firstSlide, setFirstSlide] = useState(true);
    const [secondSlide, setSecondSlide] = useState(true);
    const [thirdSlide, setThirdSlide] = useState(false);

    function callBack3() {
        setThirdSlide(true);
        setSecondSlide(false);
        setTimeout(callBack, 1000);
    }

    function callBack2() {
        setFirstSlide(false);
        setSecondSlide(true);
        setTimeout(callBack3, 1000);
    }

    const callBack = () => {
        setSecondSlide(false);
        setThirdSlide(false);
        setTimeout(callBack2, 1000)
    };


    callBack();

    return (
        <div className='slideshow-slider'>
            {
                firstSlide && <Slide slideName={firstSlideName} backgroundColor={colors[0]}/>
            }

            {
                secondSlide && <Slide slideName={secondSlideName} backgroundColor={colors[1]}/>
            }
            {
                thirdSlide && <Slide slideName={thirdSlideName} backgroundColor={colors[2]}/>
            }

        </div>
    );
}

export default SliderContainer;