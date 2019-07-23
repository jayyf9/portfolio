import React from "react";
import portfolioData from "./portfolio-data";
import styles from "./portfolio.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
  const websites = portfolioData.map(website => {
    return (
      <Link className={styles.portfolio} to={'/portfolioItem/' + website.id}>
          <div className={styles.portfolioImageCover}>
            <img alt="site cover" className={styles.siteCover} src={website.img} />
          </div>
          <div className={styles.siteContent}>
            <div className={styles.siteTitle}>{website.title}</div>
            <img className={styles.siteClient} alt="site client" src={website.client} />
          </div>
      </Link>
    );
  });

  return (
    <div className={styles.portfolioContainer}>{websites}</div>
  );
}
