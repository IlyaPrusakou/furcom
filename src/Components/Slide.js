import React  from 'react';
import { Slide } from 'react-slideshow-image';
import Style from '../Styles/cl_css_slide.module.css'

const slideImages = [
    //'images/1.jpg',
    'http://localhost:8080/1111.jpg',
    'http://localhost:8080/1111.jpg',
    'http://localhost:8080/1111.jpg'
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

  const Slideshow = () => {
    return (
      <div className={Style.slide_container}>
        <Slide {...properties}>
          <div className="each-slide">
            <div className = { Style.size } style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div className = { Style.size } style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div className = { Style.size } style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;

