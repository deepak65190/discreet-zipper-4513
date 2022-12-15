import { useState } from "react";
import styles from "./Slider.module.css";
import Slide from "./sliderWork";
let x = ["a", "b", "c", "d"];
const Slider = () => {
  return (
    <div classNameName={styles.container}>
      <h1>NEW FOR TODAY</h1>
      <Slide />
    </div>
  );
};
export default Slider;
