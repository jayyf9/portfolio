import React from "react";
import portfolioData from "./portfolio-data";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./portfolio.scss";

export default function Portfolio() {
  const websites = portfolioData.map(website => {
    return (
      <div className="portfolio-item">
      <Link to={'/portfolioItem/' + website.id}>
        <div className="card">
          <div className="card-image">
            <img alt="site cover" className="site-cover" src={website.img} />
          </div>
          <div className="site-content">
            <span className="site-title">{website.title}</span>
            <img alt="site client" className="site-client" src={website.client} />
          </div>
        </div>
      </Link>
      </div>
    );
  });

  return (
    <div className="container">{websites}</div>
  );
}
