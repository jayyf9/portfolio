import React from "react";
import portfolioData from "./portfolio-data";
import styles from "./portfolio.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLock } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: true };
  }
  

  openPortfolioItem = (siteId, siteLocked) => {
    if(!siteLocked) {
      this.props.history.push("/portfolioItem/" + siteId);
    } else {
      alert("Password required to view locked portfolio items.")
    }
  }

  render() {
    const websites = portfolioData.map(website => {
      return (
          <div onClick={() => this.openPortfolioItem(website.id, website.locked)} className={classNames(styles.portfolio, {[styles.LinkHidden]: website.locked})}>
            <div className={website.locked ? styles.overlay: null}>
              <FontAwesomeIcon className={classNames(styles.icon, {[styles.iconHidden]: !website.locked})} size="5x" icon={faLock} />
              <div className={styles.portfolioImageCover}>
                <img alt="site cover" className={website.locked ? styles.siteCoverHidden : styles.siteCover} src={website.img} />
              </div>
            </div>
            <div className={styles.siteContent}>
              <div className={styles.siteTitle}>{website.title}</div>
              <img className={styles.siteClient} alt="site client" src={website.client} />
            </div>
          </div>
      );
    });
  
  return (
      <div className={styles.portfolioContainer}>{websites}</div>
    );
  }
}
