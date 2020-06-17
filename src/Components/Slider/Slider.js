import React, { useState } from 'react';
import ImgComp from './SlideImg';
import i1 from '../../slider-pics/futurehome.jpg'
import i2 from '../../slider-pics/products_hero.jpg'
import i3 from '../../slider-pics/contact_hero.jpg'

const Slider = () => {
    let sliderArr = [
        <ImgComp src={i1} heading={'help'}/>, 
        <ImgComp src={i2} />, 
        <ImgComp src={i3} />
    ] 

    const [x, setX] = useState(0)
    const goLeft = () => {
        x === 0 ?  setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }

    return (
        <div className="slider">
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                         </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>
                <i class="fa fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={goRight}>
                <i class="fa fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default Slider;