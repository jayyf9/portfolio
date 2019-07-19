import React from 'react';
import portfolioData from "./../portfolio-data.js";
import styles from './portfolio-item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageSlider from '../../shared/image-slider/image-slider.js';


export default function PortfolioItem({match}) {
    return (
      <div className={styles.portfolioItem}>
        <h3 className={styles.title}>{portfolioData[match.params.id].title}</h3>
        <div className={styles.siteInformation}>
            <div className={styles.siteDescription}>
              <p>{portfolioData[match.params.id].description}</p>
            </div>
            <div>
              {portfolioData[match.params.id].skills.map(skill => {
                return (
                  <div className={styles.siteSkills}><FontAwesomeIcon size="lg" icon={skill.icon} /><div className={styles.skillTitle}>{skill.title}</div></div>
                )
              })}
            </div>
            <div className={styles.siteClient}>
              <img alt="site-client" className={styles.siteClientImage} src={portfolioData[match.params.id].client} />
            </div>
        </div>
        <ImageSlider className={styles.ImageSlider} website={match.params.id} />
      </div>
        )
      }