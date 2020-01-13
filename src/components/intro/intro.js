import React from 'react';
import styles from  './intro.module.scss';
import { Link } from "react-router-dom";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isHovering: false
     };
  }
  
  handleMouseHover = (img) => {
    console.log(img)
    this.setState({
      isHovering: img
    });
  }

  render() {
  return (
    <div className={styles.introContainer}>
        <div className={styles.introText}>
          <div>Hi, my Name is
            <span onMouseEnter={() => this.handleMouseHover('me')} onMouseLeave={() => this.handleMouseHover(this)} ><span className={styles.img}> Jake! </span></span>
            { this.state.isHovering === 'me' ? <img className={styles.tooltip} src={ require('./../../images/me.jpg') } /> : null }
            I am UX focussed
            <span onMouseEnter={() => this.handleMouseHover('design')} onMouseLeave={() => this.handleMouseHover(this)}><span className={styles.img}> Web designer </span></span>
            { this.state.isHovering === 'design' ? <img className={styles.tooltip} src={ require('./../../images/design.jpg') } /> : null }
            and
            <span onMouseEnter={() => this.handleMouseHover('code')} onMouseLeave={() => this.handleMouseHover(this)}><span className={styles.img}> developer </span></span>
            { this.state.isHovering === 'code' ? <img className={styles.tooltip} src={ require('./../../images/code.jpg') } /> : null }
            based in the
            <span onMouseEnter={() => this.handleMouseHover('amsterdam')} onMouseLeave={() => this.handleMouseHover(this)}>{ this.state.isHovering === 'amsterdam' ? <img className={styles.tooltip} src={ require('./../../images/amsterdam.jpg') } /> : null }<span className={styles.img}> Netherlands.</span></span>
          </div>
            <div className={styles.subIntroText}>
              <h5>I work freelance so <Link to="/Portfolio" className={styles.link}>check out some of my work</Link> and if you are interested 
              <a href="mailto:jayyf9@gmail.com?Subject=Website%20query" className={styles.link}> get in touch!</a></h5>
            </div>
        </div>
    </div>
  );
  }
}

export default Intro;