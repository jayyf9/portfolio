import React from "react";
import "./portfolio.css";
import portfolioData from "./portfolio-data.json";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Portfolio() {
  const websites = portfolioData.map(website => {
    return (
      <Link className="portfolio-item" to="/portfolioItem/{website.id}">
        <div className="card">
          <div className="card-image">
            <img class="site-cover" src={require('../../images/portfolio-items/multione-web/multione-web-thumbnail.png')} />
            {website.img}
          </div>
          <div className="card-content portfolio-card-content">
            <span className="card-title">{website.title}</span>
            <img src="{website.client}" />
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
