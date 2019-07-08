import React from 'react';
import './App.scss';
import home from './components/home/home';
import portfolio from './components/portfolio/portfolio';
import portfolioItem from './components/portfolio/portfolio-item/portfolio-item';
import blog from './components/blog/blog';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';

function App() {
  return (
    <BrowserRouter>
      <div className="contact-nav">
        <a href="mailto:jayyf9@gmail.com?Subject=Website%20query"><div className="contact-button"><EmailIcon className="icon">Email</EmailIcon></div></a>&nbsp;
        <a href="https://twitter.com/Jayyf9"><div className="contact-button"><EmailIcon className="icon">star</EmailIcon></div></a>&nbsp;
        <a href="https://www.linkedin.com/in/jake-french-200a0462/"><div className="contact-button"><EmailIcon className="icon">star</EmailIcon></div></a>&nbsp;
      </div>
      <div className="headers">
        <h3 className="main-header"><Link to="/home">Jake French</Link></h3>
        <span className="sub-header">Frontend Developer - UX Designer - Backend Developer</span>
      </div>
      <div className="nav-items">
          <Link className="nav-link" to="/home">Home -</Link>
          <Link className="nav-link" to="/portfolio">Portfolio -</Link>
          <Link className="nav-link" to="/blog">Blog</Link>
      </div>
      <Route path="/home" component={home} />
      <Route path="/portfolio" component={portfolio} />
      <Route path="/portfolioItem/:id" component={portfolioItem} />
      <Route path="/blog" component={blog} />
    </BrowserRouter>
  );
}

export default App;
