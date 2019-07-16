import React from "react";
import styles from "./image-slider.module.scss";
import portfolioData from "./../../portfolio/portfolio-data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

export default class ImageSlider extends React.Component {
    constructor() {
      super();
      this.state = { sliderNum: 0 };
    }
    prevImg = () => {
      if(this.state.sliderNum <= 0) { // Check if at start of images and roll over to end of true.
        this.setState({ sliderNum: portfolioData[this.props.website].siteImages.length - 1}); 
        return;
      }
      this.setState({ sliderNum: this.state.sliderNum - 1});
    }
    nextImg = () => {
      if (this.state.sliderNum >= portfolioData[this.props.website].siteImages.length - 1) { // Check if at end of images and roll over to start if true.
        this.setState({ sliderNum: 0});
        return;
      }
      this.setState({ sliderNum: this.state.sliderNum + 1});
    }

    render() {
      return (
        <div className={styles.imageSliderContainer}>
          <img className={styles.slideImage} alt="site cover" src={portfolioData[this.props.website].siteImages[this.state.sliderNum]} />
          <div className={styles.leftArrowBox} onClick={this.prevImg}>
            <FontAwesomeIcon className={styles.leftArrow} icon={faArrowCircleLeft} size="3x" />
          </div>
          <div className={styles.rightArrowBox} onClick={this.nextImg}>
            <FontAwesomeIcon className={styles.rightArrow} icon={faArrowCircleRight} size="3x" />
          </div>
          <div className={styles.dots}>...</div>
        </div>
    );
  }
}