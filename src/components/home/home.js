import React from 'react';
import styles from  './home.module.scss';
import { Link } from "react-router-dom";
import Intro from '../intro/intro';
import Portfolio from '../portfolio/portfolio';
import Blog from '../blog/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll'
 
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isHovering: false,
      topOfPage: false
     };
  }

  componentDidMount() {
    window.onscroll = () => {
      if(window.pageYOffset !== 0) {
        this.setState({
          topOfPage: true
        });
      } else {
        this.setState({
          topOfPage: false
        });
      }
    };
  }
  
  componentWillUnmount() {
    window.onscroll = null;
  }
  
  handleMouseHover = (img) => {
    console.log(img)
    this.setState({
      isHovering: img
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render() {
    let scrollToTopIcon
    if (this.state.topOfPage === true) {
      scrollToTopIcon = <div onClick={this.scrollToTop.bind(this)}>
        <FontAwesomeIcon className={styles.scrollUp} icon={faChevronCircleUp} size="3x" />
      </div>
    }

  return (
    <div>
        {scrollToTopIcon}
        <Intro/>

        <div className={styles.portfolioSection}>
          <div className={styles.mainHeader}>Project Portfolio</div>
          <Portfolio/>
        </div>

        <div className={styles.blogSection}>
          <div className={styles.mainHeader}>Blog</div>
          <Blog/>

        </div>
        <br/>
        <br/>
        <div className={styles.closingStatement}>Like what you see? You can get in touch by clicking <a href="mailto:jayyf9@gmail.com?Subject=Website%20query" className={styles.link}> HERE!</a></div>
    </div>


  );
  }
}

export default Home;