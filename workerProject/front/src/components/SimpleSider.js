import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import japan from '../images/3627634.jpg';
import japan1 from '../images/3226801.jpg';
import japan2 from '../images/3372240.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container-img">
        <Slider {...settings} className="banner-wrap">
          <div className="test">
            <img src={japan} alt="stories-kr.freepik.com 제작" className="test-img" />
          </div>
          <div className="test">
            <img src={japan1} alt="rawpixel.com 제작" className="test-img" />
          </div>
          <div className="test">
            <img src={japan2} alt="stories-kr.freepik.com 제작" className="test-img" />
          </div>

        </Slider>
      </div>
    );
  }
}