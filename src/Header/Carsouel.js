import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import bg1 from "../assets/amazon_home_bg1.jpg";
import bg2 from "../assets/amazon_home_bg2.jpg";
import bg3 from "../assets/amazon_home_bg4.jpg";

export default function HomeCarausel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ width: "100%" }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 homeBackground"
            src={bg1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 homeBackground"
            src={bg2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100  homeBackground"
            src={bg3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


