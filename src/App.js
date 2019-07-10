import React from 'react';
import './App.scss';
import home from './components/home/home';
import portfolio from './components/portfolio/portfolio';
import portfolioItem from './components/portfolio/portfolio-item/portfolio-item';
import blog from './components/blog/blog';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import postCMS from './components/blog/posts/post-cms/post-cms';
import newPost from './components/blog/posts/new-post/new-post';


function App() {
  return (
    <Router>
      <div className="contactNav">
        <a className="contactButton" href="mailto:jayyf9@gmail.com?Subject=Website%20query">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>&nbsp;
        <a className="contactButton" href="https://twitter.com/Jayyf9"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>&nbsp;
        <a className="contactButton" href="https://www.linkedin.com/in/jake-french-200a0462/"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a>&nbsp;
      </div>
      <div className="headers">
        <h3 className="mainHeader">Jake French</h3>
        <span className="subHeader">Frontend Developer - UX Designer - Backend Developer</span>
      </div>
      <div className="navItems">
          <Link className="navLink" to="/home">Home -</Link>
          <Link className="navLink" to="/portfolio">Portfolio -</Link>
          <Link className="navLink" to="/blog">Blog</Link>
      </div>
      <Route exact path="/" component={home} />  
      <Route path="/home" component={home} />
      <Route path="/portfolio" component={portfolio} />
      <Route path="/portfolioItem/:id" component={portfolioItem} />
      <Route path="/blog" component={blog} />
      <Route path="/blogPost/0" component={postCMS} />
      <Route path="/blogPost/1" component={newPost} />
    </Router>
  );
}

export default App;
