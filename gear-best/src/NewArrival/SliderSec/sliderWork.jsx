import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://wallpapersmug.com/download/3840x2400/608903/front-view-mclaren-765lt-2020.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nWsi-ABygnhD8_JQGz1dtFdBhn-H7p3IEwLeGjkubGeFaOGu4rgW418fcXKm3w1iJ6Q&usqp=CAU"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000} >
         <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRBVGGS8eL068uuo2WvkuzjRo9QlMIgU-ZdObC7JYkqrhfnlxdtGnLHjPoaokwOWQOEg&usqp=CAU"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default Slide
