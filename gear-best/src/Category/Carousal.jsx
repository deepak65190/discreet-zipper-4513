import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousal.css";

import Slider from "react-slick";

export default function Carousel() {
  const arr = [
    'https://uidesign.gbtcdn.com/GB/image/5502/1190x420.jpg?imbypass=true',
    'https://uidesign.gbtcdn.com/GB/image/8823/tools_1190X420_en.jpg',
    'https://uidesign.gbtcdn.com/GB/image/8823/security_1190%C3%97420_en.jpg',
    'https://uidesign.gbtcdn.com/GB/image/8823/en_1190x420.jpg?imbypass=true',
    'https://uidesign.gbtcdn.com/GB/image/8823/PPC+1190X420+EN.jpg',
    'https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg'
  ]

  const renderSlides = () =>
    arr.map(num => (
      <div key={num} >
        <img style={{width:'1500px',height:"450px"}} src={num} />
      </div>
    ));

  return (
    <div  style={{maxWidth:"100%"}} className="Appy">
      <Slider dots={true}>{renderSlides()}</Slider>
    </div>
  );
}

// 912px
