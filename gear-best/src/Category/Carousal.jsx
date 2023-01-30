import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousal.css";

import Slider from "react-slick";

export default function Carousel() {
  const arr = [
    'https://www.gearbest.com/u_file/2212/12/photo/105254957714338494-195a.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_1920',
    'https://www.gearbest.com/u_file/2301/14/photo/407571323-OK-775f.png?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_1920',
    // 'https://rukminim1.flixcart.com/fk-p-flap/844/140/image/d3cd3cc1199fb514.jpg?q=50',
    // 'https://rukminim1.flixcart.com/fk-p-flap/50/50/image/a44b2738f8299417.jpeg?q=50',
    // 'https://uidesign.gbtcdn.com/GB/image/8823/PPC+1190X420+EN.jpg',
    // 'https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg'
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
