import React from 'react';
import portfolioData from "./../portfolio-data.js";
import './portfolio-item.css';

export default function PortfolioItem({match}) {
    return (
      <div>
        <h3 class="site-title">{portfolioData[match.params.id].title}</h3>
        <div class="information row">
          <div class="col s7">
              <b>Description:</b>
            <p>{portfolioData[match.params.id].description}</p>
          </div>
          <div class="col s2">
            <b>Client:</b><br /><br /><img alt="site-client" className="site-client" src={portfolioData[match.params.id].client} />
          </div>
          <b>Skills/Tools:</b>
          <div class="col s3"></div>

          {portfolioData[match.params.id].skills.map(skill => {
            return (
              <div class="skills-section">
                <div class="skills valign-wrapper"><i class="icons"></i> {skill.title}</div>
              </div>
            )
          })}
          
          {portfolioData[match.params.id].siteImages.map(siteImage => {
            return (
                <img alt="siteImage" className="site-image" src={siteImage} />
            )
          })}
      </div>
        </div>)}