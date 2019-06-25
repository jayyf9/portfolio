import React from 'react';
import './home.css';


class Home extends React.Component {
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
    <div className="introContainer">
      <div className="row">
        <div className="intro-text">
          <h4>Hi, my Name is
            <span onMouseEnter={() => this.handleMouseHover('me')} onMouseLeave={() => this.handleMouseHover(this)} ><span className="img"> Jake! </span></span>
            { this.state.isHovering === 'me' ? <img className="tooltip" src={ require('./../../images/me.jpg') } /> : null }
            I am UX focussed
            <span onMouseEnter={() => this.handleMouseHover('design')} onMouseLeave={() => this.handleMouseHover(this)}><span className="img"> Web designer </span></span>
            { this.state.isHovering === 'design' ? <img className="tooltip" src={ require('./../../images/design.jpg') } /> : null }
            and
            <span onMouseEnter={() => this.handleMouseHover('code')} onMouseLeave={() => this.handleMouseHover(this)}><span className="img"> developer </span></span>
            { this.state.isHovering === 'code' ? <img className="tooltip" src={ require('./../../images/code.jpg') } /> : null }
            based in the
            <span onMouseEnter={() => this.handleMouseHover('amsterdam')} onMouseLeave={() => this.handleMouseHover(this)}><span className="img"> Netherlands</span></span>
            { this.state.isHovering === 'amsterdam' ? <img className="tooltip" src={ require('./../../images/amsterdam.jpg') } /> : null }
            .</h4>
            <div className="sub-intro-text">
              <h5>I work freelance so <a href="" className="link">check out some of my work</a> and if you are interested 
              <a href="mailto:jayyf9@gmail.com?Subject=Website%20query" className="link"> get in touch!</a></h5>
            </div>
        </div>
      </div>
    </div>
  );
  }
}

export default Home;