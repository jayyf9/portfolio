import React from 'react';
import blogData from "../blog-data";
import styles from './blog-post.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

export default function blogPost({match}) {
  return (
    <div className={styles.post}>
        <h3 className={styles.title}>{blogData[match.params.id].title}</h3>
        <h3 className={styles.subTitle}>{blogData[match.params.id].subTitle}</h3>
        <div>{blogData[match.params.id].intro}</div>
        <h3 className={styles.section1Header}>{blogData[match.params.id].section1Header}</h3>
        <div className={styles.section1}>{blogData[match.params.id].section1}</div>
        <h3 className={styles.section2Header}>{blogData[match.params.id].section2Header}</h3>
        <div className={styles.section2}>{blogData[match.params.id].section2}</div>
        <img className={styles.postImage} alt="" src={blogData[match.params.id].postImage} />
        <div className={styles.imageCaption}>{blogData[match.params.id].imageCaption}</div>
        <h3 className={styles.section3Header}>{blogData[match.params.id].section3Header}</h3>
        <div className={styles.section3}>{blogData[match.params.id].section3}</div>
        <h3 className={styles.section4Header}>{blogData[match.params.id].section4Header}</h3>
        <div className={styles.section4}>{blogData[match.params.id].section4}</div>
        <h3 className={styles.section5Header}>{blogData[match.params.id].section5Header}</h3>
        <div className={styles.section5}>{blogData[match.params.id].section5}</div>
        <h3 className={styles.section6Header}>{blogData[match.params.id].section6Header}</h3>
        <div className={styles.section6}>{blogData[match.params.id].section6}</div>
        <h2 className={styles.conclusionHeader}>{blogData[match.params.id].conclusionHeader}</h2>
        <div className={styles.conclusion}>{blogData[match.params.id].conclusion}</div>
        <h3 className={styles.referencesHeader}>{blogData[match.params.id].referencesHeader}</h3>
        <ul>
        {blogData[match.params.id].references.map(reference => {
          return (
            <li><a href={reference} className={styles.references}>{reference}</a></li>
          )
        })}
        </ul>
        <br/>
        <span className={styles.tagsHeader}>Tags: </span>
        {blogData[match.params.id].tags.map(tag => {
          return (
            <Link className={styles.tags} to={'/blog/'}>{tag}</Link>
          )
        })}
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
