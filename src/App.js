import React from 'react';
import './App.scss';
import home from './components/home/home';
import portfolio from './components/portfolio/portfolio';
import portfolioItem from './components/portfolio/portfolio-item/portfolio-item';
import blog from './components/blog/blog';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import blogPost from './components/blog/blog-post/blog-post';


function App() {
  return (
    <Router>
      <div className="contactNav">
        <a className="contactButton" href="mailto:jayyf9@gmail.com?Subject=Website%20query">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>&nbsp;
        <a className="contactButton" href="https://twitter.com/Jayyf9">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>&nbsp;
        <a className="contactButton" href="https://www.linkedin.com/in/jake-french-200a0462/">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>&nbsp;
      </div>
      <div className="headers">
        <div className="mainHeader">Jake French</div>
        <span className="subHeader">Frontend Developer - UX Designer - Backend Developer</span>
      </div>
      <div className="navItems">
          <NavLink className="navLink" activeClassName="isActive" to="/home">HOME</NavLink >
          <span className="navLinkSeperator">|</span>
          <NavLink className="navLink" activeClassName='isActive' to="/portfolio">PORTFOLIO</NavLink >
          <span className="navLinkSeperator">|</span>
          <NavLink className="navLink" activeClassName='isActive' to="/blog">BLOG</NavLink >
      </div>
      <Route render={({location}) => (
      <TransitionGroup>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Switch location={location}>
          <Route exact path="/" component={home} />  
          <Route path="/home" component={home} />
          <Route path="/portfolio" component={portfolio} />
          <Route path="/portfolioItem/:id" component={portfolioItem} />
          <Route path="/blog" component={blog} />
          <Route path="/blogPost/:id" component={blogPost} />
        </Switch>
    </CSSTransition>
    </TransitionGroup>
    )} />
    </Router>
  );
}

export default App;
