import React, {useState} from 'react';
import Slide from "./slide";

const SliderContainer = ({firstSlideName, secondSlideName, thirdSlideName}) => {
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    const [index, setIndex] = useState(0);
    const delay = 250;

    React.useEffect(() => {
        setTimeout(() => setIndex((prevIndex) => prevIndex
            === colors.length - 1 ? 0 : prevIndex + 1),
            delay);

        return () => {
        };
    }, [index]);

    return (
        <div className='slideshow-slider'
             style={{
                 transform: `translate3d(${-index * 100}%, 0, 0)`
             }}
        >
            <Slide slideName={firstSlideName} backgroundColor={colors[0]}/>
            <Slide slideName={secondSlideName} backgroundColor={colors[1]}/>
            <Slide slideName={thirdSlideName} backgroundColor={colors[2]}/>
        </div>
    );
}

export default SliderContainer;