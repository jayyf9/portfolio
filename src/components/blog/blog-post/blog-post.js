import React from 'react';
import blogData from "../blog-data";
import styles from './blog-post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function blogPost({match}) {
  return (
    <div className={styles.post}>
        <h3 className={styles.title}>{blogData[match.params.id].title}</h3>
        <h3 className={styles.tagLine}>{blogData[match.params.id].tagLine}</h3>
        <div>{blogData[match.params.id].intro}</div>
        <img className={styles.responsiveImg} alt="" src={blogData[match.params.id].img} />
        <h3 className={styles.section1Header}>{blogData[match.params.id].section1Header}</h3>
        <div className={styles.section1}>{blogData[match.params.id].section1}</div>
        <h3 className={styles.section2Header}>{blogData[match.params.id].section2Header}</h3>
        <div className={styles.section2}>{blogData[match.params.id].section2}</div>
        <h3 className={styles.section3Header}>{blogData[match.params.id].section3Header}</h3>
        <div className={styles.section3}>{blogData[match.params.id].section3}</div>
        <h3 className={styles.section4Header}>{blogData[match.params.id].section4Header}</h3>
        <div className={styles.section4}>{blogData[match.params.id].section4}</div>
        <h3 className={styles.section5Header}>{blogData[match.params.id].section5Header}</h3>
        <div className={styles.section5}>{blogData[match.params.id].section5}</div>
        <h3 className={styles.section6Header}>{blogData[match.params.id].section6Header}</h3>
        <div className={styles.section6}>{blogData[match.params.id].section6}</div>
        <h2>Conclusion</h2>
        <div className={styles.conclusion}>{blogData[match.params.id].conclusion}</div>
        <h3>References:</h3>
        <a href={blogData[match.params.id].references} className={styles.references}>{blogData[match.params.id].references}</a>
    
        <div className={styles.footer}>
        <div className={styles.shareIcons}>
            <a href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/blogPost/0"><FontAwesomeIcon className={styles.icon} size="2x" icon={faFacebook} /></a>
            <a href="https://twitter.com/home?status=http%3A//localhost%3A3000/blogPost/0"><FontAwesomeIcon className={styles.icon} size="2x" icon={faTwitter} /></a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//localhost%3A3000/blogPost/0&title=&summary=&source="><FontAwesomeIcon className={styles.icon} size="2x" icon={faLinkedin} /></a>
          </div>
          <div className={styles.author}>Posted by Jake French</div>   
          <div className={styles.date}>on {blogData[match.params.id].date}</div>   
        </div>
    </div>
  )};
