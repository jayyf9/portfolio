import React from "react";
import portfolioData from "./portfolio-data";
import PopUpPanel from "./../shared/pop-up-panel/pop-up-panel";
import styles from "./portfolio.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLock } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Link } from "react-router-dom";
export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: true, showPopup: false, isHomePage: false };
  }
  
  componentDidMount() {
    if(window.location.pathname === "/home" || window.location.pathname === "/") {
      this.setState({  
        isHomePage: true
      });
    };
  }

  openPortfolioItem = (siteId, siteLocked) => {
    if(!siteLocked) {
      this.props.history.push("/portfolioItem/" + siteId);
    } else {
      this.togglePopup(siteId);
    }
  }

  togglePopup(siteId) {  
    this.setState({  
      showPopup: !this.state.showPopup,
      siteId: siteId
    });
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
    <div>  
      <div>
        {this.state.showPopup ?  
        <PopUpPanel text='A password is required to view this project' siteId={this.state.siteId} closePopup={this.togglePopup.bind(this)} passwordAccepted={this.openPortfolioItem.bind(this, this.state.siteId, false)}/>  
        : null  
        }  
      </div>  
      <div className={styles.portfolioContainer}>{websites}</div>
      {this.state.isHomePage ?  
      <div class="buttonWrapper">
        <Link to={'/portfolio/'}><button className={styles.viewMoreButton}>View More</button></Link>
      </div>
      : null
      }
    </div>
    );
  }
}
