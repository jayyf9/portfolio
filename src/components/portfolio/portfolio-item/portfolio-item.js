import React from 'react';
import portfolioData from "./../portfolio-data.js";
import styles from './portfolio-item.module.scss';
import ImageSlider from './../../shared/image-slider/image-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function PortfolioItem({match}) {
    return (
      <div>
        <h3 className={styles.siteTitle}>{portfolioData[match.params.id].title}</h3>
        <div className={styles.siteInformation}>
          <div className={styles.siteDescription}>
            <b className={styles.sectionTitle}>Description:</b>
            <p>{portfolioData[match.params.id].description}</p>
          </div>
          <div className={styles.siteClient}>
            <b className={styles.sectionTitle}>Client:</b><br /><br />
            <img alt="site-client" className={styles.siteClientImage} src={portfolioData[match.params.id].client} />
          </div>
          <div>
            <b className={styles.sectionTitle}>Skills/Tools:</b>
            {portfolioData[match.params.id].skills.map(skill => {
              return (
                <div className={styles.siteSkills}><FontAwesomeIcon icon={skill.icon} />{skill.title}</div>
           
              )
            })}
          </div>
          </div>

      </div>
        )}