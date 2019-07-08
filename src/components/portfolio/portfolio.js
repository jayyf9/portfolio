import React from "react";
import portfolioData from "./portfolio-data";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./portfolio.css";

export default function Portfolio() {
  const websites = portfolioData.map(website => {
    return (
      <Link className="portfolio-item" to={'/portfolioItem/' + website.id}>
        <div className="card">
          <div className="card-image">
            <img className="site-cover" src={website.img} />
          </div>
          <div className="site-content">
            <span className="site-title">{website.title}</span>
            <img className="site-client" src={website.client} />
          </div>
        </div>
      </Link>
    );
  });

  return (
    <Router>
      <div className="container">{websites}</div>
    </Router>
  );
}
