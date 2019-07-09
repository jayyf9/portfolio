import React from "react";
import styles from "./image-slider.module.scss";

export default function ImageSlider() {
  const images = '../../../images/portfolio-items/multione-web/multione-web-1.png'
  
  return (
    <div className={styles.imageSliderContainer}>
        <img alt="site cover" className={styles.slideImage} src={images} />  
    </div>
  );
}
