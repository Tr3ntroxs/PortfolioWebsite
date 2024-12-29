import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "./imageslider.css"

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Arrow functions
    const goBack = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goForth = () => {
        const isLast = currentIndex === slides.length - 1;
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className="slider-container">
            <div className="slider">
                <div className="arrows">
                    <div className="leftarrow" onClick={goBack}><FaArrowLeft /></div>
                    <div className="rightarrow" onClick={goForth}><FaArrowRight /></div>
                </div>
                <div className="slide">
                    {slides[currentIndex].type === 'image' ? (
                        <img src={slides[currentIndex].url} alt="slide"></img>
                    ) : (
                        <iframe className='video'
                                title='Youtube player'
                                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                src={slides[currentIndex].url}
                                alt="slide">
                        </iframe>
                    )}
                </div>
                <div className="dots">
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className="dot" onClick={() => goToSlide(slideIndex)}>O</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;